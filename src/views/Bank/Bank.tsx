import React, {useEffect} from 'react';
import styled from 'styled-components';

import {useParams} from 'react-router-dom';
import {useWallet} from 'use-wallet';
import {makeStyles} from '@material-ui/core/styles';

import {Box, Button, Card, CardContent, Typography, Grid} from '@material-ui/core';

import PageHeader from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import UnlockWallet from '../../components/UnlockWallet';
import Harvest from './components/Harvest';
import HarvestHermes from './components/HarvestHermes';
import Stake from './components/Stake';
import useBank from '../../hooks/useBank';
import useStatsForPartner from '../../hooks/useStatsForPartner';
import useStatsForPool from '../../hooks/useStatsForPool';

import useRedeem from '../../hooks/useRedeem';
import {Bank as BankEntity} from '../../grape-finance';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import {Alert} from '@material-ui/lab';
import LaunchCountdown from '../../components/LaunchCountdown';
import Modal, {ModalProps} from '../../components/Modal';
import ModalActions from '../../components/ModalActions';
import ModalTitle from '../../components/ModalTitle';
import useModal from '../../hooks/useModal';
import StratModal from './components/StratModal';
import zone1 from '../../assets/img/1.jpg';
import zone2 from '../../assets/img/2.jpg';
import zone3 from '../../assets/img/3.jpg';
import wampStrat from '../../assets/img/wamp-strat.jpg';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

const Bank: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));
  const date = new Date('2022-1-31 12:00:00Z');
  const classes = useStyles();
  // @ts-ignore
  const {bankId} = useParams();
  const bank = useBank(bankId);

  const {account} = useWallet();
  const {onRedeem} = useRedeem(bank);
  const statsOnPool = useStatsForPool(bank);
 
  const cashPrice = useCashPriceInLastTWAP();

  const bondScale = (Number(cashPrice) / 1e18).toFixed(2); 


  let curStrat: string;
  if (Number(bondScale) >= 2) {
    curStrat = zone1;
  } else if (Number(bondScale) < 2 && Number(bondScale) >= 1) {
    curStrat = zone2;
  } else {
    curStrat = zone3;
  }

  let name: string;
  let vaultUrl: string;
  let strat: string;
  let stratText: string;
  let buyText: string;
  if (bank.depositTokenName.includes('GRAPE-MIM')) {
    name = 'Autocompound your GRAPE-MIM on Beefy here';
    vaultUrl = 'https://app.beefy.finance/#/avax/vault/grape-grape-mim';
    strat = curStrat;
    stratText = 'Click here to see the optimal strategy for this vault';
  } else if (bank.depositTokenName.includes('WINE-MIM')) {
    name = 'Autocompound your WINE-MIM on Beefy here';
    vaultUrl = 'https://app.beefy.finance/#/avax/vault/grape-wine-mim';
    strat = curStrat;
    stratText = 'Click here to see the optimal strategy for this vault';
  } else if (bank.depositTokenName.includes('GRAPE-WINE')) {
    name = 'Autocompound your GRAPE-WINE on Yield Wolf here';
    vaultUrl = 'https://yieldwolf.finance/avalanche/grapefinance-wine/92';
    strat = curStrat;
    stratText = 'Click here to see the optimal strategy for this vault';
  } else if (bank.depositTokenName === 'GRAPE') {
    name = 'Stake your GRAPE to earn WINE';
    vaultUrl = null;
    strat = '';
    stratText = '';
  } else if (bank.depositTokenName === 'WAMP') {
    name = 'Get WAMP to stake for WINE here';
    vaultUrl = 'https://app.asgarddao.fi/#/pledge';
    strat = wampStrat;
    stratText = 'Click here to see the optimal strategy for this vault';
  } else if(bank.depositTokenName === 'HSHARE-WINE-LP') {
    name = 'Buy WINE Here';
    vaultUrl = 'https://traderjoexyz.com/trade?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0xc55036b5348cfb45a932481744645985010d3a44#/';
    strat = 'https://app.pangolin.exchange/#/swap?outputCurrency=0xfa4B6db72A650601E7Bd50a0A9f537c9E98311B2';
    stratText = 'Buy HSHARE Here';
  }

  const [onPresentDeposit, onDismissDeposit] = useModal(<StratModal strat={strat} />);

  return account && bank ? (
    <>
      <PageHeader
        icon="🏦"
        subtitle={''}
        title={bank?.name}
      />



              <Box mt={5}>      
                <Grid container justify="center" spacing={3} style={{ marginBottom: '30px' }}>    
                  <Alert variant="filled"> 
                      <a href={vaultUrl} target={"_blank"}><h3 style={{color: '#000'}}>{name}</h3></a>    
                  </Alert>
                  
                </Grid>
              </Box>
              {stratText !== '' ? 
              <Box mt={5}>      
                <Grid container justify="center" spacing={3} style={{ marginBottom: '30px' }}>    
                  <Alert variant="filled">                          
                      {bank.depositTokenName === 'HSHARE-WINE-LP' ? <a href={strat} target={"_blank"}><h3 style={{color: '#000'}}>{stratText}</h3></a>: <a onClick={onPresentDeposit}><h3 style={{color: '#000'}}>{stratText}</h3></a>}
                  </Alert>
                 
                </Grid>
  </Box>: null}
              
      <Box>         

        <Grid container justify="center" spacing={3} style={{marginBottom: '50px'}}>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{textAlign: 'center'}}>
                <Typography>APR</Typography>
                <Typography>{bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{textAlign: 'center'}}>
                <Typography>Daily APR</Typography>
                <Typography>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{textAlign: 'center'}}>
                <Typography>TVL</Typography>
                <Typography>${statsOnPool?.TVL}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box mt={5}>
        <StyledBank>
          <StyledCardsWrapper>
            <StyledCardWrapper>
              {bank.depositTokenName === 'HSHARE-WINE-LP' ? <HarvestHermes bank={bank} /> : <Harvest bank={bank} />}
            </StyledCardWrapper>
            <Spacer />
            <StyledCardWrapper>{<Stake bank={bank} />}</StyledCardWrapper>
          </StyledCardsWrapper>
          <Spacer size="lg" />
          {bank.depositTokenName.includes('LP') && <LPTokenHelpText bank={bank} />}
          <Spacer size="lg" />
          <div>
            <Button onClick={onRedeem} className="shinyButtonSecondary">
              Claim &amp; Withdraw
            </Button>
          </div>
          <Spacer size="lg" />
        </StyledBank>
      </Box>
    </>
  ) : !bank ? (
    <BankNotFound />
  ) : (
    <UnlockWallet />
  );
};

