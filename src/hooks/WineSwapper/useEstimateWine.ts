import {useCallback, useEffect, useState} from 'react';
import useGrapeFinance from '../useGrapeFinance';
import {useWallet} from 'use-wallet';
import {BigNumber} from 'ethers';
import {parseUnits} from 'ethers/lib/utils';

const useEstimateWine = (gbondAmount: string) => {
  const [estimateAmount, setEstimateAmount] = useState<string>('');
  const {account} = useWallet();
  const grapeFinance = useGrapeFinance();

  const estimateAmountOfWine = useCallback(async () => {
    const gbondAmountBn = parseUnits(gbondAmount);
    const amount = await grapeFinance.estimateAmountOfWine(gbondAmountBn.toString());
    setEstimateAmount(amount);
  }, [account]);

  useEffect(() => {
    if (account) {
      estimateAmountOfWine().catch((err) => console.error(`Failed to get estimateAmountOfWine: ${err.stack}`));
    }
  }, [account, estimateAmountOfWine]);

  return estimateAmount;
};

export default useEstimateWine;
