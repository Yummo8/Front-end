import React from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import { Switch} from 'react-router-dom';

import HomeImage from '../../assets/img/background.jpg';
import { Grid , Container } from '@material-ui/core';



const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
  }
`;


const Roadmap: React.FC = () => {
  return (
    <Switch>
      <Page>
      <BackgroundImage />
      <Container>   
              <Grid item xs={12} md={12} lg={12} >     
                  <h1 style={{ fontSize: '80px', textAlign:'center' }}>ROADMAP</h1>   

                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>It's important we build lasting utility into Grape & Wine in order to create a sustainable long term project, to do so we will be building out the platform's functionality into other areas of DeFi. As Grape is pegged to MIM it allows us to use it in ways similar to how a stablecoin would such as for payments, borrowing & lending. <br></br><br></br>We're first & foremost a community led project & very receptive to suggestions as well as changes should the community see it as the best course of action. Below is where we'll be headed in the next year. </p>

                  <h1 style={{textAlign:'center', marginTop: '70px' }}>Q1</h1>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Grape & Wine Airdrop for dedicated supporters <span role={'img'} aria-label={'tick'}>✅</span></p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Renounce ownership of Grape contract <span role={'img'} aria-label={'tick'}>✅</span></p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Start marketing blast & influencer partnerships <span role={'img'} aria-label={'tick'}>✅</span></p> 
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Grape staking for Wine rewards <span role={'img'} aria-label={'tick'}>✅</span></p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- More autocompounder providers <span role={'img'} aria-label={'tick'}>✅</span></p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Implement Zap contract for LPs <span role={'img'} aria-label={'tick'}>✅</span></p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Strategy guides implemented on site <span role={'img'} aria-label={'tick'}>✅</span></p> 
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- User help guides in docs <span role={'img'} aria-label={'tick'}>✅</span></p>   
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Start weekly Grape burns from the DAO <span role={'img'} aria-label={'tick'}>✅</span></p>   
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Wine governance voting through snapshot <span role={'img'} aria-label={'tick'}>✅</span></p>      
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Integrate weekly Wine raffle on site <span role={'img'} aria-label={'tick'}>✅</span></p>                  
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- NFT drop for LPs & WINE hodlers providing exclusive access to new developments <span role={'img'} aria-label={'tick'}>✅</span></p> 
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Launchpad & partnerships with projects to give exclusive benefits for WINE holders <span role={'img'} aria-label={'tick'}>✅</span></p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Grape & Wine nodes (bonus feature) <span role={'img'} aria-label={'tick'}>✅</span></p>
                  

                  <h1 style={{textAlign:'center', marginTop: '70px' }}>Q2</h1>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- UI/UX website revamp (ongoing)<span role={'img'} aria-label={'tick'}>✅</span></p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Chainlink integrations <span role={'img'} aria-label={'tick'}>✅</span></p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Implement bonding to secure protocol owned liquidity <span role={'img'} aria-label={'tick'}>✅</span></p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- LP nodes (bonus feature) <span role={'img'} aria-label={'tick'}>✅</span></p>               
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- NFT based p2e game & staking <span role={'img'} aria-label={'tick'}>✅</span></p>

                  <h1 style={{textAlign:'center', marginTop: '70px' }}>Q3</h1>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Implement cross chain Grape liquidity</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Lending & borrowing platform including Grape & Wine as collateral</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Auto repaying loans using yielding strategies</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Leveraged positions</p> 
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Partner with projects in the ecosystem to improve token utilization (ongoing)<span role={'img'} aria-label={'tick'}>✅</span></p>
                  

                  <h1 style={{textAlign:'center', marginTop: '70px' }}>Q4</h1>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Dedicated mobile app for Grape Finance</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Partner with crypto payment gateways to accept Grape</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Partner with card provider</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Card payments using credit from collateral provided</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Payment rewards & cashback system</p>

              </Grid>
      </Container>
      </Page>
    </Switch>
  );
};


export default Roadmap;
