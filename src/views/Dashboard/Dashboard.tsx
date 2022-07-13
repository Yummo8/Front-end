import React, {useMemo} from 'react';
import {useWallet} from 'use-wallet';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import moment from 'moment';
import Label from '../../components/Label';
import {Box, Grid, Button, Typography, Card, CircularProgress} from '@material-ui/core';
import ProgressCountdown from './ProgressCountdown';
import UnlockWallet from '../../components/UnlockWallet';
import TokenSymbol from '../../components/TokenSymbol';
import Page from '../../components/Page';
import FarmCard from './FarmCard';
import GrapeNodeCard from './GrapeNodeCard';
import BoardroomCard from './BoardroomCard';
import HomeImage from '../../assets/img/background.jpg';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import useBanks from '../../hooks/useBanks';
import useBank from '../../hooks/useBank';
import useHarvestAll from '../../hooks/useHarvestAll';
import useCompoundAll from '../../hooks/useCompoundAll';
import useGrapeStats from '../../hooks/useGrapeStats';
import useWineStats from '../../hooks/useWineStats';
import useWalletStats from '../../hooks/useWalletStats';
import CountUp from 'react-countup';
import {useMediaQuery} from '@material-ui/core';
import useTokenBalance from '../../hooks/useTokenBalance';
import {getDisplayBalance} from '../../utils/formatBalance';
import useGrapeFinance from '../../hooks/useGrapeFinance';

const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%);
  }
