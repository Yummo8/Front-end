import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {PressUserInfo} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useWinepressUserInfo = () => {
  const [userInfo, setUserInfo] = useState<PressUserInfo>();
  const {slowRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        if (grapeFinance.myAccount) {
          setUserInfo(await grapeFinance.getWinepressData());
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchUserInfo();
  }, [setUserInfo, grapeFinance, slowRefresh, grapeFinance.myAccount]);

  return userInfo;
};

export default useWinepressUserInfo;
