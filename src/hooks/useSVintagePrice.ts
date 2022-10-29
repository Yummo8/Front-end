import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useRefresh from './useRefresh';

const useSVintagePrice = () => {
  const [price, setPrice] = useState<number>();
  const {slowRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchSVintagePrice() {
      try {
        setPrice(await grapeFinance.getSVintagePrice());
      } catch (err) {
        console.error(err);
      }
    }
    fetchSVintagePrice();
  }, [setPrice, grapeFinance, slowRefresh]);

  return price;
};

export default useSVintagePrice;