`;

const Dashboard = () => {
  const {account} = useWallet();
  const grapeFinance = useGrapeFinance();

  const {to} = useTreasuryAllocationTimes();
  const [banks] = useBanks();
  const walletStats = useWalletStats(banks);
  const grapeStats = useGrapeStats();
  const wineStats = useWineStats();
  const vineyardPools = banks.filter(
    (bank) => (!bank.finished && bank.sectionInUI === 2) || bank.sectionInUI === 6 || bank.sectionInUI === 7,
  );
  const nodePools = [useBank('GrapeNode'), useBank('LPNode'), useBank('WineNode'), useBank('LPWlrsNode')];
  const onReward = useHarvestAll(vineyardPools);
  const harvestNodes = useHarvestAll(nodePools);
  const compoundNodes = useCompoundAll(nodePools);
  const matches = useMediaQuery('(min-width:900px)');

  const grapeBalance = useTokenBalance(grapeFinance.GRAPE);
  const displayGrapeBalance = useMemo(() => getDisplayBalance(grapeBalance), [grapeBalance]);
  const wineBalance = useTokenBalance(grapeFinance.WINE);
  const displayWineBalance = useMemo(() => getDisplayBalance(wineBalance), [wineBalance]);
  const gbondBalance = useTokenBalance(grapeFinance.GBOND);
  const displayGbondBalance = useMemo(() => getDisplayBalance(gbondBalance), [gbondBalance]);

  const grapePriceInDollars = useMemo(
    () => (grapeStats ? Number(grapeStats.priceInDollars).toFixed(2) : null),
    [grapeStats],
  );
  const winePriceInDollars = useMemo(
    () => (wineStats ? Number(wineStats.priceInDollars).toFixed(2) : null),
    [wineStats],
  );

  const [totalInvested, totalRewards, totalInVineyard, totalInNodes, totalInWinery] = useMemo(
    () =>
      walletStats
        ? [
            walletStats.total,
            walletStats.totalRewards,
            walletStats.totalInVineyard.toFixed(2),
            walletStats.totalInNodes.toFixed(2),
            walletStats.totalInWinery.toFixed(2),
          ]
        : [null, null, null, null],
    [walletStats],
  );

  const getTotalInvested = () => {
    return (
      totalInvested +
      Number(displayGrapeBalance) * Number(grapePriceInDollars) +
      Number(displayWineBalance) * Number(winePriceInDollars)
    );
  };

  return (
    <Page>
      <BackgroundImage />
      {!!account ? (
        <>
          <h1 style={{fontSize: '80px', textAlign: 'center'}}>Dashboard</h1>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5} lg={3}>
              <Card style={{textAlign: 'center', minHeight: '210px'}}>
                <h1 style={{width: '100%', marginTop: '15px', textAlign: 'center'}}>Prices</h1>
                <Balances style={{marginTop: '10px', marginBottom: '15px', display: 'flex'}}>
                  <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
                    <TokenSymbol width={40} height={45} symbol="GRAPE" />
                    <StyledBalance>
                      <StyledValue>${grapePriceInDollars ? grapePriceInDollars : '-.--'}</StyledValue>
                      <Label text="GRAPE" />
                    </StyledBalance>
                  </StyledBalanceWrapper>

                  <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
                    <TokenSymbol width={40} height={45} symbol="WINE" />
                    <StyledBalance>
                      <StyledValue>${winePriceInDollars ? winePriceInDollars : '-.--'}</StyledValue>
                      <Label text="WINE" />
                    </StyledBalance>
                  </StyledBalanceWrapper>
                </Balances>
              </Card>
            </Grid>

            <Grid item xs={12} md={7} lg={5}>
              <Card style={{textAlign: 'center', minHeight: '210px'}}>
                <h1 style={{width: '100%', marginTop: '15px', textAlign: 'center'}}>My Wallet</h1>
                <Balances style={{display: 'flex', marginTop: '10px'}}>
                  <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
                    <TokenSymbol width={40} height={45} symbol="GRAPE" />
                    <StyledBalance>
                      <StyledValue>{displayGrapeBalance}</StyledValue>
                      <Label text="GRAPE" />
                    </StyledBalance>
                  </StyledBalanceWrapper>

                  <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
                    <TokenSymbol width={40} height={45} symbol="WINE" />
                    <StyledBalance>
                      <StyledValue>{displayWineBalance}</StyledValue>
                      <Label text="WINE" />
                    </StyledBalance>
                  </StyledBalanceWrapper>

                  <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
                    <TokenSymbol width={40} height={45} symbol="GBOND" />
                    <StyledBalance>
                      <StyledValue>{displayGbondBalance}</StyledValue>
                      <Label text="GBOND" />
                    </StyledBalance>
                  </StyledBalanceWrapper>
                </Balances>
              </Card>
            </Grid>

            <Grid item xs={12} md={5} lg={4}>
              <Card style={{textAlign: 'center', minHeight: '210px'}}>
                <h1 style={{width: '100%', marginTop: '15px'}}>My Total $ Worth</h1>
                <p style={{fontSize: '30px', marginBottom: '20px', textAlign: 'center', color: 'white', marginTop: '0'}}>
                  {totalInvested != null ? (
                    <CountUp end={getTotalInvested()} separator="," prefix="≈$" />
                  ) : (
                    <CircularProgress size={22} color="inherit" />
                  )}
                </p>

                <h1 style={{width: '100%'}}>Rewards $ to Claim</h1>
                <p style={{fontSize: '30px', marginBottom: '20px', textAlign: 'center', color: 'white', marginTop: '0'}}>
                  {totalRewards != null ? (
                    <CountUp end={Number(totalRewards)} separator="," prefix="≈$" />
                  ) : (
                    <CircularProgress size={22} color="inherit" />
                  )}
                </p>
              </Card>
            </Grid>
          </Grid>
          <hr style={{marginTop: '40px'}}></hr>
          <Grid container alignItems="center" style={{marginTop: '30px'}}>
            <Grid item xs={12} md={6} lg={6}>
              <h1 style={{fontSize: '60px', textAlign: matches ? 'left' : 'center'}}>Vineyard</h1>
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{textAlign: matches ? 'right' : 'center'}}>
              <Button className="shinyButton" onClick={onReward}>
                Claim All From Vineyard
              </Button>
            </Grid>
          </Grid>
          <p style={{fontSize: '28px', textAlign: matches ? 'left' : 'center', color: '#fff', margin: '0', marginTop: matches ? null : '15px'}}>
            My $ Worth:{' '}
            {totalInVineyard ? (
              '≈$' + totalInVineyard
            ) : (
              <CircularProgress style={{marginLeft: '10px'}} size={22} color="inherit" />
            )}
          </p>
          <h2 style={{fontSize: '40px', textAlign: 'left', marginTop: '30px'}}>Swapsicle Pools</h2>
          <Box mt={3}>
            <Grid container spacing={3}>
              {vineyardPools
                .filter((bank) => bank.sectionInUI === 6)
                .map((bank) => (
                  <React.Fragment key={bank.name}>
                    <FarmCard bank={bank} />
                  </React.Fragment>
                ))}
            </Grid>
          </Box>
          <h2 style={{fontSize: '40px', textAlign: 'left', marginTop: '30px'}}>Trader Joe Pools</h2>
          <Box mt={3}>
            <Grid container spacing={3}>
              {vineyardPools
                .filter((bank) => bank.sectionInUI === 2)
                .map((bank) => (
                  <React.Fragment key={bank.name}>
                    <FarmCard bank={bank} />
                  </React.Fragment>
                ))}
            </Grid>
          </Box>
          <h2 style={{fontSize: '40px', textAlign: 'left', marginTop: '30px'}}>Single Stake Pools</h2>
          <Box mt={3}>
            <Grid container spacing={3}>
              {vineyardPools
                .filter((bank) => bank.sectionInUI === 7)
                .map((bank) => (
                  <React.Fragment key={bank.name}>
                    <FarmCard bank={bank} />
                  </React.Fragment>
                ))}
            </Grid>
          </Box>
          <hr style={{marginTop: '40px'}}></hr>
          <Grid container alignItems='center' style={{marginTop: '30px'}}>
            <Grid item xs={12} md={6} lg={6}>
              <h1 style={{fontSize: '60px', textAlign: matches ? 'left' : 'center'}}>Nodes</h1>
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{textAlign: matches ? 'right' : 'center'}}>
              <Grid container>
                <Grid item xs={6} md={6} lg={6}>
                  <Button className="shinyButton" onClick={compoundNodes}>
                    Compound All From Nodes
                  </Button>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <Button className="shinyButton" onClick={harvestNodes}>
                    Claim All From Nodes
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>{' '}
          <p style={{fontSize: '28px', color: '#fff', margin: '0', textAlign: matches ? 'left' : 'center', marginTop: matches ? null : '15px'}}>
            My $ Worth (Locked):{' '}
            {totalInNodes ? (
              '≈$' + totalInNodes
            ) : (
              <CircularProgress style={{marginLeft: '10px'}} size={22} color="inherit" />
            )}
          </p>
          <Box mt={3}>
            <Grid container spacing={3}>
              {nodePools.map((bank) => (
                <React.Fragment key={bank.name}>
                  <GrapeNodeCard bank={bank} />
                </React.Fragment>
              ))}
            </Grid>
          </Box>
          <hr style={{marginTop: '40px'}}></hr>
          <h1 style={{fontSize: '60px', marginTop: '50px', textAlign: matches ? 'left' : 'center'}}>Winery</h1>
          <p style={{fontSize: '28px', color: '#fff', margin: '0', textAlign: matches ? 'left' : 'center'}}>
            My $ Worth:{' '}
            {totalInWinery ? (
              '≈$' + totalInWinery
            ) : (
              <CircularProgress style={{marginLeft: '10px'}} size={22} color="inherit" />
            )}
          </p>
          <Typography style={{marginTop: '20px', textTransform: 'uppercase', color: '#fff', textAlign: matches ? 'left' : 'center'}}>
            <b>Next Epoch: </b>
            <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
          </Typography>
          <Box mt={3}>
            <Grid container spacing={3}>
              <BoardroomCard />
            </Grid>
          </Box>
        </>
      ) : (
        <UnlockWallet />
      )}
    </Page>
  );
};

const StyledValue = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 700;
`;

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Balances = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`;

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 ${(props) => props.theme.spacing[3]}px;
`;

export default Dashboard;