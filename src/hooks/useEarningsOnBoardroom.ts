import {useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import useGrapeFinance from './useGrapeFinance';
import useRefresh from './useRefresh';

const useEarningsOnBoardroom = () => {
  const {slowRefresh} = useRefresh();
  const [balance, setBalance] = useState(BigNumber.from(0));
  const grapeFinance = useGrapeFinance();
  const isUnlocked = grapeFinance?.isUnlocked;

  useEffect(() => {
    async function fetchBalance() {
      try {
        setBalance(await grapeFinance.getEarningsOnBoardroom());
      } catch (e) {
        console.error(e);
      }
    }
    if (isUnlocked) {
      fetchBalance();
    }
  }, [isUnlocked, grapeFinance, slowRefresh]);

  return balance;
};

export default useEarningsOnBoardroom;
