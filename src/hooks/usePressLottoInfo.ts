import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {PressLottoInfo} from '../grape-finance/types';
import useRefresh from './useRefresh';

const usePressLottoInfo = (pressName: string) => {
  const [pressLottoInfo, setPressLottoInfo] = useState<PressLottoInfo>();
  const {slowRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchPressLottoInfo() {
      try {
        setPressLottoInfo(await grapeFinance.getPressLottoInfo(pressName));
      } catch (err) {
        console.error(err);
      }
    }
    fetchPressLottoInfo();
  }, [setPressLottoInfo, grapeFinance, slowRefresh]);

  return pressLottoInfo;
};

export default usePressLottoInfo;
