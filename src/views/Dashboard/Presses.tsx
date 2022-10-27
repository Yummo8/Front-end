import React from 'react';
import {Bank} from '../../grape-finance';
import WinepressCard from './WinepressCard';


interface PressesProps {
  pools: Bank[];
}

const Presses: React.FC<PressesProps> = ({pools}) => {
  return (
    <>
      <WinepressCard bank={pools.find((p) => p.name === 'Winepress')} />
    </>
  );
};
export default Presses;
