import { useCallback } from 'react';
import useBombFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import usePegPool from './usePegPool';

const usePegPoolCompound = () => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();
  const { refreshPool } = usePegPool();

  const handleCompound = useCallback(async () => {
    handleTransactionReceipt(
      bombFinance.compoundTokenPegPool().then(async (tx) => {
        await refreshPool();
        return tx;
      }),
      `Rewards compounded`,
    );
  }, [bombFinance, handleTransactionReceipt, refreshPool]);

  return { onCompound: () => handleCompound() };
};

export default usePegPoolCompound;
