import {useCallback} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {Bank} from '../grape-finance';
import useEarningsAll from './useEarningsAll';

const useHarvestAll = (banks: Bank[]) => {
  const grapeFinance = useGrapeFinance();
  const earnings = useEarningsAll(banks);
  const handleTransactionReceipt = useHandleTransactionReceipt();
  const handleReward = useCallback(async () => {
    Promise.all(
      banks
        .filter((bank: Bank) => !earnings.get(`${bank.contract}-${bank.poolId}`).eq(0))
        .map((bank: Bank) => {
          handleTransactionReceipt(
            grapeFinance.harvest(bank.contract, bank.poolId, bank.sectionInUI),
            `Claim ${bank.earnTokenName} from ${bank.contract}`,
          );
        }),
    );
  }, [banks, earnings, grapeFinance, handleTransactionReceipt]);

  return {onReward: handleReward};
};

export default useHarvestAll;
