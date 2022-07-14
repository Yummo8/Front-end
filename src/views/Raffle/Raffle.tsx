import React, {useCallback, useMemo} from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import {Switch} from 'react-router-dom';
import {useWallet} from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import ExchangeCard from './components/ExchangeCard';
import styled from 'styled-components';

import useRaffleStats from '../../hooks/useRaffleBalance';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import {useTransactionAdder} from '../../state/transactions/hooks';
import HomeImage from '../../assets/img/background.jpg';
import {Card, Grid, CircularProgress} from '@material-ui/core';

import LaunchCountdown from '../../components/LaunchCountdown';

const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
  }
`;

const Raffle: React.FC = () => {
  // compatible format for most browser + metamask browser. Needs to be YYYY-MM-ddTHH:mm:ssZ
  const startDate = new Date('2022-07-01T23:00:00Z');
  const endDate = new Date('2022-07-05T00:00:00Z');

  const raffleAddress = '0xA3F2C4D813d75E26335ddE70DcFd703996Ae25D8';

  const {account} = useWallet();
  const grapeFinance = useGrapeFinance();
  const addTransaction = useTransactionAdder();
  const raffleStats = useRaffleStats(account, raffleAddress);

  const startTime = Number(startDate);
  const endTime = Number(endDate);

  const grapePrice = useMemo(() => (raffleStats ? Number(raffleStats.tokenInFtm).toFixed(2) : null), [raffleStats]);

  const raffleBals = useMemo(() => (raffleStats ? Number(raffleStats.totalSupply).toFixed(0) : null), [raffleStats]);

  const userBals = useMemo(() => (raffleStats ? Number(raffleStats.priceInDollars).toFixed(0) : null), [raffleStats]);

  const handleBuyBonds = useCallback(
    async (amount: string) => {
      const tx = await grapeFinance.sendGrape(amount, raffleAddress);
      addTransaction(tx, {
        summary: `Send ${Number(amount).toFixed(2)} GRAPE to the raffle ${amount} `,
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
            <Grid item xs={12} md={12} lg={12}>
              <h1 style={{fontSize: '80px', textAlign: 'center', color: '#fff'}}>WINE Raffle</h1>
              <p style={{fontSize: '20px', textAlign: 'center', color: '#fff'}}>
                Community raffle where you have the chance to win WINE just by sending in your freely earned Grape
                rewards.<br></br> <br></br> 1 Grape = 1 entry and there are unlimited entries per address, the more
                Grape you send the more chance you have to win. The winner will be chosen at random.
              </p>
              <p style={{fontSize: '20px', textAlign: 'center', color: '#fff'}}>Raffle address: {raffleAddress}</p>
            </Grid>
            {Date.now() > endTime ? (
              <h1 style={{fontSize: '60px', textAlign: 'center', color: '#fff'}}>Raffle Closed</h1>
            ) : (
              <h1 style={{fontSize: '60px', textAlign: 'center'}}>Raffle Open</h1>
            )}

            <Grid item xs={12} md={12} lg={12}>
              {Date.now() < startTime ? (
                <LaunchCountdown
                  deadline={startDate}
                  description={'Raffle Starts In'}
                  descriptionLink={''}
                ></LaunchCountdown>
              ) : (
                <LaunchCountdown
                  deadline={endDate}
                  description={'Raffle Closes In'}
                  descriptionLink={''}
                ></LaunchCountdown>
              )}
            </Grid>

            <Grid container justify="center" spacing={3} style={{marginTop: '10px'}}>
              <Grid item xs={12} sm={12} lg={6}>
                <Card>
                  <h2 style={{textAlign: 'center', marginTop: '10px'}}>Raffle Stats</h2>
                  <p style={{textAlign: 'center'}}>6 WINE up for grabs this raffle</p>
                  <p style={{textAlign: 'center'}}>
                    Grape Price: $
                    {grapePrice ? (
                      grapePrice
                    ) : (
                      <CircularProgress style={{marginLeft: '10px'}} size={15} color="inherit" />
                    )}
                  </p>
                  <p style={{textAlign: 'center'}}>
                    Total Grape Entered:{' '}
                    {raffleBals ? (
                      raffleBals
                    ) : (
                      <CircularProgress style={{marginLeft: '10px'}} size={15} color="inherit" />
                    )}
                  </p>
                  <p style={{textAlign: 'center'}}>
                    Your entries:{' '}
                    {userBals ? userBals : <CircularProgress style={{marginLeft: '10px'}} size={15} color="inherit" />}
                  </p>
                  <p style={{textAlign: 'center'}}>Your account: {account}</p>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <StyledBond>
                  <StyledCardWrapper>
                    <ExchangeCard
                      action="Enter Raffle"
                      fromToken={grapeFinance.GRAPE}
                      fromTokenName="GRAPE"
                      toToken={grapeFinance.GBOND}
                      toTokenName="GBOND"
                      priceDesc={
                        Date.now() < endTime && Date.now() > startTime
                          ? 'Raffle is open! 1 GRAPE = 1 Entry'
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

export default Raffle;
