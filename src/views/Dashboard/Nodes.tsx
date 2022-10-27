import React from 'react';
import NodeCard from './NodeCard';
import {Bank} from '../../grape-finance';

interface NodesProps {
  pools: Bank[];
}

const Nodes: React.FC<NodesProps> = ({pools}) => {
  return (
    <>
      {pools
        .map((bank) => (
          <React.Fragment key={bank.name}>
            <NodeCard bank={bank} />
          </React.Fragment>
        ))}
    </>
  );
};
export default Nodes;
