import React, {useMemo, useState, useEffect} from 'react';
import {useWallet} from 'use-wallet';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Web3 from 'web3';

import {Box, Card, CardContent, Button, Typography, Grid} from '@material-ui/core';

import {Alert} from '@material-ui/lab';

import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import CemeteryCard from './CemeteryCard';
import {createGlobalStyle} from 'styled-components';

import useBanks from '../../hooks/useBanks';
import useRebateTreasury from '../../hooks/useRebateTreasury';
import useTombStats from '../../hooks/useWineStats';
import daoImg from '../../assets/img/1.jpg';

const web3 = new Web3();
const BN = (n) => new web3.utils.BN(n);

const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${daoImg}) no-repeat !important;
    background-size: cover !important;
    background: radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%);
}


`;

const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: '100%',
  },
}));

const Cemetery = () => {
  const classes = useStyles();
  const [banks] = useBanks();
  const {path} = useRouteMatch();
  const {account} = useWallet();
  const tombStats = useTombStats();
  const activeBanks = banks.filter((bank) => !bank.finished);

  const tombPriceInFTM = useMemo(() => (tombStats ? Number(tombStats.tokenInFtm).toFixed(4) : null), [tombStats]);

  const rebateStats = useRebateTreasury();

  const [claimablewine, setClaimablewine] = useState(0);
  const [vested, setVested] = useState(0);

  useEffect(() => {
    updateVesting();
    const interval = setInterval(updateVesting, 5000);
    return () => clearInterval(interval);
  }, []);

  async function updateVesting() {
    if (!window.ethereum) return;
    const address = (await window.ethereum.request({method: 'eth_accounts'}))[0];
    if (!address) return;

    const claimable = await rebateStats.RebateTreasury.methods.claimableWine(address).call();
    const vesting = await rebateStats.RebateTreasury.methods.vesting(address).call();
    setClaimablewine(+web3.utils.fromWei(claimable));
    setVested(+web3.utils.fromWei(BN(vesting.amount).sub(BN(vesting.claimed))));
  }

  async function claimTomb() {
    console.log('claiming the tomb');
    if (!window.ethereum) return;
    const address = (await window.ethereum.request({method: 'eth_accounts'}))[0];
    if (!address) return;
    window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: address,
          to: rebateStats.RebateTreasury._address,
          data: rebateStats.RebateTreasury.methods.claimRewards().encodeABI(),
        },
      ],
    });
  }

  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <BackgroundImage />
          {!!account ? (
            <>
              <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
                WINE Rebates
              </Typography>
              <Typography color="textPrimary" align="center" variant="h6" gutterBottom style={{marginBottom: '40px'}}>
                Buy Wine at a discount, vested over 3 days
              </Typography>
              <Box mt={2}>
                <Grid container justify="center" spacing={3}>
                  <Grid item xs={12} md={3} lg={3} className={classes.gridItem}>
                    <Card className={classes.gridItem}>
                      <CardContent align="center">
                        <Typography variant="h5">WINE TWAP</Typography>
                        <Typography variant="h6">{tombPriceInFTM ? tombPriceInFTM : '-.----'} MIM</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
              <div style={{ marginTop: '35px'}} hidden={activeBanks.filter((bank) => bank.sectionInUI === 4).length === 0}>
                <Alert
                  style={{backgroundColor: 'black', color: 'white', marginBottom: '15px'}}
                  variant="filled"
                  severity="warning"
                >
                  Rebates replenish everyday at 3pm & 3am UTC. Bond LPs or MIM and receive discounted WINE vested
                  linearly over 3 days. WINE available will be limited and deposited to the contract daily.
                </Alert>
                <Grid container spacing={3}>
                  {activeBanks
                    .filter((bank) => bank.sectionInUI === 4)
                    .map((bank) => (
                      <React.Fragment key={bank.name}>
                        <CemeteryCard bank={bank} />
                      </React.Fragment>
                    ))}
                </Grid>
              </div>
              <Box mt={2}>
                <Grid container justify="center" spacing={3}>
                  <Grid item xs={12} md={6} lg={6} className={classes.gridItem}>
                    <Card style={{height: 'auto'}}>
                      <CardContent align="center">
                        <Typography variant="h5">
                          WINE Vesting (3 days)
                        </Typography>
                        <Typography variant="h6">{vested.toFixed(4)} Total Vested</Typography>
                        <Typography variant="h6">{claimablewine.toFixed(4)} Claimable</Typography>

                        <Button
                          color="primary"
                          size="small"
                          variant="contained"
                          onClick={claimTomb}
                          style={{marginTop: '8px'}}
                        >
                          CLAIM
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </>
          ) : (
            <UnlockWallet />
          )}
        </Route>
      </Page>
    </Switch>
  );
};

export default Cemetery;
