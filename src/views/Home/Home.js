import React, { useMemo, useState } from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
import useGrapeStats from '../../hooks/useGrapeStats';
import useLpStats from '../../hooks/useLpStats';
import useLpStatsBTC from '../../hooks/useLpStatsBTC';
import useBondStats from '../../hooks/useBondStats';
import useWineStats from '../../hooks/useWineStats';
import useGrapeTotalNode from '../../hooks/useGrapeTotalNodes';
import useWineTotalNode from '../../hooks/useWineTotalNodes';
import useGrapeMimSWTotalNode from '../../hooks/useGrapeMimSWTotalNode';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import useNodeRewardPoolStats from '../../hooks/useNodesRewardBalance';
import { roundAndFormatNumber } from '../../0x';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import { Box, Button, Card, CardContent, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import kyc from '../../assets/img/kyc.jpg';
import wamp from '../../assets/img/WAMP.png';
import GrapeImage from '../../assets/img/grape.png';
import audit from '../../assets/img/audit1.jpg';
import HomeImage from '../../assets/img/background.jpg';
import {ReactComponent as IconTelegram} from '../../assets/img/telegram.svg';
import {ReactComponent as IconDiscord} from '../../assets/img/discord.svg';
import { useGetEventQuery } from '../../services/event';
import AirdropRewardModal from './AirdropRewardModal';

const BackgroundImage = createGlobalStyle`
  body {
   //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%);
    ;
  }
`;


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
  const grapemimLpStats = useLpStatsBTC('GRAPE-MIM-LP');
  const bSharemimLpStats = useLpStats('WINE-MIM-LP');

  const newPair = useLpStats('GRAPE-WINE-LP');
  const grapeMimSWStats = useLpStats('GRAPE-MIM-SW');

  const grapeStats = useGrapeStats();
  const bShareStats = useWineStats();
  const tBondStats = useBondStats();
  const nodeRewardPoolStats = useNodeRewardPoolStats();
  const grapeFinance = useGrapeFinance();
  const useGrapeTotal = useGrapeTotalNode();
  const useWineTotal = useWineTotalNode();
  const useGrapeMimSWTotal = useGrapeMimSWTotalNode();
  const [rewardModelOpen, setModalOpen] = useState(false);

  const {data : eventResponse} = useGetEventQuery();
  const [leaderboard, setLeaderboard] = React.useState([]);
  React.useEffect(() => {
    
    if (eventResponse && eventResponse.result) {
      setLeaderboard(eventResponse.data.mixed);
    }
  }, [eventResponse]);
 

  const buyGrapeAddress =
    'https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0x5541D83EFaD1f281571B343977648B75d95cdAC2';
  const buyWineAddress =
    'https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0xC55036B5348CfB45a932481744645985010d3A44';
  const wineChart = 'https://dexscreener.com/avalanche/0x00cb5b42684da62909665d8151ff80d1567722c3';
  const grapeChart = 'https://dexscreener.com/avalanche/0xb382247667fe8ca5327ca1fa4835ae77a9907bc8';
  const wampStaking = '/vineyard/WampStaking';

  const grapeLPStats = useMemo(() => (grapemimLpStats ? grapemimLpStats : null), [grapemimLpStats]);
  const wineLPStats = useMemo(() => (bSharemimLpStats ? bSharemimLpStats : null), [bSharemimLpStats]);
  const newPairLPStats = useMemo(() => (newPair ? newPair : null), [newPair]);
  const grapePriceInDollars = useMemo(
    () => (grapeStats ? Number(grapeStats.priceInDollars).toFixed(2) : null),
    [grapeStats],
  );
  const grapePriceInAVAX = useMemo(() => (grapeStats ? Number(grapeStats.tokenInFtm).toFixed(2) : null), [grapeStats]);
  const grapeCirculatingSupply = useMemo(
    () => (grapeStats ? String(grapeStats.circulatingSupply) : null),
    [grapeStats],
  );
  const grapeTotalSupply = useMemo(() => (grapeStats ? String(grapeStats.totalSupply) : null), [grapeStats]);

  const winePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const grapeMimSWPriceInDollars = useMemo(
    () => (grapeMimSWStats ? Number(grapeMimSWStats.priceOfOne).toFixed(2) : null),
    [grapeMimSWStats],
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

  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

return (
  <Page>
    <AirdropRewardModal
      open={rewardModelOpen}
      handleClose={handleCloseModal}
      grapes={useGrapeTotal[0]}
      grapePrice={grapePriceInDollars}
      wines={useWineTotal[0]}
      winePrice={winePriceInDollars}
      grapeMimSW={useGrapeMimSWTotal[0]}
      grapeMimSWPrice={grapeMimSWPriceInDollars}
      totalGrapes={nodeRewardPoolStats?.grapes}
      totalWine={nodeRewardPoolStats?.wines}
      totalGrapeMimSW={nodeRewardPoolStats?.grapeMimSWs}
    />
    <BackgroundImage />
    <Grid item xs={12} sm={12} style={{ marginBottom: '25px' }}></Grid>
    <Grid container spacing={3}>
      {/* Logo */}
      <Grid
        item
        xs={12}
        sm={4}
        style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle', overflow: 'hidden' }}
      >
        <img src={GrapeImage} alt={'GRAPE Logo'} style={{ maxHeight: '240px' }} />
      </Grid>
      {/* Explanation text */}
      <Grid item xs={12} sm={8}>
        <Paper>
          <Box p={4} style={{ textAlign: 'center' }}>
            <h2>Earn Daily Yields at Grape Finance</h2>

            <p style={{ fontSize: '17px' }}>
              <b>We're pegged to MIM helping to reduce your volatility during a market downturn</b>
            </p>
            <p style={{ fontSize: '17px' }}>
              GRAPE is an algorithmic stable coin designed to maintain a 1:1 peg to MIM.

            </p>
            <p>
              Please join our{' '}
              <a href="https://t.me/GrapeDefi" rel="noopener noreferrer" target="_blank"  style={{ color: '#fff' }}>
                <b>
                  {' '}
                  <IconTelegram width="25" style={{ fill: '#fff', height: '15px' }} />
                  Telegram
                </b>
              </a>{' '}
              or{' '}
              <a
                href="https://discord.gg/ZP9aYaXeCJ"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: '#fff' }}
              >
                <b>
                  <IconDiscord width="25" style={{ fill: '#fff', height: '15px' }} /> Discord
                </b>
              </a>{' '}
              & read our{' '}
              <a
                href="https://grapefinance.gitbook.io/grape-finance-docs/"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: '#fff' }}
              >
                <b> Docs & Disclaimer</b>
              </a>{' '}
              before joining!
            </p>
   
          </Box>
        </Paper>
      </Grid>

      {/* TVL */}
      
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent align="center">
            <h2>Total Value Locked</h2>
            <CountUp style={{ fontSize: '30px' }} end={TVL} separator="," prefix="$" />
          </CardContent>
        </Card>
        <Card style={{ marginTop: '10px' }}>
          <CardContent align="center">
            <h2>NFT Reward Pool</h2>
            <span style={{ fontSize: '24px' }}>
              {nodeRewardPoolStats?.grapes} Grapes{' '}
              <span style={{ fontSize: '20px' }}>
                (≈${roundAndFormatNumber(nodeRewardPoolStats?.grapes * grapePriceInDollars, 0)})
              </span>
            </span>
            <br />
            <span style={{ fontSize: '24px' }}>
              {nodeRewardPoolStats?.wines} Wines{' '}
              <span style={{ fontSize: '20px' }}>
                (≈${roundAndFormatNumber(nodeRewardPoolStats?.wines * winePriceInDollars, 0)})
              </span>
            </span>
            <br />
           {/* <span style={{ fontSize: '24px' }}>
              {nodeRewardPoolStats?.grapeMimSWs} Grape-Mim SWs{' '}
              <span style={{ fontSize: '20px' }}>
                (≈${roundAndFormatNumber(nodeRewardPoolStats?.grapeMimSWs * grapeMimSWPriceInDollars, 0)})
              </span>
</span>*/}
            <br />
            <Grid style={{ marginTop: '-10px' }} container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={5}
                  lg={5}
                  xl={5}
                  style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle', overflow: 'hidden' }}
                >
                  <Button
                    onClick={handleOpenModal}
                    className={'shinyButton ' + classes.button}
                    style={{ width: '100%', height: '80px'  }}
                  >
                    Estimate my Rewards
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={7}
                  lg={7}
                  xl={7}
                  style={{justifyContent: 'center', verticalAlign: 'middle', overflow: 'hidden' }}
                >
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nftrade.com/assets/avalanche/0x99fec0ca5cd461884e2e6e8484c219bbfb91e2df"
                    className={'shinyButton ' + classes.button}
                    style={{ width: '100%', height: '35px', marginBottom: '10px'}}
                  >
                    Buy an NFT (Avax)
                  </Button>
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hexagon.market/collections/0x99fec0ca5cd461884e2e6e8484c219bbfb91e2df?sort=-highestPrice"
                    className={'shinyButton ' + classes.button}
                    style={{ width: '100%', height: '35px'}}
                  >
                    Buy an NFT (Grape)
                  </Button>
                </Grid>
              </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Wallet */}
      <Grid item xs={12} sm={8}>
        <Card style={{ height: '100%' }}>
          <CardContent align="center" style={{ marginTop: '1%',paddingBottom: '0' }}>
            <Box p={4} style={{ textAlign: 'center', paddingTop: '0px', marginBottom: '-20px'}}>
              <h2 style={{ fontSize: '32px' }}>Have WAMP to stake?</h2>
              <p style={{ marginTop: '0' }}>Boost your WAMP yields by staking for WINE then pledge for more AMP</p>

              <img src={wamp} width={'50px'} alt={'WAMP Logo'} height={'50px'}></img>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href={wampStaking}
                className={'shinyButton ' + classes.button}
                style={{ marginLeft: '10px', marginTop: '-45px' }}
              >
                WAMP Staking
              </Button>
          </Box>
          
            {/* <h2 style={{ marginBottom: '20px' }}>Wallet Balance</h2> */}
            <Button href="/vineyard" className="shinyButton" style={{ margin: '0px' }}>
              Vineyard
            </Button>
            <Button href="/winery" className="shinyButton" style={{ marginLeft: '15px' }}>
              Winery
            </Button>
            <Button
              target="_blank"
              rel="noopener noreferrer"
              href={buyGrapeAddress}
              style={{ marginLeft: '15px' }}
              className={'shinyButton ' + classes.button}
            >
              Buy GRAPE
            </Button>
            <Button
              target="_blank"
              rel="noopener noreferrer"
              href={buyWineAddress}
              className={'shinyButton ' + classes.button}
              style={{ marginLeft: '15px' }}
            >
              Buy WINE
            </Button>

            <Button
              target="_blank"
              rel="noopener noreferrer"
              href={grapeChart}
              className={'shinyButton ' + classes.button}
              style={{ marginLeft: '15px' }}
            >
              GRAPE Chart
            </Button>
            <Button
              target="_blank"
              rel="noopener noreferrer"
              href={wineChart}
              className={'shinyButton ' + classes.button}
              style={{ margin: '15px' }}
            >
              WINE Chart
            </Button>
            <Grid container style={{marginTop: '15px'}}>
              <Grid item xs={6} sm={6} lg={6}>
                <a href="https://twitter.com/0xGuard/status/1480457336082907137" style={{textDecoration: 'none'}} rel="noopener noreferrer" target="_blank">
                  <img alt="0xGuard KYC" style={{ width: '35%' }} src={kyc} />
                  <span style={{color: '#fff', display: 'block'}}>KYC</span>
                </a>
                <br />
              </Grid>
              <Grid item xs={6} sm={6} lg={6}>
                <a href="https://grapefinance.app/audit.pdf" style={{textDecoration: 'none'}}  rel="noopener noreferrer" target="_blank">
                  <img alt="0xGuard Audit" style={{ width: '35%', paddingTop: '10px' }} src={audit} />
                  <span style={{color: '#fff', display: 'block'}}>Audit</span>
                </a>              
              </Grid>            
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* GRAPE */}
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent align="center" style={{ position: 'relative' }}>
            <Box mt={2}>
              <CardIcon>
                <TokenSymbol symbol="GRAPE" />
              </CardIcon>
            </Box>
            <Button
              onClick={() => {
                grapeFinance.watchAssetInMetamask('GRAPE');
              }}
              style={{ position: 'absolute', top: '10px', right: '10px'}}
            >
              {' '}
              <b>+</b>&nbsp;&nbsp;
              <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
            </Button>
            <h2 style={{ marginBottom: '10px' }}>GRAPE</h2>

            <Box>
              <span style={{ fontSize: '30px', color: '#fff' }}>
                ${grapePriceInAVAX ? grapePriceInAVAX : '-.----'}{' '}
              </span>
            </Box>
            <span style={{ fontSize: '17px' }}>
              {/*TVL In LPs: ${roundAndFormatNumber(grapeTVL1 + grapeTVL2, 0)}
              <br />*/}
              Market Cap: ${roundAndFormatNumber(grapeCirculatingSupply * grapePriceInDollars, 0)} <br />
              Circulating Supply: {roundAndFormatNumber(grapeCirculatingSupply, 2)} <br />
              Total Supply: {roundAndFormatNumber(grapeTotalSupply, 2)}
            </span>
          </CardContent>
        </Card>
      </Grid>

      {/* WINE */}
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent align="center" style={{ position: 'relative' }}>
            <Button
              onClick={() => {
                grapeFinance.watchAssetInMetamask('WINE');
              }}
              style={{ position: 'absolute', top: '10px', right: '10px'}}
            >
              {' '}
              <b>+</b>&nbsp;&nbsp;
              <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
            </Button>
            <Box mt={2}>
              <CardIcon>
                <TokenSymbol symbol="WINE" />
              </CardIcon>
            </Box>
            <h2 style={{ marginBottom: '10px' }}>WINE</h2>

            <Box>
              <span style={{ fontSize: '30px', color: '#fff' }}>
                ${winePriceInDollars ? winePriceInDollars : '-.--'}
              </span>
            </Box>

            <span style={{ fontSize: '17px' }}>
              {/* TVL In LPs & Winery: ${roundAndFormatNumber(shareLPTVL + totalStakedFormat, 0)}
              <br />*/}
              Market Cap: ${roundAndFormatNumber(bShareCirculatingSupply * winePriceInDollars, 0)} <br />
              Circulating Supply: {roundAndFormatNumber(bShareCirculatingSupply, 2)} <br />
              Total Supply: {roundAndFormatNumber(bShareTotalSupply, 2)}
            </span>
          </CardContent>
        </Card>
      </Grid>

      {/* GBOND */}
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent align="center" style={{ position: 'relative' }}>
            <Button
              onClick={() => {
                grapeFinance.watchAssetInMetamask('GBOND');
              }}
              style={{ position: 'absolute', top: '10px', right: '10px'}}
            >
              {' '}
              <b>+</b>&nbsp;&nbsp;
              <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
            </Button>
            <Box mt={2}>
              <CardIcon>
                <TokenSymbol symbol="GBOND" />
              </CardIcon>
            </Box>
            <h2 style={{ marginBottom: '10px' }}>GBOND</h2>

            <Box>
              <span style={{ fontSize: '30px', color: '#fff' }}>
                $ {tBondPriceInDollars ? tBondPriceInDollars : '-.--'}
              </span>
            </Box>
            <span style={{ fontSize: '17px' }}>
              Market Cap: ${roundAndFormatNumber(tBondCirculatingSupply * tBondPriceInDollars, 0)} <br />
              Circulating Supply: {roundAndFormatNumber(tBondCirculatingSupply, 2)} <br />
              Total Supply: {roundAndFormatNumber(tBondTotalSupply, 2)}
              <br />
            </span>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent align="center">
            <Box mt={2}>
              <CardIcon>
                <TokenSymbol symbol="GRAPE-MIM-LP" />
              </CardIcon>
            </Box>
            <h2>GRAPE-MIM LP</h2>

            <Box mt={4} style={{ marginTop: '0px' }}>
              {/* <Button onClick={onPresentWineZap} className="shinyButtonSecondary">
                Zap In
          </Button>*/}
              <Button style={{}} className="shinyButtonSecondary" href={'/vineyard/GrapeMimLPWineRewardPool'}>
                Go To Pool
              </Button>
            </Box>

            <Box mt={2}>
              <span style={{ fontSize: '26px', color: '#fff' }}>
                {grapeLPStats?.tokenAmount ? grapeLPStats?.tokenAmount : '-.--'} GRAPE /{' '}
                {grapeLPStats?.mimAmount ? grapeLPStats?.mimAmount : '-.--'} MIM
              </span>
            </Box>
            <Box>${grapeLPStats?.priceOfOne ? grapeLPStats.priceOfOne : '-.--'}</Box>
            <span style={{ fontSize: '17px' }}>
              Liquidity: $
              {grapeLPStats?.totalLiquidity ? roundAndFormatNumber(grapeLPStats.totalLiquidity, 0) : '-.--'} <br />
              Total Supply: {grapeLPStats?.totalSupply ? roundAndFormatNumber(grapeLPStats.totalSupply, 0) : '-.--'}
            </span>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent align="center">
            <Box mt={2}>
              <CardIcon>
                <TokenSymbol symbol="WINE-MIM-LP" style="width:105px;" />
              </CardIcon>
            </Box>
            <h2>WINE-MIM LP</h2>

            <Box mt={2} style={{ marginTop: '0px' }}>
              {/* <Button onClick={onPresentWineZap} className="shinyButtonSecondary">
                Zap In
          </Button>*/}
              <Button style={{}} className="shinyButtonSecondary" href={'/vineyard/WineMimLPWineRewardPool'}>
                Go To Pool
              </Button>
            </Box>
            <Box mt={2}>
              <span style={{ fontSize: '26px', color: '#fff' }}>
                {wineLPStats?.tokenAmount ? wineLPStats?.tokenAmount : '-.--'} WINE /{' '}
                {wineLPStats?.mimAmount ? wineLPStats?.mimAmount : '-.--'} MIM
              </span>
            </Box>
            <Box>${wineLPStats?.priceOfOne ? wineLPStats.priceOfOne : '-.--'}</Box>
            <span style={{ fontSize: '17px' }}>
              Liquidity: ${wineLPStats?.totalLiquidity ? roundAndFormatNumber(wineLPStats.totalLiquidity, 0) : '-.--'}
              <br />
              Total Supply: {wineLPStats?.totalSupply ? roundAndFormatNumber(wineLPStats.totalSupply, 0) : '-.--'}
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

            <Box mt={2} style={{ marginTop: '0px' }}>
              {/* <Button onClick={onPresentWineZap} className="shinyButtonSecondary">
                Zap In
          </Button>*/}
              <Button style={{}} className="shinyButtonSecondary" href={'/vineyard/GrapeWineLPWineRewardPool'}>
                Go To Pool
              </Button>
            </Box>
            <Box mt={2}>
              <span style={{ fontSize: '26px', color: '#fff' }}>
                {newPairLPStats?.tokenAmount ? newPairLPStats?.tokenAmount : '-.--'} GRAPE /{' '}
                {newPairLPStats?.mimAmount ? newPairLPStats?.mimAmount : '-.--'} WINE
              </span>
            </Box>
            <Box>${newPairLPStats?.priceOfOne ? newPairLPStats.priceOfOne : '-.--'}</Box>
            <span style={{ fontSize: '17px' }}>
              Liquidity: $
              {newPairLPStats?.totalLiquidity ? roundAndFormatNumber(newPairLPStats.totalLiquidity, 0) : '-.--'}
              <br />
              Total Supply:{' '}
              {newPairLPStats?.totalSupply ? roundAndFormatNumber(newPairLPStats.totalSupply, 0) : '-.--'}
            </span>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Page>
  );
};

export default Home;