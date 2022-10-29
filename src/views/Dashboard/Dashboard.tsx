import React, {useMemo, useState} from 'react';
import {useWallet} from 'use-wallet';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import moment from 'moment';
import Label from '../../components/Label';
import {
  Box,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  Paper,
  Tooltip,
  Switch,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';
import ProgressCountdown from './ProgressCountdown';
import UnlockWallet from '../../components/UnlockWallet';
import TokenSymbol from '../../components/TokenSymbol';
import Page from '../../components/Page';
import DashboardInfoCard from '../../components/DashboardInfoCard';
import DashboardInfoCardNodes from './DashboardInfoCardNodes';
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
import wineMimLP from '../../assets/img/gshare-mim.png';
import soda from '../../assets/img/soda.png';
import DashboardBoardroomCard from './DashboardBoardroomCard';
import {SyncLoader} from 'react-spinners';
import useXGrapePrice from '../../hooks/useXGrapePrice';
import useVintagePrice from '../../hooks/useVintagePrice';
import InfoIcon from '@mui/icons-material/Info';
import Farms from './Farms';
import Nodes from './Nodes';
import BoardroomCard from './BoardroomCard';
import Presses from './Presses';
import useSVintagePrice from '../../hooks/useSVintagePrice';

const Dashboard = () => {
  const {account} = useWallet();
  const grapeFinance = useGrapeFinance();
  const widthUnder600 = useMediaQuery('(max-width:600px)');

  const {to} = useTreasuryAllocationTimes();
  const [banks] = useBanks();
  const walletStats = useWalletStats(banks);
  const grapeStats = useGrapeStats();
  const wineStats = useWineStats();
  const vineyardPools = banks.filter(
    (bank) => (!bank.finished && bank.sectionInUI === 2) || bank.sectionInUI === 6 || bank.sectionInUI === 7,
  );
  const nodePools = [useBank('GrapeNodeV2'), useBank('LPNode'), useBank('LPWlrsNode')];
  const pressPools = banks.filter((bank) => !bank.finished && bank.sectionInUI === 8);

  const grapeBalance = useTokenBalance(grapeFinance.GRAPE);
  const displayGrapeBalance = useMemo(() => getDisplayBalance(grapeBalance, 18, 2), [grapeBalance]);
  const wineBalance = useTokenBalance(grapeFinance.WINE);
  const displayWineBalance = useMemo(() => getDisplayBalance(wineBalance, 18, 2), [wineBalance]);
  const gbondBalance = useTokenBalance(grapeFinance.GBOND);
  const displayGbondBalance = useMemo(() => getDisplayBalance(gbondBalance, 18, 2), [gbondBalance]);
  const xGrapeBalance = useTokenBalance(grapeFinance.XGRAPE);
  const vintageBalance = useTokenBalance(grapeFinance.VINTAGE);
  const svintageBalance = useTokenBalance(grapeFinance.SVINTAGE);
  const displayXGrapeBalance = useMemo(() => getDisplayBalance(xGrapeBalance, 18, 2), [xGrapeBalance]);
  const displayVintageBalance = useMemo(() => getDisplayBalance(vintageBalance, 18, 2), [vintageBalance]);
  const displaySVintageBalance = useMemo(() => getDisplayBalance(svintageBalance, 18, 2), [svintageBalance]);

  const grapePriceInDollars = useMemo(
    () => (grapeStats ? Number(grapeStats.priceInDollars).toFixed(2) : null),
    [grapeStats],
  );
  const winePriceInDollars = useMemo(
    () => (wineStats ? Number(wineStats.priceInDollars).toFixed(2) : null),
    [wineStats],
  );

  const xGrapePrice = useXGrapePrice();
  const vintagePrice = useVintagePrice();
  const sVintagePrice = useSVintagePrice();

  const matches = useMediaQuery('(min-width:900px)');
  const matches960 = useMediaQuery('(max-width:960px)');

  const [activeTab, setActiveTab] = useState('Farms');

  const totalInvested = useMemo(() => {
    if (walletStats) {
      return (
        walletStats.totalInNodes +
        walletStats.totalInSodaPress +
        walletStats.totalInVineyard +
        walletStats.totalInWinePress +
        walletStats.totalInSoleraPress +
        walletStats.totalInWinery +
        Number(displayGrapeBalance) * Number(grapePriceInDollars) +
        Number(displayWineBalance) * Number(winePriceInDollars) +
        Number(displayXGrapeBalance) * Number(xGrapePrice) +
        Number(displayVintageBalance) * Number(vintagePrice)
      );
    }
    return -1;
  }, [walletStats]);

  const totalRewards = useMemo(() => {
    if (walletStats) {
      // include individual tokens as well
      return (
        walletStats.rewardsInNodes +
        walletStats.rewardsInSodaPress +
        walletStats.rewardsInSoleraPress +
        walletStats.rewardsInVineyard +
        walletStats.rewardsInWinePress +
        walletStats.rewardsInWinery
      );
    }
    return -1;
  }, [walletStats]);

  const [activesOnly, setActivesOnly] = React.useState(false);
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivesOnly(event.target.checked);
  };

  return (
    <Page>
      {!!account ? (
        <div>
          <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
            Dashboard
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12} lg={4}>
                  <Card>
                    <CardContent>
                      <Grid container justifyContent="center" spacing={1} alignContent="center" alignItems="center">
                        <Grid item>
                          <Typography color="textPrimary" align="center" variant="h6" gutterBottom>
                            MY TOTAL
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Tooltip
                            arrow
                            placement="top"
                            enterDelay={0}
                            title="Sum of all pools, rewards and individual tokens"
                          >
                            <InfoIcon fontSize="small" />
                          </Tooltip>
                        </Grid>
                      </Grid>

                      <Typography color="textPrimary" align="center" variant="h5" style={{fontWeight: 700}}>
                        {totalInvested !== -1 ? (
                          <CountUp end={totalInvested} separator="," prefix="≈$" />
                        ) : (
                          <SyncLoader color="white" size={8} />
                        )}
                      </Typography>

                      <Typography style={{color: '#f9b857', marginTop: '10px'}} align="center">
                        Rewards
                      </Typography>

                      <Typography style={{color: '#f9b857', fontWeight: 700}} align="center">
                        {totalRewards !== -1 ? (
                          <CountUp end={Number(totalRewards)} separator="," prefix="≈$" />
                        ) : (
                          <SyncLoader color="white" size={8} />
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={2}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary" align="center" variant="h6" gutterBottom>
                        <img
                          src={grapeImg}
                          alt="Grape"
                          height={25}
                          style={{verticalAlign: 'text-bottom', marginRight: '10px'}}
                        />
                        Vineyard
                      </Typography>

                      <Typography color="textPrimary" align="center" variant="h5" style={{fontWeight: 700}}>
                        {walletStats ? (
                          <CountUp end={walletStats.totalInVineyard} separator="," prefix="≈$" />
                        ) : (
                          <SyncLoader color="white" size={8} />
                        )}
                      </Typography>
                      <Typography style={{color: '#f9b857', marginTop: '10px'}} align="center">
                        Rewards
                      </Typography>

                      <Typography style={{color: '#f9b857', fontWeight: 700}} align="center">
                        {walletStats != null ? (
                          <CountUp end={Number(walletStats.rewardsInVineyard)} separator="," prefix="≈$" />
                        ) : (
                          <SyncLoader color="white" size={8} />
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={2}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary" align="center" variant="h6" gutterBottom>
                        <img
                          src={wineImg}
                          alt="Wine"
                          height={25}
                          style={{verticalAlign: 'text-bottom', marginRight: '10px'}}
                        />
                        Winery
                      </Typography>

                      <Typography color="textPrimary" align="center" variant="h5" style={{fontWeight: 700}}>
                        {walletStats != null ? (
                          <CountUp end={Number(walletStats.totalInWinery)} separator="," prefix="≈$" />
                        ) : (
                          <SyncLoader color="white" size={8} />
                        )}
                      </Typography>

                      <Typography style={{color: '#f9b857', marginTop: '10px'}} align="center">
                        Rewards
                      </Typography>

                      <Typography style={{color: '#f9b857', fontWeight: 700}} align="center">
                        {walletStats != null ? (
                          <CountUp end={Number(walletStats.rewardsInWinery)} separator="," prefix="≈$" />
                        ) : (
                          <SyncLoader color="white" size={8} />
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={2}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary" align="center" variant="h6" gutterBottom>
                        <img
                          src={nodesImg}
                          alt="Nodes"
                          height={25}
                          style={{verticalAlign: 'text-bottom', marginRight: '10px'}}
                        />
                        Nodes
                      </Typography>

                      <Typography color="textPrimary" align="center" variant="h5" style={{fontWeight: 700}}>
                        {walletStats != null ? (
                          <CountUp end={walletStats.totalInNodes} separator="," prefix="≈$" />
                        ) : (
                          <SyncLoader color="white" size={8} />
                        )}
                      </Typography>

                      <Typography style={{color: '#f9b857', marginTop: '10px'}} align="center">
                        Rewards
                      </Typography>

                      <Typography style={{color: '#f9b857', fontWeight: 700}} align="center">
                        {walletStats != null ? (
                          <CountUp end={Number(walletStats.rewardsInNodes)} separator="," prefix="≈$" />
                        ) : (
                          <SyncLoader color="white" size={8} />
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6} sm={6} md={3} lg={2}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary" align="center" variant="h6" gutterBottom>
                        <img
                          src={soda}
                          alt="Wine MIM"
                          height={25}
                          style={{verticalAlign: 'text-bottom', marginRight: '10px'}}
                        />
                        Presses
                      </Typography>

                      <Typography color="textPrimary" align="center" variant="h5" style={{fontWeight: 700}}>
                        {walletStats ? (
                          <CountUp
                            end={
                              walletStats.totalInWinePress +
                              walletStats.totalInSodaPress +
                              walletStats.totalInSoleraPress
                            }
                            separator=","
                            prefix="≈$"
                          />
                        ) : (
                          <SyncLoader color="white" size={8} />
                        )}
                      </Typography>

                      <Typography style={{color: '#f9b857', marginTop: '10px'}} align="center">
                        Rewards
                      </Typography>

                      <Typography style={{color: '#f9b857', fontWeight: 700}} align="center">
                        {walletStats != null ? (
                          <CountUp
                            end={Number(
                              walletStats.rewardsInWinePress +
                                walletStats.rewardsInSodaPress +
                                walletStats.rewardsInSoleraPress,
                            )}
                            separator=","
                            prefix="≈$"
                          />
                        ) : (
                          <SyncLoader color="white" size={8} />
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} justifyContent="space-between" alignItems="center">
                <Grid item xs={4} sm={4} md={2}>
                  <div className="dashboard-token-box">
                    <div className="dashboard-token-box-inner">
                      <div className="lineLabel">
                        <TokenSymbol width={32} height={32} symbol="GRAPE" />
                      </div>
                      <div className="lineValue">
                        <span>{displayGrapeBalance}</span>{' '}
                        <span className="wallet-token-value">
                          ($
                          {grapePriceInDollars && displayGrapeBalance
                            ? (Number(displayGrapeBalance) * Number(grapePriceInDollars)).toFixed(2)
                            : '0.00'}
                          )
                        </span>
                      </div>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4} sm={4} md={2}>
                  <div className="dashboard-token-box">
                    <div className="dashboard-token-box-inner">
                      <div className="lineLabel">
                        <TokenSymbol width={32} height={32} symbol="WINE" />
                      </div>
                      <div className="lineValue">
                        <span>{displayWineBalance}</span>{' '}
                        <span className="wallet-token-value">
                          ($
                          {winePriceInDollars && displayWineBalance
                            ? (Number(displayWineBalance) * Number(winePriceInDollars)).toFixed(2)
                            : '0.00'}
                          )
                        </span>
                      </div>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4} sm={4} md={2}>
                  <div className="dashboard-token-box">
                    <div className="dashboard-token-box-inner">
                      <div className="lineLabel">
                        <TokenSymbol width={32} height={32} symbol="XGRAPE" />
                      </div>
                      <div className="lineValue">
                        <span>{displayXGrapeBalance}</span>{' '}
                        <span className="wallet-token-value">
                          ($
                          {xGrapePrice && displayXGrapeBalance
                            ? (Number(displayXGrapeBalance) * Number(xGrapePrice)).toFixed(2)
                            : '0.00'}
                          )
                        </span>
                      </div>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4} sm={4} md={2}>
                  <div className="dashboard-token-box">
                    <div className="dashboard-token-box-inner">
                      <div className="lineLabel">
                        <TokenSymbol width={32} height={32} symbol="VINTAGE" />
                      </div>
                      <div className="lineValue">
                        <span>{displayVintageBalance}</span>{' '}
                        <span className="wallet-token-value">
                          ($
                          {vintagePrice && displayVintageBalance
                            ? (Number(displayVintageBalance) * Number(vintagePrice)).toFixed(2)
                            : '0.00'}
                          )
                        </span>
                      </div>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4} sm={4} md={2}>
                  <div className="dashboard-token-box">
                    <div className="dashboard-token-box-inner">
                      <div className="lineLabel">
                        <TokenSymbol width={32} height={32} symbol="SOLERA" />
                      </div>
                      <div className="lineValue">
                        <span>{displaySVintageBalance}</span>{' '}
                        <span className="wallet-token-value">
                          ($
                          {sVintagePrice && displaySVintageBalance
                            ? (Number(displaySVintageBalance) * Number(sVintagePrice)).toFixed(2)
                            : '0.00'}
                          )
                        </span>
                      </div>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4} sm={4} md={2}>
                  <div className="dashboard-token-box">
                    <div className="dashboard-token-box-inner">
                      <div className="lineLabel">
                        <TokenSymbol width={32} height={32} symbol="GBOND" />
                      </div>
                      <div className="lineValue">
                        <span>{displayGbondBalance}</span>{' '}
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box mt={7}>
            <Grid
              container
              justifyContent={!matches ? 'space-evenly' : 'center'}
              spacing={3}
              className="dashboard-tabs"
            >
              <Grid item>
                <div
                  onClick={() => setActiveTab('Farms')}
                  className={activeTab === 'Farms' ? 'dashboard-tab-item-active' : 'dashboard-tab-item'}
                >
                  <Grid container justifyContent="center" spacing={1} alignItems="center">
                    <Grid item>
                      <img src={grapeImg} alt="Grape" height={25} />
                    </Grid>
                    <Grid item>VINEYARD</Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div
                  onClick={() => setActiveTab('Winery')}
                  className={activeTab === 'Winery' ? 'dashboard-tab-item-active' : 'dashboard-tab-item'}
                >
                  <Grid container justifyContent="center" spacing={1} alignItems="center">
                    <Grid item>
                      <img src={wineImg} alt="Wine" height={25} />
                    </Grid>
                    <Grid item>WINERY</Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div
                  onClick={() => setActiveTab('Nodes')}
                  className={activeTab === 'Nodes' ? 'dashboard-tab-item-active' : 'dashboard-tab-item'}
                >
                  <Grid container justifyContent="center" spacing={1} alignItems="center">
                    <Grid item>
                      <img src={nodesImg} alt="Node" height={25} />
                    </Grid>
                    <Grid item>NODES</Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div
                  onClick={() => setActiveTab('Presses')}
                  className={activeTab === 'Presses' ? 'dashboard-tab-item-active' : 'dashboard-tab-item'}
                >
                  <Grid container justifyContent="center" spacing={1} alignItems="center">
                    <Grid item>
                      <img src={soda} alt="Press" height={25} />
                    </Grid>
                    <Grid item>PRESSES</Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box hidden={activeTab !== 'Farms'} mt={4}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <FormGroup style={{color: 'white'}}>
                  <FormControlLabel
                    control={<Switch color="secondary" checked={activesOnly} onChange={handleSwitchChange} />}
                    label="Active(s) only"
                  />
                </FormGroup>{' '}
              </Grid>
            </Grid>

            <Farms pools={vineyardPools} activesOnly={activesOnly} />
          </Box>
          <Box hidden={activeTab !== 'Winery'} mt={4}>
            <BoardroomCard />
          </Box>
          <Box hidden={activeTab !== 'Nodes'} mt={4}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <FormGroup style={{color: 'white'}}>
                  <FormControlLabel
                    control={<Switch color="secondary" checked={activesOnly} onChange={handleSwitchChange} />}
                    label="Active(s) only"
                  />
                </FormGroup>{' '}
              </Grid>
            </Grid>
            <Nodes pools={nodePools} activesOnly={activesOnly} />
          </Box>

          <Box hidden={activeTab !== 'Presses'} mt={4}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <FormGroup style={{color: 'white'}}>
                  <FormControlLabel
                    control={<Switch color="secondary" checked={activesOnly} onChange={handleSwitchChange} />}
                    label="Active(s) only"
                  />
                </FormGroup>{' '}
              </Grid>
            </Grid>
            <Presses pools={pressPools} activesOnly={activesOnly} />
          </Box>
        </div>
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
