import {useCallback} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {Bank} from '../grape-finance';
import useEarningsAll from './useEarningsAll';

const useCompoundAll = (banks: Bank[]) => {
  const grapeFinance = useGrapeFinance();
  const earnings = useEarningsAll(banks);
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(async () => {
    let nodesToCompound = []
    for (let i = 0; i < banks.length; i++) {
      const bank = banks[i]
      const nodePrice = await grapeFinance.getNodePrice(bank.contract, bank.poolId)
      const nodeEarnings = earnings.get(`${bank.contract}-${bank.poolId}`)
      console.log('Node Price = ' + nodePrice)
      console.log('Node Earnings = ' + nodeEarnings)
      if (!nodeEarnings.eq(0) && Number(nodeEarnings) >= Number(nodePrice)) {
        console.log('can compound ' + bank.contract)
        nodesToCompound.push(bank)
      }
    }
    Promise.all(
      nodesToCompound
        .map((bank: Bank) => {
          handleTransactionReceipt(
            grapeFinance.compound(bank.contract, bank.poolId, bank.sectionInUI),
            `Compound ${bank.earnTokenName} from ${bank.contract}`,
          );
        }),
    );
  }, [banks, earnings, grapeFinance, handleTransactionReceipt]);

  return handleReward;
};

export default useCompoundAll;
