import {useCallback, useEffect, useState} from 'react';
import useBombFinance from './useBombFinance';
import config from '../config';
import {BigNumber} from 'ethers';

const useCashPriceInLastTWAP = () => {
  const [price, setPrice] = useState<BigNumber>(BigNumber.from(0));
  const bombFinance = useBombFinance();

  const fetchCashPrice = useCallback(async () => {
    setPrice(await bombFinance.getBombPriceInLastTWAP());
  }, [bombFinance]);

  useEffect(() => {
    fetchCashPrice().catch((err) => console.error(`Failed to fetch BOMB price: ${err.stack}`));
    const refreshInterval = setInterval(fetchCashPrice, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setPrice, bombFinance, fetchCashPrice]);

  return price;
};

export default useCashPriceInLastTWAP;
