import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {TokenStat} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useGrapeStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const {fastRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchGrapePrice() {
      try {
        setStat(await grapeFinance.getGrapeStat());
      } catch (err) {
        console.error(err);
      }
    }
    fetchGrapePrice();
  }, [setStat, grapeFinance, fastRefresh]);

  return stat;
};

export default useGrapeStats;
