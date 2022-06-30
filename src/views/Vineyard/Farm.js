import React from 'react';
import {useWallet} from 'use-wallet';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Bank from '../Bank';

import {Box, Container, Typography, Grid} from '@material-ui/core';

import {Alert} from '@material-ui/lab';

import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import FarmCard from './FarmCard';
import {createGlobalStyle} from 'styled-components';

import useBanks from '../../hooks/useBanks';

import HomeImage from '../../assets/img/background.jpg';
const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-size: cover !important;
    background: radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%);
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
              <h1 style={{ fontSize: '80px', textAlign:'center', color: '#fff' }}>Vineyard</h1>             
              
              <Box mt={5}>
              
                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 2).length === 0}>
        
                  <Alert variant="filled" severity="warning">
                    Follow the <a style={{color: '#fff'}} href="http://grapefinance.app/strategies" >Strategies guide here</a>. If autocompounding be sure to use <a style={{color: '#fff'}} href="https://magik.farm/#/avax" >Magik Farms</a> to help buy back and burn the peg! Sticking to the current strategy helps support the protocol which in turn helps you to continue to earn rewards!
                  </Alert>

                  <h1 style={{ fontSize: '50px', textAlign:'left', color: '#fff', marginTop: '40px' }}>Swapsicle Pools</h1> 
                      <Grid container spacing={3} style={{marginTop: '0px'}}>
                      {activeBanks
                      .filter((bank) => bank.sectionInUI === 6)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <FarmCard bank={bank} />
                        </React.Fragment>
                      ))}

                          </Grid>

                  <h1 style={{ fontSize: '50px', textAlign:'left', color: '#fff', marginTop: '40px' }}>Trader Joe Pools</h1> 
                  <Grid container spacing={3} style={{marginTop: '0px'}}>
                    
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 2)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <FarmCard bank={bank} />
                        </React.Fragment>
                      ))}
                      </Grid>



                      <h1 style={{ fontSize: '50px', textAlign:'left', color: '#fff', marginTop: '40px' }}>Single Stake Pools</h1> 
                      <Grid container spacing={3} style={{marginTop: '0px', marginBottom: '40px'}}>
                      {activeBanks
                      .filter((bank) => bank.sectionInUI === 7)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <FarmCard bank={bank} />
                        </React.Fragment>
                      ))}

                          </Grid>
                </div>



                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 1).length === 0}>
                  <Typography color="textPrimary" variant="h4" gutterBottom style={{marginTop: '100px', color: '#fff'}}>
                    Grape Reward Farms (Finished)
                  </Typography>
                  <Alert variant="filled" severity="warning">             
                     
                      GRAPE rewards have finished please unstake from these pools.
                  
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
                    Genesis Pools (Finished)
                  </Typography>
                  <Alert variant="filled" severity="warning">
                    Please remove funds from genesis farms below.
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
