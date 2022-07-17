import {Grid, Typography} from '@material-ui/core';
import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Page from '../../components/Page';
import GrapeNode from '../GrapeNode';
import useBank from '../../hooks/useBank';
import {createGlobalStyle} from 'styled-components';
import NodesInfoCard from '../../components/NodesInfoCard';

const BackgroundImage = createGlobalStyle`
  body {
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
    ;
  }
`;

const GrapeNodes = () => {
  const {path} = useRouteMatch();

  const grapeNodeBank = useBank('GrapeNode');
  const grapeMimSWBank = useBank('LPNode');
  const grapeWrlsBank = useBank('LPWlrsNode');

  return (
    <Page>
      <BackgroundImage />
      <Switch>
        <Route exact path={path}>
          <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
            Nodes
          </Typography>
          <Typography color="textPrimary" align="center" variant="h6" gutterBottom style={{marginBottom: '40px'}}>
            Buy Nodes and lock supply to earn daily returns
            <br />
            Earn monthly airdrops by buying Nodes and NFTs
          </Typography>
          <Grid container spacing={3} style={{marginTop: '20px'}}>
            <NodesInfoCard bank={grapeNodeBank} />
            <NodesInfoCard bank={grapeMimSWBank} />
            <NodesInfoCard bank={grapeWrlsBank} />
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
