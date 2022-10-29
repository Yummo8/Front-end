import {useCallback} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {Bank} from '../grape-finance';

const useBurnGrapePress = (bank: Bank) => {
  const grapeFinance = useGrapeFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleBurn = useCallback(
    (batches: number) => {
      handleTransactionReceipt(
        grapeFinance.burnGrapePress(bank.contract, batches),
        `Burning ${batches} of 10 GRAPE in ${bank.contract}`,
      );
    },
    [bank, grapeFinance, handleTransactionReceipt],
  );

  return {onBurnGrape: handleBurn};
};

export default useBurnGrapePress;
