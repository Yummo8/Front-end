import {useCallback} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {Bank} from '../grape-finance';

const useHarvest = (bank: Bank) => {
  const grapeFinance = useGrapeFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(
      grapeFinance.harvest(bank.contract, bank.poolId, bank.sectionInUI),
      `Claim ${bank.earnTokenName} from ${bank.contract}`,
    );
  }, [bank, grapeFinance, handleTransactionReceipt]);

  return {onReward: handleReward};
};

export default useHarvest;
