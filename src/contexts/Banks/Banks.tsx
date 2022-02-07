import React, {useCallback, useEffect, useState} from 'react';
import Context from './context';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import {Bank} from '../../grape-finance';
import config, {bankDefinitions} from '../../config';

const Banks: React.FC = ({children}) => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const grapeFinance = useGrapeFinance();
  const isUnlocked = grapeFinance?.isUnlocked;

  const fetchPools = useCallback(async () => {
    const banks: Bank[] = [];

    for (const bankInfo of Object.values(bankDefinitions)) {
      if (bankInfo.finished) {
        if (!grapeFinance.isUnlocked) continue;

        // only show pools staked by user
        const balance = await grapeFinance.stakedBalanceOnBank(
          bankInfo.contract,
          bankInfo.poolId,
          grapeFinance.myAccount,
        );
        if (balance.lte(0)) {
          continue;
        }
      }
      banks.push({
        ...bankInfo,
        address: config.deployments[bankInfo.contract].address,
        depositToken: grapeFinance.externalTokens[bankInfo.depositTokenName],
        earnToken: bankInfo.earnTokenName === 'GRAPE' ? grapeFinance.GRAPE : grapeFinance.WINE,
      });
    }
    banks.sort((a, b) => (a.sort > b.sort ? 1 : -1));
    setBanks(banks);
  }, [grapeFinance, setBanks]);

  useEffect(() => {
    if (grapeFinance) {
      fetchPools().catch((err) => console.error(`Failed to fetch pools: ${err.stack}`));
    }
  }, [isUnlocked, grapeFinance, fetchPools]);

  return <Context.Provider value={{banks}}>{children}</Context.Provider>;
};

export default Banks;
