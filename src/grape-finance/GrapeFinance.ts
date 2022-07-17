import {ChainId, CurrencyAmount, Fetcher, Pair, Route, Token, TokenAmount, Trade, TradeType} from '@traderjoe-xyz/sdk';

import {Fetcher as FetcherPangolin, Token as TokenPangolin, Route as PangolinRoute} from '@pangolindex/sdk';

import {Configuration} from './config';
import {
  ContractName,
  TokenStat,
  AllocationTime,
  LPStat,
  Bank,
  NodesRewardWalletBalance,
  PoolStats,
  WineSwapperStat,
  WalletNodesAndNFTs,
  WalletStats
} from './types';
import {BigNumber, BigNumberish, Contract, ethers, EventFilter} from 'ethers';
import {decimalToBalance} from './ether-utils';
import {TransactionResponse} from '@ethersproject/providers';
import ERC20, {LPERC20} from './ERC20';
import {getFullDisplayBalance, getDisplayBalance} from '../utils/formatBalance';
import {getDefaultProvider} from '../utils/provider';

import {bankDefinitions} from '../config';
import moment from 'moment';
import {parseUnits} from 'ethers/lib/utils';
import {MIM_TICKER, SPOOKY_ROUTER_ADDR, GRAPE_TICKER, WINE_TICKER} from '../utils/constants';
import { Console } from 'console';

/**
 * An API module of Grape Finance contracts.
 * All contract-interacting domain logic should be defined in here.
 */
export class GrapeFinance {
  myAccount: string;
  provider: ethers.providers.Web3Provider;
  signer?: ethers.Signer;
  config: Configuration;
  contracts: {[name: string]: Contract};
  nftContracts: {[name: string]: Contract};
  externalTokens: {[name: string]: ERC20};
  externalLPs: {[name: string]: LPERC20};
  boardroomVersionOfUser?: string;

  GRAPEBTCB_LP: Contract;
  GRAPE: ERC20;
  WINE: ERC20;
  GBOND: ERC20;
  WAVAX: ERC20;
  MIM: ERC20;
  WAMP: ERC20;
  VOLT: ERC20;
  SW: ERC20;
  DAI: ERC20;
  HSHARE: ERC20;

  constructor(cfg: Configuration) {
    const {deployments, externalTokens} = cfg;
    const provider = getDefaultProvider();
    // loads contracts from deployments
    this.contracts = {};
    this.nftContracts = {};
    for (const [name, deployment] of Object.entries(deployments)) {
      if (deployment.type === 'NFT') {
        this.nftContracts[name] = new Contract(deployment.address, deployment.abi, provider);
      } else {
        this.contracts[name] = new Contract(deployment.address, deployment.abi, provider);
      }
    }
    this.externalTokens = {};
    this.externalLPs = {};
    for (const [symbol, [address, decimal, lp]] of Object.entries(externalTokens)) {
      if (lp) {
        let [tokenA, tokenB] = lp;
        this.externalLPs[symbol] = new LPERC20(new ERC20(address, provider, symbol, decimal), [
          new ERC20(tokenA, provider, symbol, decimal),
          new ERC20(tokenB, provider, symbol, decimal),
        ]);
      }
      this.externalTokens[symbol] = new ERC20(address, provider, symbol, decimal);
    }
    this.GRAPE = new ERC20(deployments.Grape.address, provider, 'GRAPE');
    this.WINE = new ERC20(deployments.Wine.address, provider, 'WINE');
    this.GBOND = new ERC20(deployments.BBond.address, provider, 'GBOND');
    this.MIM = this.externalTokens['MIM'];
    this.WAMP = this.externalTokens['WAMP'];
    this.VOLT = this.externalTokens['VOLT'];
    this.SW = this.externalTokens['GRAPE-MIM-SW'];
    this.DAI = this.externalTokens['DAI'];
    this.HSHARE = this.externalTokens['HSHARE'];

    // Uniswap V2 Pair
    //this.GRAPEMIM_LP = new Contract(externalTokens['GRAPE-MIM-LP'][0], IUniswapV2PairABI, provider);

    this.config = cfg;
    this.provider = provider;
  }

  /**
   * @param provider From an unlocked wallet. (e.g. Metamask)
   * @param account An address of unlocked wallet account.
   */
  unlockWallet(provider: any, account: string) {
    const newProvider = new ethers.providers.Web3Provider(provider, this.config.chainId);
    this.signer = newProvider.getSigner(0);
    this.myAccount = account;
    for (const [name, contract] of Object.entries(this.contracts)) {
      this.contracts[name] = contract.connect(this.signer);
    }
    const tokens = [this.GRAPE, this.WINE, this.GBOND, ...Object.values(this.externalTokens)];
    for (const token of tokens) {
      token.connect(this.signer);
    }
    //this.GRAPEMIM_LP = this.GRAPEMIM_LP.connect(this.signer);
    console.log(`🔓 Wallet is unlocked. Welcome, ${account}!`);
    this.fetchBoardroomVersionOfUser()
      .then((version) => (this.boardroomVersionOfUser = version))
      .catch((err) => {
        console.error(`Failed to fetch boardroom version: ${err.stack}`);
        this.boardroomVersionOfUser = 'latest';
      });
  }

  get isUnlocked(): boolean {
    return !!this.myAccount;
  }

  //===================================================================
  //===================== GET ASSET STATS =============================
  //===================FROM APE TO DISPLAY =========================
  //=========================IN HOME PAGE==============================
  //===================================================================

  async getGrapeStat(): Promise<TokenStat> {
    const {GrapeRewardPool, GrapeGenesisRewardPool} = this.contracts;
    const supply = await this.GRAPE.totalSupply();
    const grapeRewardPoolSupply = await this.GRAPE.balanceOf(GrapeGenesisRewardPool.address);
    const grapeRewardPoolSupply2 = await this.GRAPE.balanceOf(GrapeRewardPool.address);
    const grapeCirculatingSupply = supply.sub(grapeRewardPoolSupply).sub(grapeRewardPoolSupply2);

    const minusAirdrop = getDisplayBalance(grapeCirculatingSupply, this.GRAPE.decimal, 0);

    const priceInBTC = await this.getTokenPriceFromPancakeswapBTC(this.GRAPE);

    const priceOfOneBTC = 1;

    const priceOfGrapeInDollars = (Number(priceInBTC) * Number(priceOfOneBTC)).toFixed(2);

    return {
      tokenInFtm: priceInBTC.toString(),
      priceInDollars: priceOfGrapeInDollars,
      totalSupply: getDisplayBalance(supply, 18, 0),
      circulatingSupply: minusAirdrop,
    };
  }

  async getHermesStat(): Promise<TokenStat> {
    const {GrapeRewardPool, GrapeGenesisRewardPool} = this.contracts;
    const supply = await this.GRAPE.totalSupply();
    const grapeRewardPoolSupply = await this.GRAPE.balanceOf(GrapeGenesisRewardPool.address);
    const grapeRewardPoolSupply2 = await this.GRAPE.balanceOf(GrapeRewardPool.address);
    const grapeCirculatingSupply = supply.sub(grapeRewardPoolSupply).sub(grapeRewardPoolSupply2);

    const minusAirdrop = getDisplayBalance(grapeCirculatingSupply, this.GRAPE.decimal, 0);

    const a = await this.getTokenPriceFromPangolin(this.HSHARE);

    return {
      tokenInFtm: a.toString(),
      priceInDollars: a,
      totalSupply: getDisplayBalance(supply, 18, 0),
      circulatingSupply: minusAirdrop,
    };
  }

  async getBTCPriceUSD(): Promise<Number> {
    const priceOfOneBTC = await this.getBTCBPriceFromPancakeswap();
    return Number(priceOfOneBTC);
  }

  async sendGrape(amount: string | number, recepient: string): Promise<TransactionResponse> {
    const {Grape} = this.contracts;
    return await Grape.transfer(recepient, decimalToBalance(amount));
  }

  async getNodesRewardWalletBalance(): Promise<NodesRewardWalletBalance> {
    const nodesRewardWallet = '0xa3C4C965BA6aA9382a8Edd965D13CB495F8da6F5';
    const grapes = await this.GRAPE.balanceOf(nodesRewardWallet);
    const wines = await this.WINE.balanceOf(nodesRewardWallet);
    const grapeMimSWs = await this.SW.balanceOf(nodesRewardWallet);
    return {
      grapes: getDisplayBalance(grapes, 18, 2),
      wines: getDisplayBalance(wines, 18, 2),
      grapeMimSWs: getDisplayBalance(grapeMimSWs, 18, 2),
    };
  }

