import React, {useEffect} from 'react';
import WalletCard from './WalletCard';

import {Modal, List} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import trustWalletLogo from '../../assets/img/trust-wallet.svg';
import metamaskLogo from '../../assets/img/metamask-fox.svg';
import walletConnectLogo from '../../assets/img/wallet-connect.svg';
import coingBaseLogo from '../../assets/img/coinbase_logo.jpeg';
import {useWallet} from 'use-wallet';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '400px',
    maxWidth: '100%',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.8)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

const WalletProviderModal = ({open, handleClose}) => {
  const classes = useStyles();
  const {account, connect} = useWallet();

  useEffect(() => {
    if (account) {
      handleClose();
    }
  });

  return (
    <Modal
      aria-labelledby="connect a wallet"
      aria-describedby="connect your crypto wallet"
      open={open}
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        <h2>Connect Wallet</h2>
        <List component="nav" aria-label="main mailbox folders">
          <WalletCard
            icon={<img src={metamaskLogo} alt="Metamask logo" style={{height: 32}} />}
            onConnect={() => {
              connect('injected');
            }}
            title="Metamask"
          />
          <WalletCard
            icon={<img src={trustWalletLogo} alt="Trust Wallet logo" style={{height: 32}} />}
            onConnect={() => {
              connect('injected');
            }}
            title="Trust Wallet"
          />
          <WalletCard
            icon={<img src={walletConnectLogo} alt="Wallet Connect logo" style={{height: 24, color: 'white'}} />}
            onConnect={() => {
              connect('walletconnect');
            }}
            title="WalletConnect"
          />
          <WalletCard
            icon={<img src={coingBaseLogo} alt="Coinbase wallet logo" style={{height: 32, color: 'white'}} />}
            onConnect={() => {
              connect('walletlink');
            }}
            title="Coinbase Wallet"
          />
        </List>
      </div>
    </Modal>
  );
};

export default WalletProviderModal;
