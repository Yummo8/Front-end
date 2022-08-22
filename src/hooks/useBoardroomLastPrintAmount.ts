import { BigNumber } from 'ethers';
import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useRefresh from './useRefresh';

const useBoardroomLastPrintAmount = () => {
  const [lastPrint, setLastPrint] = useState<BigNumber>(BigNumber.from(0));
  const grapeFinance = useGrapeFinance();
  const {slowRefresh} = useRefresh();

  useEffect(() => {
    async function fetchLastPrintAmount() {
      try {
        setLastPrint(await grapeFinance.getBoardroomLastPrint());
      } catch (err) {
        console.error(err);
      }
    }
    fetchLastPrintAmount();
  }, [setLastPrint, grapeFinance, slowRefresh]);

  return lastPrint;
};

export default useBoardroomLastPrintAmount;
