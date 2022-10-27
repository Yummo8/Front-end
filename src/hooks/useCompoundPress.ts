import {useCallback} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {Bank} from '../grape-finance';

const useCompoundPress = (bank: Bank) => {
  const grapeFinance = useGrapeFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleCompound = useCallback(() => {
    handleTransactionReceipt(
      grapeFinance.compoundPress(bank.contract),
      `Compound ${bank.earnTokenName} from ${bank.contract}`,
    );
  }, [bank, grapeFinance, handleTransactionReceipt]);

  return {onCompound: handleCompound};
};

export default useCompoundPress;
