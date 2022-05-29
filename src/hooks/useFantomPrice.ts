import axios from 'axios';
import { useState, useEffect } from 'react';

const useFantomPrice = () => {
    const [price, setPrice] = useState(0);
    const [marketCap, setMarketCap] = useState(0);
    const [priceChange, setPriceChange] = useState(0);

    useEffect(() => {
        getPrice()
        const interval = setInterval(() => {
            getPrice()
        }, 10000)
        return () => {
            clearInterval(interval);
        }
    }, [])
    return { price, marketCap, priceChange };
    
    async function getPrice() {
        const { data } = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=fantom');
        setPrice(1);
        setMarketCap(data[0].market_cap);
        setPriceChange(data[0].price_change_percentage_24h);
    }
}
export default useFantomPrice;