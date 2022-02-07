import {useEffect, useState} from 'react';
import useGrapeFinance from '../useGrapeFinance';
import {AllocationTime} from '../../grape-finance/types';

const useUnstakeTimerBoardroom = () => {
  const [time, setTime] = useState<AllocationTime>({
    from: new Date(),
    to: new Date(),
  });
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    if (grapeFinance) {
      grapeFinance.getUserUnstakeTime().then(setTime);
    }
  }, [grapeFinance]);
  return time;
};

export default useUnstakeTimerBoardroom;
