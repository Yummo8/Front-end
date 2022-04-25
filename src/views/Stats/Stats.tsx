import React, {useCallback, useMemo} from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useWallet} from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import PageHeader from '../../components/PageHeader';


import Chart from '../../components/Chart';

import styled from 'styled-components';
import Spacer from '../../components/Spacer';
import useBondStats from '../../hooks/useBondStats';
import useGrapeStats from '../../hooks/useGrapeStats';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
import {useTransactionAdder} from '../../state/transactions/hooks';

import useTokenBalance from '../../hooks/useTokenBalance';
import useBondsPurchasable from '../../hooks/useBondsPurchasable';
import {getDisplayBalance} from '../../utils/formatBalance';
import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN, DECIMALS_18 } from '../../grape-finance/constants';
import { Alert } from '@material-ui/lab';
import HomeImage from '../../assets/img/background.jpg';
import { Grid , Box, Container, Card } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import asgard from '../../assets/img/asgard.jpg';
import hermes from '../../assets/img/hermes.png';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;



const Stats: React.FC = () => {

  return (
    <Switch>
      <Page>
      <BackgroundImage />
      <Container>   
          <Grid item xs={12} md={12} lg={12} >               
            <h2 style={{ fontSize: '80px', textAlign:'center' }}>Stats</h2>   
            <Chart />        
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

export default Stats;
