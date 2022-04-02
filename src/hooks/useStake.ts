import {useCallback} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {Bank} from '../grape-finance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {parseUnits} from 'ethers/lib/utils';
import {BigNumber} from 'ethers';

const useStake = (bank: Bank) => {
  const grapeFinance = useGrapeFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      const amountBn = bank.sectionInUI !== 3 
      ? parseUnits(amount, bank.depositToken.decimal)
      : BigNumber.from(amount);
      handleTransactionReceipt(
        grapeFinance.stake(bank.contract, bank.poolId, bank.sectionInUI, amountBn),
        `Stake ${amount} ${bank.depositTokenName} to ${bank.contract}`,
      );
    },
    [bank, grapeFinance, handleTransactionReceipt],
  );
  return {onStake: handleStake};
};

export default useStake;
