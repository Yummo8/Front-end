//@ts-nocheck
import {useMemo, useState, useEffect} from 'react';
import {useWallet} from 'use-wallet';
import {Grid, Typography, Card, CardContent, Tooltip} from '@material-ui/core';
import TokenSymbol from '../../components/TokenSymbol';
import useBanks from '../../hooks/useBanks';
import useGrapeStats from '../../hooks/useGrapeStats';
import useWineStats from '../../hooks/useWineStats';
import useWalletStats from '../../hooks/useWalletStats';
import CountUp from 'react-countup';
import useTokenBalance from '../../hooks/useTokenBalance';
import {getDisplayBalance} from '../../utils/formatBalance';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import grapeImg from '../../assets/img/grape.png';
import nodesImg from '../../assets/img/gnode.png';
import wineImg from '../../assets/img/gshare.png';
import soda from '../../assets/img/soda.png';
import {SyncLoader} from 'react-spinners';
import useXGrapePrice from '../../hooks/useXGrapePrice';
import useVintagePrice from '../../hooks/useVintagePrice';
import InfoIcon from '@mui/icons-material/Info';

import useSVintagePrice from '../../hooks/useSVintagePrice';
import {Link} from 'react-router-dom';
import DashboardTokenBox from './DashboardTokenBox';
import useWalletNodesAndNFTs from '../../hooks/useWalletNodesAndNFTs';
import useNodeRewardPoolStats from '../../hooks/useNodesRewardBalance';
import useGrapeTotalNode from '../../hooks/useGrapeTotalNodes';
import useWineTotalNode from '../../hooks/useWineTotalNodes';
import useGrapeMimSWTotalNode from '../../hooks/useGrapeMimSWTotalNode';

import {
  GRAPE_NODE_MULTIPLIER,
  WINE_NODE_MULTIPLIER,
  GRAPEMIMSW_NODE_MULTIPLIER,
  GOON_MULTIPLIER,
  GLASS_MULTIPLIER,
  DECANTER_MULTIPLIER,
  GOBLET_MULTIPLIER,
} from '../../utils/constants';
import DashboardNFTBox from './DashboardNFTBox';
import useLpStats from '../../hooks/useLpStats';

