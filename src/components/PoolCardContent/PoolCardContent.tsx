import React from 'react';
import {Grid} from '@material-ui/core';
import {Bank} from '../../grape-finance';
import {PoolStats} from '../../grape-finance/types';

interface PoolCardContentProps {
  bank: Bank;
  statsOnPool: PoolStats;
  stakedInToken: number;
  stakedInDollars: string;
  earnedInToken: number;
  earnedInDollars: string;
}

const PoolCardContent: React.FC<PoolCardContentProps> = ({
  bank,
  statsOnPool,
  stakedInToken,
  stakedInDollars,
  earnedInToken,
  earnedInDollars,
}) => {
  return (
    <Grid container direction="column" spacing={1}>
      {stakedInToken > 0 && (
        <>
          <Grid item style={{marginTop: 15}}>
            <h5 style={{padding: 0, margin: 0}}>Your stats</h5>
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <span className="card-info-text">Staked</span>
              </Grid>
              <Grid item>
                <b
                  className={stakedInToken > 0 ? 'card-info-value' : 'card-info-value grey-text'}
                >{`${stakedInToken} ${bank.depositTokenName}`}</b>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <span className="card-info-text">Value $</span>
              </Grid>
              <Grid item>
                <b className={stakedInToken > 0 ? 'card-info-value' : 'card-info-value grey-text'}>{`≈$${Number(
                  stakedInDollars,
                ).toLocaleString('en-US')}`}</b>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <span className="card-info-text">Earned</span>
              </Grid>
              <Grid item>
                <b
                  className={stakedInToken > 0 ? 'card-info-value' : 'card-info-value grey-text'}
                >{`${earnedInToken} ${bank.earnTokenName}`}</b>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <span className="card-info-text">Earned $</span>
              </Grid>
              <Grid item>
                <b className={stakedInToken > 0 ? 'card-info-value' : 'card-info-value grey-text'}>{`≈$${Number(
                  earnedInDollars,
                ).toLocaleString('en-US')}`}</b>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default PoolCardContent;
