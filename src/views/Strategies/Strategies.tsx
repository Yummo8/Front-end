import React from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import { Switch } from 'react-router-dom';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
import HomeImage from '../../assets/img/background.jpg';
import zone1 from '../../assets/img/1.jpg';
import zone2 from '../../assets/img/2.jpg';
import zone3 from '../../assets/img/3.jpg';
import auto from '../../assets/img/Autocompounder.png';
import wampStrat from '../../assets/img/wamp-strat.jpg';
import { Grid } from '@material-ui/core';



const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
  }
`;


const Strategies: React.FC = () => {

  const cashPrice = useCashPriceInLastTWAP();

  const bondScale = (Number(cashPrice) / 1e18).toFixed(2); 
  
  let strat: string;

  if(Number(bondScale) >= 2){
    strat = zone1;
  }else if(Number(bondScale) < 2 && Number(bondScale) >= 1){
    strat = zone2;
  }else{
    strat = zone3;
  }
  

  return (   
<Switch>
<Page>
  <BackgroundImage />  
     <Grid item xs={12} md={12} lg={12} >     
                  <h1 style={{ fontSize: '80px', textAlign:'center' }}>Strategies</h1>   
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>Depending on the TWAP price of Grape there are different optimal strategies for protocol health. <br></br>All strategies can be found in our <a target={"_blank"} rel="noopener noreferrer" href="https://grapefinance.gitbook.io/grape-finance-docs/protocol/strategies" >docs here.</a></p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>Grape TWAP: ${bondScale}</p>
                  <h1 style={{textAlign:'center', marginTop: '60px', paddingBottom: '50px' }}>Current Optimal Strategy</h1>
                  <img src={strat} alt={'Current Optimal Strategy'} width={'100%'} />     
                  <h1 style={{textAlign:'center', marginTop: '100px', paddingBottom: '50px' }}>Auto-Compounder Strategy</h1>
                  <img src={auto} alt={'Auto compound Strategy'} width={'100%'} />   
                  <h1 style={{textAlign:'center', marginTop: '100px', paddingBottom: '50px' }}>Asgard DAO Multiplier Strategy</h1>
                  <img src={wampStrat} alt={'WAMP Strategy'} width={'100%'} />    
                  
              </Grid>  
</Page>
</Switch>
  );
};


export default Strategies;
