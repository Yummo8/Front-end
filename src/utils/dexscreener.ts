import axios from 'axios';

const DEXSCREENER_PAIR_BASE_URL = 'https://api.dexscreener.io/latest/dex/pairs/';

export async function getDexPairInfo(chainSymbol: 'avalanche', pairAddress: string) {
  try {
    const req = await axios.get(`${DEXSCREENER_PAIR_BASE_URL}${chainSymbol}/${pairAddress}`);
    return req.data;
  } catch (error) {
    throw error;
  }
}

export async function getDexPriceFromPair(chainSymbol: 'avalanche', pairAddress: string) {
  try {
    const req = await axios.get(`${DEXSCREENER_PAIR_BASE_URL}${chainSymbol}/${pairAddress}`);
    if (req.data.pair) {
      const price = req.data.pair.priceUsd;
      return {
        priceUI: `$${price}`,
        priceNum: Number(price),
      };
    }

    return {
      priceUI: `$0`,
      priceNum: 0,
    };
  } catch (error) {
    throw error;
  }
}
