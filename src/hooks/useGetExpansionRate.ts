import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {BigNumber} from 'ethers';
import useRefresh from './useRefresh';

const useGetExpansionRate = () => {
  const [expansionRate, setExpansionRate] = useState<Number>(0);
  const grapeFinance = useGrapeFinance();
  const {slowRefresh} = useRefresh();

  useEffect(() => {
    async function fetchCurrentEpoch() {
      try {
        setExpansionRate(await grapeFinance.getExpansionRate());
      } catch (err) {
        console.error(err);
      }
    }
    fetchCurrentEpoch();
  }, [setExpansionRate, grapeFinance, slowRefresh]);

  return expansionRate;
};

export default useGetExpansionRate;
