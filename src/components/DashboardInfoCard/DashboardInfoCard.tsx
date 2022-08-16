import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardContent, Grid} from '@material-ui/core';
import {getDisplayBalance} from '../../utils/formatBalance';
import useStatsForPool from '../../hooks/useStatsForPool';
import useEarnings from '../../hooks/useEarnings';
import useHarvest from '../../hooks/useHarvest';
import useStakedBalance from '../../hooks/useStakedBalance';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import useGrapeStats from '../../hooks/useGrapeStats';
import useShareStats from '../../hooks/useWineStats';
import {Bank} from '../../grape-finance';
import PoolCardHeader from '../PoolCardHeader';
import PoolCardContent from '../PoolCardContent';
import ReactTooltip from 'react-tooltip';
import rewards from '../../assets/jsons/rewards.json';

interface DashboardInfoCardProps {
  bank: Bank;
}

const DashboardInfoCard: React.FC<DashboardInfoCardProps> = ({bank}) => {
  const statsOnPool = useStatsForPool(bank);
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const {onReward} = useHarvest(bank);
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
    <Grid item xs={12} sm={12} md={6} lg={4}>
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
          <Grid container spacing={1} style={{marginTop: '15px'}}>
            <Grid item className="card-price-item" xs={5} md={5} lg={5}>
              <Button
                component={Link}
                to={`/vineyard/${bank.contract}`}
                className="shinyButton action"
                style={{width: '100%'}}
              >
                View
              </Button>
            </Grid>
            <Grid item className="card-price-item" xs={5} md={5} lg={5}>
              <Button
                disabled={earnings.eq(0)}
                className={earnings.eq(0) ? 'shinyButtonDisabled' : 'shinyButton'}
                onClick={onReward}
                style={{width: '100%'}}
              >
                Claim
              </Button>
            </Grid>
            <Grid item xs={2}>
              <span
                style={{
                  color: 'white',
                  display: 'block',
                  borderRadius: '4px',
                  height: '100%',
                  background: '#e647e6',
                  textAlign: 'center',
                  fontSize: '25px',
                  cursor: 'pointer',
                }}
                data-for={`${(rewards as any)[bank.address]}-tooltip`}
                data-tip={(rewards as any)[bank.earnTokenName]}
              >
                ?
              </span>
              <ReactTooltip id={`${(rewards as any)[bank.address]}-tooltip`} effect="solid" multiline />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DashboardInfoCard;
