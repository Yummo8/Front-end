//@ts-nocheck
import React from 'react';
import FarmCard from './FarmCard';
import {Bank} from '../../grape-finance';
import useGrapeStats from '../../hooks/useGrapeStats';
import useShareStats from '../../hooks/useWineStats';
import {Box} from '@material-ui/core';

interface FarmProps {
  pools: Bank[];
  activesOnly: boolean;
}

const Farms: React.FC<FarmProps> = ({pools, activesOnly}) => {
  const grapeStats = useGrapeStats();
  const tShareStats = useShareStats();

  return (
    <>
      <Box style={{color: 'orange'}}>Wine emissions ended. Please unstake your tokens from the Farms.</Box>
      {pools.map((bank) => (
        <React.Fragment key={bank.name}>
          <FarmCard bank={bank} grapeStats={grapeStats} tShareStats={tShareStats} activesOnly={activesOnly} />
        </React.Fragment>
      ))}
    </>
  );
};
export default Farms;
