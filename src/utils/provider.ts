import {ethers} from 'ethers';
import config from '../config';
import {web3ProviderFrom} from '../bomb-finance/ether-utils';

let provider: ethers.providers.Web3Provider = null;

export function getDefaultProvider(): ethers.providers.Web3Provider {
  if (!provider) {
    provider = new ethers.providers.Web3Provider(web3ProviderFrom(config.defaultProvider), config.chainId);
  }

  return provider;
}
