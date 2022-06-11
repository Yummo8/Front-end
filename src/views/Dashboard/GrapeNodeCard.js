import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, Card, CardActions, CardContent, Typography, Grid} from '@material-ui/core';

import TokenSymbol from '../../components/TokenSymbol';

import {getDisplayBalance} from '../../utils/formatBalance';

import useStatsForPool from '../../hooks/useStatsForPool';
import useEarnings from '../../hooks/useEarnings';
import useCompound from '../../hooks/useCompound';
import useNodePrice from '../../hooks/useNodePrice';
import useHarvest from '../../hooks/useHarvest';
import useGrapeStats from '../../hooks/useGrapeStats';
import useShareStats from '../../hooks/useWineStats';

const GrapeNodeCard = ({bank}) => {
  const statsOnPool = useStatsForPool(bank);
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const nodePrice = useNodePrice(bank.contract, bank.poolId, bank.sectionInUI);
  const {onReward} = useHarvest(bank);
  const {onCompound} = useCompound(bank);
  const grapeStats = useGrapeStats();
  const tShareStats = useShareStats();
  const tokenStats = bank.earnTokenName === 'WINE' ? tShareStats : grapeStats;

  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInToken = Number(getDisplayBalance(earnings));
  const earnedInDollars = (Number(tokenPriceInDollars) * earnedInToken).toFixed(2);
  return (
    <Grid item xs={12} md={4} lg={4}>
      <Card variant="outlined">
        <CardContent>
          <Box style={{position: 'relative'}}>
            <Box
              style={{
                position: 'absolute',
                right: '5px',
                top: '-5px',
                height: '48px',
                width: '48px',
                borderRadius: '40px',
                backgroundColor: 'rgba(255,255,255,0.0)',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TokenSymbol size={32} symbol={bank.depositTokenName} />
            </Box>
            <Typography variant="h5" component="h2">
              {bank.depositTokenName}
            </Typography>
            <Typography color="#322f32">
              {bank.closedForStaking ? <span>Pool Ended Please unstake</span> : <span>Earn {bank.earnTokenName}</span>}
            </Typography>
            <Typography color="#322f32">
              <b>APR:</b> {bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%
            </Typography>
            {/* <Typography color="#322f32">
              <b>Daily APR:</b> {bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%
            </Typography> */}
            <Typography color="#322f32">
              <b>TVL:</b> $
              {statsOnPool?.TVL ? Number(Number(statsOnPool?.TVL).toFixed(0)).toLocaleString('en-US') : '-.--'}
            </Typography>
            <Typography color="#322f32">
              <b>EARNED: </b>
              {`${earnedInToken} ${bank.earnTokenName} (≈$${Number(earnedInDollars).toLocaleString('en-US')})`}
            </Typography>
            <Typography color="#322f32">
              <b>NODES: </b>
              {(Number(earnings) / Number(nodePrice)) | 0}
            </Typography>
          </Box>
        </CardContent>
        <CardActions style={{justifyContent: 'flex-end'}}>
          <Button className="shinyButton" component={Link} to={`/nodes/${bank.contract}`}>
            View
          </Button>
          <Button
            onClick={onCompound}
            disabled={Number(earnings) < Number(nodePrice)}
            className={Number(earnings) < Number(nodePrice) ? 'shinyButtonDisabled' : 'shinyButton'}
          >
            Compound
          </Button>
          <Button
            disabled={earnings.eq(0)}
            className={earnings.eq(0) ? 'shinyButtonDisabled' : 'shinyButton'}
            onClick={onReward}
          >
            Claim
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GrapeNodeCard;
