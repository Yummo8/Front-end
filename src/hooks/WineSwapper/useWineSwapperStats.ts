import {useEffect, useState} from 'react';
import useGrapeFinance from '../useGrapeFinance';
import {WineSwapperStat} from '../../grape-finance/types';
import useRefresh from '../useRefresh';

const useWineSwapperStats = (account: string) => {
  const [stat, setStat] = useState<WineSwapperStat>();
  const {fastRefresh /*, slowRefresh*/} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchWineSwapperStat() {
      try {
        if (grapeFinance.myAccount) {
          setStat(await grapeFinance.getWineSwapperStat(account));
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchWineSwapperStat();
  }, [setStat, grapeFinance, fastRefresh, account]);

  return stat;
};

export default useWineSwapperStats;
