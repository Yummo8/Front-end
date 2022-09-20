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
import HomeImage from '../../assets/img/background.jpg';
import usebShareStats from '../../hooks/useWineStats';
import useBondStats from '../../hooks/useBondStats';
import {roundAndFormatNumber} from '../../0x';
import useGetBoardroomPrintRate from '../../hooks/useGetBoardroomPrintRate';

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
  const printRate = useGetBoardroomPrintRate();
  const cashStat = useCashPriceInEstimatedTWAP();
  const totalStaked = useTotalStakedOnBoardroom();
  const boardroomAPR = useFetchBoardroomAPR();
  const canClaimReward = useClaimRewardCheck();
  const canWithdraw = useWithdrawCheck();
  const bShareStats = usebShareStats();
  const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(3) : null), [cashStat]);
  const {to} = useTreasuryAllocationTimes();
  const bondStat = useBondStats();

  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('WINE', grapeFinance.WINE);
  const tokenPriceInDollars = useMemo(
    () =>
      stakedTokenPriceInDollars
        ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString()
        : null,
    [stakedTokenPriceInDollars, stakedBalance],
  );
  const rewards = (boardroomAPR.toFixed(2) / 365 / 100) * tokenPriceInDollars;

  const bShareCirculatingSupply = useMemo(() => (bShareStats ? bShareStats.circulatingSupply : null), [bShareStats]);
  const percentageStaked = (totalStaked / bShareCirculatingSupply / 1e16).toFixed(2);
  const stake = Number(getDisplayBalance(totalStaked)).toFixed(0);
  const tvl = stake * stakedTokenPriceInDollars;

  const grapeReserves = useMemo(() => (Number(bondStat?.treasuryGrapes) / 1e18).toFixed(0), [bondStat]);
  const bondSupply = useMemo(() => bondStat?.circulatingSupply, [bondStat]);

  return (
    <Page>
      {!!account ? (
        <>
          <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
            Winery (Boardroom)
          </Typography>
          <Typography color="textPrimary" align="center" variant="h6" gutterBottom style={{marginBottom: '40px'}}>
            Stake your WINE to earn GRAPE when the TWAP is at least 1.01
          </Typography>

          {bondStat && bondSupply - grapeReserves > 0 && (
            <Box mt={2}>
              <Grid item justify="center">
                <Alert variant="outlined" severity="warning">
                  <div>
                    Winery APR is temporarily reduced during the debt phase. Debt is paid by the Winery when an Epoch ends
                    above 1.01 TWAP. Once the GRAPE reserves are higher than the GBOND supply, the debt phase ends and the normal APR
                    resumes.
                  </div>
                  <b>Grape Reserves:</b>{' '}
                  {bondStat?.treasuryGrapes ? roundAndFormatNumber(Number(grapeReserves), 0) : '-'} {'  |  '}
                  <b>Bond supply:</b> {bondStat?.circulatingSupply ? roundAndFormatNumber(Number(bondSupply), 0) : '-'}{' '}
                  {'  |  '}
                  <b>Debt to be paid by Winery:</b>{' '}
                  {bondStat?.circulatingSupply
                    ? roundAndFormatNumber(Number(bondSupply) - Number(grapeReserves), 0)
                    : '-'}
                  <br />
                </Alert>
              </Grid>
            </Box>
          )}

          <Box mt={2}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={6} sm={6} md={2}>
                <Card>
                  <CardContent style={{textAlign: 'center'}}>
                    <Typography style={{color: '#ccf'}}>Next Epoch</Typography>
                    <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <Card>
                  <CardContent>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography style={{color: '#ccf'}}>EPOCH</Typography>
                      </Grid>
                      <Grid item>{Number(currentEpoch)}</Grid>
                    </Grid>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography style={{color: '#ccf'}}>TWAP</Typography>
                      </Grid>
                      <Grid item>{scalingFactor} MIM</Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={6} md={2}>
                <Card>
                  <CardContent>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography style={{color: '#ccf'}}>APR</Typography>
                      </Grid>
                      <Grid item> {boardroomAPR.toFixed(0)}%</Grid>
                    </Grid>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography style={{color: '#ccf'}}>Daily</Typography>
                      </Grid>
                      <Grid item>{(boardroomAPR / 365).toFixed(2)}%</Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={6} md={2}>
                <Card>
                  <CardContent>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography style={{color: '#ccf'}}>Staked</Typography>
                      </Grid>
                      <Grid item>{stake}</Grid>
                    </Grid>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography style={{color: '#ccf'}}>%</Typography>
                      </Grid>
                      <Grid item>{percentageStaked}%</Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={6} md={2}>
                <Card>
                  <CardContent style={{textAlign: 'center'}}>
                    <Typography style={{color: '#ccf'}}>TVL</Typography>
                    <Typography>${tvl ? Number(Number(tvl).toFixed(0)).toLocaleString('en-US') : '-.--'}</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={6} md={2}>
                <Card>
                  <CardContent style={{textAlign: 'center'}}>
                    <Typography style={{color: '#ccf'}}>Est Reward /day</Typography>
                    <Typography>~${rewards ? Number(rewards).toLocaleString('en-US') : '0.00'}</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={6} md={2}>
                <Card>
                  <CardContent style={{textAlign: 'center'}}>
                    <Typography style={{color: '#ccf'}}>EPOCHS Above Peg</Typography>
                    <Typography>{printRate.toFixed(2)}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Box mt={6}>
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
          </Box>

          <Box mt={5}>
            <Grid container justify="center" spacing={3} mt={10}>
              <Button
                disabled={stakedBalance.eq(0) || (!canWithdraw && !canClaimReward)}
                onClick={onRedeem}
                className={
                  stakedBalance.eq(0) || (!canWithdraw && !canClaimReward)
                    ? 'shinyButtonDisabledSecondary'
                    : 'shinyButton'
                }
              >
                Claim &amp; Withdraw
              </Button>
            </Grid>
          </Box>

          <Box mt={3}>
            <Alert variant="filled" severity="info">
              The Winery does not print GRAPE when below 1.01 TWAP. Staking here below 1.01 TWAP will not generate
              rewards. Staked WINE can only be withdrawn every 4 Epochs (24hrs) & rewards claimed every 2 Epochs
              (12hrs). Staking or claiming resets this timer.
            </Alert>
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
