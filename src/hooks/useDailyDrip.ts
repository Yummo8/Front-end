import { BigNumber } from 'ethers';
import { useCallback, useState, useEffect } from 'react';
import useGrapeFinance from './useGrapeFinance';
import config from '../config';

const useDailyDrip = (contract: string, sectionInUI: number, user: string) => {
  const grapeFinance = useGrapeFinance();

  const [poolAPRs, setPoolAPRs] = useState<BigNumber[]>([]);

  const fetchNodes = useCallback(async () => {
    setPoolAPRs(await grapeFinance.getDailyDrip(contract, user));
  }, [grapeFinance, contract, user]);

  useEffect(() => {
    if (user && sectionInUI === 3) {
      fetchNodes().catch((err) => console.error(`Failed to fetch APR info: ${err.stack}`));
      const refreshInterval = setInterval(fetchNodes, config.refreshInterval);
      return () => clearInterval(refreshInterval);
    }
  }, [setPoolAPRs, grapeFinance, fetchNodes, user, sectionInUI]);

  return poolAPRs;
};

export default useDailyDrip;