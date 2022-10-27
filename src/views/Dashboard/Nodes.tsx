import React from 'react';
import NodeCard from './NodeCard';
import {Bank} from '../../grape-finance';

interface NodesProps {
  pools: Bank[];
  activesOnly: boolean;
}

const Nodes: React.FC<NodesProps> = ({pools, activesOnly}) => {
  return (
    <>
      {pools
        .map((bank) => (
          <React.Fragment key={bank.name}>
            <NodeCard bank={bank} activesOnly={activesOnly} />
          </React.Fragment>
        ))}
    </>
  );
};
export default Nodes;
