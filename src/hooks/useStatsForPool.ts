import {useCallback, useState, useEffect} from 'react';
import useBombFinance from './useBombFinance';
import {Bank} from '../bomb-finance';
import {PoolStats} from '../bomb-finance/types';
import config from '../config';

const useStatsForPool = (bank: Bank) => {
  const bombFinance = useBombFinance();

  const [poolAPRs, setPoolAPRs] = useState<PoolStats>();

  const fetchAPRsForPool = useCallback(async () => {
    setPoolAPRs(await bombFinance.getPoolAPRs(bank));
  }, [bombFinance, bank]);

  useEffect(() => {
    fetchAPRsForPool().catch((err) => console.error(`Failed to fetch APR info: ${err.stack}`));
    const refreshInterval = setInterval(fetchAPRsForPool, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setPoolAPRs, bombFinance, fetchAPRsForPool]);

  return poolAPRs;
};

export default useStatsForPool;
