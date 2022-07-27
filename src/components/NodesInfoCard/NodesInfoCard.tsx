import React from 'react';
import {Button, Card, CardContent, Grid} from '@material-ui/core';
import useStatsForPool from '../../hooks/useStatsForPool';
import {Bank} from '../../grape-finance';
import {Link} from 'react-router-dom';
import PoolCardHeader from '../PoolCardHeader';
import NodeCardContent from '../NodeCardContent';

interface NodesInfoCardProps {
  bank: Bank;
}

const NodesInfoCard: React.FC<NodesInfoCardProps> = ({bank}) => {
  const statsOnPool = useStatsForPool(bank);

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card>
        <CardContent>
          <PoolCardHeader bank={bank} statsOnPool={statsOnPool} />
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
