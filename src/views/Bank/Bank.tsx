//@ts-nocheck
import React, {useEffect, useMemo} from 'react';
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
import useStatsForPool from '../../hooks/useStatsForPool';

import useRedeem from '../../hooks/useRedeem';
import {Bank as BankEntity} from '../../grape-finance';

import {Alert} from '@material-ui/lab';
import useModal from '../../hooks/useModal';
import StratModal from './components/StratModal';
import zone1 from '../../assets/img/1.jpg';
import zone2 from '../../assets/img/2.jpg';
import zone3 from '../../assets/img/3.jpg';
import wampStrat from '../../assets/img/wamp-strat.jpg';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
import usebShareStats from '../../hooks/useWineStats';
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

  const classes = useStyles();
  // @ts-ignore
  const {bankId} = useParams();
  const bank = useBank(bankId);

  const {account} = useWallet();
  const {onRedeem} = useRedeem(bank);
  const statsOnPool = useStatsForPool(bank);
  const bShareStats = usebShareStats();
  const cashPrice = useCashPriceInLastTWAP();

  const bondScale = (Number(cashPrice) / 1e18).toFixed(2);
  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );

  let curStrat: string;
  if (Number(bondScale) >= 2) {
    curStrat = zone1;
  } else if (Number(bondScale) < 2 && Number(bondScale) >= 1) {
    curStrat = zone2;
  } else {
    curStrat = zone3;
  }
  console.log(bank.depositTokenName);
  let name: string;
  let vaultUrl: string;
  let strat: string;
  let stratText: string;

  if (bank.depositTokenName.includes('GRAPE-MIM')) {
    name = 'Autocompound your GRAPE-MIM on Magik to buy back & burn Grape';
    vaultUrl = 'https://magik.farm/#/avax';
    strat = curStrat;
    stratText = 'Click here to see the optimal strategy for this vault';
  } else if (bank.depositTokenName.includes('WINE-MIM')) {
    name = 'Autocompound your WINE-MIM on Magik to buy back & burn Grape';
    vaultUrl = 'https://magik.farm/#/avax';
    strat = curStrat;
    stratText = 'Click here to see the optimal strategy for this vault';
  } else if (bank.depositTokenName.includes('GRAPE-WINE')) {
    name = 'Autocompound your GRAPE-WINE on Magik to buy back & burn Grape';
    vaultUrl = 'https://magik.farm/#/avax';
    strat = curStrat;
    stratText = 'Click here to see the optimal strategy for this vault';
  } else if (bank.depositTokenName === 'GRAPE') {
    name = 'Autocompound your GRAPE on Magik to buy back & burn Grape';
    vaultUrl = 'https://magik.farm/#/avax';
    strat = '';
    stratText = '';
  } else if (bank.depositTokenName === 'WINE-POPS-LP') {
    name = '';
    vaultUrl = '';
    strat = '';
    stratText = '';
  } else if (bank.depositTokenName === 'sVintage') {
    name = 'Get sVintage by staking Vintage in the Winemaker Cellar here';
    vaultUrl = 'https://winemaker.grapefinance.app/app/Cellar';
    strat = '';
    stratText = '';
  } else if (bank.depositTokenName === 'WAMP') {
    name = 'Get WAMP to stake for WINE here';
    vaultUrl = 'https://app.asgarddao.fi/#/pledge';
    strat = wampStrat;
    stratText = 'Click here to see the optimal strategy for this vault';
  }

  const [onPresentDeposit, onDismissDeposit] = useModal(<StratModal strat={strat} />);

  return account && bank ? (
    <>
      <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
        {bank?.name}
      </Typography>

      {stratText !== '' ? (
        <Box mt={5}>
          <Grid container justifyContent="center" spacing={3} style={{marginBottom: '30px'}}>
            <Alert variant="filled">
              <a onClick={onPresentDeposit}>
                <span style={{color: '#fff'}}>{stratText}</span>
              </a>
            </Alert>
          </Grid>
        </Box>
      ) : null}
      <Box>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={6} sm={4} md={3}>
            <Card>
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography style={{color: '#ccf'}}>Pool Wine per/day</Typography>
                  </Grid>
                  <Grid item>{bank.closedForStaking ? '0.00' : bank.multi}</Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography style={{color: '#ccf'}}>Value</Typography>
                  </Grid>
                  <Grid item>
                    ${Number((Number(bSharePriceInDollars) * Number(bank.multi)).toFixed(0)).toLocaleString('en-US')}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Card>
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography style={{color: '#ccf'}}>APR</Typography>
                  </Grid>
                  <Grid item>{bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%</Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography style={{color: '#ccf'}}>Daily</Typography>
                  </Grid>
                  <Grid item>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Card>
              <CardContent style={{textAlign: 'center'}}>
                <Typography style={{color: '#ccf'}}>TVL</Typography>
                <Typography>
                  {' '}
                  ${statsOnPool?.TVL ? Number(Number(statsOnPool?.TVL).toFixed(0)).toLocaleString('en-US') : '-.--'}
                </Typography>
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
          {bank.depositTokenName.includes('SW') && <LPTokenHelpText bank={bank} />}
          <Spacer size="sm" />
          <div>
            <Button onClick={onRedeem} className="shinyButton">
              Claim &amp; Withdraw
            </Button>
          </div>
          {name !== '' ? (
            <Box mt={5}>
              <Grid container justify="center" spacing={3} style={{marginBottom: '30px'}}>
                <Alert variant="filled">
                  {' '}
                  <a href={vaultUrl} target={'_blank'} rel="noopener noreferrer">
                    <span style={{color: '#fff'}}>{name}</span>
                  </a>
                </Alert>
              </Grid>
            </Box>
          ) : null}
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
  let pairName: string;
  let uniswapUrl: string;
  let exchange: string;
  if (bank.depositTokenName == 'GRAPE-MIM-LP') {
    pairName = 'GRAPE-MIM pair';
    uniswapUrl =
      'https://traderjoexyz.com/avalanche/pool/v1/0x130966628846bfd36ff31a822705796e8cb8c18d/0x5541d83efad1f281571b343977648b75d95cdac2';
    exchange = 'joe';
  } else if (bank.depositTokenName == 'GRAPE-MIM-SW') {
    pairName = 'GRAPE-MIM-SW pair';
    uniswapUrl =
      'https://www.swapsicle.io/add/0x130966628846BFd36ff31a822705796e8cb8C18D/0x5541D83EFaD1f281571B343977648B75d95cdAC2';
    exchange = 'Swapsicle';
  } else if (bank.depositTokenName.includes('WINE-MIM')) {
    pairName = 'WINE-MIM pair';
    uniswapUrl =
      'https://traderjoexyz.com/avalanche/pool/v1/0x130966628846bfd36ff31a822705796e8cb8c18d/0xc55036b5348cfb45a932481744645985010d3a44';
    exchange = 'joe';
  } else if (bank.depositTokenName.includes('GRAPE-WINE')) {
    pairName = 'GRAPE-WINE pair';
    uniswapUrl =
      'https://traderjoexyz.com/avalanche/pool/v1/0x5541D83EFaD1f281571B343977648B75d95cdAC2/0xc55036b5348cfb45a932481744645985010d3a44';
    exchange = 'joe';
  } else if (bank.depositTokenName.includes('WINE-POPS')) {
    pairName = 'WINE-POPS pair';
    uniswapUrl =
      'https://www.swapsicle.io/add/0xC55036B5348CfB45a932481744645985010d3A44/0x240248628B7B6850352764C5dFa50D1592A033A8';
    exchange = 'Swapsicle';
  }
  return (
    <Button href={uniswapUrl} target="_blank" className="shinyButton">
      Provide liquidity for {pairName} on {exchange}
    </Button>
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
