import {Grid} from '@material-ui/core';
import React from 'react';
import TokenSymbol from '../../components/TokenSymbol';

interface DashboardNFTBoxProps {
  nftSymbol: string;
  count: number;
  multiplier: number;
}

const DashboardNFTBox: React.FC<DashboardNFTBoxProps> = ({nftSymbol, count, multiplier}) => {
  return (
    <div className="dashboard-token-box">
      <div className="dashboard-token-box-inner">
        <Grid container justifyContent="center" spacing={1}>
          <Grid item>
            <TokenSymbol width={40} height={40} symbol={nftSymbol} />
          </Grid>
          <Grid item>
            <Grid container direction={'column'} justifyContent="center" alignItems="flex-start" spacing={0}>
              <Grid item className="lineValue">
                {count != null ? count : '0'} NFTs
              </Grid>
              <Grid item className="wallet-token-value">
                {count != null && multiplier != null ? count * multiplier : `Loading`} Tickets
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DashboardNFTBox;
