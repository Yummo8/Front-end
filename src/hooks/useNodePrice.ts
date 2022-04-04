import { useCallback, useEffect, useState } from 'react';

import { BigNumber } from 'ethers';
import useGrapeFinance from './useGrapeFinance';
import { ContractName } from '../grape-finance';
import config from '../config';

const useNodePrice = (poolName: ContractName, poolId: Number, sectionInUI: Number) => {
  const [amount, setAmount] = useState(BigNumber.from(0));
  const grapeFinance = useGrapeFinance();

  const fetchAmount = useCallback(async () => {
    const balance = sectionInUI === 3 ? await grapeFinance.getNodePrice(poolName, poolId) : BigNumber.from(0);
    setAmount(balance);
  }, [poolName, poolId, sectionInUI, grapeFinance]);

  useEffect(() => {
    if (sectionInUI === 3) {
      fetchAmount().catch((err) => console.error(err.stack));

      const refreshBalance = setInterval(fetchAmount, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [poolName, setAmount, grapeFinance, fetchAmount]);

  return amount;
};

export default useNodePrice;