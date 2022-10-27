import React from 'react';
import {Bank} from '../../grape-finance';
import WinepressCard from './WinepressCard';


interface PressesProps {
  pools: Bank[];
  activesOnly: boolean;
}

const Presses: React.FC<PressesProps> = ({pools, activesOnly}) => {
  return (
    <>
    <WinepressCard bank={pools.find((p) => p.name === 'Winepress')} activesOnly={activesOnly}/>
    </>
  );
};
export default Presses;
