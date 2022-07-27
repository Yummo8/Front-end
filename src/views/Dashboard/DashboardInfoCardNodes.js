import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardContent, Grid} from '@material-ui/core';
import NodeCardContent from '../../components/NodeCardContent';
import useStatsForPool from '../../hooks/useStatsForPool';
import useEarnings from '../../hooks/useEarnings';
import useCompound from '../../hooks/useCompound';
import useNodePrice from '../../hooks/useNodePrice';
import useHarvest from '../../hooks/useHarvest';
import PoolCardHeader from '../../components/PoolCardHeader';

const DashboardInfoCardNodes = ({bank}) => {
  const statsOnPool = useStatsForPool(bank);
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const nodePrice = useNodePrice(bank.contract, bank.poolId, bank.sectionInUI);
  const {onReward} = useHarvest(bank);
  const {onCompound} = useCompound(bank);

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card>
        <CardContent>
          <PoolCardHeader bank={bank} statsOnPool={statsOnPool} />
          <NodeCardContent bank={bank} statsOnPool={statsOnPool} />
          <Grid container spacing={1} style={{marginTop: '10px'}}>
            <Grid item className="card-price-item" xs={6} md={3} lg={3}>
              <Button component={Link} to={`/nodes/${bank.contract}`} className="shinyButton" style={{width: '100%'}}>
                View
              </Button>
            </Grid>

            <Grid item className="card-price-item" xs={6} md={3} lg={3}>
              <Button
                disabled={earnings.eq(0)}
                className={earnings.eq(0) ? 'shinyButtonDisabled' : 'shinyButton'}
                onClick={onReward}
                style={{width: '100%'}}
              >
                Claim
              </Button>
            </Grid>
            <Grid item className="card-price-item" xs={12} md={6} lg={6}>
              <Button
                onClick={onCompound}
                disabled={Number(earnings) < Number(nodePrice)}
                className={Number(earnings) < Number(nodePrice) ? 'shinyButtonDisabled' : 'shinyButton'}
                style={{width: '100%'}}
              >
                Compound
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DashboardInfoCardNodes;
