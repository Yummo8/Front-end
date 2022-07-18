import { Modal, Box, Typography, makeStyles} from '@material-ui/core';
import React, {useState} from 'react';
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

function nFormatter(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
}

const AprModal = ({open, amountDeposited, handleClose, statsOnPool, coin}) => {
  const [aprAmount, setAprAmount] = useState(amountDeposited);
  const classes = useStyles();

  const calculateAprGain = (apr) => {
    return (Number(aprAmount) * (Number(apr) / 100)).toFixed(2);
  };

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
              setAprAmount(amountDeposited);
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
          <Typography className={classes.text}>{coin} Deposited:</Typography>
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
              $
              <input
                type="number"
                value={aprAmount}
                className={classes.input}
                onChange={(e) => setAprAmount(e.target.value)}
              />
            </Box>
            <button className={classes.inputButton} onClick={() => setAprAmount(1000)}>
              $1000
            </button>
            <button className={classes.inputButton} onClick={() => setAprAmount(2000)}>
              $2000
            </button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '20px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
              }}
            >
              <Box sx={{width: '50px'}}>
                <Typography className={classes.subTitle}>Time</Typography>
              </Box>
              <Box sx={{width: '75px'}}>
                <Typography className={classes.subTitle}>APR</Typography>
              </Box>
              <Typography className={classes.subTitle}>Wine Per ${aprAmount}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
              }}
            >
              <Box sx={{width: '50px'}}>
                <Typography className={classes.text}>1d</Typography>
              </Box>
              <Box sx={{width: '75px'}}>
                <Typography className={classes.text}>{statsOnPool?.dailyAPR}%</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'baseline',
                }}
              >
                {/* <Typography className={classes.text}>${nFormatter(calculateApr(statsOnPool?.dailyAPR))}</Typography> */}
                <Typography className={classes.greenText}>
                  ${nFormatter(calculateAprGain(statsOnPool?.dailyAPR))}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
              }}
            >
              <Box sx={{width: '50px'}}>
                <Typography className={classes.text}>7d</Typography>
              </Box>
              <Box sx={{width: '75px'}}>
                <Typography className={classes.text}>{(statsOnPool?.dailyAPR * 7).toFixed(2)}%</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'baseline',
                }}
              >
                {/* <Typography className={classes.text}>${nFormatter(calculateApr(statsOnPool?.dailyAPR * 7))}</Typography> */}
                <Typography className={classes.greenText}>
                  ${nFormatter(calculateAprGain(statsOnPool?.dailyAPR * 7))}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
              }}
            >
              <Box sx={{width: '50px'}}>
                <Typography className={classes.text}>30d</Typography>
              </Box>
              <Box sx={{width: '75px'}}>
                <Typography className={classes.text}>{(statsOnPool?.dailyAPR * 30).toFixed(2)}%</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'baseline',
                }}
              >
                {/* <Typography className={classes.text}>
                  ${nFormatter(calculateApr(statsOnPool?.dailyAPR * 30))}
                </Typography> */}
                <Typography className={classes.greenText}>
                  ${nFormatter(calculateAprGain(statsOnPool?.dailyAPR * 30))}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
              }}
            >
              <Box sx={{width: '50px'}}>
                <Typography className={classes.text}>365d</Typography>
              </Box>
              <Box sx={{width: '75px'}}>
                <Typography className={classes.text}>{statsOnPool?.yearlyAPR}%</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'baseline',
                }}
              >
                {/* <Typography className={classes.text}>${nFormatter(calculateApr(statsOnPool?.yearlyAPR))}</Typography> */}
                <Typography className={classes.greenText}>
                  ${nFormatter(calculateAprGain(statsOnPool?.yearlyAPR))}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AprModal;
