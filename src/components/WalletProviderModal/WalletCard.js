import React from 'react';
import {Button} from '@material-ui/core';

const WalletCard = ({icon, onConnect, title}) => (
  <Button fullWidth onClick={onConnect} className="wallet-button">
    <span style={{marginRight: '1rem', height: '2rem'}}>{icon}</span>
    <span className='walletconnecttitle'>{title}</span>
  </Button>
);

export default WalletCard;

// :)
