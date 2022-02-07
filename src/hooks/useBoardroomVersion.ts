import {useCallback, useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useStakedBalanceOnBoardroom from './useStakedBalanceOnBoardroom';

const useBoardroomVersion = () => {
  const [boardroomVersion, setBoardroomVersion] = useState('latest');
  const grapeFinance = useGrapeFinance();
  const stakedBalance = useStakedBalanceOnBoardroom();

  const updateState = useCallback(async () => {
    setBoardroomVersion(await grapeFinance.fetchBoardroomVersionOfUser());
  }, [grapeFinance?.isUnlocked, stakedBalance]);

  useEffect(() => {
    if (grapeFinance?.isUnlocked) {
      updateState().catch((err) => console.error(err.stack));
    }
  }, [grapeFinance?.isUnlocked, stakedBalance]);

  return boardroomVersion;
};

export default useBoardroomVersion;
