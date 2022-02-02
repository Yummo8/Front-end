import React, { useMemo } from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
import useBombStats from '../../hooks/useBombStats';
import useLpStats from '../../hooks/useLpStats';
import useLpStatsBTC from '../../hooks/useLpStatsBTC';
import useModal from '../../hooks/useModal';
import useZap from '../../hooks/useZap';
import useBondStats from '../../hooks/useBondStats';
import usebShareStats from '../../hooks/usebShareStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import { Bomb as bombTesting, BShare as bShareTesting } from '../../bomb-finance/deployments/deployments.testing.json';
import { Bomb as bombProd, BShare as bShareProd } from '../../bomb-finance/deployments/deployments.mainnet.json';
import { roundAndFormatNumber } from '../../0x';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import { Box, Button, Card, CardContent, Grid, Paper } from '@material-ui/core';
import ZapModal from '../Bank/components/ZapModal';
import { Alert } from '@material-ui/lab';
import useBank from '../../hooks/useBank';
import { makeStyles } from '@material-ui/core/styles';
import useBombFinance from '../../hooks/useBombFinance';
import { ReactComponent as IconTelegram } from '../../assets/img/telegram.svg';
import kyc from '../../assets/img/kyc.jpg';
import wamp from '../../assets/img/WAMP.png';
import BombImage from '../../assets/img/grape.png';
import audit from '../../assets/img/audit1.jpg';
import HomeImage from '../../assets/img/background.jpg';
import useStatsForPool from '../../hooks/useStatsForPool';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

