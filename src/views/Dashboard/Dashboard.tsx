import React, {useMemo} from 'react';
import {useWallet} from 'use-wallet';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import moment from 'moment';
import Label from '../../components/Label';
import {Box, Grid, Button, Typography, CircularProgress} from '@material-ui/core';
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
  const vineyardPools = banks.filter((bank) => !bank.finished && bank.sectionInUI === 2 || bank.sectionInUI === 6 || bank.sectionInUI === 7);
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

  const [totalInvested, totalInVineyard, totalInNodes, totalInWinery] = useMemo(
    () =>
      walletStats
        ? [
            walletStats.total,
            walletStats.totalInVineyard.toFixed(2),
            walletStats.totalInNodes.toFixed(2),
            walletStats.totalInWinery.toFixed(2),
          ]
        : [null, null, null, null],
    [walletStats],
  );

  const getTotalInvested = () => {
    return totalInvested + 
    (Number(displayGrapeBalance) * Number(grapePriceInDollars)) +
    (Number(displayWineBalance) * Number(winePriceInDollars));
  }

  return (
    <Page>
      <BackgroundImage />
      {!!account ? (
        <>
          <h1 style={{fontSize: '80px', textAlign: 'center'}}>Dashboard</h1>

          <p style={{fontSize: '40px', textAlign: 'center', color: 'white', margin: '0'}}>
            My Total $ Worth:{' '}
            {totalInvested != null ? (
              <CountUp end={getTotalInvested()} separator="," prefix="≈$" />
            ) : (
              <CircularProgress style={{marginLeft: '10px'}} size={22} color="inherit" />
            )}
          </p>

          <Box mt={3}>
            <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={12} md={6} lg={6} style={{textAlign: 'center'}}>
                <h1>Prices</h1>
                <Balances style={{display: 'flex', flexDirection: matches ? 'row' : 'column'}}>
                  <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
                    <TokenSymbol symbol="GRAPE" />
                    <StyledBalance>
                      <StyledValue>${grapePriceInDollars ? grapePriceInDollars : '-.--'}</StyledValue>
                      <Label text="GRAPE Price" />
                    </StyledBalance>
                  </StyledBalanceWrapper>

                  <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
                    <TokenSymbol symbol="WINE" />
                    <StyledBalance>
                      <StyledValue>${winePriceInDollars ? winePriceInDollars : '-.--'}</StyledValue>
                      <Label text="WINE Price" />
                    </StyledBalance>
                  </StyledBalanceWrapper>
                </Balances>
              </Grid>
              <Grid item xs={12} md={6} lg={6} style={{textAlign: 'center'}}>
                <h1>My Wallet</h1>
                <Balances style={{display: 'flex', flexDirection: matches ? 'row' : 'column'}}>
                  <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
                    <TokenSymbol symbol="GRAPE" />
                    <StyledBalance>
                      <StyledValue>{displayGrapeBalance}</StyledValue>
                      <Label text="GRAPE Available" />
                    </StyledBalance>
                  </StyledBalanceWrapper>

                  <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
                    <TokenSymbol symbol="WINE" />
                    <StyledBalance>
                      <StyledValue>{displayWineBalance}</StyledValue>
                      <Label text="WINE Available" />
                    </StyledBalance>
                  </StyledBalanceWrapper>

                  <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
                    <TokenSymbol symbol="GBOND" />
                    <StyledBalance>
                      <StyledValue>{displayGbondBalance}</StyledValue>
                      <Label text="GBOND Available" />
                    </StyledBalance>
                  </StyledBalanceWrapper>
                </Balances>
              </Grid>
            </Grid>
          </Box>
          <hr></hr>
          <h1 style={{fontSize: '60px', textAlign: 'center', marginTop: '30px'}}>Vineyard</h1>
          <p style={{fontSize: '28px', textAlign: 'center', color: '#fff', margin: '0'}}>
            My $ Worth:{' '}
            {totalInVineyard ? (
              '≈$' + totalInVineyard
            ) : (
              <CircularProgress style={{marginLeft: '10px'}} size={22} color="inherit" />
            )}
          </p>
          <Box style={{marginTop: '20px'}} mt={3} display="flex" justifyContent="center">
            <Button className="shinyButton" onClick={onReward}>
              Claim All From Vineyard
            </Button>
          </Box>
          <Box mt={3}>
            <Grid container justifyContent="center" spacing={3}>
              {vineyardPools.map((bank) => (
                <React.Fragment key={bank.name}>
                  <FarmCard bank={bank} />
                </React.Fragment>
              ))}
            </Grid>
          </Box>
          <h1 style={{fontSize: '60px', textAlign: 'center', marginTop: '50px'}}>Nodes</h1>
          <p style={{fontSize: '28px', textAlign: 'center', color: '#fff', margin: '0'}}>
            My $ Worth (Locked):{' '}
            {totalInNodes ? (
              '≈$' + totalInNodes
            ) : (
              <CircularProgress style={{marginLeft: '10px'}} size={22} color="inherit" />
            )}
          </p>
          <Grid container style={{marginTop: '20px', textAlign: 'center'}}>
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

          <Box mt={3}>
            <Grid container justifyContent="center" spacing={3}>
              {nodePools.map((bank) => (
                <React.Fragment key={bank.name}>
                  <GrapeNodeCard bank={bank} />
                </React.Fragment>
              ))}
            </Grid>
          </Box>
          <h1 style={{fontSize: '60px', textAlign: 'center', marginTop: '50px'}}>Winery</h1>
          <p style={{fontSize: '28px', textAlign: 'center', color: '#fff', margin: '0'}}>
            My $ Worth:{' '}
            {totalInWinery ? (
              '≈$' + totalInWinery
            ) : (
              <CircularProgress style={{marginLeft: '10px'}} size={22} color="inherit" />
            )}
          </p>
          <Typography style={{marginTop: '20px', textTransform: 'uppercase', color: '#fff', textAlign: 'center'}}>
            <b>Next Epoch: </b>
            <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
          </Typography>
          <Box mt={3}>
            <Grid container justifyContent="center" spacing={3}>
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