  async getRaffleStat(account: string, raffleAddress: string): Promise<TokenStat> {
    let total = 0;
    const {Grape} = this.contracts;

    const priceInBTC = await this.getTokenPriceFromPancakeswapBTC(this.GRAPE);

    const balOfRaffle = await this.GRAPE.balanceOf(raffleAddress);

    const currentBlockNumber = await this.provider.getBlockNumber();

    const filterTo = Grape.filters.Transfer(account, raffleAddress);

    const startBlock = currentBlockNumber - 100000;

    let allEvents: any = [];

    for (let i = startBlock; i < currentBlockNumber; i += 2000) {
      const _startBlock = i;
      const _endBlock = Math.min(currentBlockNumber, i + 1999);
      const events = await Grape.queryFilter(filterTo, _startBlock, _endBlock);
      allEvents = [...allEvents, ...events];
    }

    if (allEvents.length !== 0 && account !== null) {
      for (let i = 0; i < allEvents.length; i++) {
        total = total + Number(allEvents[i].args.value);
      }
      total = total / 1e18;
    } else {
      total = 0;
    }

    return {
      tokenInFtm: priceInBTC.toString(),
      priceInDollars: total.toString(),
      totalSupply: getDisplayBalance(balOfRaffle, 18, 0),
      circulatingSupply: raffleAddress.toString(),
    };
  }

  /**
   * Calculates various stats for the requested LP
   * @param name of the LP token to load stats for
   * @returns
   */
  async getLPStat(name: string): Promise<LPStat> {
    const lpToken = this.externalTokens[name];
    const lpTokenSupplyBN = await lpToken.totalSupply();
    const lpTokenSupply = getDisplayBalance(lpTokenSupplyBN, 18);
    const token0 = name.startsWith('GRAPE') ? this.GRAPE : this.WINE;
    const isGrape = name.startsWith('GRAPE');
    const tokenAmountBN = await token0.balanceOf(lpToken.address);
    const tokenAmount = getDisplayBalance(tokenAmountBN, 18);
    const mimAmountBN =
      lpToken.symbol === 'GRAPE-WINE-LP'
        ? await this.WINE.balanceOf(lpToken.address)
        : await this.MIM.balanceOf(lpToken.address);

    const mimAmount = getDisplayBalance(mimAmountBN, 18);
    const tokenAmountInOneLP = Number(tokenAmount) / Number(lpTokenSupply);
    const mimAmountInOneLP = Number(mimAmount) / Number(lpTokenSupply);
    const lpTokenPrice = await this.getLPTokenPrice(lpToken, token0, isGrape);
    const lpTokenPriceFixed = Number(lpTokenPrice).toFixed(2).toString();
    const liquidity = (Number(lpTokenSupply) * Number(lpTokenPrice)).toFixed(2).toString();

    return {
      tokenAmount: tokenAmountInOneLP.toFixed(2).toString(),
      mimAmount: mimAmountInOneLP.toFixed(2).toString(),
      priceOfOne: lpTokenPriceFixed,
      totalLiquidity: liquidity,
      totalSupply: Number(lpTokenSupply).toFixed(2).toString(),
    };
  }

  async getLPStatBTC(name: string): Promise<LPStat> {
    const lpToken = this.externalTokens[name];

    const lpTokenSupplyBN = await lpToken.totalSupply();

    const lpTokenSupply = getDisplayBalance(lpTokenSupplyBN, 18);

    const token0 = name.startsWith('GRAPE') ? this.GRAPE : this.WINE;
    const isGrape = name.startsWith('GRAPE');

    const tokenAmountBN = await token0.balanceOf(lpToken.address);

    const tokenAmount = getDisplayBalance(tokenAmountBN, 18);

    const btcAmountBN = await this.MIM.balanceOf(lpToken.address);

    const btcAmount = getDisplayBalance(btcAmountBN, 18);
    const tokenAmountInOneLP = Number(tokenAmount) / Number(lpTokenSupply);
    const mimAmountInOneLP = Number(btcAmount) / Number(lpTokenSupply);
    const lpTokenPrice = await this.getLPTokenPrice(lpToken, token0, isGrape);

    const lpTokenPriceFixed = Number(lpTokenPrice).toFixed(2).toString();

    const liquidity = (Number(lpTokenSupply) * Number(lpTokenPrice)).toFixed(2).toString();

    return {
      tokenAmount: tokenAmountInOneLP.toFixed(2).toString(),
      mimAmount: mimAmountInOneLP.toFixed(5).toString(),
      priceOfOne: lpTokenPriceFixed,
      totalLiquidity: liquidity,
      totalSupply: Number(lpTokenSupply).toFixed(2).toString(),
    };
  }
  /**
   * Use this method to get price for Grape
   * @returns TokenStat for GBOND
   * priceInBNB
   * priceInDollars
   * TotalSupply
   * CirculatingSupply (always equal to total supply for bonds)
   */
  async getBondStat(): Promise<TokenStat> {
    const {Treasury} = this.contracts;
    const grapeStat = await this.getGrapeStat();
    const grapeBal = await Treasury.getReserve();

    const bondGrapeRatioBN = await Treasury.getBondPremiumRate();

    const modifier = bondGrapeRatioBN / 1e18 > 1 ? bondGrapeRatioBN / 1e18 : 1;

    const priceOfBBondInDollars = (Number(grapeStat.priceInDollars) * modifier).toFixed(2);
    const supply = await this.GBOND.displayedTotalSupply();

    return {
      tokenInFtm: priceOfBBondInDollars,
      priceInDollars: priceOfBBondInDollars,
      totalSupply: supply,
      circulatingSupply: supply,
      treasuryGrapes: grapeBal,
    };
  }

  /**
   * @returns TokenStat for WINE
   * priceInBNB
   * priceInDollars
   * TotalSupply
   * CirculatingSupply (always equal to total supply for bonds)
   */
  async getShareStat(): Promise<TokenStat> {
    const {WineRewardPool} = this.contracts;

    const supply = await this.WINE.totalSupply();

    const priceInBNB = await this.getTokenPriceFromPancakeswap(this.WINE);

    const grapeRewardPoolSupply = await this.WINE.balanceOf(WineRewardPool.address);

    const tShareCirculatingSupply = supply.sub(grapeRewardPoolSupply);

    const priceOfSharesInDollars = Number(priceInBNB).toFixed(2);

    return {
      tokenInFtm: priceOfSharesInDollars,
      priceInDollars: priceOfSharesInDollars,
      totalSupply: getDisplayBalance(supply, this.WINE.decimal, 0),
      circulatingSupply: getDisplayBalance(tShareCirculatingSupply, this.WINE.decimal, 0),
    };
  }

  async getWalletStats(banks: Bank[]): Promise<WalletStats> {
    const vineyardBanks = banks.filter((bank) => !bank.finished && (bank.sectionInUI === 2 || bank.sectionInUI === 6 || bank.sectionInUI === 7))
    const nodeBanks = banks.filter((bank) => !bank.finished && bank.sectionInUI === 3)
    let totalInVineyard = 0, totalInNodes = 0, totalInWinery = 0, totalRewards = 0;

    const winePriceInDollars = Number(await this.getDepositTokenPriceInDollars('WINE', this.WINE)) 
    const grapePriceInDollars = Number(await this.getDepositTokenPriceInDollars('GRAPE', this.GRAPE)) 

    // Vineyard
    for (let i = 0; i < vineyardBanks.length; i++) {
      const bank = vineyardBanks[i]
      // bank Value
      const stakedBalance = await this.stakedBalanceOnBank(bank.contract, bank.poolId, this.myAccount)
      const stakedInToken = Number(getDisplayBalance(stakedBalance, bank.depositToken.decimal))
      const stakedTokenPriceInDollars = Number(await this.getDepositTokenPriceInDollars(bank.depositTokenName, bank.depositToken))
      totalInVineyard += stakedTokenPriceInDollars * stakedInToken

      // bank Earnings
      const bankEarnings = await this.earnedFromBank(bank.contract, bank.earnTokenName, bank.poolId, this.myAccount)
      const earningInDollars = winePriceInDollars * Number(getDisplayBalance(bankEarnings, bank.depositToken.decimal))
      totalRewards += earningInDollars
      totalInVineyard += earningInDollars
    }

    // Nodes
    for (let i = 0; i < nodeBanks.length; i++) {
      const bank = nodeBanks[i]
      // Node value
      const nodesCount = Number((await this.getNodes(bank.contract, this.myAccount))[0])
      const nodePrice = await this.getNodePrice(bank.contract, bank.poolId)
      const stakedTokenPriceInDollars = Number(await this.getDepositTokenPriceInDollars(bank.depositTokenName, bank.depositToken))
      totalInNodes += nodesCount * (stakedTokenPriceInDollars * Number(getDisplayBalance(nodePrice, bank.depositToken.decimal)))

      // Node earnings
      const nodeEarnings = await this.earnedFromBank(bank.contract, bank.earnTokenName, bank.poolId, this.myAccount)
      const earningInDollars = stakedTokenPriceInDollars * Number(getDisplayBalance(nodeEarnings, bank.depositToken.decimal))
      totalRewards += earningInDollars
      totalInNodes += earningInDollars
    }

    // Winery deposit
    const wineryStakedBalance = await this.getStakedSharesOnBoardroom()
    const wineryStakedInToken = Number(getDisplayBalance(wineryStakedBalance))
    // Winery earnings
    const earnings = await this.getEarningsOnBoardroom()
    const wineryEarnings = Number(getDisplayBalance(earnings))
    totalRewards += (grapePriceInDollars * wineryEarnings)

    totalInWinery = (winePriceInDollars * wineryStakedInToken) + (grapePriceInDollars * wineryEarnings)

    return {
      total: totalInVineyard + totalInNodes + totalInWinery,
      totalRewards: totalRewards,
      totalInVineyard: totalInVineyard,
      totalInWinery: totalInWinery,
      totalInNodes: totalInNodes
    }
  }

