import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {SodapressUserInfo} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useSodapressUserInfo = () => {
  const [userInfo, setUserInfo] = useState<SodapressUserInfo>();
  const {slowRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        if (grapeFinance.myAccount) {
          setUserInfo(await grapeFinance.getSodapressUserInfo());
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchUserInfo();
  }, [setUserInfo, grapeFinance, slowRefresh, grapeFinance.myAccount]);

  return userInfo;
};

export default useSodapressUserInfo;