const LPTokenHelpText: React.FC<{bank: BankEntity}> = ({bank}) => {
  const grapeFinance = useGrapeFinance();

  let pairName: string;
  let uniswapUrl: string;
  let vaultUrl: string;
  let exchange: string;
  if (bank.depositTokenName.includes('GRAPE-MIM')) {
    pairName = 'GRAPE-MIM pair';
    uniswapUrl =
      'https://traderjoexyz.com/pool/0x130966628846bfd36ff31a822705796e8cb8c18d/0x5541d83efad1f281571b343977648b75d95cdac2';
    vaultUrl = '#';

    exchange = 'joe';
  } else if(bank.depositTokenName.includes('WINE-MIM')){

    pairName = 'WINE-MIM pair';
    uniswapUrl =
      'https://traderjoexyz.com/pool/0x130966628846bfd36ff31a822705796e8cb8c18d/0xc55036b5348cfb45a932481744645985010d3a44';
    vaultUrl = '#';

    exchange = 'joe';
  }else if(bank.depositTokenName.includes('GRAPE-WINE')){

    pairName = 'GRAPE-WINE pair';
    uniswapUrl =
      'https://traderjoexyz.com/pool/0x5541d83efad1f281571b343977648b75d95cdac2/0xc55036b5348cfb45a932481744645985010d3a44';
    vaultUrl = '#';
    exchange = 'joe';
  }else if(bank.depositTokenName === 'HSHARE-WINE-LP'){
    pairName = 'HSHARE-WINE-LP';
    uniswapUrl = 'https://app.pangolin.exchange/#/add/0xC55036B5348CfB45a932481744645985010d3A44/0xfa4B6db72A650601E7Bd50a0A9f537c9E98311B2';
    vaultUrl = '#';
    exchange = 'Pangolin';
  }
  return (
    <Card>
      <CardContent>
        <StyledLink href={uniswapUrl} target="_blank">

        <span style={{color: "#000"}}>Provide liquidity for {pairName} on {exchange}</span>        

        </StyledLink>
      </CardContent>
    </Card>
  );
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

export default Bank;
