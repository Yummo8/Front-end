import React from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import { Switch} from 'react-router-dom';

import HomeImage from '../../assets/img/background.jpg';
import { Grid , Container } from '@material-ui/core';



const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%);
  }
`;



const Help: React.FC = () => {

  return (
    <Switch>
      <Page>
      <BackgroundImage />
      <Container>   
              <Grid item xs={12} md={12} lg={12} >     
                  <h1 style={{ fontSize: '80px', textAlign:'center' }}>Grape Guides</h1>   

                  <h1 style={{textAlign:'center', marginTop: '60px' }}>How to earn MAX YIELD and PROTECT THE PEG</h1><br></br>
                  <iframe width="100%" height="550px" src="https://www.youtube.com/embed/L9oo4yj-HIM" title="Grape Finance Videos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                  <h1 style={{textAlign:'center', marginTop: '60px' }}>Beginner tutorial on Grape staking & adding to LPs</h1><br></br>
                  <iframe width="100%" height="550px" src="https://www.youtube.com/embed/JBWCOadvqbw" title="Grape Finance Videos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                  <h1 style={{textAlign:'center', marginTop: '60px' }}>Zone 1 - Introductions & what to do when Grape is above $2</h1><br></br>
                  <iframe width="100%" height="550px" src="https://www.youtube.com/embed/videoseries?list=PL_Nr1FoFNB03Ep-LDgn0_nHdFGuYcO030" title="Grape Finance Videos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                  <h1 style={{textAlign:'center', marginTop: '60px'}}>Grape Finance Pool Priorities</h1><br></br>
                  <iframe width="100%" height="550px" src="https://www.youtube.com/embed/videoseries?list=PL_Nr1FoFNB0004BPaACfcqYMZKcunv6Cq" title="Grape Finance Videos"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                  <h1 style={{textAlign:'center', marginTop: '60px' }}>The Basics of Seigniorage Protocols</h1><br></br>
                  <iframe width="100%" height="550px" src="https://www.youtube.com/embed/videoseries?list=PL_Nr1FoFNB02T0LSnRbFMFJoLTU4yszqJ" title="Grape Finance Videos"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                 <h1 style={{textAlign:'center', marginTop: '60px'}}>How to stake LP tokens & Wine at Grape Finance</h1><br></br>
                  <iframe width="100%" height="550px" src="https://www.youtube.com/embed/xHVqLK_Segw?rel=0" title="Grape Finance Videos"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                  
              </Grid>
      </Container>
      </Page>
    </Switch>
  );
};


export default Help;
