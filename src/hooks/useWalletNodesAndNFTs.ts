import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {WalletNodesAndNFTs} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useWalletNodesAndNFTs = () => {
  const [walletNodesAndNFTs, setWalletNodesAndNFTs] = useState<WalletNodesAndNFTs>();
  const {fastRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
      async function fetchWalletNodesAndNFTs() {
      try {
        if (grapeFinance?.isUnlocked) {
          setWalletNodesAndNFTs(await grapeFinance.getWalletNodesAndNFTs());
        }
      
      } catch (err) {
        console.error(err);
      }
    }
    fetchWalletNodesAndNFTs();
  }, [setWalletNodesAndNFTs, grapeFinance, fastRefresh]);

  return walletNodesAndNFTs;
};

export default useWalletNodesAndNFTs;