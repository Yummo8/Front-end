import {useEffect, useState} from 'react';
import useRefresh from '../useRefresh';
import useGrapeFinance from '../useGrapeFinance';

const useClaimRewardCheck = () => {
  const {slowRefresh} = useRefresh();
  const [canClaimReward, setCanClaimReward] = useState(false);
  const grapeFinance = useGrapeFinance();
  const isUnlocked = grapeFinance?.isUnlocked;

  useEffect(() => {
    async function canUserClaimReward() {
      try {
        setCanClaimReward(await grapeFinance.canUserClaimRewardFromBoardroom());
      } catch (err) {
        console.error(err);
      }
    }
    if (isUnlocked) {
      canUserClaimReward();
    }
  }, [isUnlocked, slowRefresh, grapeFinance]);

  return canClaimReward;
};

export default useClaimRewardCheck;
