import React, {useMemo} from 'react';
import {useWallet} from 'use-wallet';
import moment from 'moment';
import styled from 'styled-components';
import Spacer from '../../components/Spacer';
import Harvest from './components/Harvest';
import Stake from './components/Stake';
import {makeStyles} from '@material-ui/core/styles';

import {Box, Card, CardContent, Button, Typography, Grid} from '@material-ui/core';

import {Alert} from '@material-ui/lab';

import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import useRedeemOnBoardroom from '../../hooks/useRedeemOnBoardroom';
import useStakedBalanceOnBoardroom from '../../hooks/useStakedBalanceOnBoardroom';
import {getDisplayBalance} from '../../utils/formatBalance';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useFetchBoardroomAPR from '../../hooks/useFetchBoardroomAPR';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import useCashPriceInEstimatedTWAP from '../../hooks/useCashPriceInEstimatedTWAP';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import useClaimRewardCheck from '../../hooks/boardroom/useClaimRewardCheck';
import useWithdrawCheck from '../../hooks/boardroom/useWithdrawCheck';
import ProgressCountdown from './components/ProgressCountdown';
import {createGlobalStyle} from 'styled-components';
import LaunchCountdown from '../../components/LaunchCountdown';
import HomeImage from '../../assets/img/background.jpg';
import usebShareStats from '../../hooks/useWineStats';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

const Boardroom = () => {
  const grapeFinance = useGrapeFinance();
  const classes = useStyles();
  const {account} = useWallet();
  const {onRedeem} = useRedeemOnBoardroom();
  const stakedBalance = useStakedBalanceOnBoardroom();
  const currentEpoch = useCurrentEpoch();
  const cashStat = useCashPriceInEstimatedTWAP();
  const totalStaked = useTotalStakedOnBoardroom();
  const boardroomAPR = useFetchBoardroomAPR();
  const canClaimReward = useClaimRewardCheck();
  const canWithdraw = useWithdrawCheck();
  const bShareStats = usebShareStats();
  const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(2) : null), [cashStat]);
  const {to} = useTreasuryAllocationTimes();

  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('WINE', grapeFinance.WINE);
  const tokenPriceInDollars = useMemo(
    () =>
      stakedTokenPriceInDollars
        ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString()
        : null,
    [stakedTokenPriceInDollars, stakedBalance],
  );
  const rewards = ((boardroomAPR.toFixed(2)/365)/100)*tokenPriceInDollars;

  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? bShareStats.circulatingSupply : null),
    [bShareStats],
  );
    const percentageStaked = ((totalStaked/bShareCirculatingSupply)/10000000000000000).toFixed(2);
    const stake = Number(getDisplayBalance(totalStaked)).toFixed(0);
    const tvl = stake*stakedTokenPriceInDollars;


  return (
    <Page>
      
      <BackgroundImage />
      

      {!!account ? (
        <>
 
            <h2 style={{ fontSize: '80px', textAlign:'center' }}>Winery</h2>

           <Alert variant="filled" severity="info" >               
   The winery does not print Grape when below 1.01 TWAP, staking here below 1.01 TWAP will not generate rewards. Staked WINE can only be withdrawn every 4 epochs (24hrs) & rewards claimed every 2 epochs (12hrs). Staking or claiming resets this timer. <a target={"_blank"} href='https://yieldwolf.finance/avalanche/grape-boardroom/99'>Auto compound your Wine at Yield Wolf Here</a>
      </Alert> 
          <Box mt={5}>

            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent style={{textAlign: 'center'}}>
                    <Typography style={{textTransform: 'uppercase', color: '#930993'}}>Next Epoch</Typography>
                    <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography style={{textTransform: 'uppercase', color: '#930993'}}>Epoch / TWAP</Typography>
                    <Typography>{Number(currentEpoch)} / {scalingFactor} MIM</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography style={{textTransform: 'uppercase', color: '#930993'}}>APR / Daily</Typography>
                    <Typography>{boardroomAPR.toFixed(0)}% / {(boardroomAPR/365).toFixed(2)}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography style={{textTransform: 'uppercase', color: '#930993'}}>Staked / %</Typography>
                    <Typography>{stake} / {percentageStaked}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography style={{textTransform: 'uppercase', color: '#930993'}}>TVL</Typography>
                    <Typography>${tvl.toFixed(2)}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={2} lg={2}>
                <Card className={classes.gridItem}>
                  <CardContent align="center">
                    <Typography style={{textTransform: 'uppercase', color: '#930993'}}>Est Reward/Day</Typography>
                    <Typography>~${rewards.toFixed(2)}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            

            <Box mt={4}>
              <StyledBoardroom>
                <StyledCardsWrapper>
                  <StyledCardWrapper>
                    <Harvest />
                  </StyledCardWrapper>
                  <Spacer />
                  <StyledCardWrapper>
                    <Stake />
                  </StyledCardWrapper>
                </StyledCardsWrapper>
              </StyledBoardroom>
            </Box>

            {/* <Grid container justify="center" spacing={3}>
            <Grid item xs={4}>
              <Card>
                <CardContent align="center">
                  <Typography>Rewards</Typography>

                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                  <Button color="primary" variant="outlined">Claim Reward</Button>
                </CardActions>
                <CardContent align="center">
                  <Typography>Claim Countdown</Typography>
                  <Typography>00:00:00</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent align="center">
                  <Typography>Stakings</Typography>
                  <Typography>{getDisplayBalance(stakedBalance)}</Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                  <Button>+</Button>
                  <Button>-</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid> */}
          </Box>

          <Box mt={5}>
            <Grid container justify="center" spacing={3} mt={10}>
              <Button
                disabled={stakedBalance.eq(0) || (!canWithdraw && !canClaimReward)}
                onClick={onRedeem}
                className={
                  stakedBalance.eq(0) || (!canWithdraw && !canClaimReward)
                    ? 'shinyButtonDisabledSecondary'
                    : 'shinyButtonSecondary'
                }
              >
                Claim &amp; Withdraw
              </Button>
            </Grid>
          </Box>
        </>
      ) : (
        <UnlockWallet />
      )}
    </Page>
  );
};

const StyledBoardroom = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default Boardroom;
