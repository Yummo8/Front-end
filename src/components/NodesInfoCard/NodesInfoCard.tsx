import React, { useEffect, useMemo } from 'react';
import {Button, Card, CardContent, Grid} from '@material-ui/core';
import useStatsForPool from '../../hooks/useStatsForPool';
import {Bank} from '../../grape-finance';
import {Link} from 'react-router-dom';
import PoolCardHeader from '../PoolCardHeader';
import NodeCardContent from '../NodeCardContent';
import useDailyDrip from '../../hooks/useDailyDrip';
import useNodes from '../../hooks/useNodes';
import {useWallet} from 'use-wallet';
import useUserDetails from '../../hooks/useUserDetails';

interface NodesInfoCardProps {
  bank: Bank;
}

const NodesInfoCard: React.FC<NodesInfoCardProps> = ({bank}) => {
  const statsOnPool = useStatsForPool(bank);
  const {account} = useWallet();
  const daily = useDailyDrip(bank?.contract, bank?.sectionInUI, account);
  const nodes = useNodes(bank?.contract, bank?.sectionInUI, account);
  const userDetails = useUserDetails(bank?.contract, bank?.sectionInUI, account);

  const computedTotalNodes = useMemo(() => {
    if (nodes && bank.contract === "GrapeNodeV2") {
      let nodeTotal;
      try {
        nodeTotal = Number(nodes[0]);
      } catch (e) {}
      if (!nodeTotal) {
        nodeTotal = Number(nodes);
      }
      return nodeTotal;
    }
  }, [nodes]);


  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card>
        <CardContent>
          <PoolCardHeader bank={bank} statsOnPool={statsOnPool} nodeDaily={daily} nodeCount={computedTotalNodes} userDetails={userDetails}/>
          <NodeCardContent bank={bank} statsOnPool={statsOnPool} />
          <Grid container spacing={1}>
            <Grid item className="card-price-item" xs={12} md={12} lg={12}>
              <Button
                component={Link}
                to={`/nodes/${bank.contract}`}
                className="shinyButton"
                style={{width: '100%', marginTop: '10px'}}
              >
                View
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NodesInfoCard;
