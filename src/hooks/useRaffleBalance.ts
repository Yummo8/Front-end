import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {TokenStat} from '../grape-finance/types';
import useRefresh from './useRefresh';
import useWallet from 'use-wallet';
const useRaffleStats = (account: string) => {
  const [stat, setStat] = useState<TokenStat>();
  const {fastRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();
  
  useEffect(() => {
    async function fetchGrapePrice() {
      
      try {
        setStat(await grapeFinance.getRaffleStat(account));
      } catch (err) {
        console.error(err);
      }
    }
    fetchGrapePrice();
  }, [setStat, grapeFinance, fastRefresh]);

  return stat;
};

export default useRaffleStats;
