import React from 'react';
import {useWallet} from 'use-wallet';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {Box, Container, Typography, Grid, Card, CardContent, CircularProgress} from '@material-ui/core';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';

import PegPoolInfo from './components/PegPoolInfo';
import usePegPool from '../../hooks/usePegPool';
import usePegPoolRewards from '../../hooks/usePegPoolRewards';
import TokenSymbol from '../../components/TokenSymbol';
import CountUp from 'react-countup';
import Alert from '@mui/material/Alert';

const Extinction: React.FC = () => {
  const {account} = useWallet();
  const {path} = useRouteMatch();
  const {pegPool} = usePegPool();
  const {rewardTokens, totalRewardValue, apr} = usePegPoolRewards(pegPool);

  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Card style={{textAlign: 'center'}}>
                <CardContent>
                  <Typography color="textSecondary" variant="h3" gutterBottom>
                    🔥Peg Campaign🔥
                  </Typography>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="h6" gutterBottom>
                        Deposit MIM, Get WINE and MIM rewards
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                          <TokenSymbol symbol={'WINE'} />
                        </Grid>
                        <Grid item>
                          <TokenSymbol symbol={'MIM'} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card style={{textAlign: 'center', minHeight: '212px'}}>
                <CardContent>
                  <Typography variant="h3">TOTAL VALUE LOCKED</Typography>
                  {pegPool != null ? (
                    <CountUp className="tvl" end={Number(pegPool.totalDesposits)} separator="," prefix="$" />
                  ) : (
                    <CircularProgress style={{marginTop: '20px'}} size={38} color="inherit" />
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Alert style={{marginTop: '20px'}} variant="outlined" severity="info">
            There is a scaling withdrawal fee based on TWAP. The further away from 1.05 TWAP, the larger the withdrawal
            fee.
          </Alert>
          {!!account ? (
            pegPool &&
            rewardTokens && (
              <PegPoolInfo
                pegPool={pegPool}
                rewardTokens={rewardTokens}
                totalRewardValue={totalRewardValue}
                apr={apr}
              />
            )
          ) : (
            <UnlockWallet />
          )}
        </Route>
      </Page>
    </Switch>
  );
};

export default Extinction;
