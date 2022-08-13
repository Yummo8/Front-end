import { BigNumber } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import { useEffect, useState } from 'react';
import useBombFinance from './useGrapeFinance';

const usePegPoolWithdrawFee = () => {
  const bombFinance = useBombFinance();
  const isUnlocked = bombFinance?.isUnlocked;
  const [withdrawFeePercent, setWithdrawFeePercent] = useState<number>(null);

  useEffect(() => {
    const updateFee = async () => {
      const twap: BigNumber = await bombFinance.contracts.PegPool.getUpdatedTWAP();
      const twapNum = Number(formatEther(twap));

      if (twapNum >= 1) {
        setWithdrawFeePercent(0);
        return;
      }

      const brackets = [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
      for (let i = 0; i < brackets.length; i++) {
        if (twapNum >= brackets[i]) {
          setWithdrawFeePercent(Number(((1 - brackets[i]) * 100).toFixed(2)));
          return;
        }
      }
    };

    if (isUnlocked) {
      updateFee();
      const timer = setInterval(() => {
        updateFee();
      }, 1000 * 30);

      return () => clearInterval(timer);
    }
  }, [isUnlocked]);

  return { withdrawFeePercent };
};

export default usePegPoolWithdrawFee;
