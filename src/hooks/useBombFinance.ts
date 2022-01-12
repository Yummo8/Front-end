import {useContext} from 'react';
import {Context} from '../contexts/BombFinanceProvider';

const useBombFinance = () => {
  const {bombFinance} = useContext(Context);
  return bombFinance;
};

export default useBombFinance;
