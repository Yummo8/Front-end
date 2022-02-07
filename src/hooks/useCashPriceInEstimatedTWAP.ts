import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {TokenStat} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useCashPriceInEstimatedTWAP = () => {
  const [stat, setStat] = useState<TokenStat>();
  const grapeFinance = useGrapeFinance();
  const {slowRefresh} = useRefresh();

  useEffect(() => {
    async function fetchCashPrice() {
      try {
        setStat(await grapeFinance.getGrapeStatInEstimatedTWAP());
      } catch (err) {
        console.error(err);
      }
    }
    fetchCashPrice();
  }, [setStat, grapeFinance, slowRefresh]);

  return stat;
};

export default useCashPriceInEstimatedTWAP;
