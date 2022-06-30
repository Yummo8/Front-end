import {useCallback} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {Bank} from '../grape-finance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useZap = (bank: Bank) => {
  const grapeFinance = useGrapeFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleZap = useCallback(
    (zappingToken: string, tokenName: string, amount: string) => {
        handleTransactionReceipt(
          grapeFinance.zapIn(zappingToken, tokenName, amount),
          `Zap ${amount} in ${bank.depositTokenName}.`,
        );      
    },
    [bank, grapeFinance, handleTransactionReceipt],
  );
  return {onZap: handleZap};
};

export default useZap;
