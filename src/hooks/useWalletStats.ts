import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {Bank, WalletStats} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useWalletStats = (banks: Bank[]) => {
  const [stat, setStat] = useState<WalletStats>();
  const {slowRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchWalletStats() {
      try {
        setStat(await grapeFinance.getWalletStats(banks));
      } catch (err) {
        console.error(err);
      }
    }
    fetchWalletStats();
  }, [setStat, grapeFinance, slowRefresh]);

  return stat;
};

export default useWalletStats;
