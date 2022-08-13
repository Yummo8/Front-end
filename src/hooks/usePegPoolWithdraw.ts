import { useCallback } from 'react';
import useBombFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';
import { PegPool } from '../grape-finance/types';
import usePegPool from './usePegPool';

const usePegPoolWithdraw = (pool: PegPool) => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();
  const { refreshPool } = usePegPool();

  const handleWithdraw = useCallback(
    async (amount: string) => {
      const amountBn = parseUnits(amount);
      handleTransactionReceipt(
        bombFinance.withdrawPegPool(amountBn).then(async (tx) => {
          await refreshPool();
          return tx;
        }),
        `Withdraw ${amount} ${pool.depositTokenName} to pool`,
      );
    },
    [pool, bombFinance, handleTransactionReceipt],
  );

  return { onWithdraw: handleWithdraw };
};

export default usePegPoolWithdraw;
