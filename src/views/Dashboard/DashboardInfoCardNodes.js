import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardContent, Grid} from '@material-ui/core';
import NodeCardContent from '../../components/NodeCardContent';
import useStatsForPool from '../../hooks/useStatsForPool';
import useEarnings from '../../hooks/useEarnings';
import useCompound from '../../hooks/useCompound';
import useNodePrice from '../../hooks/useNodePrice';
import useHarvest from '../../hooks/useHarvest';
import PoolCardHeader from '../../components/PoolCardHeader';
import ReactTooltip from 'react-tooltip';
import rewards from '../../assets/jsons/rewards.json';
import useDailyDrip from '../../hooks/useDailyDrip';
import useNodes from '../../hooks/useNodes';
import {useWallet} from 'use-wallet';
import useUserDetails from '../../hooks/useUserDetails';

const DashboardInfoCardNodes = ({bank}) => {
  const statsOnPool = useStatsForPool(bank);
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const nodePrice = useNodePrice(bank.contract, bank.poolId, bank.sectionInUI);
  const {onReward} = useHarvest(bank);
  const {onCompound} = useCompound(bank);
  const {account} = useWallet();
  const daily = useDailyDrip(bank?.contract, bank?.sectionInUI, account);
  const nodes = useNodes(bank?.contract, bank?.sectionInUI, account);
  const userDetails = useUserDetails(bank?.contract, bank?.sectionInUI, account);

  const computedTotalNodes = useMemo(() => {
    if (nodes && bank.contract === 'GrapeNodeV2') {
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
          <Grid container spacing={1} style={{marginTop: '10px'}}>
            <Grid item className="card-price-item" xs={5}>
              <Button component={Link} to={`/nodes/${bank.contract}`} className="shinyButton" style={{width: '100%'}}>
                View
              </Button>
            </Grid>

            <Grid item className="card-price-item" xs={5}>
              <Button
                disabled={earnings.eq(0)}
                className={earnings.eq(0) ? 'shinyButtonDisabled' : 'shinyButton'}
                onClick={onReward}
                style={{width: '100%'}}
              >
                Claim
              </Button>
            </Grid>
            <Grid item xs={2}>
              <span
                style={{
                  color: 'white',
                  display: 'block',
                  borderRadius: '4px',
                  height: '100%',
                  background: '#e647e6',
                  textAlign: 'center',
                  fontSize: '25px',
                  cursor: 'pointer',
                }}
                data-for={`${rewards[bank.address]}-tooltip`}
                data-tip={rewards[bank.earnTokenName]}
              >
                ?
              </span>
              <ReactTooltip id={`${rewards[bank.address]}-tooltip`} effect="solid" multiline />
            </Grid>
            <Grid item className="card-price-item" xs={12}>
              <Button
                onClick={onCompound}
                disabled={Number(earnings) < Number(nodePrice)}
                className={Number(earnings) < Number(nodePrice) ? 'shinyButtonDisabled' : 'shinyButton'}
                style={{width: '100%'}}
              >
                Compound
              </Button>
            </Grid>

            {/* <Grid item className="card-price-item" xs={12}>
              <span style={{fontSize: '11px'}}>
                If you are not seeing the amount of rewards you expected, please wait until contract refills. Refills
                are automatic and happen multiple times per hour.
              </span>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DashboardInfoCardNodes;
