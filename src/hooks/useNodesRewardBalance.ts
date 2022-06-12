import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {NodesRewardWalletBalance} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useNodesRewardBalanceStats = () => {
  const [stat, setStat] = useState<NodesRewardWalletBalance>();
  const {slowRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();
  
  useEffect(() => {
    async function fetchNodesRewardWalletBalance() {
      try {
        setStat(await grapeFinance.getNodesRewardWalletBalance());
      } catch (err) {
        console.error(err);
      }
    }
    fetchNodesRewardWalletBalance();
  }, [setStat, grapeFinance, slowRefresh]);

  return stat;
};

export default useNodesRewardBalanceStats;
