import {useCallback} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {Bank} from '../grape-finance';

const useClaimPress = (bank: Bank) => {
  const grapeFinance = useGrapeFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleClaim = useCallback(() => {
    handleTransactionReceipt(
      grapeFinance.claimPress(bank.contract),
      `Claim ${bank.earnTokenName} from ${bank.contract}`,
    );
  }, [bank, grapeFinance, handleTransactionReceipt]);

  return {onClaim: handleClaim};
};

export default useClaimPress;
