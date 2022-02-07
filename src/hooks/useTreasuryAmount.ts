import {useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import useGrapeFinance from './useGrapeFinance';

const useTreasuryAmount = () => {
  const [amount, setAmount] = useState(BigNumber.from(0));
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    if (grapeFinance) {
      const {Treasury} = grapeFinance.contracts;
      grapeFinance.GRAPE.balanceOf(Treasury.address).then(setAmount);
    }
  }, [grapeFinance]);
  return amount;
};

export default useTreasuryAmount;
