import { BigNumber, ethers } from 'ethers';
import { useCallback, useMemo } from 'react';
import { useHasPendingApproval, useTransactionAdder } from '../state/transactions/hooks';
import useAllowance from './useAllowance';
import useBombFinance from './useGrapeFinance';
import { PegPool } from '../grape-finance/types';

const APPROVE_AMOUNT = ethers.constants.MaxUint256;
const APPROVE_BASE_AMOUNT = BigNumber.from('1000000000000000000000000');

export enum ApprovalState {
  UNKNOWN,
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
function usePegPoolApprove(pool: PegPool): [ApprovalState, () => Promise<void>] {
  const bombFinance = useBombFinance();

  const pendingApproval = useHasPendingApproval(pool.depositToken.address, bombFinance.contracts.PegPool.address);
  const currentAllowance = useAllowance(pool.depositToken, bombFinance.contracts.PegPool.address, pendingApproval);

  // check the current approval status
  const approvalState: ApprovalState = useMemo(() => {
    // we might not have enough data to know whether or not we need to approve
    if (!currentAllowance) return ApprovalState.UNKNOWN;

    // amountToApprove will be defined if currentAllowance is
    return currentAllowance.lt(APPROVE_BASE_AMOUNT)
      ? pendingApproval
        ? ApprovalState.PENDING
        : ApprovalState.NOT_APPROVED
      : ApprovalState.APPROVED;
  }, [currentAllowance, pendingApproval, pool.depositToken, bombFinance]);

  const addTransaction = useTransactionAdder();

  const approve = useCallback(async (): Promise<void> => {
    if (approvalState !== ApprovalState.NOT_APPROVED) {
      console.error('approve was called unnecessarily');
      return;
    }

    const response = await pool.depositToken.approve(bombFinance.contracts.PegPool.address, APPROVE_AMOUNT);
    addTransaction(response, {
      summary: `Approve ${pool.depositToken.symbol}`,
      approval: {
        tokenAddress: pool.depositToken.address,
        spender: bombFinance.contracts.PegPool.address,
      },
    });
  }, [approvalState, pool.depositToken, addTransaction]);

  return [approvalState, approve];
}

export default usePegPoolApprove;
