import {useCallback, useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import useGrapeFinance from './useGrapeFinance';
import {Bank, ContractName} from '../grape-finance';
import config from '../config';

const useEarningsAll = (banks: Bank[]) => {
  const [balances, setBalances] = useState<Map<string, BigNumber>>(new Map());
  const grapeFinance = useGrapeFinance();
  const isUnlocked = grapeFinance?.isUnlocked;
  const args = banks.map((bank: Bank) => ({poolName: bank.contract, earnTokenName: bank.earnTokenName, poolId: bank.poolId}));
  const fetchBalance = useCallback(async () => {
    const balances = await Promise.all(
        args.map(async (arg: {poolName: ContractName; earnTokenName: string; poolId: Number}) => {
        const {poolName, earnTokenName, poolId} = arg;
        const balance = await grapeFinance.earnedFromBank(poolName, earnTokenName, poolId, grapeFinance.myAccount);
        return [`${poolName}-${poolId}`, balance];
      }),
    );
    setBalances(new Map(balances as any));
  }, [JSON.stringify(args), grapeFinance]);

  useEffect(() => {
    if (isUnlocked) {
      fetchBalance().catch((err) => console.error(err.stack));

      const refreshBalance = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [isUnlocked, JSON.stringify(args), grapeFinance, fetchBalance]);

  return balances;
};

export default useEarningsAll;
