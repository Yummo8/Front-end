import React from 'react';
import {Box} from '@material-ui/core';
import AccountButton from '../Nav/AccountButton';

const UnlockWallet = () => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent="center">
      <AccountButton />
    </Box>
  );
};

export default UnlockWallet;
