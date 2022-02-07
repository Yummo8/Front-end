import {useContext} from 'react';
import {Context} from '../contexts/GrapeFinanceProvider';

const useGrapeFinance = () => {
  const {grapeFinance} = useContext(Context);
  return grapeFinance;
};

export default useGrapeFinance;
