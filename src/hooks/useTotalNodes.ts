import { BigNumber } from 'ethers';
import { useCallback, useState, useEffect } from 'react';
import useGrapeFinance from './useGrapeFinance';
import config from '../config';

const useTotalNodes = (contract: string, sectionInUI: number) => {
  const grapeFinance = useGrapeFinance();

  const [poolAPRs, setPoolAPRs] = useState<BigNumber[]>([]);

  const fetchNodes = useCallback(async () => {
    setPoolAPRs(await grapeFinance.getTotalNodes(contract));
  }, [grapeFinance, contract]);

  useEffect(() => {
    if (sectionInUI === 3) {
      fetchNodes().catch((err) => console.error(`Failed to fetch APR info: ${err.stack}`));
      const refreshInterval = setInterval(fetchNodes, config.refreshInterval);
      return () => clearInterval(refreshInterval);
    }
  }, [setPoolAPRs, grapeFinance, fetchNodes, sectionInUI]);

  return poolAPRs;
};

export default useTotalNodes;