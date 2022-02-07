import {useEffect, useState} from 'react';
import useGrapeFinance from '../useGrapeFinance';
import useRefresh from '../useRefresh';

const useWithdrawCheck = () => {
  const [canWithdraw, setCanWithdraw] = useState(false);
  const grapeFinance = useGrapeFinance();
  const {slowRefresh} = useRefresh();
  const isUnlocked = grapeFinance?.isUnlocked;

  useEffect(() => {
    async function canUserWithdraw() {
      try {
        setCanWithdraw(await grapeFinance.canUserUnstakeFromBoardroom());
      } catch (err) {
        console.error(err);
      }
    }
    if (isUnlocked) {
      canUserWithdraw();
    }
  }, [isUnlocked, grapeFinance, slowRefresh]);

  return canWithdraw;
};

export default useWithdrawCheck;
