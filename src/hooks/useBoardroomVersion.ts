import {useCallback, useEffect, useState} from 'react';
import useBombFinance from './useBombFinance';
import useStakedBalanceOnBoardroom from './useStakedBalanceOnBoardroom';

const useBoardroomVersion = () => {
  const [boardroomVersion, setBoardroomVersion] = useState('latest');
  const bombFinance = useBombFinance();
  const stakedBalance = useStakedBalanceOnBoardroom();

  const updateState = useCallback(async () => {
    setBoardroomVersion(await bombFinance.fetchBoardroomVersionOfUser());
  }, [bombFinance?.isUnlocked, stakedBalance]);

  useEffect(() => {
    if (bombFinance?.isUnlocked) {
      updateState().catch((err) => console.error(err.stack));
    }
  }, [bombFinance?.isUnlocked, stakedBalance]);

  return boardroomVersion;
};

export default useBoardroomVersion;
