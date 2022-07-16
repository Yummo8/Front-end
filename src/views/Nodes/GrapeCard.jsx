import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, Paper, CardContent, Typography, Grid} from '@material-ui/core';
import TokenSymbol from '../../components/TokenSymbol';
import useBank from '../../hooks/useBank';
import useStatsForPool from '../../hooks/useStatsForPool';
import {GRAPE_NODE_MULTIPLIER} from '../../utils/constants';

const GrapeCard = ({}) => {
  const tombBank = useBank('GrapeNode');
  const statsOnPool = useStatsForPool(tombBank);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardContent>
          <Grid container style={{position: 'relative'}}>
            <Grid item sm={3}>
              <TokenSymbol width={50} height={50} symbol={'GNODE'} />
            </Grid>
            <Grid item sm={9}>
              <Grid container direction="column">
                <Grid item>
                  <Typography color="textPrimary" variant="h5">
                    Grape Node
                  </Typography>
                  <Typography color="textSecondary">Lock your Grapes to earn daily yields</Typography>
                </Grid>
                <Grid item>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <span className="card-info-text">APR</span>
                    </Grid>
                    <Grid item>
                      <span className="info-card-price">{statsOnPool?.yearlyAPR}% + airdrops</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <span className="card-info-text">TVL</span>
                    </Grid>
                    <Grid item>
                      <span className="info-card-price">
                        {' '}
                        $
                        {statsOnPool?.TVL
                          ? Number(Number(statsOnPool?.TVL).toFixed(0)).toLocaleString('en-US')
                          : '-.--'}
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Paper style={{marginTop: '10px', marginBottom: '10px', height: '3px'}}></Paper>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <span className="card-info-text">Daily APR</span>
                </Grid>
                <Grid item>
                  <b className="card-info-value">{statsOnPool?.dailyAPR}% + airdrops</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <span className="card-info-text">Monthly Airdrop Ticket</span>
                </Grid>
                <Grid item>
                  <b className="card-info-value">{GRAPE_NODE_MULTIPLIER} ticket per Node</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <span className="card-info-text">Monthly Airdrop Ticket</span>
                </Grid>
                <Grid item>
                  <b className="card-info-value">{GRAPE_NODE_MULTIPLIER} ticket per Node</b>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item className="card-price-item" xs={6} md={6} lg={6}>
              <Button
                className="shinyButton"
                style={{width: '100%', marginTop: '17px'}}
                component={Link}
                to={'/nodes/GrapeNode'}
              >
                View
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GrapeCard;
