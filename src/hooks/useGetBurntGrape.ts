import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useRefresh from './useRefresh';

const useGetBurntGrape = () => {
  const [stat, setStat] = useState<Number>();
  const {slowRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchSharePrice() {
      try {
        setStat(await grapeFinance.getBurntGrape());
      } catch (err) {
        console.error(err);
      }
    }
    fetchSharePrice();
  }, [setStat, grapeFinance, slowRefresh]);

  return Number(stat) / 1e18;
};

export default useGetBurntGrape;
