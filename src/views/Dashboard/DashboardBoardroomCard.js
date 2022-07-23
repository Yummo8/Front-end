import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardContent, Paper, Typography, Grid} from '@material-ui/core';

import TokenSymbol from '../../components/TokenSymbol';

import {getDisplayBalance} from '../../utils/formatBalance';

import useGrapeStats from '../../hooks/useGrapeStats';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import useFetchBoardroomAPR from '../../hooks/useFetchBoardroomAPR';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import useEarningsOnBoardroom from '../../hooks/useEarningsOnBoardroom';
import useHarvestFromBoardroom from '../../hooks/useHarvestFromBoardroom';
import useClaimRewardCheck from '../../hooks/boardroom/useClaimRewardCheck';
import useStakedBalanceOnBoardroom from '../../hooks/useStakedBalanceOnBoardroom';

const DashboardBoardroomCard = () => {
  const {onReward} = useHarvestFromBoardroom();
  const earnings = useEarningsOnBoardroom();
  const canClaimReward = useClaimRewardCheck();
  const grapeStats = useGrapeStats();
  const tokenPriceInDollars = useMemo(
    () => (grapeStats ? Number(grapeStats.priceInDollars).toFixed(2) : null),
    [grapeStats],
  );
  const earnedInToken = Number(getDisplayBalance(earnings));
  const earnedInDollars = (Number(tokenPriceInDollars) * earnedInToken).toFixed(2);

  const boardroomAPR = useFetchBoardroomAPR();
  const totalStaked = useTotalStakedOnBoardroom();
  const stake = Number(getDisplayBalance(totalStaked)).toFixed(0);
  const grapeFinance = useGrapeFinance();
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('WINE', grapeFinance.WINE);
  const tvl = stake * stakedTokenPriceInDollars;

  const stakedBalance = useStakedBalanceOnBoardroom();
  const stakedInToken = Number(getDisplayBalance(stakedBalance));
  const stakedInDollars = (Number(stakedTokenPriceInDollars) * stakedInToken).toFixed(2);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardContent>
          <Grid container style={{position: 'relative'}} spacing={1}>
            <Grid item xs={3} sm={2} md={3} lg={3}>
              <TokenSymbol symbol="WINE" height={70} width={70} />
            </Grid>
            <Grid item xs={9} sm={10} md={9} lg={9}>
              <Grid container direction="column">
                <Grid item>
                  <Typography color="textPrimary" variant="h5">
                    WINE
                  </Typography>
                  <Typography color="textSecondary">
                    <span>Earn GRAPE</span>
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container alignItems="baseline" justifyContent="space-between">
                    <Grid item>
                      <span className="card-info-text">APR</span>
                    </Grid>
                    <Grid item>
                      <span className="info-card-price">{boardroomAPR.toFixed(0)}%</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems="baseline" justifyContent="space-between">
                    <Grid item>
                      <span className="card-info-text">Daily</span>
                    </Grid>
                    <Grid item>
                      <span className="info-card-price">{(boardroomAPR / 365).toFixed(2)}%</span>
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
                  <span className="card-info-text">TVL</span>
                </Grid>
                <Grid item>
                  <b className={'card-info-value'}>
                    {' '}
                    ${tvl ? Number(Number(tvl).toFixed(0)).toLocaleString('en-US') : '-.--'}
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
                  >{`${stakedInToken} WINE`}</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <span className="card-info-text">Value $</span>
                </Grid>
                <Grid item>
                  <b className={stakedInToken > 0 ? 'card-info-value' : 'card-info-value grey-text'}>
                    ≈${Number(stakedInDollars).toLocaleString('en-US')}
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
                    className={stakedInToken > 0 ? 'card-info-value' : 'card-info-value grey-text'}
                  >{`${earnedInToken} GRAPE`}</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <span className="card-info-text">Earned $</span>
                </Grid>
                <Grid item>
                  <b className={stakedInToken > 0 ? 'card-info-value' : 'card-info-value grey-text'}>
                    ≈${Number(earnedInDollars).toLocaleString('en-US')}
                  </b>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item className="card-price-item" xs={6} md={6} lg={6}>
              <Button
                component={Link}
                to={`/winery`}
                className="shinyButton"
                style={{width: '100%', marginTop: '17px'}}
              >
                View
              </Button>
            </Grid>
            <Grid item className="card-price-item" xs={6} md={6} lg={6}>
              <Button
                className={earnings.eq(0) || !canClaimReward ? 'shinyButtonDisabled' : 'shinyButton'}
                disabled={earnings.eq(0) || !canClaimReward}
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

export default DashboardBoardroomCard;
