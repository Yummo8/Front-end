import React from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import {Switch} from 'react-router-dom';

import HomeImage from '../../assets/img/background.jpg';
import {Grid, Container, ListSubheader, ListItemIcon, ListItemText} from '@material-ui/core';
import {List, ListItemButton, Typography} from '@mui/material';

const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
  }
`;

const Sommelier: React.FC = () => {
  return (
    <Switch>
      <Page>
        <BackgroundImage />
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <Typography color="white" align="center" variant="h3" gutterBottom>
              Become a Sommelier
            </Typography>
            <Typography color="white" align="center" variant="h6" gutterBottom style={{marginBottom: '40px'}}>
              Learn more about Grape Finance, our best practices, strategies and how to maximum your returns.
            </Typography>

            <List
              style={{color: 'white'}}
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <Typography color="#e647e6" variant="h5">
                    Course Outline
                  </Typography>
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemText primary="1. Intro to Grape Finance" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="2. Seigniorage Basics" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="3. Liquidity" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="4. Vineyard" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="5. Winery" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="6. Features" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="7. Strategies" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="8. Utility" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="9. Getting Started" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="10. Links" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="11. Partnerships" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="12. Final Quiz" />
              </ListItemButton>
            </List>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              1. Intro to Grape Finance
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              a. A message from Grape Finance
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              b. Grape questionnaire
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              c. The Vision of our Ecosystem
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              2. Seigniorage Basics
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              a. Seigniorage Protocol Methodology Video
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              b. Protocol Tokens and Profits
            </Typography>
            
            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              3. Liquidity
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              a. Liquidity Pools video
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              b. Trading Term video
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              4. Vineyard
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              a. Pool allocations video
            </Typography>
            
            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              5. Winery
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              a. Staking/Locking Timer
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              b. TWAP, PEG, EPOCH
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              c. Debt phase
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              b. Continuation past Wine emissions
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              6. Features
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              a. Nodes - Locked Staking Pools
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              b. NFTs
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              c. GBonds - Peg Protection Bonds
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              d. Rebates - Treasury Bonds
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              d. Autocompounders
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              7. Strategies
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              a. Zones
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              b. Profit Taking
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              c. Peg protection 
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              8. Utility
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              a. Lending & Borrowing
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              b. The Wine Maker Game
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              c. Partner Games
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              d. Genesis Pools
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              9. Getting Started
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              a. Buying Grape & Wine
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              b. Creating an LP
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              c. Creating a Node
            </Typography>
            <Typography color="white" variant="h6" gutterBottom >
              d. Buying an NFT
            </Typography>

            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              10. Links
            </Typography>
           
            <Typography color="white" variant="h4" gutterBottom style={{marginTop: '40px'}}>
              11. Partnerships
            </Typography>
            
            <iframe
              width="100%"
              height="550px"
              src="https://www.youtube.com/embed/L9oo4yj-HIM"
              title="Grape Finance Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <h1 style={{textAlign: 'center', marginTop: '60px'}}>Beginner tutorial on Grape staking & adding to LPs</h1>
            <br></br>
            <iframe
              width="100%"
              height="550px"
              src="https://www.youtube.com/embed/JBWCOadvqbw"
              title="Grape Finance Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <h1 style={{textAlign: 'center', marginTop: '60px'}}>
              Zone 1 - Introductions & what to do when Grape is above $2
            </h1>
            <br></br>
            <iframe
              width="100%"
              height="550px"
              src="https://www.youtube.com/embed/videoseries?list=PL_Nr1FoFNB03Ep-LDgn0_nHdFGuYcO030"
              title="Grape Finance Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <h1 style={{textAlign: 'center', marginTop: '60px'}}>Grape Finance Pool Priorities</h1>
            <br></br>
            <iframe
              width="100%"
              height="550px"
              src="https://www.youtube.com/embed/videoseries?list=PL_Nr1FoFNB0004BPaACfcqYMZKcunv6Cq"
              title="Grape Finance Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <h1 style={{textAlign: 'center', marginTop: '60px'}}>The Basics of Seigniorage Protocols</h1>
            <br></br>
            <iframe
              width="100%"
              height="550px"
              src="https://www.youtube.com/embed/videoseries?list=PL_Nr1FoFNB02T0LSnRbFMFJoLTU4yszqJ"
              title="Grape Finance Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <h1 style={{textAlign: 'center', marginTop: '60px'}}>How to stake LP tokens & Wine at Grape Finance</h1>
            <br></br>
            <iframe
              width="100%"
              height="550px"
              src="https://www.youtube.com/embed/xHVqLK_Segw?rel=0"
              title="Grape Finance Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Grid>
        </Grid>
      </Page>
    </Switch>
  );
};

export default Sommelier;
