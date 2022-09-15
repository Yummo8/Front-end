import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useRefresh from './useRefresh';

const useGrapeNodeClaimFee = () => {
  const [fee, setFee] = useState<Number>();
  const {fastRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchClaimFee() {
      try {
        setFee(await grapeFinance.getGrapeNodeClaimFee());
      } catch (err) {
        console.error(err);
      }
    }
    fetchClaimFee();
  }, [setFee, grapeFinance, fastRefresh]);

  return fee;
};

export default useGrapeNodeClaimFee;
