import React, {useState} from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import TokenSymbol from '../TokenSymbol';
import {Bank} from '../../grape-finance';
import AprModal from '../../views/Vineyard/AprModal';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import {PoolStats} from '../../grape-finance/types';
import {Button} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

interface PoolCardHeaderProps {
  bank: Bank;
  statsOnPool: PoolStats;
  stakedInToken?: number;
  showAPRCalc?: boolean;
}

const PoolCardHeader: React.FC<PoolCardHeaderProps> = ({bank, statsOnPool, stakedInToken, showAPRCalc = false}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <Grid container style={{position: 'relative'}} spacing={1}>
      <AprModal
        open={modalOpen}
        amountDeposited={stakedInToken ? stakedInToken : 100}
        handleClose={handleCloseModal}
        statsOnPool={statsOnPool}
        coin={bank.depositTokenName}
      />
      <Grid
        item
        xs={4}
        sm={3}
        md={3}
        lg={3}
        style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}
      >
        <div style={{padding: '5px'}}>
          <TokenSymbol symbol={bank.depositTokenName} height={50} width={50} />
        </div>
      </Grid>
      <Grid
        item
        xs={8}
        sm={9}
        md={9}
        lg={9}
        style={{
          paddingTop: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography color="textPrimary" variant="h5">
              {bank.depositTokenName}
            </Typography>
            <Typography color="textSecondary">
              {bank.closedForStaking ? (
                <span>Pool Ended Please unstake</span>
              ) : bank.sectionInUI === 3 ? (
                <span>Lock your {bank.depositTokenName} to earn daily yields</span>
              ) : (
                <span>
                  Earn {bank.earnTokenName} {bank.contract === 'GrapeMimSWWineRewardPool' ? '+ POPs airdrops' : null}
                </span>
              )}
            </Typography>
          </Grid>
          <Grid item style={{marginTop: '5px', marginBottom: '5px'}}></Grid>
        </Grid>
      </Grid>

      <Grid item xs={2} style={{marginTop: 5}}>
        <h5 style={{padding: 0, margin: 0}}>Stats</h5>
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={1} justifyContent="flex-end">
          {showAPRCalc && (
            <Grid item>
              <Button
                className="action-button apr-calc"
                onClick={handleOpenModal}
                variant="outlined"
                startIcon={<SwapVerticalCircleIcon />}
              >
                Apr Calc
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <span className="card-info-text">TVL</span>
          </Grid>
          <Grid item>
            <b className={'info-card-price'}>
              {' '}
              ${statsOnPool?.TVL ? Number(Number(statsOnPool?.TVL).toFixed(0)).toLocaleString('en-US') : '-.--'}
            </b>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="baseline" justifyContent="space-between">
          <Grid item>
            <span className="card-info-text">APR</span>
          </Grid>
          <Grid item>
            <span className="info-card-price">{bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="baseline" justifyContent="space-between">
          <Grid item>
            <span className="card-info-text">Daily</span>
          </Grid>
          <Grid item>
            <span className="info-card-price">{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PoolCardHeader;
