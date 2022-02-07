import {useCallback} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {parseUnits} from 'ethers/lib/utils';
import {TAX_OFFICE_ADDR} from '../utils/constants';

const useProvideGrapeFtmLP = () => {
  const grapeFinance = useGrapeFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleProvideGrapeFtmLP = useCallback(
    (ftmAmount: string, grapeAmount: string) => {
      const grapeAmountBn = parseUnits(grapeAmount);
      handleTransactionReceipt(
        grapeFinance.provideGrapeFtmLP(ftmAmount, grapeAmountBn),
        `Provide GRAPE-MIM LP ${grapeAmount} ${ftmAmount} using ${TAX_OFFICE_ADDR}`,
      );
    },
    [grapeFinance, handleTransactionReceipt],
  );
  return {onProvideGrapeFtmLP: handleProvideGrapeFtmLP};
};

export default useProvideGrapeFtmLP;
