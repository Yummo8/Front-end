import React from 'react';
import {Button, Card, CardContent, Grid} from '@material-ui/core';
import useStatsForPool from '../../hooks/useStatsForPool';
import {Bank} from '../../grape-finance';
import {Link} from 'react-router-dom';
import PoolCardHeader from '../PoolCardHeader';
import NodeCardContent from '../NodeCardContent';
import PoolCardFooter from '../PoolCardFooter';

interface NodesInfoCardProps {
  bank: Bank;
}

const NodesInfoCard: React.FC<NodesInfoCardProps> = ({bank}) => {
  const statsOnPool = useStatsForPool(bank);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardContent>
          <PoolCardHeader bank={bank} statsOnPool={statsOnPool} />
          <NodeCardContent bank={bank} statsOnPool={statsOnPool} />
          <PoolCardFooter actions={['View']} links={[`/nodes/${bank.contract}`]} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NodesInfoCard;
