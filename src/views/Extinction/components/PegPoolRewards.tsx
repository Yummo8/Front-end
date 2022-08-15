import {Box, Button, Card, CardContent, Typography, Grid} from '@material-ui/core';
import ReactTooltip from 'react-tooltip';
import React, {useEffect, useState} from 'react';
import {PegPoolToken} from '../../../grape-finance/types';
import TokenSymbol from '../../../components/TokenSymbol';
import usePegPoolCompound from '../../../hooks/usePegPoolCompound';
import usePegPoolRewardsClaim from '../../../hooks/usePegPoolRewardsClaim';
import usePegPoolWithdrawFee from '../../../hooks/usePegPoolWithdrawFee';

const PegPoolRewards: React.FC<{
  rewardTokens: PegPoolToken[];
  totalRewardValue: string;
  apr: {daily: string; yearly: string};
}> = ({rewardTokens, totalRewardValue, apr}) => {
  const [hasRewards, setHasRewards] = useState(false);
  const {doClaim} = usePegPoolRewardsClaim();
  const {onCompound} = usePegPoolCompound();
  const {withdrawFeePercent} = usePegPoolWithdrawFee();

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

  return (
    <Card variant="outlined">
      <CardContent>
        <div style={{textAlign: 'center'}}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <TokenSymbol symbol={'WINE'} width={50} height={50} />
            </Grid>
            <Grid item>
              <TokenSymbol symbol={'MIM'} width={50} height={50} />
            </Grid>
          </Grid>
        </div>
        <Grid container direction="column">
          <Grid item>
            <Grid container style={{marginTop: '20px'}} alignItems="baseline" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Your Total Rewards</Typography>
              </Grid>
              <Grid item>
                <Typography align="right"></Typography>
                <Typography variant="h5">${totalRewardValue}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="baseline" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6">DAILY APR</Typography>
              </Grid>
              <Grid item>
                <Typography align="right"></Typography>
                <Typography variant="h6">{withdrawFeePercent === 0 ? 0 : apr.daily}%</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="baseline" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6">YEARLY APR</Typography>
              </Grid>
              <Grid item>
                <Typography align="right"></Typography>
                <Typography variant="h6">{withdrawFeePercent === 0 ? 0 : apr.yearly}%</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center">
          {rewardTokens?.map((token, i) => {
            return (
              <Grid container justifyContent="space-between" alignItems="center" key={i} style={{marginTop: '35px'}}>
                <Grid item xs={1}>
                  <TokenSymbol symbol={token.name} width={40} height={40}/>
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
                      color: 'rgb(200, 200, 200)',
                    }}
                  >
                    {token.currentPrice}
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography align="right">{token.amount} {token.name}</Typography>
                  <Typography align="right">${token.pendingValue}</Typography>
                </Grid>
                {token.canCompound && (
                  <Grid container justifyContent="flex-end" style={{marginTop: '5px'}}>
                    <Grid item>
                      <span
                        style={{
                          color: 'white',
                          display: 'inline-block',
                          margin: '8px',
                          borderRadius: '50%',
                          width: '20px',
                          background: '#e647e6',
                          textAlign: 'center',
                          fontSize: '14px',
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
                        disabled={!hasRewards}
                        className={hasRewards ? 'shinyButton' : 'shinyButtonDisabled'}
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
          <Grid container style={{marginTop: '30px'}}>
            <Button
              className={hasRewards ? 'shinyButton' : 'shinyButtonDisabled'}
              fullWidth={true}
              disabled={!hasRewards}
              onClick={handleClaim}
            >
              Claim All
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PegPoolRewards;
