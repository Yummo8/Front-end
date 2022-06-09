import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, Card, CardActions, CardContent, Typography, Grid} from '@material-ui/core';

import TokenSymbol from '../../components/TokenSymbol';

import {getDisplayBalance} from '../../utils/formatBalance';

import useGrapeStats from '../../hooks/useGrapeStats';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import useFetchBoardroomAPR from '../../hooks/useFetchBoardroomAPR';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import useEarningsOnBoardroom from '../../hooks/useEarningsOnBoardroom';
import useHarvestFromBoardroom from '../../hooks/useHarvestFromBoardroom';
import useClaimRewardCheck from '../../hooks/boardroom/useClaimRewardCheck';

const BoardroomCard = () => {
  const {onReward} = useHarvestFromBoardroom();
  const earnings = useEarningsOnBoardroom();
  const canClaimReward = useClaimRewardCheck();
  const grapeStats = useGrapeStats();
  const tokenPriceInDollars = useMemo(
    () => (grapeStats ? Number(grapeStats.priceInDollars).toFixed(2) : null),
    [grapeStats],
  );
  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);

  const boardroomAPR = useFetchBoardroomAPR();
  const totalStaked = useTotalStakedOnBoardroom();
  const stake = Number(getDisplayBalance(totalStaked)).toFixed(0);
  const grapeFinance = useGrapeFinance();
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('WINE', grapeFinance.WINE);
  const tvl = stake * stakedTokenPriceInDollars;

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
              <TokenSymbol size={32} symbol="GRAPE" />
            </Box>
            <Typography variant="h5" component="h2">
              WINE
            </Typography>
            <Typography color="#322f32">Earn GRAPE</Typography>
            <Typography color="#322f32">
              <b>APR:</b> {boardroomAPR.toFixed(0)}%
            </Typography>
            {/* <Typography color="#322f32">
              <b>Daily APR:</b> {bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%
            </Typography> */}
            <Typography color="#322f32">
              <b>TVL:</b> ${tvl ? Number(Number(tvl).toFixed(0)).toLocaleString('en-US') : '-.--'}
            </Typography>
            <Typography color="#322f32">
              <b>EARNED: </b>
              {`$${Number(earnedInDollars).toLocaleString('en-US')}`}
            </Typography>
          </Box>
        </CardContent>
        <CardActions style={{justifyContent: 'flex-end'}}>
          <Button className="shinyButtonSecondary" component={Link} to={`/winery`}>
            View
          </Button>
          <Button
            className={earnings.eq(0) || !canClaimReward ? 'shinyButtonDisabled' : 'shinyButton'}
            disabled={earnings.eq(0) || !canClaimReward}
            onClick={onReward}
          >
            Claim
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BoardroomCard;
