import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useRefresh from './useRefresh';

const useGetBoardroomPrintRate = () => {
  const [printRate, setPrintRate] = useState<number>(0);
  const grapeFinance = useGrapeFinance();
  const {slowRefresh} = useRefresh();

  useEffect(() => {
    async function fetchCurrentEpoch() {
      try {
        setPrintRate(await grapeFinance.getBoardroomPrintRate());
      } catch (err) {
        console.error(err);
      }
    }
    fetchCurrentEpoch();
  }, [printRate, grapeFinance, slowRefresh]);

  return printRate;
};

export default useGetBoardroomPrintRate;
