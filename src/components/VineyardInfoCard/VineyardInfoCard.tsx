import React, {useMemo} from 'react';
import {Card, CardContent, Grid} from '@material-ui/core';
import {getDisplayBalance} from '../../utils/formatBalance';
import useStatsForPool from '../../hooks/useStatsForPool';
import useEarnings from '../../hooks/useEarnings';
import useStakedBalance from '../../hooks/useStakedBalance';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import useGrapeStats from '../../hooks/useGrapeStats';
import useShareStats from '../../hooks/useWineStats';
import {Bank} from '../../grape-finance';
import PoolCardHeader from '../PoolCardHeader';
import PoolCardContent from '../PoolCardContent';
import PoolCardFooter from '../PoolCardFooter';

interface VineyardInfoCardProps {
  bank: Bank;
}

const VineyardInfoCard: React.FC<VineyardInfoCardProps> = ({bank}) => {
  const statsOnPool = useStatsForPool(bank);
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const grapeStats = useGrapeStats();
  const tShareStats = useShareStats();
  const tokenStats = bank.earnTokenName === 'WINE' ? tShareStats : grapeStats;

  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInToken = Number(getDisplayBalance(earnings));
  const earnedInDollars = (Number(tokenPriceInDollars) * earnedInToken).toFixed(2);

  const stakedBalance = useStakedBalance(bank.contract, bank.poolId);
  const stakedInToken = Number(getDisplayBalance(stakedBalance, bank.depositToken.decimal));
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);
  const stakedInDollars = (Number(stakedTokenPriceInDollars) * stakedInToken).toFixed(2);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardContent>
          <PoolCardHeader bank={bank} statsOnPool={statsOnPool} stakedInToken={stakedInToken} showAPRCalc />
          <PoolCardContent
            bank={bank}
            statsOnPool={statsOnPool}
            stakedInToken={stakedInToken}
            stakedInDollars={stakedInDollars}
            earnedInToken={earnedInToken}
            earnedInDollars={earnedInDollars}
          />
          <PoolCardFooter actions={['View']} links={[`/vineyard/${bank.contract}`]} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default VineyardInfoCard;
