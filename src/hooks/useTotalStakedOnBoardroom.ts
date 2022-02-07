import {useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import useGrapeFinance from './useGrapeFinance';
import useRefresh from './useRefresh';

const useTotalStakedOnBoardroom = () => {
  const [totalStaked, setTotalStaked] = useState(BigNumber.from(0));
  const grapeFinance = useGrapeFinance();
  const {slowRefresh} = useRefresh();
  const isUnlocked = grapeFinance?.isUnlocked;

  useEffect(() => {
    async function fetchTotalStaked() {
      try {
        setTotalStaked(await grapeFinance.getTotalStakedInBoardroom());
      } catch (err) {
        console.error(err);
      }
    }
    if (isUnlocked) {
      fetchTotalStaked();
    }
  }, [isUnlocked, slowRefresh, grapeFinance]);

  return totalStaked;
};

export default useTotalStakedOnBoardroom;
