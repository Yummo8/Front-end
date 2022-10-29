import {useCallback} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {Bank} from '../grape-finance';
import {BigNumber} from 'ethers';
import {parseUnits} from 'ethers/lib/utils';

const useZapStakePress = (bank: Bank) => {
  const grapeFinance = useGrapeFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleZapStake = useCallback(
    (amount: string, token: string) => {
      handleTransactionReceipt(
        grapeFinance.zapStakePress(bank.contract, token, parseUnits(amount, bank.depositToken.decimal)),
        `Zap ${token} and Stake in ${bank.contract}`,
      );
    },
    [bank, grapeFinance, handleTransactionReceipt],
  );

  return {onZapAndStake: handleZapStake};
};

export default useZapStakePress;
