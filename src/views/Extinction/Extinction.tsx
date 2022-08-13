import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent } from '@material-ui/core';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';

import PegPoolInfo from './components/PegPoolInfo';
import usePegPool from '../../hooks/usePegPool';
import usePegPoolRewards from '../../hooks/usePegPoolRewards';
import TokenSymbol from '../../components/TokenSymbol';

const Extinction: React.FC = () => {
  const { account } = useWallet();
  const { path } = useRouteMatch();
  const { pegPool } = usePegPool();
  const { rewardTokens, totalRewardValue, apr } = usePegPoolRewards(pegPool);

  return (
    <Switch>
      <Page>
        <Route exact path={path}>

          {!!account ? (
            <Container maxWidth="lg">
              {pegPool && rewardTokens && (
                <Box mt={5}>
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid item>
                      <TokenSymbol symbol={'MIM'} />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    spacing={2}
                    style={{
                      marginTop: '15px',
                    }}
                  >
                    <Grid item>
                      <TokenSymbol symbol={'WINE'} />
                    </Grid>
                    <Grid item>
                      <TokenSymbol symbol={'MIM'} />
                    </Grid>
                    <Grid item>
                      <Typography style={{ fontSize: '18px', lineHeight: '22px', paddingTop: '15px' }}>
                        Dual Reward Pool
                      </Typography>
                    </Grid>
                  </Grid>
                  <div>
                    <Typography
                      style={{ textTransform: 'none', fontWeight: 'bold', marginTop: '20px' }}
                      color="textPrimary"
                      align="center"
                      variant="h3"
                    >
                      Peg Campaign Pool
                    </Typography>

                    <Typography style={{ marginTop: '15px' }} align="center">
                      Deposit MIM - Get WINE and MIM rewards
                    </Typography>

                    <Typography style={{ marginTop: '15px', fontWeight: 'bold' }} align="center">
                      There is a scaling withdrawal fee based on TWAP
                    </Typography>
                    <Typography style={{ marginTop: '5px', fontWeight: 'bold' }} align="center">
                      The further away from 1.00 TWAP the larger the withdrawal fee.
                    </Typography>

                    <Typography
                      style={{ textTransform: 'none', fontWeight: 'bold', marginTop: '20px' }}
                      color="textPrimary"
                      align="center"
                      variant="h5"
                    >
                      Total Value Locked: ${pegPool.totalDesposits}
                    </Typography>

                    <div
                      style={{
                        marginTop: '35px',
                      }}
                    >
                      <PegPoolInfo
                        pegPool={pegPool}
                        rewardTokens={rewardTokens}
                        totalRewardValue={totalRewardValue}
                        apr={apr}
                      />
                    </div>
                  </div>
                </Box>
              )}
            </Container>
          ) : (
            <UnlockWallet />
          )}
        </Route>
      </Page>
    </Switch>
  );
};

export default Extinction;
