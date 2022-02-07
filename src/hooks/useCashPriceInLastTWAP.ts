import {useCallback, useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import config from '../config';
import {BigNumber} from 'ethers';

const useCashPriceInLastTWAP = () => {
  const [price, setPrice] = useState<BigNumber>(BigNumber.from(0));
  const grapeFinance = useGrapeFinance();

  const fetchCashPrice = useCallback(async () => {
    setPrice(await grapeFinance.getGrapePriceInLastTWAP());
  }, [grapeFinance]);

  useEffect(() => {
    fetchCashPrice().catch((err) => console.error(`Failed to fetch GRAPE price: ${err.stack}`));
    const refreshInterval = setInterval(fetchCashPrice, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setPrice, grapeFinance, fetchCashPrice]);

  return price;
};

export default useCashPriceInLastTWAP;
