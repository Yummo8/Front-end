import ERC20 from './ERC20';
import {BigNumber} from 'ethers';
import {ApprovalState} from '../hooks/useApprove';
export type ContractName = string;

export interface BankInfo {
  name: string;
  poolId: number;
  sectionInUI: number;
  contract: ContractName;
  depositTokenName: ContractName;
  earnTokenName: ContractName;
  sort: number;
  finished: boolean;
  closedForStaking: boolean;
  multi: string;
  buyLink: string;
  tvl?: string;
  dailyAPR?: string;
  depositedInDollars?: number;
  rewardsInDollars?: number;
}

export interface Bank extends BankInfo {
  address: string;
  depositToken: ERC20;
  earnToken: ERC20;
}

export type PoolStats = {
  userDailyBurst?: string;
  userYearlyBurst?: string;
  dailyAPR: string;
  yearlyAPR: string;
  TVL: string;
};

export type LightPoolStats = {
  dailyAPR: string;
  TVL: string;
};

export interface ExtinctionRewardToken {
  address: string;
  pairAddress?: string;
  rewardPerBlock?: string;
  name?: string;
  userPendingAmount?: string;
  userPendingValue?: string;
  userPendingValueBN?: BigNumber;
  injectedAmount?: number;
  totalValue?: string;
}

export interface ExtinctionUserInfo {
  amountDeposited: string;
  pendingRewards?: ExtinctionRewardToken[];
}

export interface ExtinctionPoolInfo {
  name: string;
  depositTokenName: string;
  depositToken?: ERC20;
  contract: ContractName;
  active?: boolean;
  startBlock?: number;
  starTimestamp?: number;
  endBlock?: number;
  blocksUntilEnd?: number;
  lockBlock?: number;
  blockUntilLock?: number;
  totalDepositTokenAmount?: string;
  maxDepositAmount?: string;
  APR?: number;
  rewardTokens?: ExtinctionRewardToken[];
  userInfo?: ExtinctionUserInfo;
  hasRewardsToClaim?: boolean;
  canDeposit?: boolean;
}

export interface PegPool {
  depositsEnabled: boolean;
  totalDesposits: string;
  depositToken: ERC20;
  depositTokenName: string;
  userInfo?: PegPoolUserInfo;
  approved: boolean;
}

export interface PegPoolToken {
  name: string;
  token: ERC20;
  pairAddress: string;
  amount?: string;
  image?: string;
  pendingValue?: string;
  pendingValueBN?: BigNumber;
  currentPrice?: string;
  currentPriceNum?: number;
  rewardPerBlock: number;
  canCompound: boolean;
}

export interface PegPoolUserInfo {
  amountDeposited: string;
  amountDepositedBN: BigNumber;
  isDeposited: boolean;
}

export type NodesRewardWalletBalance = {
  grapes: number;
  wines: number;
  grapeMimSWs: number;
};

export type TokenStat = {
  tokenInFtm: string;
  priceInDollars: string;
  totalSupply: string;
  circulatingSupply: string;
  treasuryGrapes?: string;
};

export type PressUserInfo = {
  totalTracked: number;
  totalDeposited: number;
  profitsAssassinated: number;
  totalClaimable: number;
  priceOfOneShare: number;
  depositTokenPrice: number;
  pressTotalDeposited: number;
  tvl: number;
  rewardsPerDay: number;
  profit: number;
  profitRatio: number;
  currentShares: number;
  pendingShares: number;
  pendingSharesInToken: number;
  currentSharesInToken: number;
  claimedInShares: number;
};

export type PressLottoInfo = {
  largestDaily: number;
  largestDailyAddress: string;
  largestDailyPot: number;
  dailyDepositPot: number;
  monthlyWinnersPot: number;
  timeLeftUntilNewDay: number;
  lottoTickets: number;
  totalLottoTickets: number;
  lottoWinnings: number;
};

export type WalletNodesAndNFTs = {
  grapes: number;
  wines: number;
  grapeMimSWs: number;
  goonBags: number;
  glasses: number;
  decanters: number;
  goblets: number;
};

export type WalletStats = {
  rewardsInVineyard: number;
  rewardsInWinery: number;
  rewardsInNodes: number;
  rewardsInWinePress: number;
  rewardsInSodaPress: number;
  rewardsInSoleraPress: number;
  totalInVineyard: number;
  totalInWinery: number;
  totalInNodes: number;
  totalInWinePress: number;
  totalInSodaPress: number;
  totalInSoleraPress: number;
};

export type LPStat = {
  tokenAmount: string;
  mimAmount: string;
  priceOfOne: string;
  totalLiquidity: string;
  totalSupply: string;
};

export type ApproveWrapper = {
  approvalState: ApprovalState;
  approve: () => Promise<void>;
};

export type AllocationTime = {
  from: Date;
  to: Date;
};

export type WineSwapperStat = {
  wineBalance: string;
  gbondBalance: string;
  // grapePrice: string;
  // winePrice: string;
  rateWinePerGrape: string;
};
