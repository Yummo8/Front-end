import React, {useCallback, useMemo, useState} from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useWallet} from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import ExchangeCard from './components/ExchangeCard';
import styled from 'styled-components';
import Spacer from '../../components/Spacer';
import useBondStats from '../../hooks/useBondStats';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
import {useTransactionAdder} from '../../state/transactions/hooks';
import ExchangeStat from './components/ExchangeStat';
import useTokenBalance from '../../hooks/useTokenBalance';
import useBondsPurchasable from '../../hooks/useBondsPurchasable';
import {getDisplayBalance} from '../../utils/formatBalance';
import {BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN} from '../../grape-finance/constants';
import {Alert} from '@material-ui/lab';
import {roundAndFormatNumber} from '../../0x';
import BondEstimatorModal from './BondEstimatorModal';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';

import HomeImage from '../../assets/img/background.jpg';
import {Grid, Typography, Box} from '@material-ui/core';
import {Box as MetarialBox} from '@mui/material';

const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
  }
`;

const Bond: React.FC = () => {
  const {account} = useWallet();
  const grapeFinance = useGrapeFinance();
  const addTransaction = useTransactionAdder();
  const bondStat = useBondStats();
  const cashPrice = useCashPriceInLastTWAP();

  const bondsPurchasable = useBondsPurchasable();

  const bondBalance = useTokenBalance(grapeFinance?.GBOND);
  const memoizedBondBalance = useMemo(() => {
    return bondBalance != null && Number(bondBalance) > 0 ? bondBalance : null;
  }, [bondBalance]);

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
  const grapeReserves = useMemo(() => (Number(bondStat?.treasuryGrapes) / 1e18).toFixed(0), [bondStat]);
  const bondSupply = useMemo(() => bondStat?.circulatingSupply, [bondStat]);
  const bondScale = (Number(cashPrice) / 1e18).toFixed(2);

  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <Switch>
      <Page>
        <BackgroundImage />{' '}
        {!!account ? (
          <>
            {memoizedBondBalance && (
              <BondEstimatorModal
                open={modalOpen}
                walletBondAmount={Number(memoizedBondBalance) / Math.pow(10, 18)}
                handleClose={handleCloseModal}
              />
            )}
            <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
              Buy & Redeem Bonds
            </Typography>
            <Typography color="textPrimary" align="center" variant="h6" gutterBottom style={{marginBottom: '40px'}}>
              Exchange Grapes for Bonds and burns Grape supply
              <br />
              Exchange Bonds for Grapes and earn premiums upon redemption
            </Typography>
            <Box mt={2}>
              <Grid item xs={12} sm={12} justify="center" style={{margin: '18px', display: 'flex'}}>
                <Alert variant="filled" severity="error">
                  <b>Bonds are emitted & premiums redeemable based on last epoch TWAP prices not the current TWAP!</b>
                </Alert>
              </Grid>
            </Box>
            <MetarialBox
              onClick={handleOpenModal}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '2px',
                cursor: 'pointer',
              }}
            >
              <Typography style={{fontSize: '15px', color: 'white'}}>
                <u>Estimate your GBonds redeem bonus</u>
              </Typography>
              <SwapVerticalCircleIcon style={{color: 'white'}} />
            </MetarialBox>
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
                  price={bondScale + ' GBOND' || '-'}
                />
                <Spacer size="md" />
                <ExchangeStat
                  tokenName="1 GBOND"
                  description="Bond Price"
                  price={Number(bondStat?.tokenInFtm).toFixed(2) + ' GRAPE' || '-'}
                />

                <Box mt={3}>
                  <Grid item xs={12} sm={12} justify="center" style={{display: 'flex'}}>
                    <Alert variant="filled" severity="error">
                      <b>Grape Reserves:</b>{' '}
                      {bondStat?.treasuryGrapes ? roundAndFormatNumber(Number(grapeReserves), 0) : '-'}
                      <br></br>
                      <b>Bond supply:</b>{' '}
                      {bondStat?.circulatingSupply ? roundAndFormatNumber(Number(bondSupply), 0) : '-'} <br></br>
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
