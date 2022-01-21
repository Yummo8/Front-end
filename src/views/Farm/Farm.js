import React from 'react';
import {useWallet} from 'use-wallet';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Bank from '../Bank';

import {Box, Container, Typography, Grid} from '@material-ui/core';

import {Alert} from '@material-ui/lab';

import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import FarmCard from './FarmCard';
import FarmImage from '../../assets/img/farm.png';
import {createGlobalStyle} from 'styled-components';

import useBanks from '../../hooks/useBanks';
import LaunchCountdown from '../../components/LaunchCountdown';
import HomeImage from '../../assets/img/background.jpg';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const Farm = () => {
  const [banks] = useBanks();
  const {path} = useRouteMatch();
  const {account} = useWallet();
  const activeBanks = banks.filter((bank) => !bank.finished);
  
  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <BackgroundImage />
          {!!account ? (
            <Container maxWidth="lg">
              <h2 style={{ fontSize: '80px', textAlign:'center' }}>Vineyard</h2>             
              
              <Box mt={5}>
              
                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 2).length === 0}>
                <Typography color="textPrimary" variant="h4" gutterBottom style={{marginTop: '20px', color: '#fff'}}>
                    WINE Reward Farms
                  </Typography>
                  <Alert variant="filled" severity="info">             
                     
                      WINE rewards start Jan 16th 2022 and will continue running for 370 days.
                  
                  </Alert> 
                  <Grid container spacing={3} style={{marginTop: '20px'}}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 2)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <FarmCard bank={bank} />
                        </React.Fragment>
                      ))}
                      </Grid>
                </div>

                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 1).length === 0}>
                  <Typography color="textPrimary" variant="h4" gutterBottom style={{marginTop: '20px', color: '#fff'}}>
                    Grape Reward Farms (Now Closed)
                  </Typography>
                  <Alert variant="filled" severity="warning">             
                     
                      GRAPE rewards have finished early to keep GRAPE above peg during our bootstrap, please unstake from these pools. NO REWARDS ARE LOST THEY WILL BE SENT TO YOUR WALLET WHEN YOU UNSTAKE!
                  
                  </Alert>
                  <Grid container spacing={3} style={{marginTop: '20px', display: 'flex', alignItems: 'center'}}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 1)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <FarmCard bank={bank} />
                        </React.Fragment>
                      ))}
                  </Grid>
                </div>

                <Grid hidden={activeBanks.filter((bank) => bank.sectionInUI === 0).length === 0}>
                  
                  <Typography color="textPrimary" variant="h4" gutterBottom style={{marginTop: '20px', color: '#fff'}}>
                    Genesis Pools are finished
                  </Typography>
                  <Alert variant="filled" severity="warning">
                    Please remove funds from genesis farms below and stake into the reward farms above.
                  </Alert>
                  {/*<Alert variant="filled" severity="warning">
                    Genesis pools have ended. Please claim all rewards and remove funds from Genesis pools.
                      </Alert>*/}
                  <Grid container spacing={3} style={{marginTop: '20px'}}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 0)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <FarmCard bank={bank} />
                        </React.Fragment>
                      ))}
                  </Grid>
                </Grid>
              </Box>
            </Container>
          ) : (
            <UnlockWallet />
          )}
        </Route>
        <Route path={`${path}/:bankId`}>
          <BackgroundImage />
          <Bank />
        </Route>
      </Page>
    </Switch>
  );
};

export default Farm;
