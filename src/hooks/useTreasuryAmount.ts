import {useEffect, useState} from 'react';
import {BigNumber} from 'ethers';
import useBombFinance from './useBombFinance';

const useTreasuryAmount = () => {
  const [amount, setAmount] = useState(BigNumber.from(0));
  const bombFinance = useBombFinance();

  useEffect(() => {
    if (bombFinance) {
      const {Treasury} = bombFinance.contracts;
      bombFinance.BOMB.balanceOf(Treasury.address).then(setAmount);
    }
  }, [bombFinance]);
  return amount;
};

export default useTreasuryAmount;
