import {useCallback, useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import ERC20 from '../grape-finance/ERC20';
import useGrapeFinance from './useGrapeFinance';
import config from '../config';

const useBondsPurchasable = () => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchBondsPurchasable() {
      try {
        setBalance(await grapeFinance.getBondsPurchasable());
      } catch (err) {
        console.error(err);
      }
    }
    fetchBondsPurchasable();
  }, [setBalance, grapeFinance]);

  return balance;
};

export default useBondsPurchasable;
