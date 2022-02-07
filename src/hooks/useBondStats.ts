import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {TokenStat} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useBondStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const {slowRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchBondPrice() {
      try {
        setStat(await grapeFinance.getBondStat());
      } catch (err) {
        console.error(err);
      }
    }
    fetchBondPrice();
  }, [setStat, grapeFinance, slowRefresh]);

  return stat;
};

export default useBondStats;
