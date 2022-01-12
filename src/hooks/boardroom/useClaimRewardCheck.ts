import {useEffect, useState} from 'react';
import useRefresh from '../useRefresh';
import useBombFinance from '../useBombFinance';

const useClaimRewardCheck = () => {
  const {slowRefresh} = useRefresh();
  const [canClaimReward, setCanClaimReward] = useState(false);
  const bombFinance = useBombFinance();
  const isUnlocked = bombFinance?.isUnlocked;

  useEffect(() => {
    async function canUserClaimReward() {
      try {
        setCanClaimReward(await bombFinance.canUserClaimRewardFromBoardroom());
      } catch (err) {
        console.error(err);
      }
    }
    if (isUnlocked) {
      canUserClaimReward();
    }
  }, [isUnlocked, slowRefresh, bombFinance]);

  return canClaimReward;
};

export default useClaimRewardCheck;
