import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {TokenStat} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useBtcStats = () => {
  const [stat, setStat] = useState<Number>();
  const {slowRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchSharePrice() {
      try {
        setStat(await grapeFinance.getBTCPriceUSD());
      } catch (err) {
        console.error(err);
      }
    }
    fetchSharePrice();
  }, [setStat, grapeFinance, slowRefresh]);

  return stat;
};

export default useBtcStats;
