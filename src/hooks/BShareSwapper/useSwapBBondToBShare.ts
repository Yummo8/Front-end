import {useCallback} from 'react';
import useBombFinance from '../useBombFinance';
import useHandleTransactionReceipt from '../useHandleTransactionReceipt';
// import { BigNumber } from "ethers";
import {parseUnits} from 'ethers/lib/utils';

const useSwapBBondToBShare = () => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleSwapBShare = useCallback(
    (bbondAmount: string) => {
      const bbondAmountBn = parseUnits(bbondAmount, 18);
      handleTransactionReceipt(bombFinance.swapBBondToBShare(bbondAmountBn), `Swap ${bbondAmount} BBond to BShare`);
    },
    [bombFinance, handleTransactionReceipt],
  );
  return {onSwapBShare: handleSwapBShare};
};

export default useSwapBBondToBShare;
