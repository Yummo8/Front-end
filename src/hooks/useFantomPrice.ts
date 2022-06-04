
import { useState, useEffect } from 'react';

const useFantomPrice = () => {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        getPrice()
        const interval = setInterval(() => {
            getPrice()
        }, 10000)
        return () => {
            clearInterval(interval);
        }
    }, [])
    return { price };
    
    async function getPrice() {
        setPrice(1);
    }
}
export default useFantomPrice;