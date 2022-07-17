import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, Paper, CardContent, Typography, Grid} from '@material-ui/core';
import {useWallet} from 'use-wallet';
import TokenSymbol from '../../components/TokenSymbol';

import {getDisplayBalance} from '../../utils/formatBalance';

import useStatsForPool from '../../hooks/useStatsForPool';
import useEarnings from '../../hooks/useEarnings';
import useCompound from '../../hooks/useCompound';
import useNodePrice from '../../hooks/useNodePrice';
import useHarvest from '../../hooks/useHarvest';
import useGrapeStats from '../../hooks/useGrapeStats';
import useShareStats from '../../hooks/useWineStats';
import useNodes from '../../hooks/useNodes';
import useLpStatsBTC from '../../hooks/useLpStatsBTC';
import {GRAPE_NODE_MULTIPLIER, WINE_NODE_MULTIPLIER, GRAPEMIMSW_NODE_MULTIPLIER} from '../../utils/constants';

const DashboardInfoCardNodes = ({bank}) => {
  const {account} = useWallet();
  const statsOnPool = useStatsForPool(bank);
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const nodePrice = useNodePrice(bank.contract, bank.poolId, bank.sectionInUI);
  const {onReward} = useHarvest(bank);
  const {onCompound} = useCompound(bank);
  const grapeStats = useGrapeStats();
  const tShareStats = useShareStats();
  const grapemimLpStats = useLpStatsBTC('GRAPE-MIM-SW');
  const grapeWLRSLpStats = useLpStatsBTC('GRAPE-WLRS-LP');

  const nodes = useNodes(bank?.contract, bank?.sectionInUI, account);

  let tokenStats = 0;
  if (bank.earnTokenName === 'WINE') {
    tokenStats = tShareStats;
  } else if (bank.earnTokenName === 'GRAPE') {
    tokenStats = grapeStats;
  } else if (bank.earnTokenName === 'GRAPE-MIM-SW') {
    tokenStats = grapemimLpStats;
  } else if (bank.earnTokenName === 'GRAPE-WLRS-LP') {
    tokenStats = grapeWLRSLpStats;
  }

  const getMultiplierForNode = () => {
    if (bank.earnTokenName === 'WINE') {
      return WINE_NODE_MULTIPLIER;
    } else if (bank.earnTokenName === 'GRAPE') {
      return GRAPE_NODE_MULTIPLIER;
    } else if (bank.earnTokenName === 'GRAPE-MIM-SW') {
      return GRAPEMIMSW_NODE_MULTIPLIER;
    }
    return 1;
  };

  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const tokenPriceInDollarsLP = useMemo(
    () => (tokenStats ? Number(tokenStats.priceOfOne).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInToken = Number(getDisplayBalance(earnings));
  const earnedInDollars = (Number(tokenPriceInDollars) * earnedInToken).toFixed(2);
  const earnedInDollarsLP = (Number(tokenPriceInDollarsLP) * Number(getDisplayBalance(earnings))).toFixed(2);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardContent>
          <Grid container style={{position: 'relative'}} spacing={1}>
            <Grid item xs={3} sm={2} md={3} lg={3}>
              <TokenSymbol symbol={bank.depositTokenName} height={70} width={70} />
            </Grid>
            <Grid item xs={9} sm={10} md={9} lg={9}>
              <Grid container direction="column">
                <Grid item>
                  <Typography color="textPrimary" variant="h5">
                    {bank.depositTokenName}
                  </Typography>
                  <Typography color="textSecondary">
                    {bank.closedForStaking ? (
                      <span>Pool Ended Please unstake</span>
                    ) : (
                      <span>Earn {bank.earnTokenName}</span>
                    )}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container alignItems="baseline" justifyContent="space-between">
                    <Grid item>
                      <span className="card-info-text">APR</span>
                    </Grid>
                    <Grid item>
                      <span className="info-card-price">
                        {bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems="baseline" justifyContent="space-between">
                    <Grid item>
                      <span className="card-info-text">TVL</span>
                    </Grid>
                    <Grid item>
                      <span className="info-card-price">
                        $
                        {statsOnPool?.TVL
                          ? Number(Number(statsOnPool?.TVL).toFixed(0)).toLocaleString('en-US')
                          : '-.--'}
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Paper style={{marginTop: '10px', marginBottom: '10px', height: '3px'}}></Paper>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <span className="card-info-text">Your Nodes / Airdrop Tickets</span>
                </Grid>
                <Grid item>
                  <b className={Number(nodes[0]) > 0 ? 'card-info-value' : 'card-info-value grey-text'}>
                    {nodes[0] ? Number(nodes[0]) : null} / {Number(nodes[0] * getMultiplierForNode())}
                  </b>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <span className="card-info-text">Airdrop Tickets</span>
                </Grid>
                <Grid item>
                  <b className={Number(nodes[0]) > 0 ? 'card-info-value' : 'card-info-value grey-text'}>
                    {' '}
                    {nodes[0] ? Number(nodes[0] * getMultiplierForNode()) : null}
                  </b>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <span className="card-info-text">Earned</span>
                </Grid>
                <Grid item>
                  <b
                    className={Number(nodes[0]) > 0 ? 'card-info-value' : 'card-info-value grey-text'}
                  >{`${earnedInToken} ${bank.earnTokenName}`}</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <span className="card-info-text">Earned $</span>
                </Grid>
                <Grid item>
                  <b className={Number(nodes[0]) > 0 ? 'card-info-value' : 'card-info-value grey-text'}>{`≈$${
                    bank.earnTokenName === 'GRAPE-MIM-SW' || bank.earnTokenName === 'GRAPE-WLRS-LP'
                      ? Number(earnedInDollarsLP).toLocaleString('en-US')
                      : Number(earnedInDollars).toLocaleString('en-US')
                  }`}</b>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item className="card-price-item" xs={12} md={4} lg={4}>
              <Button
                component={Link}
                to={`/nodes/${bank.contract}`}
                className="shinyButton"
                style={{width: '100%', marginTop: '17px'}}
              >
                View
              </Button>
            </Grid>
            <Grid item className="card-price-item" xs={12} md={4} lg={4}>
              <Button
                onClick={onCompound}
                disabled={Number(earnings) < Number(nodePrice)}
                className={Number(earnings) < Number(nodePrice) ? 'shinyButtonDisabled' : 'shinyButton'}
                style={{width: '100%', marginTop: '17px'}}
              >
                Compound
              </Button>
            </Grid>
            <Grid item className="card-price-item" xs={12} md={4} lg={4}>
              <Button
                disabled={earnings.eq(0)}
                className={earnings.eq(0) ? 'shinyButtonDisabled' : 'shinyButton'}
                onClick={onReward}
                style={{width: '100%', marginTop: '17px'}}
              >
                Claim
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DashboardInfoCardNodes;
