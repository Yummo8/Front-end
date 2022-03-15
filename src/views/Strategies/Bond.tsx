import React, {useCallback, useMemo, useEffect} from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useWallet} from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import PageHeader from '../../components/PageHeader';
import ExchangeCard from './components/ExchangeCard';
import styled from 'styled-components';
import Spacer from '../../components/Spacer';
import useBondStats from '../../hooks/useBondStats';
import useGrapeStats from '../../hooks/useGrapeStats';
import useRaffleStats from '../../hooks/useRaffleBalance';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
import {useTransactionAdder} from '../../state/transactions/hooks';
import ExchangeStat from './components/ExchangeStat';
import useBondsPurchasable from '../../hooks/useBondsPurchasable';
import {getDisplayBalance} from '../../utils/formatBalance';
import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN, DECIMALS_18 } from '../../grape-finance/constants';
import { Alert } from '@material-ui/lab';
import {ReactComponent as IconTelegram} from '../../assets/img/telegram.svg';
import {ReactComponent as IconDiscord} from '../../assets/img/discord.svg';
import HomeImage from '../../assets/img/background.jpg';
import zone1 from '../../assets/img/1.jpg';
import zone2 from '../../assets/img/2.jpg';
import zone3 from '../../assets/img/3.jpg';
import auto from '../../assets/img/Autocompounder.png';
import wampStrat from '../../assets/img/wamp-strat.jpg';
import hermesStrat from '../../assets/img/hermes-strat.png';
import { Grid , Box, Container } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Stats } from 'fs';


const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    paddingTop: '15px',
    paddingBottom: '15px',
    width: '100%',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    height: '1.3rem',
    fontFamily: 'superstar',
      [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  link: {
    width: '24px',
    height: '24px',
    display: 'inline',
    marginLeft: '20px',
  },

  img: {
    width: '24px',
    height: '24px',
  },
}));

const Bond: React.FC = () => {
  const {path} = useRouteMatch();
  const {account} = useWallet();
  const classes = useStyles();
  const grapeFinance = useGrapeFinance();
  const cashPrice = useCashPriceInLastTWAP();
  


  const bondScale = (Number(cashPrice) / 1e18).toFixed(2); 
  
  //const bondScale = 2;
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
                  <h2 style={{ fontSize: '80px', textAlign:'center' }}>Strategies</h2>   
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>Depending on the TWAP price of Grape there are different optimal strategies for protocol health. <br></br>All strategies can be found in our <a target={"_blank"} href="https://grapefinance.gitbook.io/grape-finance-docs/protocol/strategies" >docs here.</a></p>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>Grape TWAP: ${bondScale}</p>
                  <h2 style={{textAlign:'center', marginTop: '60px', paddingBottom: '50px' }}>Current Optimal Strategy</h2>
                  <img src={strat} width={'100%'} />     
                  <h2 style={{textAlign:'center', marginTop: '100px', paddingBottom: '50px' }}>Auto-Compounder Strategy</h2>
                  <img src={auto} width={'100%'} />   
                  <h2 style={{textAlign:'center', marginTop: '100px', paddingBottom: '50px' }}>Asgard DAO Multiplier Strategy</h2>
                  <img src={wampStrat} width={'100%'} />    
                  <h2 style={{textAlign:'center', marginTop: '100px', paddingBottom: '50px' }}>Hermes Dual Rewards Pool Strategy</h2>
                  <img src={hermesStrat} width={'100%'} />      
              </Grid>  
</Page>
</Switch>
  );
};

const StyledBond = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StyledStatsWrapper = styled.div`
  display: flex;
  flex: 0.8;
  margin: 0 20px;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80%;
    margin: 16px 0;
  }
`;

export default Bond;
