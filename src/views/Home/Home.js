import React, {useMemo, useState} from 'react';
import Page from '../../components/Page';
import InfoCard from '../../components/InfoCard';
import LPInfoCard from '../../components/LPInfoCard';
import {SyncLoader} from 'react-spinners';
import CountUp from 'react-countup';
import useGrapeStats from '../../hooks/useGrapeStats';
import useLpStats from '../../hooks/useLpStats';
import useLpStatsBTC from '../../hooks/useLpStatsBTC';
import useBondStats from '../../hooks/useBondStats';
import useWineStats from '../../hooks/useWineStats';

import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import {Button, Grid, Paper, CircularProgress, Typography} from '@material-ui/core';
import kyc from '../../assets/img/kyc.png';
import audit from '../../assets/img/audit1.png';

import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useGetBoardroomPrintRate from '../../hooks/useGetBoardroomPrintRate';
import homeItems from '../../homePageItems.json';
import HomeCard from './HomeCard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useGetBurntGrape from '../../hooks/useGetBurntGrape';

import burnImage from '../../assets/img/burninggrape.png';
import downGif from '../../assets/img/arrow-down-animated.gif';

const Home = () => {
  const totalTVL = useTotalValueLocked();
  const grapemimLpStats = useLpStatsBTC('GRAPE-MIM-LP');
  const bSharemimLpStats = useLpStats('WINE-MIM-LP');
  const [seeMoreInfo, setSeeMoreInfo] = useState(false);
  const newPair = useLpStats('GRAPE-WINE-LP');

  const grapeStats = useGrapeStats();
  const bShareStats = useWineStats();
  const tBondStats = useBondStats();

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

  // const cashStat = useCashPriceInEstimatedTWAP();
  // const twap = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);

  const grapeBurnt = useGetBurntGrape();

  const scrollDown = () => {
    document.getElementById('apps').scrollIntoView();
  };

  return (
    <Page>
      <Grid container direction="column" justifyContent="space-between" style={{minHeight: '75vh'}}>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <Grid container justifyContent="center" spacing={2} alignItems="center">
            <Grid item>
              <img alt="burning grape" src={burnImage} className="burning-grape" />
            </Grid>
            <Grid item>
              <span className="welcome-text">Welcome to Grape Finance</span>
            </Grid>
            <Grid item>
              {' '}
              <Button
                href="https://grape-finance.gitbook.io/grape-finance-docs/"
                target="_blank"
                variant="contained"
                className="winepress get-started"
              >
                Read the Docs
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <div className="front-text-top">TOTAL VALUE LOCKED</div>
          <div className="front-text-tvl">
            {totalTVL ? (
              <CountUp end={totalTVL} separator="," prefix="$" />
            ) : (
              <span className="loading-tvl">
                <SyncLoader color="#E647E6" size={30} />
              </span>
            )}
          </div>
          <div style={{marginTop: '15px'}} className="burnt-grape">
            TOTAL BURNT GRAPE
          </div>
          <div className="burnt-grape-value">
            {grapeBurnt ? grapeBurnt.toLocaleString('en-US') : <SyncLoader color="#e67f47" size={10} />}
          </div>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}} id="apps">
          <img style={{cursor: 'pointer'}} onClick={scrollDown} alt="down arrow" src={downGif} width={55} height={35} />
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{marginTop: '50px'}}>
        {homeItems.map((item) => (
          <HomeCard item={item} />
        ))}

        <Grid item sm={12} style={{textAlign: 'center', marginTop: '30px'}}>
          <Button
            className="shinyButton"
            onClick={() => {
              setSeeMoreInfo(!seeMoreInfo);
            }}
          >
            See More Info
            {!seeMoreInfo ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </Button>
        </Grid>

        {seeMoreInfo && (
          <>
            <Grid item sm={12} md={12} lg={12} style={{marginTop: '10px'}}>
              <Grid container spacing={3}>
                <Grid item xs={6} md={4} lg={3} style={{color: 'white', textAlign: 'center'}}>
                  <Typography color="textPrimary" variant="h6">
                    EPOCH
                  </Typography>{' '}
                  {currentEpoch ? (
                    <CountUp style={{fontSize: '30px'}} end={currentEpoch} />
                  ) : (
                    <CircularProgress size={28} color="inherit" />
                  )}
                </Grid>
                {/*<Grid item xs={6} md={4} lg={2} style={{color: 'white', textAlign: 'center'}}>
                  <Typography color="textPrimary" variant="h6">
                    Above Peg
                  </Typography>
                  {printRate ? (
                    <span style={{fontSize: '30px'}}>{printRate.toFixed(2)}%</span>
                  ) : (
                    <CircularProgress size={28} color="inherit" />
                  )}
                  </Grid>*/}
                <Grid item xs={12} md={4} lg={3} style={{color: 'white', textAlign: 'center'}}>
                  <Typography color="textPrimary" variant="h6">
                    Launched
                  </Typography>
                  <span style={{fontSize: '30px'}}>Jan 13, 2022</span>
                </Grid>
                <Grid item xs={6} md={6} lg={3} style={{color: 'white', textAlign: 'center'}}>
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
                <Grid item xs={6} md={6} lg={3} style={{color: 'white', textAlign: 'center'}}>
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
          </>
        )}
      </Grid>
    </Page>
  );
};

export default Home;
