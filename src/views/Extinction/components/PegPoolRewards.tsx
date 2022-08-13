import { Box, Button, Card, CardContent, Typography, Grid } from '@material-ui/core';
import ReactTooltip from 'react-tooltip';
import React, { useEffect, useState } from 'react';
import { PegPoolToken } from '../../../grape-finance/types';
import TokenSymbol from '../../../components/TokenSymbol';
import usePegPoolCompound from '../../../hooks/usePegPoolCompound';
import usePegPoolRewardsClaim from '../../../hooks/usePegPoolRewardsClaim';
import usePegPoolWithdrawFee from '../../../hooks/usePegPoolWithdrawFee';

const PegPoolRewards: React.FC<{
  rewardTokens: PegPoolToken[];
  totalRewardValue: string;
  apr: { daily: string; yearly: string };
}> = ({ rewardTokens, totalRewardValue, apr }) => {
  const [hasRewards, setHasRewards] = useState(false);
  const { doClaim } = usePegPoolRewardsClaim();
  const { onCompound } = usePegPoolCompound();
  const { withdrawFeePercent } = usePegPoolWithdrawFee();

  const checkRewards = () => {
    let hasClaim = false;
    rewardTokens.forEach((rw) => (hasClaim = rw.pendingValueBN?.gt(0)));
    setHasRewards(hasClaim);
  };

  const handleClaim = () => {
    if (hasRewards) {
      doClaim();
    }
  };

  useEffect(() => {
    if (rewardTokens?.length) {
      checkRewards();
    }
  }, [rewardTokens]);

  const labels = {
    fontWeight: 700,
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box style={{ width: '376px' }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography style={labels} align="center">
                Your Total Rewards
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography style={labels} align="center">
                ${totalRewardValue}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            style={{
              fontWeight: 500,
              marginTop: '15px',
            }}
          >
            Daily APR:
            <Grid item>{withdrawFeePercent == 0 ? 0 : apr.daily}%</Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            style={{
              fontWeight: 500,
              marginTop: '5px',
            }}
          >
            Yearly APR:
            <Grid item>{withdrawFeePercent == 0 ? 0 : apr.yearly}%</Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
            {rewardTokens?.map((token, i) => {
              return (
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  key={i}
                  style={{ marginTop: '35px' }}
                >
                  <Grid item xs={1}>
                    <TokenSymbol symbol={token.name} />
                  </Grid>
                  <Grid item xs={1}>
                    <Typography
                      style={{
                        fontWeight: 700,
                        paddingTop: '5px',
                        display: 'block',
                      }}
                    >
                      {' '}
                      {token.name}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: '14px',
                        color: 'rgb(130, 130, 130)',
                      }}
                    >
                      {token.currentPrice}
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography align="right"> {token.amount}</Typography>
                    <Typography align="right"> ${token.pendingValue}</Typography>
                  </Grid>
                  {token.canCompound && (
                    <Grid container justifyContent="flex-end" style={{ marginTop: '5px' }}>
                      <Grid item>
                        <span
                          style={{
                            display: 'inline-block',
                            margin: '4px',
                            border: '1px solid black',
                            borderRadius: '50%',
                            height: '15px',
                            width: '15px',
                            background: 'lightgray',
                            textAlign: 'center',
                            fontSize: '12px',
                            cursor: 'pointer',
                          }}
                          data-tip="*Compound deposit result subject to DEX fees/slippage"
                        >
                          !
                        </span>

                        <ReactTooltip />
                      </Grid>
                      <Grid item>
                        <Button
                          className={hasRewards ? 'shinyButtonSecondary' : 'shinyButtonDisabled'}
                          
                          onClick={onCompound}
                        >
                          Compound
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              );
            })}
            <Grid container style={{ marginTop: '30px' }}>
              <Button
                className={hasRewards ? 'shinyButtonSecondary' : 'shinyButtonDisabled'}
                fullWidth={true}
           
                onClick={handleClaim}
              >
                Claim All
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PegPoolRewards;
