import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useRefresh from './useRefresh';

const useXGrapePrice = () => {
  const [stat, setStat] = useState<string>();
  const {fastRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchGrapePrice() {
      try {
        setStat(await grapeFinance.getXGrapePrice());
      } catch (err) {
        console.error(err);
      }
    }
    fetchGrapePrice();
  }, [setStat, grapeFinance, fastRefresh]);

  return stat;
};

export default useXGrapePrice;
