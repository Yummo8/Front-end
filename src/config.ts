import {Configuration} from './grape-finance/config';
import {BankInfo} from './grape-finance';

const configurations: {[env: string]: Configuration} = {

  development: {
    chainId: 43114,
    networkName: 'Avalanche',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./grape-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WAVAX: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 18],
      MIM: ['0x130966628846BFd36ff31a822705796e8cb8C18D', 18],
      HSHARE: ['0xfa4B6db72A650601E7Bd50a0A9f537c9E98311B2', 18],
      USDC: ['0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664', 6],
      'GRAPE': ['0x5541D83EFaD1f281571B343977648B75d95cdAC2', 18],
      'WINE': ['0xC55036B5348CfB45a932481744645985010d3A44', 18],
      'WAMP': ['0xd7Fdf42510566b9aEfD3F1841a1503B6678cD780', 18],
      'VOLT': ['0xf5ee578505f4D876FeF288DfD9fD5e15e9EA1318', 18],
      'DAI': ['0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', 18],
      'GRAPE-MIM-LP': ['0xb382247667fe8ca5327ca1fa4835ae77a9907bc8', 18],
      'GRAPE-WINE-LP': ['0xd3d477Df7f63A2623464Ff5Be6746981FdeD026F', 18],
      'GRAPE-MIM-SW': ['0x9076C15D7b2297723ecEAC17419D506AE320CbF1', 18],
      'WINE-MIM-LP': ['0x00cB5b42684DA62909665d8151fF80D1567722c3', 18],
      'MIM-WAVAX-LP': ['0x781655d802670bba3c89aebaaea59d3182fd755d', 18],
      'HSHARE-WINE-LP': ['0x9E8abB3A78cF9Ae9D6eA3282566e36B91C92db5b', 18]
    },
    baseLaunchDate: new Date('2022-1-13 17:00:00Z'),
    bondLaunchesAt: new Date('2020-01-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2022-1-18T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: 43114,
    networkName: 'Avalanche',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./grape-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WAVAX: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', 18],
      MIM: ['0x130966628846BFd36ff31a822705796e8cb8C18D', 18],
      HSHARE: ['0xfa4B6db72A650601E7Bd50a0A9f537c9E98311B2', 18],
      USDC: ['0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664', 6],
      'GRAPE': ['0x5541D83EFaD1f281571B343977648B75d95cdAC2', 18],
      'WINE': ['0xC55036B5348CfB45a932481744645985010d3A44', 18],
      'WAMP': ['0xd7Fdf42510566b9aEfD3F1841a1503B6678cD780', 18],
      'VOLT': ['0xf5ee578505f4D876FeF288DfD9fD5e15e9EA1318', 18],
      'DAI': ['0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', 18],
      'GRAPE-MIM-LP': ['0xb382247667fe8ca5327ca1fa4835ae77a9907bc8', 18],
      'GRAPE-MIM-SW': ['0x9076C15D7b2297723ecEAC17419D506AE320CbF1', 18],
      'WINE-MIM-LP': ['0x00cB5b42684DA62909665d8151fF80D1567722c3', 18],
      'GRAPE-WINE-LP': ['0xd3d477Df7f63A2623464Ff5Be6746981FdeD026F', 18],
      'MIM-WAVAX-LP': ['0x781655d802670bba3c89aebaaea59d3182fd755d', 18],
      'HSHARE-WINE-LP': ['0x9E8abB3A78cF9Ae9D6eA3282566e36B91C92db5b', 18]
    },
    baseLaunchDate: new Date('2021-12-30 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-12-30T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: {[contractName: string]: BankInfo} = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding GRAPE
        - 2 = LP asset staking rewarding WINE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  /*
  GrapeMimRewardPool: {
    name: 'Earn GRAPE with MIM',
    poolId: 0,
    sectionInUI: 0,
    contract: 'GrapeMimRewardPool',
    depositTokenName: 'MIM',
    earnTokenName: 'GRAPE',
    finished: true,
    sort: 3,
    closedForStaking: true,
    multi: '0',
    buyLink: null,
  },
  GrapeWavaxRewardPool: {
    name: 'Earn GRAPE with WAVAX',
    poolId: 1,
    sectionInUI: 0,
    contract: 'GrapeWavaxRewardPool',
    depositTokenName: 'WAVAX',
    earnTokenName: 'GRAPE',
    finished: true,
    sort: 2,
    closedForStaking: true,
    multi: '0',
    buyLink: null,
  },
  GrapeMimLPRewardPool: {
    name: 'Earn GRAPE with GRAPE/MIM LP',
    poolId: 2,
    sectionInUI: 0,
    contract: 'GrapeMimLPRewardPool',
    depositTokenName: 'GRAPE-MIM-LP',
    earnTokenName: 'GRAPE',
    finished: true,
    sort: 1,
    closedForStaking: true,
    multi: '0',
    buyLink: null,
  },
  GrapeMimRewardPool1: {
    name: 'Earn GRAPE with MIM',
    poolId: 0,
    sectionInUI: 1,
    contract: 'GrapeMimRewardPool1',
    depositTokenName: 'MIM',
    earnTokenName: 'GRAPE',
    finished: true,
    sort: 6,
    closedForStaking: true,
    multi: '0',
    buyLink: null,
  },
  GrapeWavaxRewardPool1: {
    name: 'Earn GRAPE with WAVAX',
    poolId: 1,
    sectionInUI: 1,
    contract: 'GrapeWavaxRewardPool1',
    depositTokenName: 'WAVAX',
    earnTokenName: 'GRAPE',
    finished: true,
    sort: 5,
    closedForStaking: true,
    multi: '0',
    buyLink: null,
  },
  GrapeMimLPRewardPool1: {
    name: 'Earn GRAPE with GRAPE/MIM LP',
    poolId: 2,
    sectionInUI: 1,
    contract: 'GrapeMimLPRewardPool1',
    depositTokenName: 'GRAPE-MIM-LP',
    earnTokenName: 'GRAPE',
    finished: true,
    sort: 4,
    closedForStaking: true,
    multi: '0',
    buyLink: null,
  },*/
  GrapeMimLPWineRewardPool: {
    name: 'Earn WINE with GRAPE-MIM LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'GrapeMimLPWineRewardPool',
    depositTokenName: 'GRAPE-MIM-LP',
    earnTokenName: 'WINE',
    finished: false,
    sort: 0,
    closedForStaking: false,
    multi: '75',
    buyLink: 'https://traderjoexyz.com/trade?inputCurrency=0x130966628846BFd36ff31a822705796e8cb8C18D&outputCurrency=0x5541D83EFaD1f281571B343977648B75d95cdAC2#/',
  },
  
  WineMimLPWineRewardPool: {
    name: 'Earn WINE with WINE-MIM LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'WineMimLPWineRewardPool',
    depositTokenName: 'WINE-MIM-LP',
    earnTokenName: 'WINE',
    finished: false,
    sort: 1,
    closedForStaking: false,
    multi: '17.56',
    buyLink: 'https://traderjoexyz.com/trade?inputCurrency=0x130966628846BFd36ff31a822705796e8cb8C18D&outputCurrency=0xc55036b5348cfb45a932481744645985010d3a44#/',
  },
  GrapeWineLPWineRewardPool: {
    name: 'Earn WINE with GRAPE-WINE LP',
    poolId: 2,
    sectionInUI: 2,
    contract: 'GrapeWineLPWineRewardPool',
    depositTokenName: 'GRAPE-WINE-LP',
    earnTokenName: 'WINE',
    finished: false,
    sort: 2,
    closedForStaking: false,
    multi: '3.37',
    buyLink: 'https://traderjoexyz.com/trade?inputCurrency=0xC55036B5348CfB45a932481744645985010d3A44&outputCurrency=0x5541D83EFaD1f281571B343977648B75d95cdAC2#/',
  },
  GrapeStaking: {
    name: 'Earn WINE with GRAPE',
    poolId: 3,
    sectionInUI: 2,
    contract: 'GrapeStaking',
    depositTokenName: 'GRAPE',
    earnTokenName: 'WINE',
    finished: false,
    sort: 3,
    closedForStaking: false,
    multi: '10.8',
    buyLink: 'https://traderjoexyz.com/trade?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0x5541D83EFaD1f281571B343977648B75d95cdAC2#/',
  },
  WampStaking: {
    name: 'Earn WINE with WAMP',
    poolId: 4,
    sectionInUI: 2,
    contract: 'WampStaking',
    depositTokenName: 'WAMP',
    earnTokenName: 'WINE',
    finished: false,
    sort: 4,
    closedForStaking: false,
    multi: '4.05',
    buyLink: 'https://traderjoexyz.com/trade?outputCurrency=0xf5ee578505f4D876FeF288DfD9fD5e15e9EA1318#/',
  },
  PartnerPool: {
    name: 'Pool Ended Please Unstake',
    poolId: 0,
    sectionInUI: 2,
    contract: 'PartnerPool',
    depositTokenName: 'HSHARE-WINE-LP',
    earnTokenName: 'HSHARE & WINE',
    finished: true,
    sort: 5,
    closedForStaking: true,
    multi: '0',
    buyLink: 'https://app.pangolin.exchange/#/swap?inputCurrency=0xfa4B6db72A650601E7Bd50a0A9f537c9E98311B2&outputCurrency=0xC55036B5348CfB45a932481744645985010d3A44',
  },
  GrapeNode: {
    name: 'Generate Grape with Nodes',
    poolId: 0,
    sectionInUI: 3,
    contract: 'GrapeNode',
    depositTokenName: 'GRAPE',
    earnTokenName: 'GRAPE',
    finished: false,
    sort: 2,
    closedForStaking: false,
    multi: '0',
    buyLink: null,
  },
  WineNode: {
    name: 'Generate Wine with Nodes',
    poolId: 0,
    sectionInUI: 3,
    contract: 'WineNode',
    depositTokenName: 'WINE',
    earnTokenName: 'WINE',
    finished: false,
    sort: 2,
    closedForStaking: false,
    multi: '0',
    buyLink: null,
  },
  LPNode: {
    name: 'Generate LP with Nodes',
    poolId: 0,
    sectionInUI: 3,
    contract: 'LPNode',
    depositTokenName: 'GRAPE-MIM-SW',
    earnTokenName: 'GRAPE-MIM-SW',
    finished: false,
    sort: 2,
    closedForStaking: false,
    multi: '0',
    buyLink: null,
  },
  TheWineryNFT: {
    name: 'Winery Collection',
    poolId: 0,
    sectionInUI: 5,
    contract: 'TheWineryNFT',
    depositTokenName: null,
    earnTokenName: null,
    finished: false,
    sort: 2,
    closedForStaking: false,
    multi: '0',
    buyLink: null,
  },
  MIMRebates: {
    name: 'Bond MIM, earn WINE',
    poolId: 0,
    sectionInUI: 4,
    contract: 'MIMtest',
    depositTokenName: 'MIM',
    earnTokenName: 'WINE',
    finished: false,
    multi: '0',
    buyLink: null,
    sort: 0,
    closedForStaking: false,
  },
  PegLPRebates: {
    name: 'Bond GRAPE-MIM LP, earn WINE',
    poolId: 0,
    sectionInUI: 4,
    contract: 'MIMtest',
    depositTokenName: 'GRAPE-MIM-LP',
    earnTokenName: 'WINE',
    finished: false,
    multi: '0',
    buyLink: null,
    sort: 1,
    closedForStaking: false,
  },
  ShareLPRebates: {
    name: 'Bond WINE-MIM LP, earn WINE',
    poolId: 0,
    sectionInUI: 4,
    contract: 'MIMtest',
    depositTokenName: 'WINE-MIM-LP',
    earnTokenName: 'WINE',
    finished: false,
    multi: '0',
    buyLink: null,
    sort: 2,
    closedForStaking: false,
  }
};

export default configurations[process.env.NODE_ENV || 'production'];