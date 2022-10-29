import {BigNumber, ethers} from 'ethers';
import {useCallback, useMemo} from 'react';
import {useHasPendingApproval, useTransactionAdder} from '../state/transactions/hooks';
import useAllowance from './useAllowance';
import ERC20 from '../grape-finance/ERC20';
import {publish} from '../state/txEvent';

const APPROVE_AMOUNT = ethers.constants.MaxUint256;
const APPROVE_BASE_AMOUNT = BigNumber.from('1000000000000000000000000');

export enum ApprovalState {
  UNKNOWN,
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
function useApprove(token: ERC20, spender: string) {
  const pendingApproval = useHasPendingApproval(token.address, spender);
  const currentAllowance = useAllowance(token, spender, pendingApproval);

  // check the current approval status
  const approveStatus: ApprovalState = useMemo(() => {
    // we might not have enough data to know whether or not we need to approve
    if (!currentAllowance) return ApprovalState.UNKNOWN;

    // amountToApprove will be defined if currentAllowance is
    return currentAllowance.lt(APPROVE_BASE_AMOUNT)
      ? pendingApproval
        ? ApprovalState.PENDING
        : ApprovalState.NOT_APPROVED
      : ApprovalState.APPROVED;
  }, [currentAllowance, pendingApproval]);

  const addTransaction = useTransactionAdder();

  const approve = useCallback(async (): Promise<void> => {
    if (approveStatus !== ApprovalState.NOT_APPROVED) {
      console.error('approve was called unnecessarily');
      return;
    }

    try {
      const response = await token.approve(spender, APPROVE_AMOUNT);
      addTransaction(response, {
        summary: `Approve ${token.symbol}`,
        approval: {
          tokenAddress: token.address,
          spender: spender,
        },
      });
    } catch (e) {
      publish('failedTx');
    }
  }, [approveStatus, token, spender, addTransaction]);

  return {approveStatus, approve};
}

export default useApprove;
