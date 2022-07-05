import React, { useMemo } from 'react';
import {useParams} from 'react-router-dom';
import { useWallet } from 'use-wallet';
import PageHeader from '../../components/PageHeader';
import { Box, Card, CardContent, Typography, Grid, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import styled from 'styled-components';
import Spacer from '../../components/Spacer';
import Harvest from './components/Harvest';
import Stake from './components/Stake';
import useBank from '../../hooks/useBank';
import useNodes from '../../hooks/useNodes';
import useMaxPayout from '../../hooks/useMaxPayout';
import useUserDetails from '../../hooks/useUserDetails';
import totalNodes from '../../hooks/useTotalNodes';
import useStatsForPool from '../../hooks/useStatsForPool';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import useNodePrice from '../../hooks/useNodePrice';
import {getDisplayBalance} from '../../utils/formatBalance';
import {Alert} from '@material-ui/lab';
import useDailyDrip from '../../hooks/useDailyDrip';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

const GrapeNode = () => {
  const { bankId } = useParams();

  const bank = useBank(bankId);
  const { account } = useWallet();
  const classes = useStyles();
  const statsOnPool = useStatsForPool(bank);
  const nodes = useNodes(bank?.contract, bank?.sectionInUI, account);
  const nodePrice = useNodePrice(bank.contract, bank.poolId, bank.sectionInUI);
  const total = totalNodes(bank?.contract, bank?.sectionInUI);
  const max = useMaxPayout(bank?.contract, bank?.sectionInUI, account);
  const daily = useDailyDrip(bank?.contract, bank?.sectionInUI, account);
  const userDetails = useUserDetails(bank?.contract, bank?.sectionInUI, account);
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);

  const tokenPriceInDollars = useMemo(
    () => (stakedTokenPriceInDollars ? stakedTokenPriceInDollars : null),
    [stakedTokenPriceInDollars],
  );

  return bank
  ? (
      <>
        <PageHeader icon="🏦" subtitle={''} title={bank?.name} />

        <Box>
        <Alert variant="filled" severity="info">
                    Please read our <a style={{color: '#fff'}} rel="noopener noreferrer" target={'_blank'} href="https://grapefinance.gitbook.io/grape-finance-docs/unique-features/locked-staking-grape-nodes" >Node Docs & Strategy</a> in order to fully understand how our node pools work before purchasing, by partaking you accept the risks outlined in the docs & disclaimer.
                  </Alert>
                  <Alert variant="filled" severity="info" style={{marginTop:'20px'}}>
                    Node APRs are determined by overall claim to compound ratio of the pool, a higher compound rate not only means your daily returns increase it also keeps the APR stable and can help boost it. A good ratio for node health is to compound 3 nodes for every 1 nodes worth of claims.
                  </Alert>
          <Grid container justify="center" spacing={2} style={{marginBottom: '50px', marginTop: '20px'}}>
          
            <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            
                <Card className={classes.gridItem}>
                  <CardContent style={{ textAlign: 'center' }}>
                    <Typography style={{color: '#ccf'}}>Your Nodes | Value</Typography>
                    <Typography>
                      {
                        nodes[0] &&
                        <>
                          <b style={{ color: 'rgb(255, 255, 255)', marginRight: '0px' }}>
                            {nodes[0].toString()}
                          </b> |  <b style={{ color: 'rgb(255, 255, 255)', marginRight: '0px' }}>
                            ${(nodes[0] * (tokenPriceInDollars*getDisplayBalance(nodePrice, bank.depositToken.decimal, 1))).toFixed(0)}
                           
                          </b>
                          
                        </>
                      }
                    </Typography>
                  </CardContent>
                </Card>
         
            </Grid>
            <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
              <Card className={classes.gridItem}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography style={{color: '#ccf'}}>Daily | $</Typography>
                  <Typography>{(Number(daily)/1e18).toFixed(2)} | $ {((Number(daily)/1e18)*(tokenPriceInDollars)).toFixed(2)}</Typography>
                </CardContent>
              </Card>
            </Grid> 
            <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
              <Card className={classes.gridItem}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography style={{color: '#ccf'}}>Amount Claimed</Typography>
                  <Typography>{(Number(userDetails.total_claims)/1e18).toFixed(2)} </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
              <Card className={classes.gridItem}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography style={{color: '#ccf'}}>Max Possible Pay</Typography>
                  <Typography>{Number(max)/1e18} </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
              <Card className={classes.gridItem}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography style={{color: '#ccf'}}>APR | Daily</Typography>
                  <Typography>{bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}% | {bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
              <Card className={classes.gridItem}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography style={{color: '#ccf'}}>Total Nodes | TVL</Typography>
                  <Typography>{Number(total[0])} | ${statsOnPool?.TVL ? (Number((Number(statsOnPool?.TVL).toFixed(0)))).toLocaleString('en-US') : '-.--'}</Typography>
                </CardContent>
              </Card>
            </Grid>         
          </Grid>
        </Box>

        <Box mt={5}>
        
          <StyledBank>
            <StyledCardsWrapper>
              <StyledCardWrapper>
       
                <Harvest bank={bank} />
              </StyledCardWrapper>
              <Spacer />
              <StyledCardWrapper>{<Stake bank={bank} />}</StyledCardWrapper>
            </StyledCardsWrapper>
            <Spacer size="lg" />  
           {bank.depositTokenName === 'GRAPE-MIM-SW' ?
           <Card>
            <CardContent >
              <StyledLink href={'https://www.swapsicle.io/add/0x5541D83EFaD1f281571B343977648B75d95cdAC2/0x130966628846BFd36ff31a822705796e8cb8C18D'} rel="noopener noreferrer" target="_blank">
                <span style={{color: '#fff'}}>
                  Provide liquidity for GRAPE-MIM on Swapsicle
                </span>     
              </StyledLink>
            </CardContent>
          </Card> 
       : null }
       {bank.depositTokenName === 'GRAPE-WLRS-LP' ?
           <Card>
            <CardContent >
              <StyledLink href={'https://traderjoexyz.com/pool/0x395908aeb53d33a9b8ac35e148e9805d34a555d3/0x5541d83efad1f281571b343977648b75d95cdac2'} rel="noopener noreferrer" target="_blank">
                <span style={{color: '#fff'}}>
                  Provide liquidity for GRAPE-WLRS on Joe
                </span>     
              </StyledLink>
            </CardContent>
          </Card> 
       : null }
          </StyledBank>      
        </Box>    
        
      </>
    )
  : <BankNotFound/>
};


const BankNotFound = () => {
  return (
    <Center>
      <PageHeader icon="🏚" title="Not Found" subtitle="You've hit a bank just robbed by unicorns." />
    </Center>
  );
};

const StyledBank = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.main};
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
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

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;


export default GrapeNode;
