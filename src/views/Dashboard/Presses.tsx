import React from 'react';
import {Bank} from '../../grape-finance';
import WinepressCard from './WinepressCard';
import SodapressCard from './SodapressCard';

interface PressesProps {
  pools: Bank[];
  activesOnly: boolean;
}

const Presses: React.FC<PressesProps> = ({pools, activesOnly}) => {
  return (
    <>
      <WinepressCard bank={pools.find((p) => p.name === 'Winepress')} activesOnly={activesOnly} />
      <SodapressCard bank={pools.find((p) => p.name === 'Sodapress')} activesOnly={activesOnly} />
    </>
  );
};
export default Presses;
