import {useCallback, useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import useGrapeFinance from './useGrapeFinance';
import {ContractName} from '../grape-finance';
import config from '../config';

const useEarnings = (poolName: ContractName, earnTokenName: String, poolId: Number) => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const grapeFinance = useGrapeFinance();
  
  const isUnlocked = grapeFinance?.isUnlocked;

  const fetchBalance = useCallback(async () => {
    const balance = await grapeFinance.earnedFromBank(poolName, earnTokenName, poolId, grapeFinance.myAccount);
    setBalance(balance);
  }, [poolName, earnTokenName, poolId, grapeFinance]);

  useEffect(() => {
    if (isUnlocked) {
      fetchBalance().catch((err) => console.error(err.stack));

      const refreshBalance = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [isUnlocked, poolName, grapeFinance, fetchBalance]);

  return balance;
};

export default useEarnings;
