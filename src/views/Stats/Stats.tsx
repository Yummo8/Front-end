import React from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import { Switch} from 'react-router-dom';

import Chart from '../../components/Chart';

import styled from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import { Grid , Container } from '@material-ui/core';


const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%);
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
