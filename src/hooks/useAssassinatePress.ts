import {useCallback} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {Bank} from '../grape-finance';

const useAssassinatePress = (bank: Bank) => {
  const grapeFinance = useGrapeFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleAssassinate = useCallback(
    (user: string) => {
      handleTransactionReceipt(
        grapeFinance.assassinatePress(bank.contract, user),
        `Assassinate ${user} in ${bank.contract}`,
      );
    },
    [bank, grapeFinance, handleTransactionReceipt],
  );

  return {onAssassinate: handleAssassinate};
};

export default useAssassinatePress;
