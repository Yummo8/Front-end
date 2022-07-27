import React from 'react';
import {Button, Card, CardContent, Grid, Paper, Typography} from '@material-ui/core';
import TokenSymbol from '../../components/TokenSymbol';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import {roundAndFormatNumber} from '../../0x';

interface InfoCardProps {
  name: string;
  buyAddress?: string;
  internalLink?: boolean;
  chartAddress?: string;
  price: number;
  circulatingSupply: number;
  totalSupply: number;
}

const InfoCard: React.FC<InfoCardProps> = ({
  name,
  buyAddress,
  internalLink,
  chartAddress,
  price,
  circulatingSupply,
  totalSupply,
}) => {
  const grapeFinance = useGrapeFinance();

  return (
    <Card>
      <CardContent>
      <Grid container style={{position: 'relative'}} spacing={1}>
          <Grid item xs={3} sm={2} md={3} lg={3}>
            <TokenSymbol symbol={name.toUpperCase()} height={70} width={70} />
          </Grid>
          <Grid item xs={9} sm={10} md={9} lg={9}>
            <Grid container direction="column">
              <Grid item sm={12} md={12} lg={12} style={{marginBottom: '8px'}}>
                <Typography color="textPrimary" variant="h5">
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container alignItems="baseline" justifyContent="space-between">
                  <Grid item>
                    <span className="card-info-text">Price</span>
                  </Grid>
                  <Grid item>
                    <span className="info-card-price">${price ? price : '-.----'}</span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            onClick={() => {
              grapeFinance.watchAssetInMetamask(name.toUpperCase());
            }}
            style={{position: 'absolute', top: '-3px', right: '0'}}
          >
            {' '}
            <b>+</b>&nbsp;&nbsp;
            <img alt="metamask fox" style={{width: '20px'}} src={MetamaskFox} />
          </Button>
        </Grid>
        <Paper style={{marginTop: '10px', marginBottom: '10px', height: '3px'}}></Paper>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <span className="card-info-text">Market Cap</span>
              </Grid>
              <Grid item>
                <b className="card-info-value">${roundAndFormatNumber(circulatingSupply * price, 0)}</b>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <span className="card-info-text">Circulating Supply</span>
              </Grid>
              <Grid item>
                <b className="card-info-value">{roundAndFormatNumber(circulatingSupply, 2)}</b>
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
          {buyAddress && (
            <Grid item className="card-price-item" xs={6} md={6} lg={6}>
              <Button
                href={buyAddress}
                target={internalLink === true ? null : '_blank'}
                className="shinyButton"
                style={{width: '100%', marginTop: '10px', borderRadius: '0px !important'}}
              >
                Buy {name}
              </Button>
            </Grid>
          )}
          {chartAddress && (
            <Grid item className="card-price-item" xs={6} md={6} lg={6}>
              <Button
                href={chartAddress}
                target="_blank"
                className="shinyButton"
                style={{width: '100%', marginTop: '10px', borderRadius: '0px !important'}}
              >
                {name} Chart
              </Button>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
