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
import usebShareStats from '../../hooks/useWineStats';
import useGrapeTotalNode from '../../hooks/useGrapeTotalNodes';
import useWineTotalNode from '../../hooks/useWineTotalNodes';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import useNodeRewardPoolStats from '../../hooks/useNodesRewardBalance';
import { Grape as grapeTesting, Wine as bShareTesting } from '../../grape-finance/deployments/deployments.testing.json';
import { Grape as grapeProd, Wine as bShareProd } from '../../grape-finance/deployments/deployments.mainnet.json';
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
import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import { getDisplayBalance } from '../../utils/formatBalance';
import {ReactComponent as IconTelegram} from '../../assets/img/telegram.svg';
import {ReactComponent as IconDiscord} from '../../assets/img/discord.svg';
import { useGetEventQuery } from '../../services/event';
import AirdropRewardModal from './AirdropRewardModal';

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
  const nodesRewardAddress = '0xc0702Ae0374F83fc3bA71CE2B30A323b09EC19da';

  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const grapemimLpStats = useLpStatsBTC('GRAPE-MIM-LP');
  const bSharemimLpStats = useLpStats('WINE-MIM-LP');
  const newPair = useLpStats('GRAPE-WINE-LP');
  const grapeStats = useGrapeStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const nodeRewardPoolStats = useNodeRewardPoolStats(nodesRewardAddress);
  const grapeFinance = useGrapeFinance();
  const totalStaked = useTotalStakedOnBoardroom();
  const useGrapeTotal = useGrapeTotalNode();
  const useWineTotal = useWineTotalNode();
  const [rewardModelOpen, setModalOpen] = useState(false);

  const {data : eventResponse} = useGetEventQuery();
  const [leaderboard, setLeaderboard] = React.useState([]);
  React.useEffect(() => {
    
    if (eventResponse && eventResponse.result) {
      setLeaderboard(eventResponse.data.mixed);
    }
  }, [eventResponse]);
 

 
  let grape;
  let bShare;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
    grape = grapeTesting;
    bShare = bShareTesting;
  } else {
    grape = grapeProd;
    bShare = bShareProd;
  }

  const buyGrapeAddress =
    'https://traderjoexyz.com/trade?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0x5541d83efad1f281571b343977648b75d95cdac2';
  const buyWineAddress =
    'https://traderjoexyz.com/trade?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0xc55036b5348cfb45a932481744645985010d3a44';
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
  const bSharePriceInAVAX = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInmim).toFixed(6) : null),
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
  const tBondPriceInAVAX = useMemo(() => (tBondStats ? Number(tBondStats.tokenInmim).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const grapeTVL1 = useMemo(() => (newPair ? newPairLPStats.totalLiquidity / 2 : null), [newPair]);
  const grapeTVL2 = useMemo(() => (grapemimLpStats ? grapemimLpStats.totalLiquidity / 2 : null), [grapemimLpStats]);

  const shareLPTVL = useMemo(() => (wineLPStats ? wineLPStats.totalLiquidity / 2 : null), [wineLPStats]);

  const totalStakedFormat = Number(getDisplayBalance(totalStaked)) * winePriceInDollars;

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  /*
  const grapeLpZap = useZap({ depositTokenName: 'GRAPE-MIM-LP' });
  const wineLpZap = useZap({ depositTokenName: 'WINE-MIM-LP' });

  const [onPresentGrapeZap, onDissmissGrapeZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        grapeLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissGrapeZap();
      }}
      tokenName={'GRAPE-MIM-LP'}
    />,
  );

  const [onPresentWineZap, onDissmissWineZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        wineLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissWineZap();
      }}
      tokenName={'WINE-MIM-LP'}
    />,
  );
*/
return (
  <Page>
    <AirdropRewardModal
      open={rewardModelOpen}
      handleClose={handleCloseModal}
      grapes={useGrapeTotal[0]}
      grapePrice={grapePriceInDollars}
      wines={useWineTotal[0]}
      winePrice={winePriceInDollars}
      totalGrapes={nodeRewardPoolStats?.grapes}
      totalWine={nodeRewardPoolStats?.wines}
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
        <img src={GrapeImage} style={{ maxHeight: '240px' }} />
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
              {/*Stake your LPs in the Vineyard to earn WINE rewards. Then stake your earned WINE in the
Winery to earn more GRAPE!*/}
            </p>
            <p>
              Please join our{' '}
              <a href="https://t.me/GrapeDefi" rel="noopener noreferrer" target="_blank" style={{ color: '#000' }}>
                <b>
                  {' '}
                  <IconTelegram width="25" style={{ fill: '#000', height: '15px' }} />
                  Telegram
                </b>
              </a>{' '}
              or{' '}
              <a
                href="https://discord.gg/ZP9aYaXeCJ"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: '#000' }}
              >
                <b>
                  <IconDiscord width="25" style={{ fill: '#000', height: '15px' }} /> Discord
                </b>
              </a>{' '}
              & read our{' '}
              <a
                href="https://grapefinance.gitbook.io/grape-finance-docs/"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: '#000' }}
              >
                <b> Docs & Disclaimer</b>
              </a>{' '}
              before joining!
            </p>
            <Grid container>
              <Grid item xs={6} sm={6} lg={6}>
                <a href="https://twitter.com/0xGuard/status/1480457336082907137" target="_blank">
                  <img alt="0xGuard KYC" style={{ width: '45%' }} src={kyc} />
                </a>
                <br />
              </Grid>
              <Grid item xs={6} sm={6} lg={6}>
                <a href="https://grapefinance.app/audit.pdf" target="_blank">
                  <img alt="0xGuard Audit" style={{ width: '45%', paddingTop: '10px' }} src={audit} />
                </a>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>

      {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={12} justify="center" style={{ margin: '12px', display: 'flex' }}>

         <Alert variant="filled" severity="info"> 
            Reward Pools have launched! Please read our <a link="_blank" href="https://grapefinance.gitbook.io/grape-finance-docs/">docs</a> for more info and to confirm contract addresses.
          </Alert>

        </Grid>
            </Grid>*/}

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
            <h2>Next NFT Airdrop</h2>
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
            <div>
              <Button
                onClick={handleOpenModal}
                className={'shinyButton ' + classes.button}
                style={{ marginTop: '10px' }}
              >
                Estimate my Rewards
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Wallet */}
      <Grid item xs={12} sm={8}>
        <Card style={{ height: '100%' }}>
          <CardContent align="center" style={{ marginTop: '2%' }}>
            <Box p={4} style={{ textAlign: 'center', paddingTop: '0px' }}>
              <h2 style={{ fontSize: '32px' }}>Have WAMP to stake?</h2>
              <p style={{ marginTop: '0' }}>Boost your WAMP yields by staking for WINE then pledge for more AMP</p>

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
            <Button href="/vineyard" className="shinyButton" style={{ margin: '10px' }}>
              Vineyard
            </Button>
            <Button href="/winery" className="shinyButton" style={{ margin: '10px' }}>
              Winery
            </Button>
            <Button
              target="_blank"
              href={buyGrapeAddress}
              style={{ margin: '10px' }}
              className={'shinyButton ' + classes.button}
            >
              Buy GRAPE
            </Button>
            <Button
              target="_blank"
              href={buyWineAddress}
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
              style={{ position: 'absolute', top: '10px', right: '10px', border: '1px grey solid' }}
            >
              {' '}
              <b>+</b>&nbsp;&nbsp;
              <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
            </Button>
            <h2 style={{ marginBottom: '10px' }}>GRAPE</h2>

            <Box>
              <span style={{ fontSize: '30px', color: '#930993' }}>
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
              style={{ position: 'absolute', top: '10px', right: '10px', border: '1px grey solid' }}
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
              <span style={{ fontSize: '30px', color: '#930993' }}>
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
              style={{ position: 'absolute', top: '10px', right: '10px', border: '1px grey solid' }}
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
              <span style={{ fontSize: '30px', color: '#930993' }}>
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
              <span style={{ fontSize: '26px', color: '#930993' }}>
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
              <span style={{ fontSize: '26px', color: '#930993' }}>
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
              <span style={{ fontSize: '26px', color: '#930993' }}>
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
