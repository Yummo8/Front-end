import {useCallback, useMemo} from 'react';
import { BigNumber, ethers } from 'ethers';
import useGrapeFinance from './useGrapeFinance';
import {useHasPendingApproval, useTransactionAdder} from '../state/transactions/hooks';
import useAllowance from './useAllowance';
import ERC20 from '../grape-finance/ERC20';
import {GRAPE_TICKER, MIM_TICKER, SW_ZAPPER_ROUTER_ADDR} from '../utils/constants';

const APPROVE_AMOUNT = ethers.constants.MaxUint256;
const APPROVE_BASE_AMOUNT = BigNumber.from('1000000000000000000000000');

export enum ApprovalState {
    UNKNOWN,
    NOT_APPROVED,
    PENDING,
    APPROVED,
  }
  
const useApproveSWZapper = (zappingToken: string) => {
    const grapeFinance = useGrapeFinance();
    let token: ERC20;
  
    if (zappingToken === GRAPE_TICKER) token = grapeFinance.GRAPE;
    else if (zappingToken === MIM_TICKER) token = grapeFinance.externalTokens[MIM_TICKER];
    const pendingApproval = useHasPendingApproval(token.address, SW_ZAPPER_ROUTER_ADDR);
    const currentAllowance = useAllowance(token, SW_ZAPPER_ROUTER_ADDR, pendingApproval);
  
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
    }, [currentAllowance, pendingApproval, token, grapeFinance]);
  
    const addTransaction = useTransactionAdder();
  
    const approve = useCallback(async (): Promise<void> => {
      if (approvalState !== ApprovalState.NOT_APPROVED) {
        console.error('approve was called unnecessarily');
        return;
      }
  
      const response = await token.approve(SW_ZAPPER_ROUTER_ADDR, APPROVE_AMOUNT);
      addTransaction(response, {
        summary: `Approve ${token.symbol}`,
        approval: {
          tokenAddress: token.address,
          spender: SW_ZAPPER_ROUTER_ADDR,
        },
      });
    }, [approvalState, token, addTransaction]);
  
    return {approvalState, approve};
};

export default useApproveSWZapper;
