import React from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import { Switch} from 'react-router-dom';

import HomeImage from '../../assets/img/background.jpg';
import { Grid , Container } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%);
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
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Grape & Wine Airdrop for dedicated supporters ✅</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Renounce ownership of Grape contract ✅</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Start marketing blast & influencer partnerships ✅</p> 
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Grape staking for Wine rewards ✅</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- More autocompounder providers ✅</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Implement Zap contract for LPs ✅</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Strategy guides implemented on site ✅</p> 
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- User help guides in docs ✅</p>   
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Start weekly Grape burns from the DAO ✅</p>   
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Wine governance voting through snapshot ✅</p>      
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Integrate weekly Wine raffle on site ✅</p>                  
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- NFT drop for LPs & WINE hodlers providing exclusive access to new developments ✅</p> 
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Launchpad & partnerships with projects to give exclusive benefits for WINE holders ✅</p>
                  
                  

                  <h1 style={{textAlign:'center', marginTop: '70px' }}>Q2</h1>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- UI/UX website revamp (ongoing)✅</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Chainlink integrations ✅</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Implement bonding to secure protocol owned liquidity ✅</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Lending & borrowing platform including Grape & Wine as collateral</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Auto repaying loans using yielding strategies</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Leveraged positions</p>                
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- NFT based p2e game & staking</p>

                  <h1 style={{textAlign:'center', marginTop: '70px' }}>Q3</h1>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Implement cross chain Grape liquidity</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Integrate Grape on large lending platforms as a stablecoin</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Yield strategies & aggregation of these integrations cross chain</p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Partner with projects in the ecosystem to improve token utilization (ongoing)✅</p>
                  

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
