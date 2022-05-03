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
import Collage from '../../assets/img/collage.jpg';
import { Box, Container, Card, CardContent, Typography, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Stats } from 'fs';
import LaunchCountdown from '../../components/LaunchCountdown';

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
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    }},
}));

const Bond: React.FC = () => {

  const startDate = new Date('2022-4-30 3:00:00Z');
  const endDate = new Date('2022-5-3 4:00:00Z');
  const raffleAddress = '0x37219231a957e09F6e674B218043FdF1C5145F68';



  const {path} = useRouteMatch();
  const {account} = useWallet();
  const classes = useStyles();
  const grapeFinance = useGrapeFinance();
  const addTransaction = useTransactionAdder();
  const raffleStats = useRaffleStats(account, raffleAddress);



  const startTime = Number(startDate); 
  const endTime = Number(endDate); 
  
  const raffleBals = useMemo(
    () => (raffleStats ? Number(raffleStats.totalSupply).toFixed(0) : null),
    [raffleStats],
  );

  const userBals = useMemo(
    () => (raffleStats ? Number(raffleStats.priceInDollars).toFixed(0) : null),
    [raffleStats],
  );

  const handleBuyBonds = useCallback( 
    async (amount: string) => { 
      const tx = await grapeFinance.sendGrape(amount, raffleAddress);
        addTransaction(tx, {
          summary: `Send ${Number(amount).toFixed(2)} MIM to the raffle ${amount} `,
        });
    
    },
    [grapeFinance, addTransaction],
  );

  return (   
<Switch>
<Page>
  <BackgroundImage />
  {!!account ? (
    <>
    
     <Grid item xs={12} md={12} lg={12} >     
        <h2 style={{ fontSize: '80px', textAlign:'center' }}>Partner NFT Raffle</h2>   
        <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>This isn't just your average raffle, this raffle gives you the chance to win NFTs from our awesome partners! Each with utility that goes into a reward pool for 3 winners to choose from! To enter simply click the enter raffle button below to send 5 MIM to the raffle address or manually send MIM to the raffle address shown below. </p>  
        <p style={{fontSize: '20px', textAlign:'center', color: '#fff' }}>Raffle address: {raffleAddress}</p>
        <h2 style={{ fontSize: '40px', textAlign:'center' }}>Raffle Details</h2>
        <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>5 MIM Per Entry, Unlimited Entries Per Wallet!<br></br>
        3 Winners will be selected!<br></br>
        1st- Picks 3 NFTs from reward pool <br></br>
        2nd- Picks 2 NFTs from reward pool <br></br>
        3rd- Picks 1 NFT from reward pool </p> 
        
        <Grid container justify="center" spacing={3} style={{marginTop: '10px', marginBottom: '20px'}}><img style={{width: '450px'}} src={Collage}/></Grid>

        <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>Many thanks to our awesome partners for donating NFTs!<br></br>
        <a target={'_blank'} href={'https://www.eltacofinance.com/'}>El Taco Finance</a><br></br>
        <a target={'_blank'} href={'https://magik.finance/'}>Magik Finance</a><br></br>
        <a target={'_blank'} href={'https://app.mvfinance.club/'}>Miniverse Finance</a><br></br>
        </p>
        
      </Grid>
      {Date.now() > endTime ? <h2 style={{ fontSize: '40px', textAlign:'center' }}>Raffle Closed</h2> : <h2 style={{ fontSize: '60px', textAlign:'center' }}>Raffle Open</h2>}
      {Date.now() < startTime ? <LaunchCountdown deadline={startDate} description={'Raffle Starts In'} descriptionLink={''}></LaunchCountdown> : <LaunchCountdown deadline={endDate} description={'Raffle Closes In'} descriptionLink={''}></LaunchCountdown>}
       
    <Grid container justify="center" spacing={3} style={{marginTop: '10px'}}>
        <Grid item xs={12} sm={12} lg={6}>  
            <Card>
              <h2 style={{textAlign:'center', marginTop: '10px' }}>Raffle Stats</h2>                
              <p style={{textAlign:'center'}}>Total MIM entered: {raffleBals}</p>         
              <p style={{textAlign:'center'}}>Your MIM entered: {userBals}</p>
              <p style={{textAlign:'center'}}>Your Raffle entries: {Number(userBals)/5}</p>
              <p style={{textAlign:'center'}}>Your account: {account}</p>
            </Card>
          </Grid>
        <Grid item xs={12} sm={12} lg={6}>  
        <StyledBond>
          <StyledCardWrapper>
            <ExchangeCard
              action="Enter Raffle"
              fromToken={grapeFinance.MIM}
              fromTokenName="MIM"
              toToken={grapeFinance.GBOND}
              toTokenName="GBOND"
              priceDesc={
                Date.now() < endTime && Date.now() > startTime
                  ? 'Raffle is open! 5 MIM = 1 Entry'
                  : 'Raffle is currently closed'
              }
              disabled={Date.now() < endTime && Date.now() > startTime ? false : true}
              onExchange={handleBuyBonds}
            />
          </StyledCardWrapper>
        </StyledBond>
        </Grid>
      </Grid>

    </>
  ) : (
    <UnlockWallet />
  )}
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
