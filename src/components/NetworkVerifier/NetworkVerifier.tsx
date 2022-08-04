import {Container, Snackbar} from '@material-ui/core';
import {Alert} from '@mui/material';
import React, {useEffect, useState} from 'react';
import config from '../../config';

const NetworkVerifier: React.FC = () => {
  const [currentChain, setCurrentChain] = useState(0);
  const vertical = 'top';
  const horizontal = 'right';

  useEffect(() => {
    if (window.ethereum) {
      setCurrentChain(parseInt(window.ethereum.chainId));
      window.ethereum.on('chainChanged', (chainId: any) => {
        console.log(' chain change => ' + chainId);
        window.location.reload();
      });
    }
  }, []);

  return (
    <>
      {currentChain && currentChain !== config.chainId ? (
        <Snackbar open style={{marginTop: '80px'}} anchorOrigin={{vertical, horizontal}}>
          <Alert severity="warning" sx={{width: '100%'}}>
            Swith to Avalanche Network
          </Alert>
        </Snackbar>
      ) : null}
    </>
  );
};

export default NetworkVerifier;
