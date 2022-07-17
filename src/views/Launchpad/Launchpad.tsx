import React from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import { Switch} from 'react-router-dom';
import HomeImage from '../../assets/img/background.jpg';
import { Grid , Container, Card } from '@material-ui/core';

import asgard from '../../assets/img/asgard.jpg';
import hermes from '../../assets/img/hermes.png';

const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
  }
`;



const Launchpad: React.FC = () => {

  return (
    <Switch>
      <Page>
      <BackgroundImage />
      <Container>   
              <Grid item xs={12} md={12} lg={12} >     
              
                  <h2 style={{ fontSize: '80px', textAlign:'center' }}>Launchpad</h2>   
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>We're working hard to secure partnerships with the best up and coming projects on Avalanche to give our WINE holders and LPs exclusive access and unique benefits. Our launchpad will include access to whitelists, IDOs, membership rights and other unique deals we think will benefit the community.</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>The Grape DAO plans on building a strong community led launchpad to foster growth on Avalanche. We'll be partnering with projects that are building something new, unique and beneficial to the ecosystem to help bolster their launch, their community and achieve their roadmap goals.</p>   
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>If you are launching a new and exciting project on Avalanche and would like to be part of our launchpad get in touch with the core team through our <a href="https://discord.gg/mZ4QrZwH5M" rel="noopener noreferrer" target="_blank" >Discord</a> or <a href="https://t.me/GrapeDefi" rel="noopener noreferrer" target="_blank" >Telegram</a>.</p> 
                  <h2 style={{textAlign:'center', marginTop: '60px' }}>Current Partnerships</h2>

              
                                        
              </Grid>
        <Grid container justify="center" spacing={3} style={{marginTop: '10px'}}>
          <Grid item xs={12} sm={12} lg={6} >  
            <Card style={{padding:'30px'}}>
                  <a href='https://asgarddao.fi/' rel="noopener noreferrer" target='_blank'><h2 style={{textAlign:'center', fontSize: '35px' }}>Asgard</h2></a>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#000' }}>We're happy to announce our partnership with Asgard! They are an unique GameFi DAO building an exciting MMORPG P2E game.</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#000' }}>WINE holders will be able to pledge their tokens to the Asgard DAO in return for VOLT, this can then be locked in their forge to get AMP & then wrapped. The wrapped token WAMP can then be staked in the Vineyard to earn more WINE!</p>
                  <div style={{width: '350px', margin: '0 auto'}}>
                        <a href='https://asgarddao.fi/' rel="noopener noreferrer" target='_blank'>
                        <img alt="Asgard DAO" style={{ width: '350px'}} src={asgard} />
                        </a>
                      </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>  
          <Card style={{padding:'30px'}}>
                  <a href='https://hermesfinance.app/' rel="noopener noreferrer" target='_blank'><h2 style={{textAlign:'center', fontSize: '35px' }}>Hermes Finance</h2></a>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#000' }}>We're pleased to announce our partnership with Hermes! They are a fellow algorithmic protocol pegged to Avax with one of the strongest communities around.</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#000' }}>Together we'll create a new pair HSHARE-WINE which then can be staked on either of our sites to earn two different reward tokens at the same time! Reward tokens will also vary & include both native & non-native rewards.</p>
                  <div style={{width: '276px', margin: '0 auto'}}>
                        <a href='https://hermesfinance.app/' rel="noopener noreferrer" target='_blank'>
                        <img alt="Hermes Finance" style={{ width: '276px'}} src={hermes} />
                        </a>
                      </div>
            </Card>
          </Grid>
                   
        </Grid>
      </Container>
      </Page>
    </Switch>
  );
};


export default Launchpad;
