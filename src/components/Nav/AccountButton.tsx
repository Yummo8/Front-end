import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import {useWallet} from 'use-wallet';
import useModal from '../../hooks/useModal';
import WalletProviderModal from '../WalletProviderModal';
import AccountModal from './AccountModal';
import {useENS} from '../../hooks/useENS';
import Davatar from '@davatar/react';
import AnimatedButton from '../Button/AnimatedButton';

function shorten(str: string) {
  if (str.length < 10) return str;
  return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
}

interface AccountButtonProps {
  text?: string;
}

const AccountButton: React.FC<AccountButtonProps> = ({text}) => {
  const {account} = useWallet();
  const [onPresentAccountModal] = useModal(<AccountModal />);
  const {ensName} = useENS(account);

  const [isWalletProviderOpen, setWalletProviderOpen] = useState(false);

  const handleWalletProviderOpen = () => {
    setWalletProviderOpen(true);
  };

  const handleWalletProviderClose = () => {
    setWalletProviderOpen(false);
  };

  const buttonText = text ? text : 'Connect Wallet';

  return (
    <div>
      {!account ? (
        <AnimatedButton backgroundColor="#930993" onClick={handleWalletProviderOpen} icon={null} title={buttonText} />
      ) : (
        <AnimatedButton
          backgroundColor="#930993"
          onClick={onPresentAccountModal}
          icon={<Davatar size={20} address={account} />}
          title={ensName || shorten(account)}
        />
      )}

      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose} />
      {/* <AccountModal open={isAccountModalOpen} handleClose={handleAccountModalClose}/> */}
    </div>
  );
};

export default AccountButton;
