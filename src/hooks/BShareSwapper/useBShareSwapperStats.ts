import {useEffect, useState} from 'react';
import useBombFinance from '../useBombFinance';
import {BShareSwapperStat} from '../../bomb-finance/types';
import useRefresh from '../useRefresh';

const useBShareSwapperStats = (account: string) => {
  const [stat, setStat] = useState<BShareSwapperStat>();
  const {fastRefresh /*, slowRefresh*/} = useRefresh();
  const bombFinance = useBombFinance();

  useEffect(() => {
    async function fetchBShareSwapperStat() {
      try {
        if (bombFinance.myAccount) {
          setStat(await bombFinance.getBShareSwapperStat(account));
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchBShareSwapperStat();
  }, [setStat, bombFinance, fastRefresh, account]);

  return stat;
};

export default useBShareSwapperStats;
