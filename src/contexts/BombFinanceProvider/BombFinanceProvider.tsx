import React, {createContext, useEffect, useState} from 'react';
import {useWallet} from 'use-wallet';
import BombFinance from '../../bomb-finance';
import config from '../../config';

export interface BombFinanceContext {
  bombFinance?: BombFinance;
}

export const Context = createContext<BombFinanceContext>({bombFinance: null});

export const BombFinanceProvider: React.FC = ({children}) => {
  const {ethereum, account} = useWallet();
  const [bombFinance, setBombFinance] = useState<BombFinance>();

  useEffect(() => {
    if (!bombFinance) {
      const bomb = new BombFinance(config);
      if (account) {
        // wallet was unlocked at initialization
        bomb.unlockWallet(ethereum, account);
      }
      setBombFinance(bomb);
    } else if (account) {
      bombFinance.unlockWallet(ethereum, account);
    }
  }, [account, ethereum, bombFinance]);

  return <Context.Provider value={{bombFinance}}>{children}</Context.Provider>;
};