const DashboardTop = () => {
  const {account} = useWallet();
  const grapeFinance = useGrapeFinance();
  const [banks] = useBanks();
  const walletStats = useWalletStats(banks);
  const grapeStats = useGrapeStats();
  const grapeMimSWStats = useLpStats('GRAPE-MIM-SW');
  const wineStats = useWineStats();

  const grapeBalance = useTokenBalance(grapeFinance.GRAPE);
  const displayGrapeBalance = useMemo(() => getDisplayBalance(grapeBalance, 18, 2), [grapeBalance]);
  const wineBalance = useTokenBalance(grapeFinance.WINE);
  const displayWineBalance = useMemo(() => getDisplayBalance(wineBalance, 18, 2), [wineBalance]);
  const gbondBalance = useTokenBalance(grapeFinance.GBOND);
  const displayGbondBalance = useMemo(() => getDisplayBalance(gbondBalance, 18, 2), [gbondBalance]);
  const xGrapeBalance = useTokenBalance(grapeFinance.XGRAPE);
  const vintageBalance = useTokenBalance(grapeFinance.VINTAGE);
  const svintageBalance = useTokenBalance(grapeFinance.SVINTAGE);
  const displayXGrapeBalance = useMemo(() => getDisplayBalance(xGrapeBalance, 18, 2), [xGrapeBalance]);
  const displayVintageBalance = useMemo(() => getDisplayBalance(vintageBalance, 18, 2), [vintageBalance]);
  const displaySVintageBalance = useMemo(() => getDisplayBalance(svintageBalance, 18, 2), [svintageBalance]);

  const grapePriceInDollars = useMemo(
    () => (grapeStats ? Number(grapeStats.priceInDollars).toFixed(2) : null),
    [grapeStats],
  );
  const winePriceInDollars = useMemo(
    () => (wineStats ? Number(wineStats.priceInDollars).toFixed(2) : null),
    [wineStats],
  );
  const grapeMimSWPriceInDollars = useMemo(
    () => (grapeMimSWStats ? Number(grapeMimSWStats.priceOfOne).toFixed(2) : null),
    [grapeMimSWStats],
  );

  const xGrapePrice = useXGrapePrice();
  const vintagePrice = useVintagePrice();
  const sVintagePrice = useSVintagePrice();

  const [userNftTickets, setUserNftTickets] = useState<number>();
  const [userNodeTickets, setUserNodeTickets] = useState<number>();
  const walletsNodesAndNFTs = useWalletNodesAndNFTs();
  const nodeRewardPoolStats = useNodeRewardPoolStats();
  const totalGrapeNodes = useGrapeTotalNode();
  const totalWineNodes = useWineTotalNode();
  const totalGrapeMIMSWNodes = useGrapeMimSWTotalNode();

  useEffect(() => {
    if (walletsNodesAndNFTs && account) {
      setUserNodeTickets(
        walletsNodesAndNFTs.grapes * GRAPE_NODE_MULTIPLIER +
          walletsNodesAndNFTs.wines * WINE_NODE_MULTIPLIER +
          walletsNodesAndNFTs.grapeMimSWs * GRAPEMIMSW_NODE_MULTIPLIER,
      );

      setUserNftTickets(
        walletsNodesAndNFTs.goonBags * GOON_MULTIPLIER +
          walletsNodesAndNFTs.glasses * GLASS_MULTIPLIER +
          walletsNodesAndNFTs.decanters * DECANTER_MULTIPLIER +
          walletsNodesAndNFTs.goblets * GOBLET_MULTIPLIER,
      );
    }
  }, [walletsNodesAndNFTs, account]);

  const getPriceForNodes = (coin: string) => {
    if (coin === 'GRAPE') {
      return Number((nodeRewardPoolStats.grapes * Number(grapePriceInDollars)).toFixed(0));
    } else if (coin === 'WINE') {
      return Number((nodeRewardPoolStats.wines * Number(winePriceInDollars)).toFixed(0));
    } else if (coin === 'GRAPE-MIM SW') {
      return Number((nodeRewardPoolStats.grapeMimSWs * Number(grapeMimSWPriceInDollars)).toFixed(0));
    }
  };

  const getTotalPriceForNodes = () => {
    return getPriceForNodes('GRAPE') + getPriceForNodes('WINE') + getPriceForNodes('GRAPE-MIM SW');
  };

  const allTicketsFromNFTs = 9600;
  const allTicketsFromNodes = useMemo(() => {
    if (totalGrapeNodes && totalWineNodes && totalGrapeMIMSWNodes && account) {
      return Number(totalGrapeNodes) + Number(totalWineNodes[0]) + Number(totalGrapeMIMSWNodes[0]);
    }
    return null;
  }, [totalGrapeNodes, totalWineNodes, totalGrapeMIMSWNodes, account]);

  const totalTicketsWorth = useMemo(() => {
    if (
      nodeRewardPoolStats &&
      grapePriceInDollars &&
      allTicketsFromNodes &&
      winePriceInDollars &&
      grapeMimSWPriceInDollars &&
      userNftTickets &&
      userNodeTickets &&
      account
    ) {
      return (
        ((userNftTickets + userNodeTickets) * getTotalPriceForNodes()) / (allTicketsFromNodes + allTicketsFromNFTs)
      );
    }
    return 0;
  }, [
    nodeRewardPoolStats,
    allTicketsFromNodes,
    grapePriceInDollars,
    winePriceInDollars,
    grapeMimSWPriceInDollars,
    userNftTickets,
    userNodeTickets,
    account,
  ]);

  const totalInvested = useMemo(() => {
    if (walletStats && account) {
      return (
        //walletStats.totalInNodes +
        walletStats.totalInSodaPress +
        walletStats.totalInVineyard +
        walletStats.totalInWinePress +
        walletStats.totalInSoleraPress +
        walletStats.totalInWinery +
        Number(displayGrapeBalance) * Number(grapePriceInDollars) +
        Number(displayWineBalance) * Number(winePriceInDollars) +
        Number(displayXGrapeBalance) * Number(xGrapePrice) +
        Number(displayVintageBalance) * Number(vintagePrice)
      );
    }
    return -1;
  }, [walletStats, account]);

  const totalRewards = useMemo(() => {
    if (walletStats && account) {
      // include individual tokens as well
      return (
        walletStats.rewardsInNodes +
        walletStats.rewardsInSodaPress +
        walletStats.rewardsInSoleraPress +
        walletStats.rewardsInVineyard +
        walletStats.rewardsInWinePress +
        walletStats.rewardsInWinery
      );
    }
    return -1;
  }, [walletStats, account]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardContent>
                <Grid container justifyContent="space-between" alignContent="center" alignItems="center">
                  <Grid item>
                    <span style={{fontWeight: '700'}}>MY TOTAL</span>

                    <Tooltip
                      arrow
                      placement="top"
                      enterDelay={0}
                      title="Sum of all pools, rewards and individual tokens"
                      style={{verticalAlign: 'sub', paddingBottom: '1px'}}
                    >
                      <InfoIcon fontSize="small" />
                    </Tooltip>
                  </Grid>
                  <Grid item style={{fontWeight: 700}}>
                    {totalInvested !== -1 ? (
                      <CountUp end={totalInvested} separator="," prefix="≈$" />
                    ) : (
                      <SyncLoader color="white" size={4} />
                    )}
                  </Grid>
                </Grid>

                <Grid container justifyContent="space-between">
                  <Grid item>
                    <span style={{color: '#f9b857', marginTop: '10px'}}>Rewards</span>
                  </Grid>
                  <Grid item>
                    {totalRewards !== -1 ? (
                      <CountUp end={Number(totalRewards)} separator="," prefix="≈$" />
                    ) : (
                      <SyncLoader color="white" size={4} />
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={2}>
            <Card>
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <span className="dashboard-top-pool-category">Vineyard</span>
                  </Grid>
                  <Grid item>
                    <span className="dashboard-top-pool-value">
                      {walletStats ? (
                        <CountUp end={walletStats.totalInVineyard} separator="," prefix="≈$" />
                      ) : (
                        <SyncLoader color="white" size={4} />
                      )}
                    </span>
                  </Grid>
                </Grid>

                <Grid container justifyContent="space-between">
                  <Grid item>
                    <span className="dashboard-top-reward-label">Rewards</span>
                  </Grid>
                  <Grid item>
                    <span className="dashboard-top-reward-value">
                      {walletStats != null ? (
                        <CountUp end={Number(walletStats.rewardsInVineyard)} separator="," prefix="≈$" />
                      ) : (
                        <SyncLoader color="white" size={4} />
                      )}
                    </span>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={2}>
            <Card>
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <span className="dashboard-top-pool-category">Winery</span>
                  </Grid>
                  <Grid item>
                    <span className="dashboard-top-pool-value">
                      {walletStats ? (
                        <CountUp end={walletStats.totalInWinery} separator="," prefix="≈$" />
                      ) : (
                        <SyncLoader color="white" size={4} />
                      )}
                    </span>
                  </Grid>
                </Grid>

                <Grid container justifyContent="space-between">
                  <Grid item>
                    <span className="dashboard-top-reward-label">Rewards</span>
                  </Grid>
                  <Grid item>
                    <span className="dashboard-top-reward-value">
                      {walletStats != null ? (
                        <CountUp end={Number(walletStats.rewardsInWinery)} separator="," prefix="≈$" />
                      ) : (
                        <SyncLoader color="white" size={4} />
                      )}
                    </span>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/*<Grid item xs={6} sm={6} md={3} lg={2}>
            <Card>
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <span className="dashboard-top-pool-category">Nodes</span>
                  </Grid>
                  <Grid item>
                    <span className="dashboard-top-pool-value">
                      {walletStats ? (
                        <CountUp end={walletStats.totalInNodes} separator="," prefix="≈$" />
                      ) : (
                        <SyncLoader color="white" size={4} />
                      )}
                    </span>
                  </Grid>
                </Grid>

                <Grid container justifyContent="space-between">
                  <Grid item>
                    <span className="dashboard-top-reward-label">Rewards</span>
                  </Grid>
                  <Grid item>
                    <span className="dashboard-top-reward-value">
                      {walletStats != null ? (
                        <CountUp end={Number(walletStats.rewardsInNodes)} separator="," prefix="≈$" />
                      ) : (
                        <SyncLoader color="white" size={4} />
                      )}
                    </span>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
                      </Grid>*/}

          <Grid item xs={4} sm={4} md={4} lg={2}>
            <Card>
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <span className="dashboard-top-pool-category">Presses</span>
                  </Grid>
                  <Grid item>
                    <span className="dashboard-top-pool-value">
                      {walletStats ? (
                        <CountUp
                          end={
                            walletStats.totalInWinePress + walletStats.totalInSodaPress + walletStats.totalInSoleraPress
                          }
                          separator=","
                          prefix="≈$"
                        />
                      ) : (
                        <SyncLoader color="white" size={4} />
                      )}
                    </span>
                  </Grid>
                </Grid>

                <Grid container justifyContent="space-between">
                  <Grid item>
                    <span className="dashboard-top-reward-label">Rewards</span>
                  </Grid>
                  <Grid item>
                    <span className="dashboard-top-reward-value">
                      {walletStats != null ? (
                        <CountUp
                          end={Number(
                            walletStats.rewardsInWinePress +
                              walletStats.rewardsInSodaPress +
                              walletStats.rewardsInSoleraPress,
                          )}
                          separator=","
                          prefix="≈$"
                        />
                      ) : (
                        <SyncLoader color="white" size={4} />
                      )}
                    </span>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={1} justifyContent="space-between" alignItems="center">
          <Grid item xs={4} sm={4} md={2}>
            <a
              target="_blank"
              style={{textDecoration: 'none'}}
              rel="noopener noreferrer"
              href="https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0x5541D83EFaD1f281571B343977648B75d95cdAC2"
            >
              <DashboardTokenBox
                displayBalance={displayGrapeBalance}
                tokenPrice={Number(grapePriceInDollars)}
                tokenSymbol="GRAPE"
              />
            </a>
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <a
              target="_blank"
              style={{textDecoration: 'none'}}
              rel="noopener noreferrer"
              href="https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0xC55036B5348CfB45a932481744645985010d3A44"
            >
              <DashboardTokenBox
                displayBalance={displayWineBalance}
                tokenPrice={Number(winePriceInDollars)}
                tokenSymbol="WINE"
              />
            </a>
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://xgrape.grapefinance.app/"
              style={{textDecoration: 'none'}}
            >
              <DashboardTokenBox
                displayBalance={displayXGrapeBalance}
                tokenPrice={Number(xGrapePrice)}
                tokenSymbol="XGRAPE"
              />
            </a>
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <a
              style={{textDecoration: 'none'}}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.swapsicle.io/swap?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0x01Af64EF39AEB5612202AA07B3A3829f20c395fd#/"
            >
              <DashboardTokenBox
                displayBalance={displayVintageBalance}
                tokenPrice={vintagePrice}
                tokenSymbol="VINTAGE"
              />
            </a>
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <a
              style={{textDecoration: 'none'}}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.swapsicle.io/swap?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0x01Af64EF39AEB5612202AA07B3A3829f20c395fd#/"
            >
              <DashboardTokenBox
                displayBalance={displaySVintageBalance}
                tokenPrice={sVintagePrice}
                tokenSymbol="SOLERA"
              />
            </a>
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <Link to="/bond" style={{textDecoration: 'none'}}>
              <DashboardTokenBox displayBalance={displayGbondBalance} tokenPrice={null} tokenSymbol="GBOND" />
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={1} justifyContent="space-between" alignItems="center">
          <Grid item xs={3} sm={3} md={3}>
            <a
              target="_blank"
              style={{textDecoration: 'none'}}
              rel="noopener noreferrer"
              href="https://nftrade.com/collection/the-winery-collection?traitIds=db35524c-4e6a-4866-8b2f-cfd744414d5a&search=&sort=min_listed_desc&contractAddress=0x99fec0ca5cd461884e2e6e8484c219bbfb91e2df&chainName="
            >
              <DashboardNFTBox count={walletsNodesAndNFTs?.goonBags} multiplier={GOON_MULTIPLIER} nftSymbol="GOONBAG" />
            </a>
          </Grid>

          <Grid item xs={3} sm={3} md={3}>
            <a
              target="_blank"
              style={{textDecoration: 'none'}}
              rel="noopener noreferrer"
              href="https://nftrade.com/collection/the-winery-collection?traitIds=b7c9d938-0a64-486b-abbd-d337077ae642&search=&sort=min_listed_desc&contractAddress=0x99fec0ca5cd461884e2e6e8484c219bbfb91e2df&chainName="
            >
              <DashboardNFTBox count={walletsNodesAndNFTs?.glasses} multiplier={GLASS_MULTIPLIER} nftSymbol="GLASS" />
            </a>
          </Grid>

          <Grid item xs={3} sm={3} md={3}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nftrade.com/collection/the-winery-collection?traitIds=503dbfba-488e-473a-b9bf-6d20c19e2446&search=&sort=min_listed_desc&contractAddress=0x99fec0ca5cd461884e2e6e8484c219bbfb91e2df&chainName="
              style={{textDecoration: 'none'}}
            >
              <DashboardNFTBox
                count={walletsNodesAndNFTs?.decanters}
                multiplier={DECANTER_MULTIPLIER}
                nftSymbol="DECANTER"
              />
            </a>
          </Grid>

          <Grid item xs={3} sm={3} md={3}>
            <a
              style={{textDecoration: 'none'}}
              target="_blank"
              rel="noopener noreferrer"
              href="https://nftrade.com/collection/the-winery-collection?traitIds=4a6117cf-14ec-4905-afc3-f4d56c1c3151&search=&sort=min_listed_desc&contractAddress=0x99fec0ca5cd461884e2e6e8484c219bbfb91e2df&chainName="
            >
              <DashboardNFTBox count={walletsNodesAndNFTs?.goblets} multiplier={GOBLET_MULTIPLIER} nftSymbol="GOBLET" />
            </a>
          </Grid>

          {/*<Grid item xs={4} sm={4} md={2}>
            <div className="dashboard-token-box">
              <div className="dashboard-token-box-inner">
                <Grid container justifyContent="center" alignItems="flex-start" spacing={1}>
                  <Grid item>
                    <TokenSymbol width={35} height={35} symbol={'NODE'} />
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction={'column'}
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      spacing={0}
                    >
                      <Grid item className="lineValue">
                        Node Tickets
                      </Grid>
                      <Grid item className="wallet-token-value">
                        {userNodeTickets != null ? userNodeTickets : 'Loading'}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
                      </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <div className="dashboard-token-box">
              <div className="dashboard-token-box-inner">
                <Grid container justifyContent="center" alignItems="flex-start" spacing={1}>
                  <Grid item>
                    <Grid
                      container
                      direction={'column'}
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      spacing={0}
                    >
                      <Grid item className="lineValue">
                        Est. Next Airdrop
                      </Grid>
                      <Grid item className="wallet-token-value">
                        {totalTicketsWorth != null ? `~ $${totalTicketsWorth.toFixed(0)}` : 'Loading'}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>*/}

        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardTop;
