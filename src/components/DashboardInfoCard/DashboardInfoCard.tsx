import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardContent, Grid, Paper, Typography} from '@material-ui/core';
import TokenSymbol from '../TokenSymbol';
import {getDisplayBalance} from '../../utils/formatBalance';
import useStatsForPool from '../../hooks/useStatsForPool';
import useEarnings from '../../hooks/useEarnings';
import useHarvest from '../../hooks/useHarvest';
import useStakedBalance from '../../hooks/useStakedBalance';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import useGrapeStats from '../../hooks/useGrapeStats';
import useShareStats from '../../hooks/useWineStats';
import {Bank} from '../../grape-finance';
import PoolCardHeader from '../PoolCardHeader';

interface DashboardInfoCardProps {
  bank: Bank;
}

const DashboardInfoCard: React.FC<DashboardInfoCardProps> = ({bank}) => {
  const statsOnPool = useStatsForPool(bank);
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const {onReward} = useHarvest(bank);
  const grapeStats = useGrapeStats();
  const tShareStats = useShareStats();
  const tokenStats = bank.earnTokenName === 'WINE' ? tShareStats : grapeStats;

  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInToken = Number(getDisplayBalance(earnings));
  const earnedInDollars = (Number(tokenPriceInDollars) * earnedInToken).toFixed(2);

  const stakedBalance = useStakedBalance(bank.contract, bank.poolId);
  const stakedInToken = Number(getDisplayBalance(stakedBalance, bank.depositToken.decimal));
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);
  const stakedInDollars = (Number(stakedTokenPriceInDollars) * stakedInToken).toFixed(2);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardContent>
          <PoolCardHeader bank={bank} statsOnPool={statsOnPool} stakedInToken={stakedInToken} showAPRCalc />
          <Paper style={{marginTop: '10px', marginBottom: '10px', height: '3px'}}></Paper>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <span className="card-info-text">TVL</span>
                </Grid>
                <Grid item>
                  <b className={'card-info-value'}>
                    ${statsOnPool?.TVL ? Number(Number(statsOnPool?.TVL).toFixed(0)).toLocaleString('en-US') : '-.--'}
                  </b>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <span className="card-info-text">Staked</span>
                </Grid>
                <Grid item>
                  <b
                    className={stakedInToken > 0 ? 'card-info-value' : 'card-info-value grey-text'}
                  >{`${stakedInToken} ${bank.depositTokenName}`}</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <span className="card-info-text">Value $</span>
                </Grid>
                <Grid item>
                  <b className={stakedInToken > 0 ? 'card-info-value' : 'card-info-value grey-text'}>{`≈$${Number(
                    stakedInDollars,
                  ).toLocaleString('en-US')}`}</b>
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
                    className={stakedInToken > 0 ? 'card-info-value' : 'card-info-value grey-text'}
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
                  <b className={stakedInToken > 0 ? 'card-info-value' : 'card-info-value grey-text'}>{`≈$${Number(
                    earnedInDollars,
                  ).toLocaleString('en-US')}`}</b>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item className="card-price-item" xs={6} md={6} lg={6}>
              <Button
                component={Link}
                to={`/vineyard/${bank.contract}`}
                className="shinyButton"
                style={{width: '100%', marginTop: '17px'}}
              >
                View
              </Button>
            </Grid>
            <Grid item className="card-price-item" xs={6} md={6} lg={6}>
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

export default DashboardInfoCard;
