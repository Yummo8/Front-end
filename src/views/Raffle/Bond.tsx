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
import useBombStats from '../../hooks/useBombStats';
import useRaffleStats from '../../hooks/useRaffleBalance';
import useBombFinance from '../../hooks/useBombFinance';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
import {useTransactionAdder} from '../../state/transactions/hooks';
import ExchangeStat from './components/ExchangeStat';
import useBondsPurchasable from '../../hooks/useBondsPurchasable';
import {getDisplayBalance} from '../../utils/formatBalance';
import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN, DECIMALS_18 } from '../../bomb-finance/constants';
import { Alert } from '@material-ui/lab';
import {ReactComponent as IconTelegram} from '../../assets/img/telegram.svg';
import {ReactComponent as IconDiscord} from '../../assets/img/discord.svg';
import HomeImage from '../../assets/img/background.jpg';
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
  const bombFinance = useBombFinance();
  const addTransaction = useTransactionAdder();
  
  const raffleStats = useRaffleStats(account);


  const grapePrice = useMemo(
    () => (raffleStats ? Number(raffleStats.tokenInFtm).toFixed(2) : null),
    [raffleStats],
  );

  const raffleBals = useMemo(
    () => (raffleStats ? Number(raffleStats.totalSupply).toFixed(0) : null),
    [raffleStats],
  );

  const handleBuyBonds = useCallback(
    async (amount: string) => {
      const tx = await bombFinance.sendGrape(amount);
      addTransaction(tx, {
        summary: `Send ${Number(amount).toFixed(2)} GRAPE to the raffle ${amount} `,
      });
    },
    [bombFinance, addTransaction],
  );

  const handleRedeemBonds = useCallback(
    async (amount: string) => {
      const tx = await bombFinance.redeemBonds(amount);
      addTransaction(tx, {summary: `Redeem ${amount} GBOND`});
    },
    [bombFinance, addTransaction],
  );

  const raffleOpen = true;
  

  return (   
<Switch>
<Page>
  <BackgroundImage />
  {!!account ? (
    <>
     <Grid item xs={12} md={12} lg={12} >     
                  <h2 style={{ fontSize: '80px', textAlign:'center' }}>Weekly WINE Raffle</h2>   

                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>Every week we'll run a raffle for our community where you have the chance to win WINE tokens just by sending in your freely earned Grape rewards.<br></br> <br></br> 1 Grape =  1 entry and there are unlimited entries per address, the more Grape you send the more chance you have to win. After the winner is chosen all Grape sent to the address will be burnt! The winner will be chosen at random.</p>

                  <h2 style={{textAlign:'center', marginTop: '60px' }}>Q1</h2>
                  <p style={{ fontSize: '20px', textAlign:'center', color: '#fff' }}>- Grape & Wine Airdrop for dedicated supporters ✅</p>
                  <p>Grape Price: ${grapePrice}</p>
                 <p>Total Grape Entered: {raffleBals}</p>
                 <p>Your account: {account}</p>
              </Grid>
    
      <StyledBond>
        <StyledCardWrapper>
          <ExchangeCard
            action="Enter Raffle"
            fromToken={bombFinance.BOMB}
            fromTokenName="GRAPE"
            toToken={bombFinance.BBOND}
            toTokenName="GBOND"
            priceDesc={
              raffleOpen
                ? 'Raffle is open! 1 GRAPE = 1 Entry'
                : 'Raffle is currently closed'
            }
            onExchange={handleBuyBonds}
          />

        </StyledCardWrapper>
      </StyledBond>
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
