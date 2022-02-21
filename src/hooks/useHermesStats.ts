import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {TokenStat} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useHermesStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const {fastRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchHermesPrice() {
      try {
        setStat(await grapeFinance.getHermesStat());
      } catch (err) {
        console.error(err);
      }
    }
    fetchHermesPrice();
  }, [setStat, grapeFinance, fastRefresh]);

  return stat;
};

export default useHermesStats;
