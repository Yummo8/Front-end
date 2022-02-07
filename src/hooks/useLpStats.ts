import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {LPStat} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useLpStats = (lpTicker: string) => {
  const [stat, setStat] = useState<LPStat>();
  const {slowRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchLpPrice() {
      try {
        setStat(await grapeFinance.getLPStat(lpTicker));
      } catch (err) {
        console.error(err);
      }
    }
    fetchLpPrice();
  }, [setStat, grapeFinance, slowRefresh, lpTicker]);

  return stat;
};

export default useLpStats;
