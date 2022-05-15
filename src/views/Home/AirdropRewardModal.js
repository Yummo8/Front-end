import { Modal, Box, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  textField: {
    color: 'black',
    '& *': {
      color: 'black',
    },
  },
  text: {
    fontSize: '14px',
  },
  yourText: {
    fontSize: '16px',
    color: '#930993'
  },
  subTitle: {
    color: '#0a274280',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  greenText: {
    color: '#36d846',
    fontSize: '14px',
  },
  inputButton: {
    marginLeft: '8px',
    fontSize: '12px',
    borderRadius: '4px',
    background: '#0c7aca',
    border: 'none',
    outline: 'none',
    padding: '0px 4px',
    lineHeight: '24px',
    color: 'white',
    cursor: 'pointer',
  },
  input: {
    appearance: 'none',
    fontSize: '20px',
    border: 'none',
    outline: 'none',
    padding: 'none',
    width: '100%',
    paddingBlock: '5px',
    backgroundColor: 'transparent',
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
    },
    '&[type=number]': {
      MozAppearance: 'none',
    },
  },
}));

const style = {
  position: 'absolute',
  color: '#fff',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min(90%, 450px)',
  bgcolor: 'rgba(0,0,0,0.8)',
  p: '24px',
  display: 'flex',
  flexDirection: 'column',
  outline: 'none',
  boxSizing: 'border-box',
  borderRadius: '12px',
};

const NFT_TICKET_COUNT = 9600;
 
const AirdropRewardModal = ({ open, handleClose, grapes, grapePrice, wines, winePrice, totalGrapes, totalWine }) => {
  const [ticketNumber, setTicketNumber] = useState(100);
  const classes = useStyles();

  const getNumberOfNodes = (coin) => {
    if (coin === 'GRAPE') {
      return Number(grapes);
    }
    return Number((wines));
  }

  const getPriceForNodes = (coin) => {
    if (coin === 'GRAPE') {
      return Number((totalGrapes * grapePrice).toFixed(0));
    }
    return Number((totalWine * winePrice).toFixed(0))
  }

  const getShareValue = () => {
    return Number(((ticketNumber * (getPriceForNodes('GRAPE') + getPriceForNodes('WINE'))) / (getTotalNumberOfNodes() + 9600)).toFixed(0));
  }

  const getTotalNumberOfNodes = () => {
    return getNumberOfNodes('GRAPE') + getNumberOfNodes('WINE');
  }

  return (
    <Modal open={open}>
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => {
              handleClose();
              setTicketNumber(100);
            }}
          >
            <CloseIcon />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2 style={{fontSize: '22px'}}>Enter your number of tickets</h2>
          <Box
            sx={{
              borderRadius: '10px',
              bgcolor: '#eff2f4',
              border: '1px solid #d0d3d4',
              p: '10px',
              mt: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                mb: '10px',
              }}
            >
              <input
                type="number"
                value={ticketNumber}
                className={classes.input}
                onChange={(e) => setTicketNumber(e.target.value)}
              /> <br/>
            </Box>
            <Box sx={{ fontStyle: 'italic', marginTop: '10px', fontSize: '11px', color: '#000' }}>
                1 node (grape or wine) gives 1 ticket<br/>
                1 Goon Bag gives 1 ticket<br/>
                1 Glass gives 3 tickets<br/>
                1 Decanter gives 9 tickets<br/>
                1 Goblet gives 30 tickets<br/>
              </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '20px',
            }}
          >
            <Box>
              <h2 style={{fontSize: '22px'}}>In the Reward Pool, we currently have</h2>
              <Typography className={classes.text}>{getNumberOfNodes('GRAPE')} Total Grape Nodes & (≈${getPriceForNodes('GRAPE')}) Grape in the reward pool</Typography>
              <Typography className={classes.text}>{getNumberOfNodes('WINE')} Total Wine Nodes & (≈${getPriceForNodes('WINE')}) Wine in the reward pool</Typography>
              <Typography className={classes.text}>Total Tickets from Nodes: {getTotalNumberOfNodes()}</Typography>
              <Typography className={classes.text}>Total Tickets from NFTs: {NFT_TICKET_COUNT}</Typography>
              <Typography className={classes.text}><b>TOTAL TICKETS: {getTotalNumberOfNodes() + NFT_TICKET_COUNT}</b></Typography>

              <Box sx={{ marginTop: '10px'}} className={classes.text}>{getTotalNumberOfNodes() + NFT_TICKET_COUNT} tickets are worth ≈${getPriceForNodes('GRAPE') + getPriceForNodes('WINE')}</Box>
              <Typography className={classes.yourText}><b>Your {ticketNumber} tickets are worth approx. ≈${getShareValue()}</b></Typography>

              <Box sx={{ fontStyle: 'italic', marginTop: '10px', fontSize: '11px' }}>Please note that the numbers are only an estimation, they are based upon the current balance of the reward pool and the current prices. They also estimate that all NFTs are held by node holders. Do not consider the results as your final reward amount.</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AirdropRewardModal;
