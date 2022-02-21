import {useCallback, useState, useEffect} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {Bank} from '../grape-finance';
import {PoolStats} from '../grape-finance/types';
import config from '../config';

const useStatsForPartner = (bank: Bank) => {
  const grapeFinance = useGrapeFinance();

  const [poolAPRs, setPoolAPRs] = useState<PoolStats>();

  const fetchAPRsForPool = useCallback(async () => {
    setPoolAPRs(await grapeFinance.getPartnerAPRs(bank));
  }, [grapeFinance, bank]);

  useEffect(() => {
    fetchAPRsForPool().catch((err) => console.error(`Failed to fetch APR info: ${err.stack}`));
    const refreshInterval = setInterval(fetchAPRsForPool, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setPoolAPRs, grapeFinance, fetchAPRsForPool]);

  return poolAPRs;
};

export default useStatsForPartner;
