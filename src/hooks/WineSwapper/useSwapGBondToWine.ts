import {useCallback} from 'react';
import useGrapeFinance from '../useGrapeFinance';
import useHandleTransactionReceipt from '../useHandleTransactionReceipt';
// import { BigNumber } from "ethers";
import {parseUnits} from 'ethers/lib/utils';

const useSwapBBondToWine = () => {
  const grapeFinance = useGrapeFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleSwapWine = useCallback(
    (gbondAmount: string) => {
      const gbondAmountBn = parseUnits(gbondAmount, 18);
      handleTransactionReceipt(grapeFinance.swapBBondToWine(gbondAmountBn), `Swap ${gbondAmount} BBond to Wine`);
    },
    [grapeFinance, handleTransactionReceipt],
  );
  return {onSwapWine: handleSwapWine};
};

export default useSwapBBondToWine;
