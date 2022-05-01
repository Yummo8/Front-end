import React, { useCallback, useMemo } from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import PageHeader from '../../components/PageHeader';
import ExchangeCard from './components/ExchangeCard';
import styled from 'styled-components';
import Spacer from '../../components/Spacer';
import useBondStats from '../../hooks/useBondStats';
import useGrapeStats from '../../hooks/useGrapeStats';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
import { useTransactionAdder } from '../../state/transactions/hooks';
import ExchangeStat from './components/ExchangeStat';
import useTokenBalance from '../../hooks/useTokenBalance';
import useBondsPurchasable from '../../hooks/useBondsPurchasable';
import { getDisplayBalance } from '../../utils/formatBalance';
import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN, DECIMALS_18 } from '../../grape-finance/constants';
import { Alert } from '@material-ui/lab';
import { ReactComponent as IconTelegram } from 'jsx:../../assets/img/telegram.svg';
import { ReactComponent as IconDiscord } from 'jsx:../../assets/img/discord.svg';
import HomeImage from '../../assets/img/background.jpg';
import { Grid, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const classes = useStyles();
  const grapeFinance = useGrapeFinance();
  const addTransaction = useTransactionAdder();
  const bondStat = useBondStats();
  const grapeStat = useGrapeStats();
  const cashPrice = useCashPriceInLastTWAP();

  const bondsPurchasable = useBondsPurchasable();

  //const bondBalance = useTokenBalance(grapeFinance?.GBOND);
  //const scalingFactor = useMemo(() => (cashPrice ? Number(cashPrice) : null), [cashPrice]);

  return (
    <Switch>
      <Page>
        <BackgroundImage />
        <Container>
          <Grid item xs={12} md={12} lg={12}>
            <h2 style={{ fontSize: '80px', textAlign: 'center' }}>ROADMAP</h2>

            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              It's important we build lasting utility into Grape & Wine in order to create a sustainable long term
              project, to do so we will be building out the platform's functionality into other areas of DeFi. As Grape
              is pegged to MIM it allows us to use it in ways similar to how a stablecoin would such as for payments,
              borrowing & lending. <br></br>
              <br></br>We're first & foremost a community led project & very receptive to suggestions as well as changes
              should the community see it as the best course of action. Below is where we'll be headed in the next year.{' '}
            </p>

            <h2 style={{ textAlign: 'center', marginTop: '60px' }}>Q1</h2>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Grape & Wine Airdrop for dedicated supporters ✅
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Renounce ownership of Grape contract ✅
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Start marketing blast & influencer partnerships ✅
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>- Grape staking for Wine rewards ✅</p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>- More autocompounder providers ✅</p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>- Implement Zap contract for LPs ✅</p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Strategy guides implemented on site ✅
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>- User help guides in docs ✅</p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Start weekly Grape burns from the DAO ✅
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Wine governance voting through snapshot ✅
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Integrate weekly Wine raffle on site ✅
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - NFT drop for LPs & WINE hodlers providing exclusive access to new developments ✅
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Launchpad & partnerships with projects to give exclusive benefits for WINE holders ✅
            </p>

            <h2 style={{ textAlign: 'center', marginTop: '60px' }}>Q2</h2>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>- UI/UX website revamp</p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>- Chainlink integrations</p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Implement bonding to secure protocol owned liquidity
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Lending & borrowing of Grape & Wine on site
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Auto repaying loans using yielding strategies
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>- Leveraged positions</p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>- NFT based p2e game & staking</p>

            <h2 style={{ textAlign: 'center', marginTop: '60px' }}>Q3</h2>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Implement cross chain Grape liquidity
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Integrate Grape on large lending platforms as a stablecoin
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Yield strategies & aggregation of these integrations cross chain
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Partner with various projects in the ecosystem to improve token utilization in farms, lending/borrowing
              & exchange
            </p>

            <h2 style={{ textAlign: 'center', marginTop: '60px' }}>Q4</h2>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Dedicated mobile app for Grape Finance
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Partner with crypto payment gateways to accept Grape
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>- Partner with card provider</p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>
              - Card/NFC payments using credit from collateral provided
            </p>
            <p style={{ fontSize: '20px', textAlign: 'center', color: '#fff' }}>- Payment rewards & cashback system</p>
          </Grid>
        </Container>
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