  async getBoardroomPrintRate() : Promise<number> {
    const {Boardroom} = this.contracts;
    const snapshotIndex = await Boardroom.latestSnapshotIndex();
    const currentEpoch = await Boardroom.epoch();
    return (snapshotIndex * 100) / currentEpoch;
  }

  async getWalletNodesAndNFTs(): Promise<WalletNodesAndNFTs> {
    const grapeNodesCount = await this.getNodes('GrapeNode', this.myAccount);
    const wineNodesCount = await this.getNodes('WineNode', this.myAccount);
    const grapeMimSWNodesCount = await this.getNodes('LPNode', this.myAccount);

    let walletNodesAndNFTs = {
      grapes: grapeNodesCount[0].toNumber(),
      wines: wineNodesCount[0].toNumber(),
      grapeMimSWs: grapeMimSWNodesCount[0].toNumber(),
      goonBags: 0,
      glasses: 0,
      decanters: 0,
      goblets: 0,
    };

    const walletNFTs = await this.getWalletNFTs();
    if (walletNFTs.length !== 0) {
      const data = require('../nfts.json');
      walletNFTs.forEach((walletNftId) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].Id == walletNftId) {
            if (data[i].Type === 'GoonBag') {
              walletNodesAndNFTs.goonBags++;
            } else if (data[i].Type === 'Glass') {
              walletNodesAndNFTs.glasses++;
            } else if (data[i].Type === 'Decanter') {
              walletNodesAndNFTs.decanters++;
            } else if (data[i].Type === 'Goblet') {
              walletNodesAndNFTs.goblets++;
            }
          }
        }
      });
    }
    return walletNodesAndNFTs;
  }

  async getGrapeStatInEstimatedTWAP(): Promise<TokenStat> {
    const {Oracle, GrapeRewardPool} = this.contracts;
    let expectedPrice = await Oracle.twap(this.GRAPE.address, ethers.utils.parseEther('1'));

    const supply = await this.GRAPE.totalSupply();
    const grapeRewardPoolSupply = await this.GRAPE.balanceOf(GrapeRewardPool.address);
    const grapeCirculatingSupply = supply.sub(grapeRewardPoolSupply);
    return {
      tokenInFtm: getDisplayBalance(expectedPrice),
      priceInDollars: getDisplayBalance(expectedPrice),
      totalSupply: getDisplayBalance(supply, this.GRAPE.decimal, 0),
      circulatingSupply: getDisplayBalance(grapeCirculatingSupply, this.GRAPE.decimal, 0),
    };
  }

  async getGrapePriceInLastTWAP(): Promise<BigNumber> {
    const {Treasury} = this.contracts;
    return Treasury.getGrapeUpdatedPrice();
  }

  // async getGrapePegTWAP(): Promise<any> {
  //   const { Treasury } = this.contracts;
  //   const updatedPrice = Treasury.getGrapeUpdatedPrice();
  //   const updatedPrice2 = updatedPrice * 10000;
  //   return updatedPrice2;
  // }

  async getBondsPurchasable(): Promise<BigNumber> {
    const {Treasury} = this.contracts;
    // const burnableGrape = (Number(Treasury.getBurnableGrapeLeft()) * 1000).toFixed(2).toString();
    return Treasury.getBurnableGrapeLeft();
  }

  async getNodes(contract: string, user: string): Promise<BigNumber[]> {
    return await this.contracts[contract].getNodes(user);
  }

  async getMaxPayout(contract: string, user: string): Promise<BigNumber[]> {
    return await this.contracts[contract].maxPayout(user);
  }

  async getDailyDrip(contract: string, user: string): Promise<BigNumber[]> {
    return await this.contracts[contract].getDayDripEstimate(user);
  }

  async getUserDetails(contract: string, user: string): Promise<BigNumber[]> {
    return await this.contracts[contract].users(user);
  }

  async getTotalNodes(contract: string): Promise<BigNumber[]> {
    return await this.contracts[contract].getTotalNodes();
  }

  async getGrapeNodes(): Promise<BigNumber[]> {
    const {GrapeNode} = this.contracts;
    return await GrapeNode.getTotalNodes();
  }

  async getWineNodes(): Promise<BigNumber[]> {
    const {WineNode} = this.contracts;
    return await WineNode.getTotalNodes();
  }

  async getGrapeMimSWNodes(): Promise<BigNumber[]> {
    const {LPNode} = this.contracts;
    return await LPNode.getTotalNodes();
  }

  async getWalletNFTs(): Promise<BigNumber[]> {
    const {TheWineryNFT} = this.nftContracts;
    return await TheWineryNFT.walletOfOwner(this.myAccount);
  }

  /**
   * Calculates the TVL, APR and daily APR of a provided pool/bank
   * @param bank
   * @returns
   */
  async getPoolAPRs(bank: Bank): Promise<PoolStats> {
    if (this.myAccount === undefined) return;
    const depositToken = bank.depositToken;

    const poolContract = this.contracts[bank.contract];

    if (bank.sectionInUI === 3) {
      const [depositTokenPrice, points, totalPoints, tierAmount, poolBalance, totalBalance, dripRate, dailyUserDrip] =
        await Promise.all([
          this.getDepositTokenPriceInDollars(bank.depositTokenName, depositToken),
          poolContract.tierAllocPoints(bank.poolId),
          poolContract.totalAllocPoints(),
          poolContract.tierAmounts(bank.poolId),
          poolContract.getBalancePool(),
          depositToken.balanceOf(bank.address),
          poolContract.dripRate(),
          poolContract.getDayDripEstimate(this.myAccount),
        ]);
      const stakeAmount = Number(getDisplayBalance(tierAmount));

      const dailyDrip =
        totalPoints && +totalPoints > 0
          ? getDisplayBalance(poolBalance.mul(BigNumber.from(86400)).mul(points).div(totalPoints).div(dripRate))
          : 0;
      const dailyDripAPR = (Number(dailyDrip) / stakeAmount) * 100;
      const yearlyDripAPR = ((Number(dailyDrip) * 365) / stakeAmount) * 100;

      const dailyDripUser = Number(getDisplayBalance(dailyUserDrip));
      const yearlyDripUser = Number(dailyDripUser) * 365;

      const TVL = Number(depositTokenPrice) * Number(getDisplayBalance(totalBalance, depositToken.decimal));

      return {
        userDailyBurst: dailyDripUser.toFixed(2).toString(),
        userYearlyBurst: yearlyDripUser.toFixed(2).toString(),
        dailyAPR: dailyDripAPR.toFixed(2).toString(),
        yearlyAPR: yearlyDripAPR.toFixed(2).toString(),
        TVL: TVL.toFixed(2).toString(),
      };
    } else {
      const depositTokenPrice = await this.getDepositTokenPriceInDollars(bank.depositTokenName, depositToken);

      const stakeInPool = await depositToken.balanceOf(bank.address);

      const TVL = Number(depositTokenPrice) * Number(getDisplayBalance(stakeInPool, depositToken.decimal));

      let stat = bank.earnTokenName === 'GRAPE' ? await this.getGrapeStat() : await this.getShareStat();

      const tokenPerSecond = await this.getTokenPerSecond(
        bank.earnTokenName,
        bank.contract,
        poolContract,
        bank.depositTokenName,
      );

      let tokenPerHour = tokenPerSecond.mul(60).mul(60);

      const totalRewardPricePerYear =
        Number(stat.priceInDollars) * Number(getDisplayBalance(tokenPerHour.mul(24).mul(365)));

      const totalRewardPricePerDay = Number(stat.priceInDollars) * Number(getDisplayBalance(tokenPerHour.mul(24)));

      const totalStakingTokenInPool =
        Number(depositTokenPrice) * Number(getDisplayBalance(stakeInPool, depositToken.decimal));

      const dailyAPR = (totalRewardPricePerDay / totalStakingTokenInPool) * 100;

      const yearlyAPR = (totalRewardPricePerYear / totalStakingTokenInPool) * 100;
      return {
        dailyAPR: dailyAPR.toFixed(2).toString(),
        yearlyAPR: yearlyAPR.toFixed(2).toString(),
        TVL: TVL.toFixed(2).toString(),
      };
    }
  }

  async getPartnerAPRs(bank: Bank): Promise<PoolStats> {
    if (this.myAccount === undefined) return;
    const depositToken = bank.depositToken;

    const poolContract = this.contracts[bank.contract];

    const depositTokenPrice = await this.getDepositTokenPriceInDollars(bank.depositTokenName, depositToken);

    const stakeInPool = await depositToken.balanceOf(bank.address);

    const TVL = Number(depositTokenPrice) * Number(getDisplayBalance(stakeInPool, depositToken.decimal));

    let stat = bank.earnTokenName === 'GRAPE' ? await this.getGrapeStat() : await this.getShareStat();
    let hermes = await this.getHermesStat();

    const tokenPerSecond1 = await poolContract.token1PerSecond();
    const tokenPerSecond2 = await poolContract.token2PerSecond();

    let tokenPerHour = tokenPerSecond1.mul(60).mul(60);
    let tokenPerHour2 = tokenPerSecond2.mul(60).mul(60);

    const totalRewardPricePerDay = Number(stat.priceInDollars) * Number(getDisplayBalance(tokenPerHour2.mul(24)));
    const totalRewardPricePerDay2 = Number(hermes.priceInDollars) * Number(getDisplayBalance(tokenPerHour.mul(24)));

    const totalStakingTokenInPool =
      Number(depositTokenPrice) * Number(getDisplayBalance(stakeInPool, depositToken.decimal));

    const dailyAPR = ((totalRewardPricePerDay + totalRewardPricePerDay2) / totalStakingTokenInPool) * 100;

    const yearlyAPR = dailyAPR * 365;
    return {
      dailyAPR: dailyAPR.toFixed(2).toString(),
      yearlyAPR: yearlyAPR.toFixed(2).toString(),
      TVL: TVL.toFixed(2).toString(),
    };
  }

  /**
   * Method to return the amount of tokens the pool yields per second
   * @param earnTokenName the name of the token that the pool is earning
   * @param contractName the contract of the pool/bank
   * @param poolContract the actual contract of the pool
   * @returns
   */
  async getTokenPerSecond(
    earnTokenName: string,
    contractName: string,
    poolContract: Contract,
    depositTokenName: string,
  ) {
    if (earnTokenName === 'GRAPE') {
      if (!contractName.endsWith('1')) {
        const rewardPerSecond = await poolContract.grapePerSecond();

        if (depositTokenName === 'WAVAX') {
          return rewardPerSecond.mul(720).div(2400).div(24);
        } else if (depositTokenName === 'MIM') {
          return rewardPerSecond.mul(720).div(2400).div(24);
        }
        return rewardPerSecond.div(12);
      }

      if (depositTokenName === 'WAVAX') {
        const rewardPerSecond = await poolContract.epochGrapePerSecond(0);
        return rewardPerSecond.div(100).mul(2);
      } else if (depositTokenName === 'MIM') {
        const rewardPerSecond = await poolContract.epochGrapePerSecond(0);
        return rewardPerSecond.div(100).mul(2);
      }

      const poolStartTime = await poolContract.poolStartTime();
      await poolContract.epochGrapePerSecond(1);

      const startDateTime = new Date(poolStartTime.toNumber() * 1000);
      const FOUR_DAYS = 4 * 24 * 60 * 60 * 1000;
      if (Date.now() - startDateTime.getTime() > FOUR_DAYS) {
        return await poolContract.epochGrapePerSecond(1);
      }
      return await poolContract.epochGrapePerSecond(0);
    }

    //update for new tokens

    const rewardPerSecond = await poolContract.winePerSecond();

    if (depositTokenName.startsWith('WINE-MIM')) {
      return rewardPerSecond.mul(5000).div(41000);
    } else if (depositTokenName.startsWith('GRAPE-WINE')) {
      return rewardPerSecond.mul(1500).div(41000);
    } else if (depositTokenName === 'GRAPE') {
      return rewardPerSecond.mul(6000).div(41000);
    } else if (depositTokenName === 'WAMP') {
      return rewardPerSecond.mul(250).div(41000);
    } else if (depositTokenName === 'GRAPE-MIM-SW') {
      return rewardPerSecond.mul(7000).div(41000);
    } else if (depositTokenName === 'WINE-POPS-LP') {
      return rewardPerSecond.mul(250).div(41000);
    } else {
      return rewardPerSecond.mul(21000).div(41000);
    }
  }

  /**
   * Method to calculate the tokenPrice of the deposited asset in a pool/bank
   * If the deposited token is an LP it will find the price of its pieces
   * @param tokenName
   * @param pool
   * @param token
   * @returns
   */
  async getDepositTokenPriceInDollars(tokenName: string, token: ERC20) {
    let tokenPrice;
    const priceOfOneFtmInDollars = await this.getWBNBPriceFromPancakeswap();

    if (tokenName === 'WAVAX') {
      tokenPrice = priceOfOneFtmInDollars;
    } else {
      if (tokenName === 'GRAPE-MIM-LP') {
        tokenPrice = await this.getLPTokenPrice(token, this.GRAPE, true);
      } else if (tokenName === 'WINE-MIM-LP') {
        tokenPrice = await this.getLPTokenPrice(token, this.WINE, false);
      } else if (tokenName === 'GRAPE-WINE-LP') {
        tokenPrice = await this.getLPTokenPrice(token, this.WINE, false);
      } else if (tokenName === 'HSHARE-WINE-LP') {
        tokenPrice = await this.getLPTokenPrice(token, this.WINE, false);
      } else if (tokenName === 'GRAPE-MIM-SW') {
        tokenPrice = await this.getLPTokenPrice(token, this.GRAPE, true);
      } else if (tokenName === 'GRAPE-WLRS-LP') {
        tokenPrice = await this.getLPTokenPrice(token, this.GRAPE, true);
      } else if (tokenName === 'WINE-POPS-LP') {
        tokenPrice = await this.getLPTokenPrice(token, this.WINE, false);
      }else if (tokenName === 'MIM') {
        tokenPrice = '1';
      } else if (tokenName === 'WAMP') {
        const {WAMP} = this.contracts;
        token = this.VOLT;
        const getWAMP = await WAMP.wAMPToAMP(1000000000000000);
        tokenPrice = await this.getDaiPrice(token);
        tokenPrice = ((Number(tokenPrice) / 1000000000) * (Number(getWAMP) / 1000000)).toString();
      } else {
        tokenPrice = await this.getTokenPriceFromPancakeswap(token);
        tokenPrice = (Number(tokenPrice) * 1).toString();
      }
    }
    return tokenPrice;
  }

  //===================================================================
  //===================== GET ASSET STATS =============================
  //=========================== END ===================================
  //===================================================================

  async getCurrentEpoch(): Promise<BigNumber> {
    const {Treasury} = this.contracts;
    return Treasury.epoch();
  }

  async getBondOraclePriceInLastTWAP(): Promise<BigNumber> {
    const {Treasury} = this.contracts;
    return Treasury.getBondPremiumRate();
  }

  /**
   * Buy bonds with cash.
   * @param amount amount of cash to purchase bonds with.
   */
  async buyBonds(amount: string | number): Promise<TransactionResponse> {
    const {Treasury} = this.contracts;
    const treasuryGrapePrice = await Treasury.getGrapePrice();
    return await Treasury.buyBonds(decimalToBalance(amount), treasuryGrapePrice);
  }

  /**
   * Redeem bonds for cash.
   * @param amount amount of bonds to redeem.
   */
  async redeemBonds(amount: string | number): Promise<TransactionResponse> {
    const {Treasury} = this.contracts;
    const priceForGrape = await Treasury.getGrapePrice();

    return await Treasury.redeemBonds(decimalToBalance(amount), priceForGrape);
  }

  async getTotalValueLocked(): Promise<Number> {
    let totalValue = 0;
    for (const bankInfo of Object.values(bankDefinitions)) {
      const pool = this.contracts[bankInfo.contract];
      // Since we have the NFT Contract, pool can be null
      if (!pool) {
        continue;
      }
      const token = this.externalTokens[bankInfo.depositTokenName];
      const tokenPrice = await this.getDepositTokenPriceInDollars(bankInfo.depositTokenName, token);

      const tokenAmountInPool = await token.balanceOf(pool.address);

      const value = Number(getDisplayBalance(tokenAmountInPool, token.decimal)) * Number(tokenPrice);

      const poolValue = Number.isNaN(value) ? 0 : value;
      totalValue += poolValue;
    }

    const BSHAREPrice = (await this.getShareStat()).priceInDollars;
    const boardroomtShareBalanceOf = await this.WINE.balanceOf(this.currentBoardroom().address);
    const boardroomTVL = Number(getDisplayBalance(boardroomtShareBalanceOf, this.WINE.decimal)) * Number(BSHAREPrice);

    return totalValue + boardroomTVL;
  }

  /**
   * Calculates the price of an LP token
   * Reference https://github.com/DefiDebauchery/discordpricebot/blob/4da3cdb57016df108ad2d0bb0c91cd8dd5f9d834/pricebot/pricebot.py#L150
   * @param lpToken the token under calculation
   * @param token the token pair used as reference (the other one would be BNB in most cases)
   * @param isGrape sanity check for usage of grape token or tShare
   * @returns price of the LP token
   */
  async getLPTokenPrice(lpToken: ERC20, token: ERC20, isGrape: boolean): Promise<string> {
    const totalSupply = getFullDisplayBalance(await lpToken.totalSupply(), lpToken.decimal);
    //Get amount of tokenA
    console.log(lpToken)
    const tokenSupply = getFullDisplayBalance(await token.balanceOf(lpToken.address), token.decimal);

    const stat = isGrape === true ? await this.getGrapeStat() : await this.getShareStat();

    const priceOfToken = stat.priceInDollars;

    const tokenInLP = Number(tokenSupply) / Number(totalSupply);

    const tokenPrice = (Number(priceOfToken) * tokenInLP * 2) //We multiply by 2 since half the price of the lp token is the price of each piece of the pair. So twice gives the total

      .toString();

    return tokenPrice;
  }

  /**
   * Calculates the price of an LP token
   * Reference https://github.com/DefiDebauchery/discordpricebot/blob/4da3cdb57016df108ad2d0bb0c91cd8dd5f9d834/pricebot/pricebot.py#L150
   * @param lpToken the token under calculation
   * @param token the token pair used as reference (the other one would be BNB in most cases)
   * @param isGrape sanity check for usage of grape token or tShare
   * @returns price of the LP token
   */
  async getApeLPTokenPrice(lpToken: ERC20, token: ERC20, isGrape: boolean): Promise<string> {
    const totalSupply = getFullDisplayBalance(await lpToken.totalSupply(), lpToken.decimal);
    //Get amount of tokenA
    const tokenSupply = getFullDisplayBalance(await token.balanceOf(lpToken.address), token.decimal);
    const stat = isGrape === true ? await this.getGrapeStat() : await this.getShareStat();
    const priceOfToken = stat.priceInDollars;
    const tokenInLP = Number(tokenSupply) / Number(totalSupply);
    const tokenPrice = (Number(priceOfToken) * tokenInLP * 2) //We multiply by 2 since half the price of the lp token is the price of each piece of the pair. So twice gives the total
      .toString();
    return tokenPrice;
  }

  async earnedFromBank(
    poolName: ContractName,
    earnTokenName: String,
    poolId: Number,
    account = this.myAccount,
  ): Promise<BigNumber> {
    const pool = this.contracts[poolName];
    try {
      if (earnTokenName === 'GRAPE' && poolName.includes('Node')) {
        return await pool.getTotalRewards(account);
      }
      if (earnTokenName === 'WINE' && poolName.includes('Node')) {
        return await pool.getTotalRewards(account);
      }
      if (earnTokenName === 'GRAPE-MIM-LP' && poolName.includes('Node')) {
        return await pool.getTotalRewards(account);
      }
      if (earnTokenName === 'GRAPE-MIM-SW' && poolName.includes('Node')) {
        return await pool.getTotalRewards(account);
      }
      if (earnTokenName === 'GRAPE-WLRS-LP' && poolName.includes('Node')) {
        return await pool.getTotalRewards(account);
      }
      if (earnTokenName === 'GRAPE') {
        return await pool.pendingGRAPE(poolId, account);
      } else if (earnTokenName === 'WINE') {
        return await pool.pendingShare(poolId, account);
      } else if (earnTokenName === 'HSHARE') {
        return await pool.pendingToken1(poolId, account);
      } else {
        return await pool.pendingToken2(poolId, account);
      }
    } catch (err) {
      // @ts-ignore
      console.error(`Failed to call pendingShare() on pool ${pool.address}: ${err.stack}`);
      return BigNumber.from(0);
    }
  }

  async stakedBalanceOnBank(poolName: ContractName, poolId: Number, account = this.myAccount): Promise<BigNumber> {
    const pool = this.contracts[poolName];

    try {
      let userInfo = await pool.userInfo(poolId, account);

      return await userInfo.amount;
    } catch (err) {
      // @ts-ignore
      console.error(`Failed to call userInfo() on pool ${pool.address}: ${err.stack}`);
      return BigNumber.from(0);
    }
  }

  async claimedBalanceNode(poolName: ContractName, account = this.myAccount): Promise<BigNumber> {
    const pool = this.contracts[poolName];
    try {
      let userInfo = await pool.users(account);
      return await userInfo.total_claims;
    } catch (err) {
      console.error(`Failed to call userInfo() on pool ${pool.address}: ${err}`);
      return BigNumber.from(0);
    }
  }

  async getNodePrice(poolName: ContractName, poolId: Number): Promise<BigNumber> {
    const pool = this.contracts[poolName];
    try {
      return await pool.tierAmounts(poolId);
    } catch (err) {
      console.error(`Failed to call tierAmounts on contract ${pool.address}: ${err}`);
      return BigNumber.from(0);
    }
  }

  /**
   * Deposits token to given pool.
   * @param poolName A name of pool contract.
   * @param amount Number of tokens with decimals applied. (e.g. 1.45 DAI * 10^18)
   * @returns {string} Transaction hash
   */
  async stake(
    poolName: ContractName,
    poolId: Number,
    sectionInUI: Number,
    amount: BigNumber,
  ): Promise<TransactionResponse> {
    const pool = this.contracts[poolName];

    return sectionInUI !== 3 ? await pool.deposit(poolId, amount) : await pool.create(poolId, amount);
  }

  async setTierValues(poolName: ContractName): Promise<TransactionResponse> {
    const pool = this.contracts[poolName];

    return await pool.setTierValues([BigNumber.from('1000000000000000000')], [BigNumber.from('5000000000000000000')]);
  }

  async getTierValues(poolName: ContractName): Promise<void> {
    const pool = this.contracts[poolName];

    console.log(await pool.tierAmounts(0), await pool.tierAllocPoints(0));
  }

  /**
   * Withdraws token from given pool.
   * @param poolName A name of pool contract.
   * @param amount Number of tokens with decimals applied. (e.g. 1.45 DAI * 10^18)
   * @returns {string} Transaction hash
   */
  async unstake(poolName: ContractName, poolId: Number, amount: BigNumber): Promise<TransactionResponse> {
    const pool = this.contracts[poolName];
    return await pool.withdraw(poolId, amount);
  }

  /**
   * Transfers earned token reward from given pool to my account.
   */
  async harvest(poolName: ContractName, poolId: Number, sectionInUI: Number): Promise<TransactionResponse> {
    const pool = this.contracts[poolName];
    //By passing 0 as the amount, we are asking the contract to only redeem the reward and not the currently staked token
    return sectionInUI !== 3 ? await pool.withdraw(poolId, 0) : await pool.claim();
  }

  async compound(poolName: ContractName, poolId: Number, sectionInUI: Number): Promise<TransactionResponse> {
    const pool = this.contracts[poolName];
    //By passing 0 as the amount, we are asking the contract to only redeem the reward and not the currently staked token
    return sectionInUI !== 3 ? await pool.withdraw(poolId, 0) : await pool.compound();
  }

  /**
   * Harvests and withdraws deposited tokens from the pool.
   */
  async exit(poolName: ContractName, poolId: Number, account = this.myAccount): Promise<TransactionResponse> {
    const pool = this.contracts[poolName];
    let userInfo = await pool.userInfo(poolId, account);
    return await pool.withdraw(poolId, userInfo.amount);
  }

  async fetchBoardroomVersionOfUser(): Promise<string> {
    return 'latest';
  }

  currentBoardroom(): Contract {
    if (!this.boardroomVersionOfUser) {
      //throw new Error('you must unlock the wallet to continue.');
    }

    return this.contracts.Boardroom;
  }

  isOldBoardroomMember(): boolean {
    return this.boardroomVersionOfUser !== 'latest';
  }

  async getDaiPrice(tokenContract: ERC20): Promise<string> {
    const ready = await this.provider.ready;
    if (!ready) return;
    //const { chainId } = this.config;
    const {DAI} = this.config.externalTokens;

    const wmim = new Token(43114, DAI[0], DAI[1], 'DAI');

    const token = new Token(43114, tokenContract.address, tokenContract.decimal, tokenContract.symbol);

    try {
      const wmimToToken = await Fetcher.fetchPairData(wmim, token, this.provider);

      const priceInBUSD = new Route([wmimToToken], token);

      return priceInBUSD.midPrice.toFixed(2);
    } catch (err) {
      console.error(`Failed to fetch token price of ${tokenContract.symbol}: ${err}`);
    }
  }

  async getTokenPriceFromPancakeswap(tokenContract: ERC20): Promise<string> {
    const ready = await this.provider.ready;
    if (!ready) return;
    //const { chainId } = this.config;
    const {MIM} = this.config.externalTokens;

    const wmim = new Token(43114, MIM[0], MIM[1], 'MIM');

    const token = new Token(43114, tokenContract.address, tokenContract.decimal, tokenContract.symbol);

    try {
      const wmimToToken = await Fetcher.fetchPairData(wmim, token, this.provider);

      const priceInBUSD = new Route([wmimToToken], token);

      return priceInBUSD.midPrice.toFixed(4);
    } catch (err) {
      console.error(`Failed to fetch token price of ${tokenContract.symbol}: ${err}`);
    }
  }

  async getTokenPriceFromPangolin(tokenContract: ERC20): Promise<string> {
    const ready = await this.provider.ready;
    if (!ready) return;
    //const { chainId } = this.config;
    const {WAVAX} = this.config.externalTokens;
    const {USDC} = this.config.externalTokens;
    const wbnb = new TokenPangolin(43114, WAVAX[0], WAVAX[1], 'WAVAX');
    const usdc = new TokenPangolin(43114, USDC[0], USDC[1], 'USDC');
    const token = new TokenPangolin(43114, tokenContract.address, tokenContract.decimal, tokenContract.symbol);

    try {
      const wftmToToken = await FetcherPangolin.fetchPairData(wbnb, token, this.provider);
      const priceInBUSD = new PangolinRoute([wftmToToken], token);

      const wavaxtousd = await FetcherPangolin.fetchPairData(wbnb, usdc, this.provider);
      const priceInBUSD2 = new PangolinRoute([wavaxtousd], wbnb);

      const priceForPeg = Number(priceInBUSD.midPrice.toFixed(12));
      const priceForPeg2 = Number(priceInBUSD2.midPrice.toFixed(12));

      const hsharePrice = priceForPeg * priceForPeg2;

      return hsharePrice.toFixed(4);
    } catch (err) {
      console.error(`Failed to fetch token price of ${tokenContract.symbol}: ${err}`);
    }
  }

  async getTokenPriceFromPancakeswapBTC(tokenContract: ERC20): Promise<string> {
    const ready = await this.provider.ready;
    if (!ready) return;
    //const { chainId } = this.config;
    const {MIM} = this.config.externalTokens;

    const wbnb = new Token(43114, MIM[0], MIM[1], 'MIM');
    const token = new Token(43114, tokenContract.address, tokenContract.decimal, tokenContract.symbol);

    try {
      const wmimToToken = await Fetcher.fetchPairData(wbnb, token, this.provider);
      const priceInBUSD = new Route([wmimToToken], token);

      const priceForPeg = Number(priceInBUSD.midPrice.toFixed(12));
      return priceForPeg.toFixed(4);
    } catch (err) {
      console.error(`Failed to fetch token price of ${tokenContract.symbol}: ${err}`);
    }
  }

  async getTokenPriceFromPancakeswapGRAPEUSD(): Promise<string> {
    const ready = await this.provider.ready;
    if (!ready) return;
    //const { chainId } = this.config;
    const {MIM} = this.config.externalTokens;

    const mim = new Token(43114, MIM[0], MIM[1]);
    const token = new Token(43114, this.GRAPE.address, this.GRAPE.decimal, 'GRAPE');
    try {
      const wmimToToken = await Fetcher.fetchPairData(mim, token, this.provider);
      const priceInBUSD = new Route([wmimToToken], token);

      const priceForPeg = Number(priceInBUSD.midPrice.toFixed(12));

      return priceForPeg.toFixed(4);
    } catch (err) {
      console.error(`Failed to fetch token price of GRAPE: ${err}`);
    }
  }

  async getWBNBPriceFromPancakeswap(): Promise<string> {
    const ready = await this.provider.ready;
    if (!ready) return;
    const {WAVAX, MIM} = this.externalTokens;
    try {
      const fusdt_wmim_lp_pair = this.externalTokens['MIM-WAVAX-LP'];
      let mim_amount_BN = await WAVAX.balanceOf(fusdt_wmim_lp_pair.address);
      let mim_amount = Number(getFullDisplayBalance(mim_amount_BN, WAVAX.decimal));
      let fusdt_amount_BN = await MIM.balanceOf(fusdt_wmim_lp_pair.address);
      let fusdt_amount = Number(getFullDisplayBalance(fusdt_amount_BN, MIM.decimal));

      return (fusdt_amount / mim_amount).toString();
    } catch (err) {
      console.error(`Failed to fetch token price of AVAX: ${err}`);
    }
  }

  async getBTCBPriceFromPancakeswap(): Promise<string> {
    const ready = await this.provider.ready;
    if (!ready) return;
    const {MIM} = this.externalTokens;
    try {
      const btcPriceInBNB = await this.getTokenPriceFromPancakeswap(MIM);

      const wbnbPrice = await this.getWBNBPriceFromPancakeswap();

      const btcprice = (Number(btcPriceInBNB) * Number(wbnbPrice)).toFixed(2).toString();

      return btcprice;
    } catch (err) {
      console.error(`Failed to fetch token price of BTCB: ${err}`);
    }
  }

  //===================================================================
  //===================================================================
  //===================== MASONRY METHODS =============================
  //===================================================================
  //===================================================================

  async getBoardroomAPR() {
    const Boardroom = this.currentBoardroom();

    const latestSnapshotIndex = await Boardroom.latestSnapshotIndex();

    const lastHistory = await Boardroom.boardroomHistory(latestSnapshotIndex);

    const lastRewardsReceived = lastHistory[1];

    const BSHAREPrice = (await this.getShareStat()).priceInDollars;

    const GRAPEPrice = (await this.getGrapeStat()).priceInDollars;

    const epochRewardsPerShare = lastRewardsReceived / 1e18;

    //Mgod formula
    const amountOfRewardsPerDay = epochRewardsPerShare * Number(GRAPEPrice) * 4;

    const boardroomtShareBalanceOf = await this.WINE.balanceOf(Boardroom.address);

    const boardroomTVL = Number(getDisplayBalance(boardroomtShareBalanceOf, this.WINE.decimal)) * Number(BSHAREPrice);

    const realAPR = ((amountOfRewardsPerDay * 100) / boardroomTVL) * 365;

    return realAPR;
  }

  /**
   * Checks if the user is allowed to retrieve their reward from the Boardroom
   * @returns true if user can withdraw reward, false if they can't
   */
  async canUserClaimRewardFromBoardroom(): Promise<boolean> {
    const Boardroom = this.currentBoardroom();
    return await Boardroom.canClaimReward(this.myAccount);
  }

  /**
   * Checks if the user is allowed to retrieve their reward from the Boardroom
   * @returns true if user can withdraw reward, false if they can't
   */
  async canUserUnstakeFromBoardroom(): Promise<boolean> {
    const Boardroom = this.currentBoardroom();
    const canWithdraw = await Boardroom.canWithdraw(this.myAccount);
    const stakedAmount = await this.getStakedSharesOnBoardroom();
    const notStaked = Number(getDisplayBalance(stakedAmount, this.WINE.decimal)) === 0;
    const result = notStaked ? true : canWithdraw;
    return result;
  }

  async timeUntilClaimRewardFromBoardroom(): Promise<BigNumber> {
    return BigNumber.from(0);
  }

  async getTotalStakedInBoardroom(): Promise<BigNumber> {
    const Boardroom = this.currentBoardroom();
    return await Boardroom.totalSupply();
  }

  async stakeShareToBoardroom(amount: string): Promise<TransactionResponse> {
    if (this.isOldBoardroomMember()) {
      throw new Error("you're using old boardroom. please withdraw and deposit the GSHARE again.");
    }
    const Boardroom = this.currentBoardroom();
    return await Boardroom.stake(decimalToBalance(amount));
  }

  async getStakedSharesOnBoardroom(): Promise<BigNumber> {
    const Boardroom = this.currentBoardroom();
    if (this.boardroomVersionOfUser === 'v1') {
      return await Boardroom.getShareOf(this.myAccount);
    }

    return await Boardroom.balanceOf(this.myAccount);
  }

  async getEarningsOnBoardroom(): Promise<BigNumber> {
    const Boardroom = this.currentBoardroom();

    if (this.boardroomVersionOfUser === 'v1') {
      return await Boardroom.getCashEarningsOf(this.myAccount);
    }

    return await Boardroom.earned(this.myAccount);
  }

  async withdrawShareFromBoardroom(amount: string): Promise<TransactionResponse> {
    const Boardroom = this.currentBoardroom();
    return await Boardroom.withdraw(decimalToBalance(amount));
  }

  async harvestCashFromBoardroom(): Promise<TransactionResponse> {
    const Boardroom = this.currentBoardroom();
    if (this.boardroomVersionOfUser === 'v1') {
      return await Boardroom.claimDividends();
    }
    return await Boardroom.claimReward();
  }

  async exitFromBoardroom(): Promise<TransactionResponse> {
    const Boardroom = this.currentBoardroom();
    return await Boardroom.exit();
  }

  async getTreasuryNextAllocationTime(): Promise<AllocationTime> {
    const {Treasury} = this.contracts;
    const nextEpochTimestamp: BigNumber = await Treasury.nextEpochPoint();
    const nextAllocation = new Date(nextEpochTimestamp.mul(1000).toNumber());
    const prevAllocation = new Date(Date.now());

    return {from: prevAllocation, to: nextAllocation};
  }
  /**
   * This method calculates and returns in a from to to format
   * the period the user needs to wait before being allowed to claim
   * their reward from the boardroom
   * @returns Promise<AllocationTime>
   */
  async getUserClaimRewardTime(): Promise<AllocationTime> {
    const {Boardroom, Treasury} = this.contracts;
    const nextEpochTimestamp = await Boardroom.nextEpochPoint(); //in unix timestamp
    const currentEpoch = await Boardroom.epoch();
    const mason = await Boardroom.members(this.myAccount);
    const startTimeEpoch = mason.epochTimerStart;
    const period = await Treasury.PERIOD();
    const periodInHours = period / 60 / 60; // 6 hours, period is displayed in seconds which is 21600
    const rewardLockupEpochs = await Boardroom.rewardLockupEpochs();

    const targetEpochForClaimUnlock = Number(startTimeEpoch) + Number(rewardLockupEpochs);

    const fromDate = new Date(Date.now());
    if (targetEpochForClaimUnlock - currentEpoch <= 0) {
      return {from: fromDate, to: fromDate};
    } else if (targetEpochForClaimUnlock - currentEpoch === 1) {
      const toDate = new Date(nextEpochTimestamp * 1000);
      return {from: fromDate, to: toDate};
    } else {
      const toDate = new Date(nextEpochTimestamp * 1000);
      const delta = targetEpochForClaimUnlock - currentEpoch - 1;
      const endDate = moment(toDate)
        .add(delta * periodInHours, 'hours')
        .toDate();
      return {from: fromDate, to: endDate};
    }
  }

  /**
   * This method calculates and returns in a from to to format
   * the period the user needs to wait before being allowed to unstake
   * from the boardroom
   * @returns Promise<AllocationTime>
   */
  async getUserUnstakeTime(): Promise<AllocationTime> {
    const {Boardroom, Treasury} = this.contracts;
    const nextEpochTimestamp = await Boardroom.nextEpochPoint();
    const currentEpoch = await Boardroom.epoch();
    const mason = await Boardroom.members(this.myAccount);
    const startTimeEpoch = mason.epochTimerStart;
    const period = await Treasury.PERIOD();
    const PeriodInHours = period / 60 / 60;
    const withdrawLockupEpochs = await Boardroom.withdrawLockupEpochs();
    const fromDate = new Date(Date.now());
    const targetEpochForClaimUnlock = Number(startTimeEpoch) + Number(withdrawLockupEpochs);
    const stakedAmount = await this.getStakedSharesOnBoardroom();
    if (currentEpoch <= targetEpochForClaimUnlock && Number(stakedAmount) === 0) {
      return {from: fromDate, to: fromDate};
    } else if (targetEpochForClaimUnlock - currentEpoch === 1) {
      const toDate = new Date(nextEpochTimestamp * 1000);
      return {from: fromDate, to: toDate};
    } else {
      const toDate = new Date(nextEpochTimestamp * 1000);
      const delta = targetEpochForClaimUnlock - Number(currentEpoch) - 1;
      const endDate = moment(toDate)
        .add(delta * PeriodInHours, 'hours')
        .toDate();

      return {from: fromDate, to: endDate};
    }
  }

  async watchAssetInMetamask(assetName: string): Promise<boolean> {
    const {ethereum} = window as any;

    if (ethereum && ethereum.chainId === '0xa86a') {
      let asset;
      let assetUrl;
      if (assetName === 'GRAPE') {
        asset = this.GRAPE;
        assetUrl =
          'https://raw.githubusercontent.com/grapefi/front-end/77fa78f2b05b9fecfc0ebd43aef4560c0c00890b/src/assets/img/grape.png';
      } else if (assetName === 'WINE') {
        asset = this.WINE;
        assetUrl =
          'https://raw.githubusercontent.com/grapefi/front-end/77fa78f2b05b9fecfc0ebd43aef4560c0c00890b/src/assets/img/gshare.png';
      } else if (assetName === 'GBOND') {
        asset = this.GBOND;
        assetUrl =
          'https://raw.githubusercontent.com/grapefi/front-end/77fa78f2b05b9fecfc0ebd43aef4560c0c00890b/src/assets/img/gbond.png';
      } else if (assetName === 'SW') {
        asset = this.SW;
        asset.symbol = 'GRAPE-SW-LP';
        assetUrl = 'https://raw.githubusercontent.com/grapefi/front-end/main/public/grape-mim.png';
      }
      await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: asset.address,
            symbol: asset.symbol,
            decimals: 18,
            image: assetUrl,
          },
        },
      });
    }
    return true;
  }

  async provideGrapeFtmLP(mimAmount: string, grapeAmount: BigNumber): Promise<TransactionResponse> {
    const {TaxOffice} = this.contracts;
    let overrides = {
      value: parseUnits(mimAmount, 18),
    };
    return await TaxOffice.addLiquidityETHTaxFree(
      grapeAmount,
      grapeAmount.mul(992).div(1000),
      parseUnits(mimAmount, 18).mul(992).div(1000),
      overrides,
    );
  }

  /**
   * @returns an array of the regulation events till the most up to date epoch
   */
  async listenForRegulationsEvents(): Promise<any> {
    const {Treasury} = this.contracts;

    const treasuryDaoFundedFilter = Treasury.filters.DaoFundFunded();
    const treasuryDevFundedFilter = Treasury.filters.DevFundFunded();
    const treasuryBoardroomFundedFilter = Treasury.filters.BoardroomFunded();
    const boughtBondsFilter = Treasury.filters.BoughtBonds();
    const redeemBondsFilter = Treasury.filters.RedeemedBonds();

    let epochBlocksRanges: any[] = [];
    let boardroomFundEvents = await Treasury.queryFilter(treasuryBoardroomFundedFilter);
    var events: any[] = [];
    boardroomFundEvents.forEach(function callback(value, index) {
      events.push({epoch: index + 1});
      events[index].boardroomFund = getDisplayBalance(value.args[1]);
      if (index === 0) {
        epochBlocksRanges.push({
          index: index,
          startBlock: value.blockNumber,
          boughBonds: 0,
          redeemedBonds: 0,
        });
      }
      if (index > 0) {
        epochBlocksRanges.push({
          index: index,
          startBlock: value.blockNumber,
          boughBonds: 0,
          redeemedBonds: 0,
        });
        epochBlocksRanges[index - 1].endBlock = value.blockNumber;
      }
    });

    epochBlocksRanges.forEach(async (value, index) => {
      events[index].bondsBought = await this.getBondsWithFilterForPeriod(
        boughtBondsFilter,
        value.startBlock,
        value.endBlock,
      );
      events[index].bondsRedeemed = await this.getBondsWithFilterForPeriod(
        redeemBondsFilter,
        value.startBlock,
        value.endBlock,
      );
    });
    let DEVFundEvents = await Treasury.queryFilter(treasuryDevFundedFilter);
    DEVFundEvents.forEach(function callback(value, index) {
      events[index].devFund = getDisplayBalance(value.args[1]);
    });
    let DAOFundEvents = await Treasury.queryFilter(treasuryDaoFundedFilter);
    DAOFundEvents.forEach(function callback(value, index) {
      events[index].daoFund = getDisplayBalance(value.args[1]);
    });
    return events;
  }

  /**
   * Helper method
   * @param filter applied on the query to the treasury events
   * @param from block number
   * @param to block number
   * @returns the amount of bonds events emitted based on the filter provided during a specific period
   */
  async getBondsWithFilterForPeriod(filter: EventFilter, from: number, to: number): Promise<number> {
    const {Treasury} = this.contracts;
    const bondsAmount = await Treasury.queryFilter(filter, from, to);
    return bondsAmount.length;
  }

  sqrt(value: BigNumberish) {
    const ONE = ethers.BigNumber.from(1);
    const TWO = ethers.BigNumber.from(2);
    let x = ethers.BigNumber.from(value);
    let z = x.add(ONE).div(TWO);
    let y = x;
    while (z.sub(y).isNegative()) {
      y = z;
      z = x.div(z).add(z).div(TWO);
    }
    return y;
  }

  /**
   * Estimate the amount of tokens on each side of the pair.
   * @param tokenName The name of the token
   * @param lpName The name of the pair
   * @param amount The amount of tokenName to be zapped in
   * @returns the amount of bonds events emitted based on the filter provided during a specific period
   */
  async estimateZapIn(
    tokenName: string,
    lpName: string,
    amount: string,
  ): Promise<{amounts: string[]; actions: string[]}> {
    // YOU SHOULD NOT BE ABLE TO ZAP USING TOKENS OUTSIDE OF THE LP

    // WARNING: SPAGHETTI CODE AHEAD

    const lpToken = this.externalLPs[lpName];

    let token: ERC20;

    switch (tokenName) {
      case GRAPE_TICKER: {
        token = this.GRAPE;
        break;
      }
      case WINE_TICKER: {
        token = this.WINE;
        break;
      }
      case MIM_TICKER: {
        token = this.MIM;
        break;
      }
    }

    // Check if token is part of the LP
    if (!lpToken.pairTokenAddresses.includes(token.address.toLowerCase())) {
      console.log(lpToken.pairTokenAddresses);
      throw new Error('Estimate Zapin: Input token not present in pair.');
    }

    console.log([token.address, lpToken.token.address, SPOOKY_ROUTER_ADDR, parseUnits(amount, 18)]);

    /* Didn't work
    estimate = await zapper.estimateZapInToken(
      token.address,
      lpToken.address,
      SPOOKY_ROUTER_ADDR,
      parseUnits(amount, 18),
    );*/

    // Perform the swap calculation on client-side, using TraderJoe router
    // getAmountOut()

    // investment = tokenA investment
    // half = half of tokenA investment
    // numerator = corresponding number of tokenB (extcall)
    // denominator = price quote after adding half to reserve of tokenA and removing numerator from reserve of tokenB
    // swapAmount = investment - sqrt((half * half * numerator / denominator))

    let otherToken = lpToken.pairTokenAddresses[0] == token.address ? lpToken.pairTokens[1] : lpToken.pairTokens[0];

    let investment = ethers.utils.parseEther(amount);
    let half = investment.div(2);

    // get pair data: tokenA reserve & tokenB reserve
    let pair = await Fetcher.fetchPairData(
      new Token(ChainId.AVALANCHE, token.address, 18),
      new Token(ChainId.AVALANCHE, otherToken.address, 18),
      this.provider,
    );
    let estimateNum = await this.estimateTrade(token, otherToken, half, pair);

    let numerator = ethers.utils.parseEther(await estimateNum.toSignificant(6));
    let denominator = ethers.utils.parseEther(
      (
        await this.estimateTrade(token, otherToken, half, new Pair(pair.reserve0, pair.reserve1, ChainId.AVALANCHE))
      ).toSignificant(6),
    );
    // investment - sqrt(half^2 * num)
    let swapAmountIn = investment.sub(this.sqrt(half.mul(half).mul(numerator).div(denominator)));

    let swapAmountOut = (await this.estimateTrade(token, otherToken, half, pair)).toSignificant(6);

    return {
      amounts: [ethers.utils.formatEther(swapAmountIn), swapAmountOut],
      actions: [`Swap ${ethers.utils.formatEther(half)} for ${estimateNum.toSignificant(6)}`],
    };
  }

  async estimateTrade(tokenFrom: ERC20, tokenTo: ERC20, amount: BigNumberish, pair?: Pair): Promise<CurrencyAmount> {
    const inputToken = new Token(ChainId.AVALANCHE, tokenFrom.address, 18);
    const outputToken = new Token(ChainId.AVALANCHE, tokenTo.address, 18);

    // note that you may want/need to handle this async code differently,
    // for example if top-level await is not an option
    if (!pair) {
      pair = await Fetcher.fetchPairData(inputToken, outputToken, this.provider);
    }

    const route = new Route([pair], inputToken, outputToken);

    const trade = new Trade(
      route,
      new TokenAmount(inputToken, amount.toString()),
      TradeType.EXACT_INPUT,
      ChainId.AVALANCHE,
    );

    return trade.outputAmount;
  }

  async zapIn(tokenName: string, lpName: string, amount: string): Promise<TransactionResponse> {
    const {zapper} = this.contracts;
    const lpToken = this.externalTokens[lpName];

    let token: ERC20;

    switch (tokenName) {
      case GRAPE_TICKER: {
        token = this.GRAPE;
        break;
      }
      case WINE_TICKER: {
        token = this.WINE;
        break;
      }
      case MIM_TICKER: {
        token = this.MIM;
        break;
      }
    }

    return await zapper.zapInToken(
      token.address,
      parseUnits(amount, 18),
      lpToken.address,
      SPOOKY_ROUTER_ADDR,
      this.myAccount,
    );
  }
  async zapIn_sw(tokenName: string, lpName: string, amount: string): Promise<TransactionResponse> {
    const {sw_zapper} = this.contracts;

    let token: ERC20;

    switch (tokenName) {
      case GRAPE_TICKER: {
        token = this.GRAPE;
        break;
      }
      case MIM_TICKER: {
        token = this.MIM;
        break;
      }
    }

    return await sw_zapper.zapInToken(token.address, parseUnits(amount, 18));
  }
  async swapBBondToWine(gbondAmount: BigNumber): Promise<TransactionResponse> {
    const {WineSwapper} = this.contracts;
    return await WineSwapper.swapBBondToWine(gbondAmount);
  }
  async estimateAmountOfWine(gbondAmount: string): Promise<string> {
    const {WineSwapper} = this.contracts;
    try {
      const estimateBN = await WineSwapper.estimateAmountOfWine(parseUnits(gbondAmount, 18));
      return getDisplayBalance(estimateBN, 18, 6);
    } catch (err) {
      console.error(`Failed to fetch estimate wine amount: ${err}`);
    }
  }

  async getWineSwapperStat(address: string): Promise<WineSwapperStat> {
    const {WineSwapper} = this.contracts;
    const wineBalanceBN = await WineSwapper.getWineBalance();
    const gbondBalanceBN = await WineSwapper.getBBondBalance(address);
    // const grapePriceBN = await WineSwapper.getGrapePrice();
    // const winePriceBN = await WineSwapper.getWinePrice();
    const rateWinePerGrapeBN = await WineSwapper.getWineAmountPerGrape();
    const wineBalance = getDisplayBalance(wineBalanceBN, 18, 5);
    const gbondBalance = getDisplayBalance(gbondBalanceBN, 18, 5);
    return {
      wineBalance: wineBalance.toString(),
      gbondBalance: gbondBalance.toString(),
      // grapePrice: grapePriceBN.toString(),
      // winePrice: winePriceBN.toString(),
      rateWinePerGrape: rateWinePerGrapeBN.toString(),
    };
  }
}
