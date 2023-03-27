//@ts-nocheck
import React, {useState, useEffect, useRef} from 'react';
import {useWallet} from 'use-wallet';
import {Box, Grid, Typography, Switch, FormGroup, FormControlLabel} from '@material-ui/core';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import useBanks from '../../hooks/useBanks';
import useBank from '../../hooks/useBank';

import grapeImg from '../../assets/img/grape.png';
// import nodesImg from '../../assets/img/gnode.png';
import wineImg from '../../assets/img/gshare.png';
import soda from '../../assets/img/soda.png';

import Farms from './Farms';
// import Nodes from './Nodes';
import BoardroomCard from './BoardroomCard';
import Presses from './Presses';
import {useLocation} from 'react-router-dom';

import DashboardTop from './DashboardTop';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Presses');

  const {account} = useWallet();
  // const grapeFinance = useGrapeFinance();
  const [banks] = useBanks();
  const location = useLocation();
  const vineyardPools = banks.filter(
    (bank) => (!bank.finished && bank.sectionInUI === 2) || bank.sectionInUI === 6 || bank.sectionInUI === 7,
  );
  const pressPools = banks.filter((bank) => !bank.finished && bank.sectionInUI === 8);

  const tabsRef = useRef(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash === '#farms') {
      tabsRef?.current?.scrollIntoView();
      setActiveTab('Farms');
    } else if (hash === '#winery') {
      tabsRef?.current?.scrollIntoView();
      setActiveTab('Winery');
    } else if (hash === '#nodes') {
      tabsRef?.current?.scrollIntoView();
      setActiveTab('Nodes');
    } else if (hash === '#presses') {
      tabsRef?.current?.scrollIntoView();
      setActiveTab('Presses');
    }
  }, [location]);

  const [activesOnly, setActivesOnly] = React.useState(false);
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivesOnly(event.target.checked);
  };

  return (
    <Page>
      <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
        Dashboard
      </Typography>
      {!!account ? (
        <div>
          <DashboardTop />

          <div
            ref={tabsRef}
            style={{height: '3px', backgroundColor: '#930993', borderRadius: '5px', marginTop: '40px'}}
          ></div>
          <Box mt={4}>
            <Grid container justifyContent={'center'} spacing={0} className="dashboard-tabs">
              <Grid item>
                <div
                  onClick={() => {
                    window.history.replaceState(
                      {additionalInformation: '/dashboard#presses'},
                      'Dashboard: Presses',
                      '/dashboard#presses',
                    );
                    setActiveTab('Presses');
                  }}
                  className={
                    activeTab === 'Presses' ? 'button-first dashboard-tab-item-active' : 'button-first dashboard-tab-item'
                  }
                >
                  <Grid container justifyContent="center" alignItems="center" className="p2">
                    <Grid item>
                      <img src={soda} alt="Press" height={25} width={25} style={{verticalAlign: 'text-bottom'}} />
                    </Grid>
                    <Grid item style={{paddingLeft: '5px'}}>
                      PRESSES
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div
                  onClick={() => {
                    window.history.replaceState(
                      {additionalInformation: '/dashboard#farms'},
                      'Dashboard: Farms',
                      '/dashboard#farms',
                    );
                    setActiveTab('Farms');
                  }}
                  className={
                    activeTab === 'Farms' ? 'dashboard-tab-item-active' : 'dashboard-tab-item'
                  }
                >
                  <Grid container justifyContent="center" alignItems="center" className="p2">
                    <Grid item>
                      <img src={grapeImg} alt="Grape" height={25} width={25} style={{verticalAlign: 'text-bottom'}} />
                    </Grid>
                    <Grid item style={{paddingLeft: '5px'}}>
                      VINEYARD
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div
                  onClick={() => {
                    window.history.replaceState(
                      {additionalInformation: '/dashboard#winery'},
                      'Dashboard: Winery',
                      '/dashboard#winery',
                    );
                    setActiveTab('Winery');
                  }}
                  className={activeTab === 'Winery' ? 'button-last dashboard-tab-item-active' : 'button-last dashboard-tab-item'}
                >
                  <Grid container justifyContent="center" alignItems="center" className="p2">
                    <Grid item>
                      <img src={wineImg} alt="Wine" height={25} width={25} style={{verticalAlign: 'text-bottom'}} />
                    </Grid>
                    <Grid item style={{paddingLeft: '5px'}}>
                      WINERY
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              {/* <Grid item>
                <div
                  onClick={() => {
                    window.history.replaceState(
                      {additionalInformation: '/dashboard#nodes'},
                      'Dashboard: Nodes',
                      '/dashboard#nodes',
                    );
                    setActiveTab('Nodes');
                  }}
                  className={activeTab === 'Nodes' ? 'dashboard-tab-item-active' : 'dashboard-tab-item'}
                >
                  <Grid container justifyContent="center" alignItems="center" className="p2">
                    <Grid item>
                      <img src={nodesImg} alt="Node" height={25} width={25} style={{verticalAlign: 'text-bottom'}} />
                    </Grid>
                    <Grid item style={{paddingLeft: '7px'}}>
                      NODES
                    </Grid>
                  </Grid>
                </div>
              </Grid> */}
            </Grid>
          </Box>

          <Grid container justifyContent="space-between" alignItems="center" style={{marginTop: '20px'}}>
            <Grid item>
              <FormGroup style={{color: 'white'}}>
                <FormControlLabel
                  control={<Switch color="secondary" checked={activesOnly} onChange={handleSwitchChange} />}
                  label="Active(s) only"
                />
              </FormGroup>{' '}
            </Grid>
            {/* <Grid item>
              {vineyardPoolsWithFilters.length > 0 ? (
                <FormControl variant="outlined" sx={{m: 1, minWidth: 150}} color="secondary">
                  <InputLabel style={{color: '#fcfcfc'}} id="demo-simple-select-label">
                    Sort By
                  </InputLabel>
                  <Select
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5) !important',

                      color: 'secondary',
                      '& .MuiInputBase-root': {
                        color: '#fcfcfc',
                      },
                    }}
                    id="demo-simple-select"
                    value={sortBy}
                    label="Sort By"
                    onChange={handleSortByChange}
                  >
                     <MenuItem value="depositedInDollars">Deposited</MenuItem>
                    <MenuItem value="rewardsInDollars">Rewards</MenuItem> 
                    <MenuItem value="dailyAPR">Daily APR</MenuItem>
                    <MenuItem value="tvl">TVL</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <span className="secondary-color">Loading filters</span>
              )}
            </Grid> */}
          </Grid>

          <Box hidden={activeTab !== 'Farms'} mt={2}>
            <Farms pools={vineyardPools} activesOnly={activesOnly} />
          </Box>
          <Box hidden={activeTab !== 'Winery'} mt={2}>
            <BoardroomCard />
          </Box>
          {/* <Box hidden={activeTab !== 'Nodes'} mt={2}>
            <Nodes pools={nodePools} activesOnly={activesOnly} />
          </Box> */}

          <Box hidden={activeTab !== 'Presses'} mt={2}>
            <Presses pools={pressPools} activesOnly={activesOnly} />
          </Box>
        </div>
      ) : (
        <>
          <UnlockWallet />
        </>
      )}
    </Page>
  );
};

export default Dashboard;
