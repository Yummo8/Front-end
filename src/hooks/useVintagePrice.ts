import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useRefresh from './useRefresh';

const useVintagePrice = () => {
  const [price, setPrice] = useState<number>();
  const {slowRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchVintagePrice() {
      try {
        setPrice(await grapeFinance.getVintagePrice());
      } catch (err) {
        console.error(err);
      }
    }
    fetchVintagePrice();
  }, [setPrice, grapeFinance, slowRefresh]);

  return price;
};

export default useVintagePrice;
