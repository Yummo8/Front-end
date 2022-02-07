import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {AllocationTime} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useTreasuryAllocationTimes = () => {
  const {slowRefresh} = useRefresh();
  const [time, setTime] = useState<AllocationTime>({
    from: new Date(),
    to: new Date(),
  });
  const grapeFinance = useGrapeFinance();
  useEffect(() => {
    if (grapeFinance) {
      grapeFinance.getTreasuryNextAllocationTime().then(setTime);
    }
  }, [grapeFinance, slowRefresh]);
  return time;
};

export default useTreasuryAllocationTimes;
