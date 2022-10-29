import {useCallback, useEffect, useState} from 'react';
import {Bank} from '../grape-finance/types';
import useGrapeFinance from './useGrapeFinance';

const useBanksWithFilters = (banks: Bank[]) => {
  const grapeFinance = useGrapeFinance();
  const [banksWithFilters, setBanksWithFilters] = useState<Bank[]>([]);
  const [processing, setProcessing] = useState(false);

  const fetchData = useCallback(async () => {
    console.log('starting usecallback');

    for (let i = 0; i < banks.length; i++) {
    //   const bank = banks[i];
    //   console.log('parsing bank ' + bank.contract);
    //   const poolStats = await grapeFinance.getPoolAPRs(bank);
    //   console.log('retrieveed data')
      //   const depositedTokenPrice = await grapeFinance.getDepositTokenPriceInDollars(
      //     bank.depositTokenName,
      //     bank.depositToken,
      //   );
      //   const depositedInTokens = await grapeFinance.stakedBalanceOnBank(
      //     bank.contract,
      //     bank.poolId,
      //     grapeFinance.myAccount,
      //   );

      //   const rewardsInToken = await grapeFinance.earnedFromBank(
      //     bank.contract,
      //     bank.earnTokenName,
      //     bank.poolId,
      //     grapeFinance.myAccount,
      //   );
      //   const rewardsTokenPrice = await grapeFinance.getDepositTokenPriceInDollars(bank.earnTokenName, bank.earnToken);

      //   bank.depositedInDollars = (Number(depositedInTokens) / 1e18) * Number(depositedTokenPrice);
      //   bank.rewardsInDollars = (Number(rewardsInToken) / 1e18) * Number(rewardsTokenPrice);
    //   bank.dailyAPR = poolStats.dailyAPR;
    //   bank.tvl = poolStats.TVL;
    }
    setBanksWithFilters(banks);
  }, []);

  useEffect(() => {
    if (grapeFinance && grapeFinance.myAccount && banks && !processing) {
      setProcessing(true);
      console.log('grape finance is not null');
      console.log('calling fetch data');
      fetchData().catch((err) => console.error(`Failed to parse in useBanksWithFilters: ${err.stack}`));
    }
  }, [grapeFinance, fetchData, banks]);

  return banksWithFilters;
};

export default useBanksWithFilters;
