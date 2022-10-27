import React from 'react';
import FarmCard from './FarmCard';
import {Bank} from '../../grape-finance';

interface FarmProps {
  pools: Bank[];
  activesOnly: boolean;
}

const Farms: React.FC<FarmProps> = ({pools, activesOnly}) => {
  return (
    <>
      {pools.map((bank) => (
        <React.Fragment key={bank.name}>
          <FarmCard bank={bank} activesOnly={activesOnly} />
        </React.Fragment>
      ))}
    </>
  );
};
export default Farms;
