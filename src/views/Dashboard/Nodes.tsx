import React from 'react';
import NodeCard from './NodeCard';
import {Bank} from '../../grape-finance';
import useGrapeStats from '../../hooks/useGrapeStats';
import useWallet from 'use-wallet';

interface NodesProps {
  pools: Bank[];
  activesOnly: boolean;
}

const Nodes: React.FC<NodesProps> = ({pools, activesOnly}) => {
  const grapeStats = useGrapeStats();
  const {account} = useWallet();

  return (
    <>
      {pools.map((bank) => (
        <React.Fragment key={bank.name}>
          <NodeCard bank={bank} grapeStats={grapeStats} account={account} activesOnly={activesOnly} />
        </React.Fragment>
      ))}
    </>
  );
};
export default Nodes;
