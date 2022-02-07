import {useEffect, useState} from 'react';
import useGrapeFinance from '../useGrapeFinance';
import {AllocationTime} from '../../grape-finance/types';

const useClaimRewardTimerBoardroom = () => {
  const [time, setTime] = useState<AllocationTime>({
    from: new Date(),
    to: new Date(),
  });
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    if (grapeFinance) {
      grapeFinance.getUserClaimRewardTime().then(setTime);
    }
  }, [grapeFinance]);
  return time;
};

export default useClaimRewardTimerBoardroom;
