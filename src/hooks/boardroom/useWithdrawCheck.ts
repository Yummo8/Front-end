import {useEffect, useState} from 'react';
import useBombFinance from '../useBombFinance';
import useRefresh from '../useRefresh';

const useWithdrawCheck = () => {
  const [canWithdraw, setCanWithdraw] = useState(false);
  const bombFinance = useBombFinance();
  const {slowRefresh} = useRefresh();
  const isUnlocked = bombFinance?.isUnlocked;

  useEffect(() => {
    async function canUserWithdraw() {
      try {
        setCanWithdraw(await bombFinance.canUserUnstakeFromBoardroom());
      } catch (err) {
        console.error(err);
      }
    }
    if (isUnlocked) {
      canUserWithdraw();
    }
  }, [isUnlocked, bombFinance, slowRefresh]);

  return canWithdraw;
};

export default useWithdrawCheck;
