import React from 'react';
import Typography from '@material-ui/core/Typography';
import grapeImg from '../../assets/img/grape.png';
import wineImg from '../../assets/img/gshare.png';
import {SyncLoader} from 'react-spinners';

const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        textAlign: 'center',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
      }}
    >
      <Typography variant="h3">
        Collecting Grapes <SyncLoader color="white" size={20} />
      </Typography>
      <img alt="grape logo" src={grapeImg} width="50px" />
    </div>
  );
};

export default Loader;
