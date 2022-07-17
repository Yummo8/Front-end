import React from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import { Switch} from 'react-router-dom';

import Chart from '../../components/Chart';

import HomeImage from '../../assets/img/background.jpg';
import { Grid , Container } from '@material-ui/core';


const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
  }
`;



const Stats: React.FC = () => {

  return (
    <Switch>
      <Page>
      <BackgroundImage />
      <Container>   
          <Grid item xs={12} md={12} lg={12} >               
            <h1 style={{ fontSize: '80px', textAlign:'center' }}>Stats</h1>   
            <Chart />        
        </Grid>
      </Container>
      </Page>
    </Switch>
  );
};



export default Stats;
