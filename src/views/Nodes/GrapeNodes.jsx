import {Grid} from '@material-ui/core';
import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Page from '../../components/Page';
import GrapeNode from '../GrapeNode';
import GrapeCard from './GrapeCard';
import WineMimCard from './WineMimCard';
import LPCard from './LPCard';
import LPWlrsCard from './LPWlrsCard';
import { createGlobalStyle } from 'styled-components';

const BackgroundImage = createGlobalStyle`
  body {
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
    ;
  }
`;

const GrapeNodes = () => {
  const {path} = useRouteMatch();
  return (
    <Page>
      <BackgroundImage />
      <Switch>
        <Route exact path={path}>
          <h1 style={{fontSize: '80px', textAlign: 'center'}}>NODES</h1>
          <Grid container spacing={3} style={{marginTop: '20px'}}>
            <GrapeCard />
            <WineMimCard />
            <LPCard />
            <LPWlrsCard />
          </Grid>
        </Route>
        <Route path={`${path}/:bankId`}>
          <GrapeNode />
        </Route>
      </Switch>
    </Page>
  );
};

export default GrapeNodes;
