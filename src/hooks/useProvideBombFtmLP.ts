import {useCallback} from 'react';
import useBombFinance from './useBombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import {parseUnits} from 'ethers/lib/utils';
import {TAX_OFFICE_ADDR} from '../utils/constants';

const useProvideBombFtmLP = () => {
  const bombFinance = useBombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleProvideBombFtmLP = useCallback(
    (ftmAmount: string, bombAmount: string) => {
      const bombAmountBn = parseUnits(bombAmount);
      handleTransactionReceipt(
        bombFinance.provideBombFtmLP(ftmAmount, bombAmountBn),
        `Provide BOMB-BTCB LP ${bombAmount} ${ftmAmount} using ${TAX_OFFICE_ADDR}`,
      );
    },
    [bombFinance, handleTransactionReceipt],
  );
  return {onProvideBombFtmLP: handleProvideBombFtmLP};
};

export default useProvideBombFtmLP;
