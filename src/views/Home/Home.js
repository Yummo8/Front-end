import React, {useMemo, useState} from 'react';
import Page from '../../components/Page';
import InfoCard from '../../components/InfoCard';
import LPInfoCard from '../../components/LPInfoCard';
import {createGlobalStyle} from 'styled-components';
import CountUp from 'react-countup';
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
import {roundAndFormatNumber} from '../../0x';
import {Button, Card, CardContent, Grid, Paper, CircularProgress, Typography} from '@material-ui/core';
import kyc from '../../assets/img/kyc.jpg';
import heroImg from '../../assets/img/hero.png';
import audit from '../../assets/img/audit1.jpg';
import HomeImage from '../../assets/img/background.jpg';
import {ReactComponent as IconTelegram} from '../../assets/img/telegram.svg';
import {ReactComponent as IconDiscord} from '../../assets/img/discord.svg';
import AirdropRewardModal from './AirdropRewardModal';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useGetBoardroomPrintRate from '../../hooks/useGetBoardroomPrintRate';

const BackgroundImage = createGlobalStyle`
  body {
   //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
    ;
  }
`;

const Home = () => {
  const TVL = useTotalValueLocked();
  const grapemimLpStats = useLpStatsBTC('GRAPE-MIM-LP');
  const bSharemimLpStats = useLpStats('WINE-MIM-LP');

  const newPair = useLpStats('GRAPE-WINE-LP');
  const grapeMimSWStats = useLpStats('GRAPE-MIM-SW');

  const grapeStats = useGrapeStats();
  const bShareStats = useWineStats();
  const tBondStats = useBondStats();
  const nodeRewardPoolStats = useNodeRewardPoolStats();
  const useGrapeTotal = useGrapeTotalNode();
  const useWineTotal = useWineTotalNode();
  const useGrapeMimSWTotal = useGrapeMimSWTotalNode();
  const [rewardModelOpen, setModalOpen] = useState(false);
  const currentEpoch = useCurrentEpoch();

  const buyGrapeAddress =
    'https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0x5541D83EFaD1f281571B343977648B75d95cdAC2';
  const buyWineAddress =
    'https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0xC55036B5348CfB45a932481744645985010d3A44';
  const wineChart = 'https://dexscreener.com/avalanche/0x00cb5b42684da62909665d8151ff80d1567722c3';
  const grapeChart = 'https://dexscreener.com/avalanche/0xb382247667fe8ca5327ca1fa4835ae77a9907bc8';

  const grapeLPStats = useMemo(() => (grapemimLpStats ? grapemimLpStats : null), [grapemimLpStats]);
  const wineLPStats = useMemo(() => (bSharemimLpStats ? bSharemimLpStats : null), [bSharemimLpStats]);
  const newPairLPStats = useMemo(() => (newPair ? newPair : null), [newPair]);
  const grapePriceInDollars = useMemo(
    () => (grapeStats ? Number(grapeStats.priceInDollars).toFixed(2) : null),
    [grapeStats],
  );
  const grapePriceInAVAX = useMemo(() => (grapeStats ? Number(grapeStats.tokenInFtm).toFixed(4) : null), [grapeStats]);
  const grapeCirculatingSupply = useMemo(
    () => (grapeStats ? Number(grapeStats.circulatingSupply) : null),
    [grapeStats],
  );
  const grapeTotalSupply = useMemo(() => (grapeStats ? Number(grapeStats.totalSupply) : null), [grapeStats]);

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

  const printRate = useGetBoardroomPrintRate();

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

      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Card>
            <CardContent>
              <Typography color="textPrimary" variant="h4" gutterBottom>
                Earn Daily Yields at Grape Finance
              </Typography>
              <p style={{fontSize: '17px'}}>
                <b>We're pegged to MIM helping to reduce your volatility during a market downturn</b>
              </p>
              <p style={{fontSize: '17px'}}>
                GRAPE is an algorithmic stable coin designed to maintain a 1:1 peg to MIM.
              </p>
              <p>
                Please join our{' '}
                <a href="https://t.me/GrapeDefi" rel="noopener noreferrer" target="_blank" style={{color: '#fff'}}>
                  <b>
                    {' '}
                    <IconTelegram width="25" style={{fill: '#fff', height: '15px'}} />
                    Telegram
                  </b>
                </a>{' '}
                or{' '}
                <a
                  href="https://discord.gg/ZP9aYaXeCJ"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{color: '#fff'}}
                >
                  <b>
                    <IconDiscord width="25" style={{fill: '#fff', height: '15px'}} /> Discord
                  </b>
                </a>{' '}
                & read our{' '}
                <a
                  href="https://grapefinance.gitbook.io/grape-finance-docs/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{color: '#fff'}}
                >
                  <b> Docs & Disclaimer</b>
                </a>{' '}
                before joining!
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{display: 'flex', justifyContent: 'center', verticalAlign: 'middle', overflow: 'hidden'}}
        >
          <img src={heroImg} alt={'GRAPE Logo'} style={{maxHeight: '240px'}} />
        </Grid>

        <Grid item sm={12} md={12} lg={12} style={{marginTop: '10px'}}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6} style={{color: 'white'}}>
              <Card style={{minHeight: '234px'}}>
                <CardContent>
                  <Typography color="textPrimary" variant="h4" gutterBottom>
                    TOTAL VALUE LOCKED
                  </Typography>
                  {TVL ? (
                    <CountUp className="tvl" end={TVL} separator="," prefix="$" />
                  ) : (
                    <CircularProgress style={{marginTop: '20px'}} size={38} color="inherit" />
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card style={{minHeight: '200px'}}>
                <CardContent>
                  <Typography className="reward-pool-text" color="textPrimary" variant="h4" gutterBottom>
                    NFT REWARD POOL
                  </Typography>

                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Grid container justifyContent="space-between">
                        <Grid item>
                          <Typography color="textPrimary" align="center" variant="h5">
                            {nodeRewardPoolStats?.grapes} Grape
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography color="textSecondary" align="center" variant="h5" style={{fontWeight: 700}}>
                            {nodeRewardPoolStats != null ? (
                              `≈$${roundAndFormatNumber(nodeRewardPoolStats?.grapes * grapePriceInDollars, 0)}`
                            ) : (
                              <CircularProgress size={22} color="inherit" />
                            )}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container justifyContent="space-between">
                        <Grid item>
                          <Typography color="textPrimary" align="center" variant="h5">
                            {nodeRewardPoolStats?.wines} Wine
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography color="textSecondary" align="center" variant="h5" style={{fontWeight: 700}}>
                            {nodeRewardPoolStats != null ? (
                              `≈$${roundAndFormatNumber(nodeRewardPoolStats?.wines * winePriceInDollars, 0)}`
                            ) : (
                              <CircularProgress size={22} color="inherit" />
                            )}{' '}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Button
                    onClick={handleOpenModal}
                    className="shinyButton"
                    style={{width: '100%', marginTop: '17px'}}
                  >
                    Estimate my Rewards
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} md={4} lg={2} style={{color: 'white', textAlign: 'center'}}>
              <Typography color="textPrimary" variant="h6">
                EPOCH
              </Typography>{' '}
              {currentEpoch ? (
                <CountUp style={{fontSize: '30px'}} end={currentEpoch} />
              ) : (
                <CircularProgress size={28} color="inherit" />
              )}
            </Grid>
            <Grid item xs={6} md={4} lg={2} style={{color: 'white', textAlign: 'center'}}>
              <Typography color="textPrimary" variant="h6">
                Above Peg
              </Typography>
              {printRate ? (
                <span style={{fontSize: '30px'}}>{printRate.toFixed(2)}%</span>
              ) : (
                <CircularProgress size={28} color="inherit" />
              )}
            </Grid>
            <Grid item xs={12} md={4} lg={3} style={{color: 'white', textAlign: 'center'}}>
              <Typography color="textPrimary" variant="h6">
                Started On
              </Typography>
              <span style={{fontSize: '30px'}}>Jan 16, 2022</span>
            </Grid>
            <Grid item xs={6} md={6} lg={2} style={{color: 'white', textAlign: 'center'}}>
              <Typography color="textPrimary" variant="h6">
                KYC
              </Typography>
              <a
                href="https://twitter.com/0xGuard/status/1480457336082907137"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt="0xGuard KYC" style={{height: '50px'}} src={kyc} />
              </a>
            </Grid>
            <Grid item xs={6} md={6} lg={2} style={{color: 'white', textAlign: 'center'}}>
              <Typography color="textPrimary" variant="h6">
                Audit
              </Typography>
              <a href="https://grapefinance.app/audit.pdf" rel="noopener noreferrer" target="_blank">
                <img alt="0xGuard Audit" style={{height: '50px'}} src={audit} />
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={12} md={12} xs={12} sm={12}>
          <Paper style={{height: '5px'}}></Paper>
        </Grid>

        {/* GRAPE */}
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <InfoCard
            name="Grape"
            buyAddress={buyGrapeAddress}
            chartAddress={grapeChart}
            price={grapePriceInAVAX}
            circulatingSupply={grapeCirculatingSupply}
            totalSupply={grapeTotalSupply}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <InfoCard
            name="Wine"
            buyAddress={buyWineAddress}
            chartAddress={wineChart}
            price={winePriceInDollars}
            circulatingSupply={bShareCirculatingSupply}
            totalSupply={bShareTotalSupply}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <InfoCard
            name="Gbond"
            buyAddress="/bond"
            internalLink={true}
            price={tBondPriceInDollars}
            circulatingSupply={tBondCirculatingSupply}
            totalSupply={tBondTotalSupply}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <LPInfoCard
            name="Grape-MIM-LP"
            token1Name="Grape"
            token1Value={grapeLPStats?.tokenAmount}
            token2Name="MIM"
            token2Value={grapeLPStats?.mimAmount}
            poolAddress="/vineyard/GrapeMimLPWineRewardPool"
            price={grapeLPStats?.priceOfOne}
            circulatingSupply={grapeLPStats?.totalLiquidity}
            totalSupply={grapeLPStats?.totalSupply}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <LPInfoCard
            name="Wine-MIM-LP"
            token1Name="Wine"
            token1Value={wineLPStats?.tokenAmount}
            token2Name="MIM"
            token2Value={wineLPStats?.mimAmount}
            poolAddress="/vineyard/WineMimLPWineRewardPool"
            price={wineLPStats?.priceOfOne}
            circulatingSupply={wineLPStats?.totalLiquidity}
            totalSupply={wineLPStats?.totalSupply}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <LPInfoCard
            name="Grape-Wine-LP"
            token1Name="Grape"
            token1Value={newPairLPStats?.tokenAmount}
            token2Name="Wine"
            token2Value={newPairLPStats?.mimAmount}
            poolAddress="/vineyard/GrapeWineLPWineRewardPool"
            price={newPairLPStats?.priceOfOne}
            circulatingSupply={newPairLPStats?.totalLiquidity}
            totalSupply={newPairLPStats?.totalSupply}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;
