import React, {createContext, useEffect, useState} from 'react';
import {useWallet} from 'use-wallet';
import GrapeFinance from '../../grape-finance';
import config from '../../config';

export interface GrapeFinanceContext {
  grapeFinance?: GrapeFinance;
}

export const Context = createContext<GrapeFinanceContext>({grapeFinance: null});

export const GrapeFinanceProvider: React.FC = ({children}) => {
  const {ethereum, account} = useWallet();
  const [grapeFinance, setGrapeFinance] = useState<GrapeFinance>();

  useEffect(() => {
    if (!grapeFinance) {
      const grape = new GrapeFinance(config);
      if (account) {
        // wallet was unlocked at initialization
        grape.unlockWallet(ethereum, account);
      }
      setGrapeFinance(grape);
    } else if (account) {
      grapeFinance.unlockWallet(ethereum, account);
    }
  }, [account, ethereum, grapeFinance]);

  return <Context.Provider value={{grapeFinance}}>{children}</Context.Provider>;
};
