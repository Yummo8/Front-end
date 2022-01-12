import {useCallback, useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import ERC20 from '../bomb-finance/ERC20';
import useBombFinance from './useBombFinance';
import config from '../config';

const useBondsPurchasable = () => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const bombFinance = useBombFinance();

  useEffect(() => {
    async function fetchBondsPurchasable() {
      try {
        setBalance(await bombFinance.getBondsPurchasable());
      } catch (err) {
        console.error(err);
      }
    }
    fetchBondsPurchasable();
  }, [setBalance, bombFinance]);

  return balance;
};

export default useBondsPurchasable;
