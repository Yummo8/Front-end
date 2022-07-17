import React, {useMemo} from 'react';
import {useWallet} from 'use-wallet';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import moment from 'moment';
import Label from '../../components/Label';
import {Box, Grid, Button, Typography, Card, CircularProgress, CardContent, Paper} from '@material-ui/core';
import ProgressCountdown from './ProgressCountdown';
import UnlockWallet from '../../components/UnlockWallet';
import TokenSymbol from '../../components/TokenSymbol';
import Page from '../../components/Page';
import DashboardInfoCard from '../../components/DashboardInfoCard';
import DashboardInfoCardNodes from './DashboardInfoCardNodes';
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
import grapeImg from '../../assets/img/grape.png';
import nodesImg from '../../assets/img/gnode.png';
import wineImg from '../../assets/img/gshare.png';
import DashboardBoardroomCard from './DashboardBoardroomCard';

const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
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
  const nodePools = [useBank('GrapeNode'), useBank('LPNode'), useBank('LPWlrsNode')];
  const onReward = useHarvestAll(vineyardPools);
  const harvestNodes = useHarvestAll(nodePools);
  const compoundNodes = useCompoundAll(nodePools);

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

  const matches = useMediaQuery('(min-width:900px)');
  const matches960 = useMediaQuery('(max-width:960px)');


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
          <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
            Dashboard
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Card style={{textAlign: 'center', minHeight: matches960 ? '0' : '232px'}}>
                <CardContent>
                  <Typography color="textPrimary" align="center" variant="h5" gutterBottom>
                    My Wallet
                  </Typography>{' '}
                  <Balances style={{display: 'flex', marginBottom: '0', marginTop: '20px'}}>
                    <StyledBalanceWrapper>
                      <TokenSymbol width={40} height={35} symbol="GRAPE" />
                      <StyledBalance>
                        <span className="wallet-token-blanace">{displayGrapeBalance}</span>
                        <Label text="GRAPE" />
                      </StyledBalance>
                    </StyledBalanceWrapper>

                    <StyledBalanceWrapper>
                      <TokenSymbol width={35} height={35} symbol="WINE" />
                      <StyledBalance>
                      <span className="wallet-token-blanace">{displayWineBalance}</span>
                        <Label text="WINE" />
                      </StyledBalance>
                    </StyledBalanceWrapper>

                    <StyledBalanceWrapper>
                      <TokenSymbol width={40} height={35} symbol="GBOND" />
                      <StyledBalance>
                      <span className="wallet-token-blanace">{displayGbondBalance}</span>
                        <Label text="GBOND" />
                      </StyledBalance>
                    </StyledBalanceWrapper>
                  </Balances>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Card style={{textAlign: 'center', minHeight: '190px'}}>
                <CardContent>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Grid container justifyContent="space-between">
                        <Grid item>
                          <Typography color="textPrimary" align="center" variant="h5">
                            My Total worth
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography color="textPrimary" align="center" variant="h5" style={{fontWeight: 700}}>
                            {totalInvested != null ? (
                              <CountUp end={getTotalInvested()} separator="," prefix="≈$" />
                            ) : (
                              <CircularProgress size={22} color="inherit" />
                            )}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container justifyContent="space-between" alignItems="baseline">
                        <Grid item>
                          <Typography color="textSecondary" align="center" variant="h6">
                            <img
                              src={grapeImg}
                              alt="Grape"
                              height={30}
                              style={{verticalAlign: 'text-bottom', marginRight: '10px'}}
                            />
                            Vineyard
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography color="textPrimary" align="center" variant="h6" style={{fontWeight: 700}}>
                            {totalInVineyard ? (
                              <CountUp end={totalInVineyard} separator="," prefix="≈$" />
                            ) : (
                              <CircularProgress style={{marginLeft: '10px'}} size={22} color="inherit" />
                            )}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container justifyContent="space-between" alignItems="baseline">
                        <Grid item>
                          <Typography color="textSecondary" align="center" variant="h6">
                            <img
                              src={nodesImg}
                              alt="Grape"
                              height={30}
                              style={{verticalAlign: 'text-bottom', marginRight: '10px'}}
                            />
                            Nodes (locked)
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography color="textPrimary" align="center" variant="h6" style={{fontWeight: 700}}>
                            {totalInNodes != null ? (
                              <CountUp end={totalInNodes} separator="," prefix="≈$" />
                            ) : (
                              <CircularProgress size={22} color="inherit" />
                            )}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container justifyContent="space-between" alignItems="baseline">
                        <Grid item>
                          <Typography color="textSecondary" align="center" variant="h6">
                            <img
                              src={wineImg}
                              alt="Grape"
                              height={30}
                              style={{verticalAlign: 'text-bottom', marginRight: '10px'}}
                            />
                            Winery
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography color="textPrimary" align="center" variant="h6" style={{fontWeight: 700}}>
                            {totalInWinery ? (
                              <CountUp end={Number(totalInWinery)} separator="," prefix="≈$" />
                            ) : (
                              <CircularProgress style={{marginLeft: '10px'}} size={22} color="inherit" />
                            )}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container justifyContent="space-between" alignItems="baseline">
                        <Grid item>
                          <Typography color="textPrimary" align="center" variant="h5">
                            Rewards to claim
                          </Typography>{' '}
                        </Grid>
                        <Grid item>
                          <Typography color="textPrimary" align="center" variant="h5" style={{fontWeight: 700}}>
                            {totalRewards != null ? (
                              <CountUp end={Number(totalRewards)} separator="," prefix="≈$" />
                            ) : (
                              <CircularProgress size={22} color="inherit" />
                            )}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Paper style={{marginTop: '30px', marginBottom: '10px', height: '3px'}}></Paper>
          <Grid container alignItems="center" style={{marginTop: '30px'}}>
            <Grid item xs={12} md={6} lg={6}>
              <Typography color="textPrimary" style={{textAlign: matches ? 'left' : 'center'}} variant="h4">
                Vineyard
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{textAlign: matches ? 'right' : 'center'}}>
              <Button style={{marginTop: matches ? '0' : '10px'}} className="shinyButton" onClick={onReward}>
                Claim All From Vineyard
              </Button>
            </Grid>
          </Grid>
          <Typography color="textPrimary" style={{marginTop: '30px'}} variant="h5">
            Swapsicle pools
          </Typography>{' '}
          <Box mt={2}>
            <Grid container spacing={3}>
              {vineyardPools
                .filter((bank) => bank.sectionInUI === 6)
                .map((bank) => (
                  <React.Fragment key={bank.name}>
                    <DashboardInfoCard bank={bank} />
                  </React.Fragment>
                ))}
            </Grid>
          </Box>
          <Typography color="textPrimary" style={{marginTop: '30px'}} variant="h5">
            Trader Joe pools
          </Typography>{' '}
          <Box mt={2}>
            <Grid container spacing={3}>
              {vineyardPools
                .filter((bank) => bank.sectionInUI === 2)
                .map((bank) => (
                  <React.Fragment key={bank.name}>
                    <DashboardInfoCard bank={bank} />
                  </React.Fragment>
                ))}
            </Grid>
          </Box>
          <Typography color="textPrimary" style={{marginTop: '30px'}} variant="h5">
            Single Stake pools
          </Typography>{' '}
          <Box mt={3}>
            <Grid container spacing={3}>
              {vineyardPools
                .filter((bank) => bank.sectionInUI === 7)
                .map((bank) => (
                  <React.Fragment key={bank.name}>
                    <DashboardInfoCard bank={bank} />
                  </React.Fragment>
                ))}
            </Grid>
          </Box>
          <Paper style={{marginTop: '40px', marginBottom: '10px', height: '3px'}}></Paper>
          <Grid container alignItems="center" style={{marginTop: '30px'}}>
            <Grid item xs={12} md={6} lg={6}>
              <Typography color="textPrimary" style={{textAlign: matches ? 'left' : 'center'}} variant="h4">
                Nodes
              </Typography>{' '}
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{textAlign: matches ? 'right' : 'center'}}>
              <Button style={{marginTop: matches ? '0' : '10px'}} className="shinyButton" onClick={compoundNodes}>
                Compound All From Nodes
              </Button>
              <Button style={{marginTop: matches ? '0' : '10px', marginLeft: '10px'}} className="shinyButton" onClick={harvestNodes}>
                Claim All From Nodes
              </Button>
            </Grid>
          </Grid>
          <Box mt={3}>
            <Grid container spacing={3}>
              {nodePools.map((bank) => (
                <React.Fragment key={bank.name}>
                  <DashboardInfoCardNodes bank={bank} />
                </React.Fragment>
              ))}
            </Grid>
          </Box>
          <Paper style={{marginTop: '40px', marginBottom: '40px', height: '3px'}}></Paper>
          <Typography color="textPrimary" style={{textAlign: matches ? 'left' : 'center'}} variant="h4">
            Winery
          </Typography>{' '}
          <Typography
            style={{
              marginTop: '20px',
              textTransform: 'uppercase',
              color: '#fff',
              textAlign: matches ? 'left' : 'center',
            }}
          >
            <b>Next Epoch: </b>
            <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
          </Typography>
          <Box mt={3}>
            <Grid container spacing={3}>
              <DashboardBoardroomCard />
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
