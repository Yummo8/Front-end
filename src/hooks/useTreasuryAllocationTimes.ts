import {useEffect, useState} from 'react';
import useBombFinance from './useBombFinance';
import {AllocationTime} from '../bomb-finance/types';
import useRefresh from './useRefresh';

const useTreasuryAllocationTimes = () => {
  const {slowRefresh} = useRefresh();
  const [time, setTime] = useState<AllocationTime>({
    from: new Date(),
    to: new Date(),
  });
  const bombFinance = useBombFinance();
  useEffect(() => {
    if (bombFinance) {
      bombFinance.getTreasuryNextAllocationTime().then(setTime);
    }
  }, [bombFinance, slowRefresh]);
  return time;
};

export default useTreasuryAllocationTimes;
