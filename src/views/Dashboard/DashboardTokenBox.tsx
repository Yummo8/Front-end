import {Grid} from '@material-ui/core';
import React from 'react';
import TokenSymbol from '../../components/TokenSymbol';

interface DashboardTokenBoxProps {
  tokenSymbol: string;
  displayBalance: string;
  tokenPrice?: number;
}

const DashboardTokenBox: React.FC<DashboardTokenBoxProps> = ({tokenSymbol, displayBalance, tokenPrice}) => {
  return (
    <div className="dashboard-token-box">
      <div className="dashboard-token-box-inner">
        <Grid container justifyContent='center'>
          <Grid item>
            <TokenSymbol width={40} height={40} symbol={tokenSymbol} />
          </Grid>
          <Grid item>
            <Grid container direction={'column'} justifyContent="center" alignItems='flex-start' spacing={0}>
              <Grid item className="lineValue">
                {displayBalance}
              </Grid>
              <Grid item className="wallet-token-value">
                {tokenPrice != null && tokenPrice > 0 && displayBalance
                  ? `$${(Number(displayBalance) * tokenPrice).toFixed(2)}`
                  : '0.00'}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DashboardTokenBox;
