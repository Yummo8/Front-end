import React from 'react';
import Page from '../../components/Page';
import { Switch} from 'react-router-dom';

import Chart from '../../components/Chart';

import { Grid , Container } from '@material-ui/core';


const Stats: React.FC = () => {

  return (
    <Switch>
      <Page>
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
