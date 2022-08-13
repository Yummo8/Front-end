import { useCallback } from 'react';
import useBombFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import usePegPool from './usePegPool';

const usePegPoolRewardsClaim = () => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();
  const { refreshPool } = usePegPool();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(
      bombFinance.claimPegPool().then(async (tx) => {
        await refreshPool();
        return tx;
      }),
      ` Claim rewards from Peg Pool `,
    );
  }, [bombFinance, handleTransactionReceipt]);

  return { doClaim: handleReward };
};

export default usePegPoolRewardsClaim;
