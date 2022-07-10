import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, Card, CardActions, CardContent, Typography, Grid} from '@material-ui/core';
import TokenSymbol from '../../components/TokenSymbol';
import useStatsForPool from '../../hooks/useStatsForPool';
import AprModal from './AprModal';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';

const FarmCard = ({bank}) => {

  const statsOnPool = useStatsForPool(bank);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <Grid item xs={12} md={4} lg={4}>
      <Card variant="outlined">
        <CardContent>
          <AprModal
            open={modalOpen}
            handleClose={handleCloseModal}
            statsOnPool={statsOnPool}
            coin={bank.depositTokenName}
          />
          <Box style={{position: 'relative'}}>
            <Box
              style={{
                position: 'absolute',
                right: '5px',
                top: '-5px',
                height: '48px',
                width: '48px',
                borderRadius: '40px',
                backgroundColor: 'rgba(255,255,255,0.0)',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TokenSymbol size={32} symbol={bank.depositTokenName} />
            </Box>
            <Typography variant="h5" component="h2">
              {bank.depositTokenName}
            </Typography>
            <Typography color="#322f32">
              {/* {bank.name} */}
              {bank.closedForStaking ? <span>Pool Ended Please unstake</span> : <span>Earn {bank.earnTokenName}</span>}
              {bank.depositTokenName === 'GRAPE-MIM-SW' ? <span> + POPs drops</span> : null}
            </Typography>
            {/*<Typography color="#322f32">
           
              <b>Daily APR:</b> {bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%
            </Typography>*/}
            <Typography color="#322f32">
              {/* {bank.name}  */}
              {/* {bank.depositTokenName == 'HSHARE-WINE-LP' ? (
                <span style={{color: 'rgba(0,0,0,0)'}}>a</span>
              ) : (
                <span>Pool Weighting: {bank.multi}</span>
              )} */}
              <b>Yearly APR:</b> {bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%
            </Typography>
            <Box
              onClick={handleOpenModal}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
              }}
            >
              <Typography><b><u>APR Calc</u></b></Typography><SwapVerticalCircleIcon />
            </Box>
          </Box>
        </CardContent>
        <CardActions style={{justifyContent: 'flex-end'}}>
          {bank.buyLink !== null ? (
            <Button className="shinyButtonSecondary" target="_blank" href={`${bank.buyLink}`}>
              Trade
            </Button>
          ) : null}
          <Button className="shinyButtonSecondary" component={Link} to={`/vineyard/${bank.contract}`}>
            Stake
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FarmCard;
