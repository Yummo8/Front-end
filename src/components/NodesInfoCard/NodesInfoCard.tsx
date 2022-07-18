import React, {useMemo} from 'react';
import {Button, Card, CardContent, Grid, Paper, Typography} from '@material-ui/core';
import TokenSymbol from '../TokenSymbol';
import {getDisplayBalance} from '../../utils/formatBalance';
import useStatsForPool from '../../hooks/useStatsForPool';
import useEarnings from '../../hooks/useEarnings';
import useGrapeStats from '../../hooks/useGrapeStats';
import useShareStats from '../../hooks/useWineStats';
import {Bank} from '../../grape-finance';
import {useGetMultiplierForNode} from '../../utils/constants';
import {Link} from 'react-router-dom';
import {useWallet} from 'use-wallet';
import useNodes from '../../hooks/useNodes';
import useLpStatsBTC from '../../hooks/useLpStatsBTC';

interface NodesInfoCardProps {
  bank: Bank;
}

const NodesInfoCard: React.FC<NodesInfoCardProps> = ({bank}) => {
  const {account} = useWallet();
  const statsOnPool = useStatsForPool(bank);
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const grapeStats = useGrapeStats();
  const tShareStats = useShareStats();
  const grapemimLpStats = useLpStatsBTC('GRAPE-MIM-SW');
  const grapeWLRSLpStats = useLpStatsBTC('GRAPE-WLRS-LP');

  const nodes = useNodes(bank?.contract, bank?.sectionInUI, account);
  const ticketRewards = useGetMultiplierForNode(bank.earnTokenName);

  let tokenStats: any = 0;
  if (bank.earnTokenName === 'WINE') {
    tokenStats = tShareStats;
  } else if (bank.earnTokenName === 'GRAPE') {
    tokenStats = grapeStats;
  } else if (bank.earnTokenName === 'GRAPE-MIM-SW') {
    tokenStats = grapemimLpStats;
  } else if (bank.earnTokenName === 'GRAPE-WLRS-LP') {
    tokenStats = grapeWLRSLpStats;
  }

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
                    <span>Lock your {bank.depositTokenName} to earn daily yields + airdrops</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
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
                  <span className="card-info-text">Daily APR</span>
                </Grid>
                <Grid item>
                  <b className={'card-info-value'}>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</b>
                </Grid>
              </Grid>
            </Grid>
            {Number(nodes[0]) > 0 && (
              <>
                <Grid item>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <span className="card-info-text">Your Nodes / Airdrop Tickets</span>
                    </Grid>
                    <Grid item>
                      <b className={'card-info-value'}>
                        {' '}
                        {nodes[0] ? `${Number(nodes[0])} / ${Number(nodes[0]) * ticketRewards}` : null}
                      </b>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
            {Number(nodes[0]) === 0 && (
              <>
                <Grid item>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <span className="card-info-text">Airdrop Tickets</span>
                    </Grid>
                    <Grid item>
                      <b className={'card-info-value'}>{ticketRewards} per Node</b>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}

            {Number(nodes[0]) > 0 && (
              <>
                <Grid item>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <span className="card-info-text">Earned</span>
                    </Grid>
                    <Grid item>
                      <b className={'card-info-value'}>{`${earnedInToken} ${bank.earnTokenName}`}</b>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <span className="card-info-text">Earned $</span>
                    </Grid>
                    <Grid item>
                      <b className={'card-info-value'}>{`≈$${
                        bank.earnTokenName === 'GRAPE-MIM-SW' || bank.earnTokenName === 'GRAPE-WLRS-LP'
                          ? Number(earnedInDollarsLP).toLocaleString('en-US')
                          : Number(earnedInDollars).toLocaleString('en-US')
                      }`}</b>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
          <Grid container spacing={1}>
            <Grid item className="card-price-item" xs={12} md={12} lg={12}>
              <Button
                component={Link}
                to={`/nodes/${bank.contract}`}
                className="shinyButton"
                style={{width: '100%', marginTop: '17px'}}
              >
                Go To Pool
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NodesInfoCard;
