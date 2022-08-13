import { useCallback } from 'react';
import useBombFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { formatEther, parseUnits } from 'ethers/lib/utils';
import { PegPool } from '../grape-finance/types';
import usePegPool from './usePegPool';

const usePegPoolDeposit = (pool: PegPool) => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();
  const { refreshPool } = usePegPool();

  const handleDeposit = useCallback(
    async (amount: string) => {
      const amountBn = parseUnits(amount);
      handleTransactionReceipt(
        bombFinance.depositPegPool(amountBn).then((tx) => {
          refreshPool();
          return tx;
        }),
        `Deposit ${Number(amount).toFixed(2)} ${pool.depositTokenName} to pool`,
      );
    },
    [pool, bombFinance, handleTransactionReceipt],
  );

  return { onDeposit: handleDeposit };
};

export default usePegPoolDeposit;
