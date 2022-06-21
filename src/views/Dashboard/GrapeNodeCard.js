import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, Card, CardActions, CardContent, Typography, Grid} from '@material-ui/core';
import { useWallet } from 'use-wallet';
import TokenSymbol from '../../components/TokenSymbol';

import {getDisplayBalance} from '../../utils/formatBalance';

import useStatsForPool from '../../hooks/useStatsForPool';
import useEarnings from '../../hooks/useEarnings';
import useCompound from '../../hooks/useCompound';
import useNodePrice from '../../hooks/useNodePrice';
import useHarvest from '../../hooks/useHarvest';
import useGrapeStats from '../../hooks/useGrapeStats';
import useShareStats from '../../hooks/useWineStats';
import useNodes from '../../hooks/useNodes';
import useLpStatsBTC from '../../hooks/useLpStatsBTC';
import {GRAPE_NODE_MULTIPLIER, WINE_NODE_MULTIPLIER, GRAPEMIMSW_NODE_MULTIPLIER } from '../../utils/constants';

const GrapeNodeCard = ({bank}) => {
  const { account } = useWallet();
  const statsOnPool = useStatsForPool(bank);
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const nodePrice = useNodePrice(bank.contract, bank.poolId, bank.sectionInUI);
  const {onReward} = useHarvest(bank);
  const {onCompound} = useCompound(bank);
  const grapeStats = useGrapeStats();
  const tShareStats = useShareStats();
  const grapemimLpStats = useLpStatsBTC('GRAPE-MIM-SW');
  const grapeWLRSLpStats = useLpStatsBTC('GRAPE-WLRS-LP');

  const nodes = useNodes(bank?.contract, bank?.sectionInUI, account);

  let tokenStats = 0;
  if (bank.earnTokenName === 'WINE') {
    tokenStats = tShareStats;
  }else if(bank.earnTokenName === 'GRAPE') {
    tokenStats = grapeStats;
  }else if(bank.earnTokenName === 'GRAPE-MIM-SW'){
    tokenStats = grapemimLpStats;
  }else if(bank.earnTokenName === 'GRAPE-WLRS-LP'){
    tokenStats = grapeWLRSLpStats;
  }

  const getRewards = () => {
    if (bank.earnTokenName === 'GRAPE-WLRS-LP') {
      return false;
    }
    return true;
  }

  const getMultiplierForNode = () => {
    if (bank.earnTokenName === 'WINE') {
      return WINE_NODE_MULTIPLIER;
    } else if (bank.earnTokenName === 'GRAPE') {
      return GRAPE_NODE_MULTIPLIER;
    }
    else if (bank.earnTokenName === 'GRAPE-MIM-SW'){
      return GRAPEMIMSW_NODE_MULTIPLIER;
    }
    return 1;
  }

  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const tokenPriceInDollarsLP = useMemo(
    () => (tokenStats ? Number(tokenStats.priceOfOne).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInToken = Number(getDisplayBalance(earnings));
  const earnedInDollars = (Number(tokenPriceInDollars) * earnedInToken).toFixed(2);
  const earnedInDollarsLP = (Number(tokenPriceInDollarsLP) * Number(getDisplayBalance(earnings))).toFixed(2);
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
              <b>YOUR NODES: </b>
              {nodes[0] ?  
              Number(nodes[0]) : null}
          </Typography>

          { getRewards() && 
            <Typography color="#322f32">
              <b>NFT AIRDROP TICKETS: </b>
              {nodes[0] ?  
                Number(nodes[0] * getMultiplierForNode()) : null
              }
            </Typography>
          }
          
            <Typography color="#322f32">
              <b>EARNED: </b>
              {`${earnedInToken} ${bank.earnTokenName} (≈$${bank.earnTokenName === 'GRAPE-MIM-SW' || bank.earnTokenName === 'GRAPE-WLRS-LP' ? Number(earnedInDollarsLP).toLocaleString('en-US') : Number(earnedInDollars).toLocaleString('en-US')})`}
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
