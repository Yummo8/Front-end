import {useEffect, useState} from 'react';
import useBombFinance from './useBombFinance';
import {TokenStat} from '../bomb-finance/types';
import useRefresh from './useRefresh';
import useWallet from 'use-wallet';
const useRaffleStats = (account: string) => {
  const [stat, setStat] = useState<TokenStat>();
  const {fastRefresh} = useRefresh();
  const bombFinance = useBombFinance();
  
  useEffect(() => {
    async function fetchBombPrice() {
      
      try {
        setStat(await bombFinance.getRaffleStat(account));
      } catch (err) {
        console.error(err);
      }
    }
    fetchBombPrice();
  }, [setStat, bombFinance, fastRefresh]);

  return stat;
};

export default useRaffleStats;
