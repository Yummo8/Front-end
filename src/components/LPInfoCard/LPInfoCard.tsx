import React from 'react';
import {Button, Card, CardContent, Grid, Paper, Typography} from '@material-ui/core';
import TokenSymbol from '../TokenSymbol';
import {roundAndFormatNumber} from '../../0x';

interface LPInfoCardProps {
  name: string;
  poolAddress?: string;
  price: number;
  token1Value: number;
  token1Name: string;
  token2Value: number;
  token2Name: string;
  circulatingSupply: number;
  totalSupply: number;
}

const LPInfoCard: React.FC<LPInfoCardProps> = ({
  name,
  poolAddress,
  price,
  token1Value,
  token1Name,
  token2Value,
  token2Name,
  circulatingSupply,
  totalSupply,
}) => {
  return (
    <Card>
      <CardContent>
        <Grid container style={{position: 'relative'}} spacing={1}>
          <Grid item xs={3} sm={2} md={3} lg={3}>
            <TokenSymbol symbol={name.toUpperCase()} height={70} width={70} />
          </Grid>
          <Grid item xs={9} sm={10} md={9} lg={9}>
            <Grid container direction="column">
              <Grid item>
                <Typography color="textPrimary" variant="h5">
                  {token1Name}-{token2Name} LP
                </Typography>
              </Grid>
              <Grid item>
                <Grid container alignItems="baseline" justifyContent="space-between">
                  <Grid item>
                    <span className="card-info-text">Price</span>
                  </Grid>
                  <Grid item>
                    <span className="info-card-price">${price ? price : '-.----'}</span>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <span className="card-info-text">Ratio</span>
                  </Grid>
                  <Grid item>
                    <span className="info-card-ratio">
                      {token1Value} {token1Name} / {token2Value} {token2Name}
                    </span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Paper style={{marginTop: '10px', marginBottom: '10px', height: '3px'}}></Paper>
        <Grid container direction="column" spacing={1}>
          {/*<Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <span className="card-info-text">Market Cap</span>
              </Grid>
              <Grid item>
                <b className="card-info-value">${roundAndFormatNumber(circulatingSupply * price, 0)}</b>
              </Grid>
            </Grid>
  </Grid>*/}
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <span className="card-info-text">Liquidity</span>
              </Grid>
              <Grid item>
                <b className="card-info-value">${roundAndFormatNumber(circulatingSupply, 2)}</b>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <span className="card-info-text">Total Supply</span>
              </Grid>
              <Grid item>
                <b className="card-info-value">{roundAndFormatNumber(totalSupply, 2)}</b>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item className="card-price-item" xs={12} md={12} lg={12}>
            <Button
              href={poolAddress}
              className="shinyButton"
              style={{width: '100%', marginTop: '17px', borderRadius: '0px !important'}}
            >
              Go to {token1Name}-{token2Name} Pool
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default LPInfoCard;
