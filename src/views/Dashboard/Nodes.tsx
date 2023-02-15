//@ts-nocheck
import React from 'react';
// import NodeCard from './NodeCard';
import {Bank} from '../../grape-finance';
// import useGrapeStats from '../../hooks/useGrapeStats';
// import useWallet from 'use-wallet';
import {ReactComponent as IconDiscord} from '../../assets/img/discord-plain.svg';
import {Box} from '@material-ui/core';

interface NodesProps {
  pools: Bank[];
  activesOnly: boolean;
}

const Nodes: React.FC<NodesProps> = ({pools, activesOnly}) => {
  // const grapeStats = useGrapeStats();
  // const {account} = useWallet();

  return (
    <>
      <p>
        <Box style={{color: 'orange'}}>
          Nodes were migrated into Presses. You can learn more about this on{' '}
          <a style={{color: 'orange'}} href="https://discord.gg/grapefinance" rel="noopener noreferrer" target="_blank">
            discord.
          </a>
        </Box>
        :{' '}
      </p>
      {/* {pools.map((bank) => (
        <React.Fragment key={bank.name}>
          <NodeCard bank={bank} grapeStats={grapeStats} account={account} activesOnly={activesOnly} />
        </React.Fragment>
      ))} */}
    </>
  );
};
export default Nodes;
