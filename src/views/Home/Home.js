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
import kyc from '../../assets/img/kyc.png';
import heroImg from '../../assets/img/hero.png';
import audit from '../../assets/img/audit1.png';
import HomeImage from '../../assets/img/background.jpg';
import grapeGold from '../../assets/img/golden-grape.png';
import pressImg from '../../assets/img/barrel.png';
import newsImg from '../../assets/img/news.png';
import {ReactComponent as IconTelegram} from '../../assets/img/telegram.svg';
import {ReactComponent as IconDiscord} from '../../assets/img/discord.svg';
import AirdropRewardModal from './AirdropRewardModal';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useGetBoardroomPrintRate from '../../hooks/useGetBoardroomPrintRate';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Alert from '@mui/material/Alert';
import vintageImg from '../../assets/img/vintage-token.png';
import vintnersGif from '../../assets/img/vintners.gif';
import grapeMimImg from '../../assets/img/twap.png';

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
      <div style={{position: 'fixed', top: '30%', right: '-35px', opacity: '0.3', zIndex: '-1'}}>
        <img src={heroImg} alt={'GRAPE Logo'} style={{maxHeight: '400px'}} />
      </div>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
              <div>EPOCH</div>
              <div>800</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
              <div>ABOVE PEG</div>
              <div>75%</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
              <div>TWAP</div>
              <div>800</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
              <div>SUPPLY</div>
              <div>800</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
              <div>EXPANSION RATE</div>
              <div>800</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
              <div>EXPANSION AMOUNT</div>
              <div>800</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
              <div>CONTRACTION RATE</div>
              <div>800</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
              <div>CONTRACTION AMOUNT</div>
              <div>800</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
              <div>BUYS 24h</div>
              <div>800</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
              <div>SELLS 24h</div>
              <div>800</div>
            </div>
          </Grid>
        </Grid> */}
        <Grid item xs={12}>
          <Alert variant="outlined" severity="info">
            <b style={{fontSize: '1.1rem', color: '#e647e6'}}>Grape Finance's Strategies Suggestions</b>
            <br />
            <br />
            <b>Grape & Wine -</b> Below Peg, compounding is recommended. Avoid selling.
            <br />
            <b>Nodes -</b> Compound 3 times, Claim 1 time. You can use your claimed Grapes in{' '}
            <a style={{color: '#e647e6'}} href="https://winemaker.grapefinance.app/">
              Winemaker
            </a>{' '}
            Game.
            <br />
            <b>Vineyard -</b> If you use AutoCompounders (Beefy, Yieldwolf), move your LPs to{' '}
            <a style={{color: '#e647e6'}} href="https://magik.farm/#/avax">
              Magik
            </a>
            . Same returns, but burns Grape🔥.
            <br />
            <b>Winery -</b> If you have extra MIM, unstake your wine, provide{' '}
            <a
              style={{color: '#e647e6'}}
              href="https://traderjoexyz.com/pool/0x130966628846bfd36ff31a822705796e8cb8c18d/0xc55036b5348cfb45a932481744645985010d3a44#/"
            >
              WINE-MIM LP
            </a>{' '}
            and use it in{' '}
            <a style={{color: '#e647e6'}} href="https://winepress.grapefinance.app/">
              Wine Press!
            </a>
          </Alert>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {/* <Grid item>
              <Button
                href="/pegpool"
                variant="contained"
                className="pegcampaign"
                startIcon={<img width={45} height={30} src={grapeMimImg} />}
              >
                Peg Campaign
              </Button>
            </Grid> */}
            <Grid item>
              <Button
                href="https://winepress.grapefinance.app/"
                variant="contained"
                className="winepress"
                startIcon={<img width={50} height={30} src={pressImg} />}
              >
                WINEPRESS
              </Button>
            </Grid>
            <Grid item>
              <Button
                href="https://casino.grapefinance.app"
                variant="contained"
                className="golden"
                startIcon={<img width={30} height={30} src={grapeGold} />}
              >
                GRAPE CASINO
              </Button>
            </Grid>
            <Grid item>
              <Button
                href="https://winemaker.grapefinance.app/"
                variant="contained"
                className="winemaker"
                startIcon={<img width={30} height={30} src={vintageImg} />}
              >
                WINEMAKER
              </Button>
            </Grid>
            {/*} <Grid item>
              <Button
                href="https://mint.grapefinance.app/"
                variant="contained"
                className="mintvintners"
                startIcon={<img width={30} height={30} src={vintnersGif} />}
              >
                MINT VINTNERS
              </Button>
      </Grid>*/}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" variant="h3" gutterBottom>
                🔥Grape News
              </Typography>
              <Grid container direction="column">
                <Grid item>
                  #1 🏺
                  <b>
                    <a style={{color: '#e647e6'}} href="https://winepress.grapefinance.app/">
                      WINE PRESS
                    </a>
                  </b>{' '}
                  IS OPENED! Earn 1.25% daily + bonus + lottery!
                </Grid>
                <Grid item>
                  #2 🎲 Play{' '}
                  <b>
                    <a style={{color: '#e647e6'}} href="https://casino.grapefinance.app">
                      GRAPE CASINO
                    </a>
                  </b>{' '}
                  NOW!
                </Grid>
                <Grid item>
                  #3 🧊<b>Grape-Wlrs Node</b> were boosted, now printing at 1.8% Daily💲
                </Grid>
                <Grid item>
                  #4 🍭<b>Swapsicle POPs </b> for GRAPE-MIM LP are now claimed on{' '}
                  <a style={{color: '#e647e6'}} href="https://www.swapsicle.io/rewards">
                    Swapsicle
                  </a>
                  , instead of airdrops.
                </Grid>
                <Grid item>
                  #5 🔥<b>Keep it burnin',</b> <span style={{color: '#e647e6'}}>225,000</span> Grape burned thanks to
                  Winemaker!
                </Grid>
                <Grid item>
                  #6 🍷<b>Winemaker Updates</b> & new features coming soon. Play{' '}
                  <a style={{color: '#e647e6'}} href="https://winemaker.grapefinance.app/">
                    here!
                  </a>
                </Grid>
                <Grid item>
                  #7 🍇<b>Wine Press,</b> the famous <span style={{color: '#e647e6'}}>Detonator Pool </span>coming soon
                  to Grape Finance!{' '}
                </Grid>
                <Grid item>
                  #8 🧊<b>Nodes v2 </b> are in the works.{' '}
                  <span style={{color: '#e647e6'}}>Sustainable strategies and incentivize good actors.</span>.
                </Grid>
              </Grid>
              <p style={{textAlign: 'center'}}>
                <a
                  href="https://discord.gg/ZP9aYaXeCJ"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{color: '#fff'}}
                >
                  <IconDiscord width="40" style={{fill: '#fff', height: '40px'}} />
                </a>{' '}
                <a
                  href="https://t.me/GrapeDefi"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{marginLeft: '20px', color: '#fff'}}
                >
                  <IconTelegram width="40" style={{fill: '#fff', height: '40px'}} />
                </a>
              </p>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={5}>
          <Grid container xs={12}>
            <Grid item xs={12} style={{color: 'white'}}>
              <Card style={{minHeight: '200px'}}>
                <CardContent>
                  <Typography color="textPrimary" variant="h4">
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
            <Grid item xs={12} style={{marginTop: '20px'}}>
              <Card>
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

                  <Button onClick={handleOpenModal} className="shinyButton" style={{width: '100%', marginTop: '10px'}}>
                    Estimate my Rewards
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} md={12} lg={12} style={{marginTop: '10px'}}>
          <Grid container spacing={3}>
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
                <img alt="0xGuard KYC" style={{height: '70px'}} src={kyc} />
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
