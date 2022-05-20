import React, {useCallback, useMemo} from 'react';
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
import useGrapeFinance from '../../hooks/useGrapeFinance';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
import {useTransactionAdder} from '../../state/transactions/hooks';
import ExchangeStat from './components/ExchangeStat';
import useTokenBalance from '../../hooks/useTokenBalance';
import useBondsPurchasable from '../../hooks/useBondsPurchasable';
import {getDisplayBalance} from '../../utils/formatBalance';
import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN, DECIMALS_18 } from '../../grape-finance/constants';
import { Alert } from '@material-ui/lab';
import { roundAndFormatNumber } from '../../0x';

import HomeImage from '../../assets/img/background.jpg';
import { Grid , Box } from '@material-ui/core';
const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%);
  }
`;

const Bond: React.FC = () => {
  const {path} = useRouteMatch();
  const {account} = useWallet();
  const grapeFinance = useGrapeFinance();
  const addTransaction = useTransactionAdder();
  const bondStat = useBondStats();
  const grapeStat = useGrapeStats();
  const cashPrice = useCashPriceInLastTWAP();


  const bondsPurchasable = useBondsPurchasable();

  const bondBalance = useTokenBalance(grapeFinance?.GBOND);
  //const scalingFactor = useMemo(() => (cashPrice ? Number(cashPrice) : null), [cashPrice]);

  const handleBuyBonds = useCallback(
    async (amount: string) => {
      const tx = await grapeFinance.buyBonds(amount);
      addTransaction(tx, {
        summary: `Buy ${Number(amount).toFixed(2)} GBOND with ${amount} GRAPE`,
      });
    },
    [grapeFinance, addTransaction],
  );

  const handleRedeemBonds = useCallback(
    async (amount: string) => {
      const tx = await grapeFinance.redeemBonds(amount);
      addTransaction(tx, {summary: `Redeem ${amount} GBOND`});
    },
    [grapeFinance, addTransaction],
  );

  const isBondRedeemable = useMemo(() => cashPrice.gt(BOND_REDEEM_PRICE_BN), [cashPrice]);
  const isBondPurchasable = useMemo(() => Number(bondStat?.tokenInFtm) < 1.01, [bondStat]);
  
  const isBondPayingPremium = useMemo(() => Number(bondStat?.tokenInFtm) >= 1.1, [bondStat]);
  const grapeReserves = useMemo(() => (Number(bondStat?.treasuryGrapes) / 1e18).toFixed(0), [bondStat]);
  const bondSupply = useMemo(() => bondStat?.circulatingSupply, [bondStat]);
  const bondScale = (Number(cashPrice) / 1e18).toFixed(2); 



  return (
    <Switch>
      <Page>
        <BackgroundImage />
        {!!account ? (
          <>
            <Route exact path={path}>
              <PageHeader icon={'🏦'} title="Buy &amp; Redeem Bonds" subtitle="Earn premiums upon redemption" />
            </Route>
         


              <Box mt={5}>
                <Grid item xs={12} sm={12} justify="center" style={{ margin: '18px', display: 'flex' }}>
                <Alert variant="filled" severity="error">
                    <b>
                      Bonds are emitted & premiums redeemable based on last epoch TWAP prices not the current TWAP!</b>
              </Alert>
            
              </Grid>
              </Box>
          
          
            <StyledBond>
              <StyledCardWrapper>
                <ExchangeCard
                  action="Purchase"
                  fromToken={grapeFinance.GRAPE}
                  fromTokenName="GRAPE"
                  toToken={grapeFinance.GBOND}
                  toTokenName="GBOND"
                  priceDesc={
                    !isBondPurchasable
                      ? 'GRAPE is over peg'
                      : getDisplayBalance(bondsPurchasable, 18, 4) + ' GBOND available for purchase'
                  }
                  onExchange={handleBuyBonds}

                />
              </StyledCardWrapper>
              <StyledStatsWrapper>
                <ExchangeStat
                  tokenName="1 GRAPE"
                  description="Last-Hour TWAP Price"
                  //price={Number(grapeStat?.tokenInFtm).toFixed(4) || '-'}
                 price={bondScale || '-'}

                />
                <Spacer size="md" />
                <ExchangeStat
                  tokenName="1 GBOND"
                  description="Bond Price"
                  price={Number(bondStat?.tokenInFtm).toFixed(2) || '-'}
                />
          
                <Box mt={5}>
                <Grid item xs={12} sm={12} justify="center" style={{ display: 'flex' }}>
                <Alert variant='filled' severity="error">
                  <b>Grape Reserves:</b> {bondStat?.treasuryGrapes ? roundAndFormatNumber(Number(grapeReserves), 0) : '-'}<br></br>
                  <b>Bond supply:</b> {bondStat?.circulatingSupply ? roundAndFormatNumber(Number(bondSupply), 0) : '-'} <br></br>
                  <b>When reserves are {'>'} bond supply debt phase has finished</b>
              </Alert>
            
              </Grid>
              </Box>
              </StyledStatsWrapper>
              <StyledCardWrapper>
                <ExchangeCard
                  action="Redeem"
                  fromToken={grapeFinance.GBOND}
                  fromTokenName="GBOND"
                  toToken={grapeFinance.GRAPE}
                  toTokenName="GRAPE"
                  priceDesc={`${getDisplayBalance(bondBalance)} GBOND Available in wallet`}
                  onExchange={handleRedeemBonds}
                 
                  disabledDescription={!isBondRedeemable ? `Enabled when 1 GRAPE > $${BOND_REDEEM_PRICE}` : null}
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
