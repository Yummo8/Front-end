import {Modal, Box, makeStyles} from '@material-ui/core';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import getStartedImg from '../../assets/img/getStarted.jpg';

const style = {
  position: 'absolute',
  color: '#fff',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '450px',
  bgcolor: 'rgba(0,0,0,0.8)',
  p: '24px',
  display: 'flex',
  flexDirection: 'column',
  outline: 'none',
  boxSizing: 'border-box',
  borderRadius: '12px',
};

const AirdropRewardModal = ({open, handleClose}) => {
  return (
    <Modal open={open}>
      <Box sx={style}>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Box
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => {
              handleClose();
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
          <img alt="get started" src={getStartedImg} width="100%" height="100%" />
        </Box>
      </Box>
    </Modal>
  );
};

export default AirdropRewardModal;
