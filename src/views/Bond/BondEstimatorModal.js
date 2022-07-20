import {Modal, Grid, GridItem, Box, Typography, makeStyles} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
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
  subTitle: {
    color: '#fff',
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
  top: '50%',
  color: '#fff',
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

const BondEstimatorModal = ({open, walletBondAmount, handleClose}) => {
  const [bondAmount, setBondAmount] = useState(walletBondAmount);
  const [twap, setTwap] = useState(1.1);

  const classes = useStyles();

  const [ratio, setRatio] = useState(1);
  const [grapeRedeemed, setGrapeRedeemed] = useState("1");

  const updateCalculation = (bondAmount, twap) => {
    const coeff = 0.7
    const ratio = 1 + ((Number(twap) - 1) * coeff)
    setRatio(ratio.toFixed(3))
    setGrapeRedeemed((Number(bondAmount) * ratio).toFixed(2))
  };

  useEffect(() => {
    updateCalculation(bondAmount, twap)
  }, [open, walletBondAmount, handleClose, bondAmount, twap])

  return (
    <Modal open={open}>
      <Box sx={style}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => {
              handleClose();
              setBondAmount(walletBondAmount);
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
          <Typography className={classes.text}>Enter GBonds amount:</Typography>
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
                type="text"
                value={bondAmount}
                className={classes.input}
                onChange={(e) => {
                  setBondAmount(e.target.value);
                  // updateCalculation(e.target.value, twap);
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          mt={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography className={classes.text}>Enter Grape TWAP:</Typography>
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
                value={twap}
                className={classes.input}
                onChange={(e) => {
                  setTwap(e.target.value);
                  // updateCalculation(bondAmount, e.target.value);
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box mt={3}>
          <Grid container direction="column">
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>TWAP</Grid>
                <Grid item>
                  <b>{twap}</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>GBonds amount</Grid>
                <Grid item>
                  <b>{Number(bondAmount).toFixed(2)}</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container style={{color: '#930993'}} justifyContent="space-between">
                <Grid item>Ratio</Grid>
                <Grid item>
                  <b>1 / {ratio}</b>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container style={{color: '#930993'}} justifyContent="space-between">
                <Grid item>Grapes redeemed</Grid>
                <Grid item>
                  <b>{grapeRedeemed}</b>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default BondEstimatorModal;