// const BackgroundImage = createGlobalStyle`
//   body {
//     background-color: grey;
//     background-size: cover !important;
//   }
// `;

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      // marginTop: '10px'
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const bombFtmLpStats = useLpStatsBTC('GRAPE-MIM-LP');
  const bShareFtmLpStats = useLpStats('WINE-MIM-LP');
  const newPair = useLpStats('GRAPE-WINE-LP');
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const bombFinance = useBombFinance();

  let bomb;
  let bShare;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
    bomb = bombTesting;
    bShare = bShareTesting;
  } else {
    bomb = bombProd;
    bShare = bShareProd;
  }

  const buyBombAddress = 'https://traderjoexyz.com/trade?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0x5541d83efad1f281571b343977648b75d95cdac2';
  const buyBShareAddress = 'https://traderjoexyz.com/trade?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0xc55036b5348cfb45a932481744645985010d3a44';
  const wineChart = 'https://dexscreener.com/avalanche/0x00cb5b42684da62909665d8151ff80d1567722c3';
  const grapeChart = 'https://dexscreener.com/avalanche/0xb382247667fe8ca5327ca1fa4835ae77a9907bc8';
  const wampStaking = '/farm/WampStaking';

  const bombLPStats = useMemo(() => (bombFtmLpStats ? bombFtmLpStats : null), [bombFtmLpStats]);
  const bshareLPStats = useMemo(() => (bShareFtmLpStats ? bShareFtmLpStats : null), [bShareFtmLpStats]);
  const newPairLPStats = useMemo(() => (newPair ? newPair : null), [newPair]);

  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(2) : null), [bombStats]);
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInBNB = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(6) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);
/*
  const bombLpZap = useZap({ depositTokenName: 'GRAPE-MIM-LP' });
  const bshareLpZap = useZap({ depositTokenName: 'WINE-MIM-LP' });

  const [onPresentBombZap, onDissmissBombZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        bombLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissBombZap();
      }}
      tokenName={'GRAPE-MIM-LP'}
    />,
  );

  const [onPresentBshareZap, onDissmissBshareZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        bshareLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissBshareZap();
      }}
      tokenName={'WINE-MIM-LP'}
    />,
  );
*/
  return (
    <Page>
      <BackgroundImage />
      <Grid container spacing={3}>
        {/* Logo */}
        <Grid
          item
          xs={12}
          sm={4}
          style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle', overflow: 'hidden' }}
        >
          <img src={BombImage} style={{ maxHeight: '240px' }} />
        </Grid>
        {/* Explanation text */}
        <Grid item xs={12} sm={8}>
          <Paper>
            <Box p={4} style={{ textAlign: 'center'}}>
              <h2>Earn 5%+ Daily at Grape Finance</h2>

              <p style={{ fontSize: '17px' }}>
              <b>We're pegged to MIM helping to reduce your volatility during a market downturn</b>                                  
              </p>
              <p style={{ fontSize: '17px' }}>
              GRAPE is an algorithmic stable coin designed to maintain a 1:1 peg to MIM.                            
              {/*Stake your LPs in the Vineyard to earn WINE rewards. Then stake your earned WINE in the
                Winery to earn more GRAPE!*/}
              </p>
              <p>
                Please join our{' '}
                <a
                  href="https://t.me/GrapeDefi"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: '#000' }}
                >
                  Telegram
                </a>{' '} or {' '}
                
                <a
                  href="https://discord.gg/ZP9aYaXeCJ"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: '#000' }}
                >
                  Discord
                </a>{' '}

                & read our {' '}
                <a
                  href="https://grapefinance.gitbook.io/grape-finance-docs/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: '#000' }}
                >
                  Docs
                </a>{' '}
                 before aping in!
                </p>
     
            </Box>
            
          </Paper>
  
        </Grid>
 
       {/*} <Grid container spacing={3}>
          <Grid item xs={12} sm={12} justify="center" style={{ margin: '12px', display: 'flex' }}>

           <Alert variant="filled" severity="info"> 
              Reward Pools have launched! Please read our <a link="_blank" href="https://grapefinance.gitbook.io/grape-finance-docs/">docs</a> for more info and to confirm contract addresses.
            </Alert>

          </Grid>
              </Grid>*/}

        {/* TVL */}
        <Grid item xs={12} sm={4}>
  
              <div style={{width: '80%', margin: '0 auto', paddingBottom: '40px', paddingTop: '40px'}}>
                <a href='https://twitter.com/0xGuard/status/1480457336082907137' target='_blank'>
                <img alt="0xGuard KYC" style={{ width: '45%'}} src={kyc} />
                </a>             
            
                <a href='https://grapefinance.app/audit.pdf' target='_blank'>
                <img alt="0xGuard Audit" style={{ width: '45%', marginLeft: '20px'}} src={audit} />
                </a>
              </div>             
             
          <Card>
            <CardContent align="center">
              <h2>Total Value Locked</h2>          
              <CountUp style={{ fontSize: '30px' }} end={TVL} separator="," prefix="$" />
            </CardContent>
          </Card>
        </Grid>

        {/* Wallet */}
        <Grid item xs={12} sm={8}>
          <Card style={{ height: '100%' }}>
            <CardContent align="center" style={{ marginTop: '2%' }}>
            <Box p={4} style={{ textAlign: 'center', paddingTop: '0px'  }}>
              <h2 style={{ fontSize: '32px'}}>Have WAMP to stake?</h2>
              <p style={{marginTop: '0'}}>Boost your WAMP yields by staking for WINE then pledge for more AMP</p>
              
              <img src={wamp} width={'55px'} height={'55px'}></img>
              <Button
                target="_blank"
                href={wampStaking}
                className={'shinyButton ' + classes.button}
                style={{ marginLeft: '10px', marginTop: '-45px' }}
              >
                WAMP Staking
              </Button>
            </Box>
              {/* <h2 style={{ marginBottom: '20px' }}>Wallet Balance</h2> */}
              <Button href="/boardroom" className="shinyButton" style={{ margin: '10px' }}>
                Stake Now
              </Button>
              <Button href="/farm" className="shinyButton" style={{ margin: '10px' }}>
                Farm Now
              </Button>
              <Button
                target="_blank"
                href={buyBombAddress}
                style={{ margin: '10px' }}
                className={'shinyButton ' + classes.button}
              >
                Buy GRAPE
              </Button>
              <Button
                target="_blank"
                href={buyBShareAddress}
                className={'shinyButton ' + classes.button}
                style={{ marginLeft: '10px' }}
              >
                Buy WINE
              </Button>

              <Button
                target="_blank"
                href={grapeChart}
                className={'shinyButton ' + classes.button}
                style={{ marginLeft: '10px' }}
              >
                GRAPE Chart
              </Button>
              <Button
                target="_blank"
                href={wineChart}
                className={'shinyButton ' + classes.button}
                style={{ marginLeft: '10px' }}
              >
                WINE Chart
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* BOMB */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BOMB" />
                </CardIcon>
              </Box>
              <Button
                onClick={() => {
                  bombFinance.watchAssetInMetamask('BOMB');
                }}
                style={{ position: 'absolute', top: '10px', right: '10px', border: '1px grey solid' }}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{ width: '20px'}} src={MetamaskFox} />
              </Button>
              <h2 style={{ marginBottom: '10px' }}>GRAPE</h2>
              
              <Box>
                <span style={{ fontSize: '30px', color: '#930993' }}>${bombPriceInBNB ? bombPriceInBNB : '-.----'} </span>
              </Box>             
              <span style={{ fontSize: '17px' }}>
                Market Cap: ${roundAndFormatNumber(bombCirculatingSupply * bombPriceInDollars, 2)} <br />
                Circulating Supply: {roundAndFormatNumber(bombCirculatingSupply, 2)} <br />
                Total Supply: {roundAndFormatNumber(bombTotalSupply, 2)}
            </span>
            </CardContent>
          </Card>
        </Grid>

        {/* BSHARE */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
              <Button
                onClick={() => {
                  bombFinance.watchAssetInMetamask('BSHARE');
                }}
                style={{ position: 'absolute', top: '10px', right: '10px', border: '1px grey solid' }}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{ width: '20px'}} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BSHARE" />
                </CardIcon>
              </Box>
              <h2 style={{ marginBottom: '10px' }}>WINE</h2>
              
              <Box>
                <span style={{ fontSize: '30px', color: '#930993' }}>
                  ${bSharePriceInDollars ? bSharePriceInDollars : '-.--'}
                </span>
              </Box>
              
             <span style={{ fontSize: '17px' }}>
                Market Cap: ${roundAndFormatNumber((bShareCirculatingSupply * bSharePriceInDollars).toFixed(2), 2)}{' '}
                <br />
                Circulating Supply: {roundAndFormatNumber(bShareCirculatingSupply, 2)} <br />
                Total Supply: {roundAndFormatNumber(bShareTotalSupply, 2)}
            </span>
            </CardContent>
          </Card>
        </Grid>

        {/* BBOND */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
              <Button
                onClick={() => {
                  bombFinance.watchAssetInMetamask('BBOND');
                }}
                style={{ position: 'absolute', top: '10px', right: '10px', border: '1px grey solid' }}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{ width: '20px'}} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BBOND" />
                </CardIcon>
              </Box>
              <h2 style={{ marginBottom: '10px' }}>GBOND</h2>
        
              <Box>
                <span style={{ fontSize: '30px', color: '#930993' }}>
                 $ {tBondPriceInDollars ? tBondPriceInDollars : '-.--'}
                </span>
              </Box>
              <span style={{ fontSize: '17px' }}>
                Market Cap: ${roundAndFormatNumber((tBondCirculatingSupply * tBondPriceInDollars).toFixed(2), 2)} <br />
                Circulating Supply: {roundAndFormatNumber(tBondCirculatingSupply, 2)} <br />
                Total Supply: {roundAndFormatNumber(tBondTotalSupply, 2)}
            </span>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center">
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BOMB-BTCB-LP" />
                </CardIcon>
              </Box>
              <h2>GRAPE-MIM LP</h2>
              
              <Box mt={4} style={{marginTop: '0px'}}>
                {/* <Button onClick={onPresentBshareZap} className="shinyButtonSecondary">
                  Zap In
            </Button>*/}
               <Button style={{}}  className="shinyButtonSecondary" href={'/farm/GrapeMimLPWineRewardPool'}>
                  Go To Pool
              </Button>              
              </Box>
              
              <Box mt={2}>
                <span style={{ fontSize: '26px', color: '#930993'  }}>
                  {bombLPStats?.tokenAmount ? bombLPStats?.tokenAmount : '-.--'} GRAPE /{' '}
                  {bombLPStats?.ftmAmount ? bombLPStats?.ftmAmount : '-.--'} MIM
                </span>
              </Box>
              <Box>${bombLPStats?.priceOfOne ? bombLPStats.priceOfOne : '-.--'}</Box>
              <span style={{ fontSize: '17px' }}>
                Liquidity: ${bombLPStats?.totalLiquidity ? roundAndFormatNumber(bombLPStats.totalLiquidity, 2) : '-.--'}{' '}
                <br />
                Total Supply: {bombLPStats?.totalSupply ? roundAndFormatNumber(bombLPStats.totalSupply, 2) : '-.--'}
              </span>
              
            </CardContent>
            
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center">
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BSHARE-BNB-LP" style="width:105px;" />
                </CardIcon>
              </Box>
              <h2>WINE-MIM LP</h2>
              
              <Box mt={2} style={{marginTop: '0px'}}>
               {/* <Button onClick={onPresentBshareZap} className="shinyButtonSecondary">
                  Zap In
            </Button>*/}
              <Button style={{}}  className="shinyButtonSecondary" href={'/farm/WineMimLPWineRewardPool'}>
                  Go To Pool
              </Button>    
              </Box>
              <Box mt={2}>
                <span style={{ fontSize: '26px', color: '#930993' }}>
                  {bshareLPStats?.tokenAmount ? bshareLPStats?.tokenAmount : '-.--'} WINE /{' '}
                  {bshareLPStats?.ftmAmount ? bshareLPStats?.ftmAmount : '-.--'} MIM
                </span>
              </Box>
              <Box>${bshareLPStats?.priceOfOne ? bshareLPStats.priceOfOne : '-.--'}</Box>
              <span style={{ fontSize: '17px' }}>
                Liquidity: $
                {bshareLPStats?.totalLiquidity ? roundAndFormatNumber(bshareLPStats.totalLiquidity, 2) : '-.--'}
                <br />
                Total Supply: {bshareLPStats?.totalSupply ? roundAndFormatNumber(bshareLPStats.totalSupply, 2) : '-.--'}
              </span>
            </CardContent>
          </Card>
          
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center">
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="GRAPE-WINE-LP" style="width:105px;" />
                </CardIcon>
              </Box>
              <h2>GRAPE-WINE LP</h2>
              
              <Box mt={2} style={{marginTop: '0px'}}>
               {/* <Button onClick={onPresentBshareZap} className="shinyButtonSecondary">
                  Zap In
            </Button>*/}
            <Button style={{}}  className="shinyButtonSecondary" href={'/farm/GrapeWineLPWineRewardPool'}>
                  Go To Pool
              </Button>    
              </Box>
              <Box mt={2}>
                <span style={{ fontSize: '26px', color: '#930993' }}>
                  {newPairLPStats?.tokenAmount ? newPairLPStats?.tokenAmount : '-.--'} GRAPE /{' '}
                  {newPairLPStats?.ftmAmount ? newPairLPStats?.ftmAmount : '-.--'} WINE
                </span>
              </Box>
              <Box>${newPairLPStats?.priceOfOne ? newPairLPStats.priceOfOne : '-.--'}</Box>
              <span style={{ fontSize: '17px' }}>
                Liquidity: $
                {newPairLPStats?.totalLiquidity ? roundAndFormatNumber(newPairLPStats.totalLiquidity, 2) : '-.--'}
                <br />
                Total Supply: {newPairLPStats?.totalSupply ? roundAndFormatNumber(newPairLPStats.totalSupply, 2) : '-.--'}
              </span>
            </CardContent>
          </Card>
          
        </Grid>
      
      </Grid>
    </Page>
  );
};

export default Home;
