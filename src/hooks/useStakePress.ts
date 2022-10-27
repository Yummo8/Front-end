import {useCallback} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {Bank} from '../grape-finance';
import {BigNumber} from 'ethers';
import { parseUnits } from 'ethers/lib/utils';

const useStakePress = (bank: Bank) => {
  const grapeFinance = useGrapeFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      handleTransactionReceipt(
        grapeFinance.stakePress(bank.contract, parseUnits(amount, bank.depositToken.decimal)),
        `Stake in ${bank.contract}`,
      );
    },
    [bank, grapeFinance, handleTransactionReceipt],
  );

  return {onStake: handleStake};
};

export default useStakePress;
