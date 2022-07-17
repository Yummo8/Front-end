import React, {useMemo} from 'react';
import styled from 'styled-components';

import {Button, Card, CardContent, Typography} from '@material-ui/core';
import CardIcon from '../../../components/CardIcon';
import Label from '../../../components/Label';
import Value from '../../../components/Value';
import useEarnings from '../../../hooks/useEarnings';
import useHarvest from '../../../hooks/useHarvest';
import useCompound from '../../../hooks/useCompound';
import {getDisplayBalance} from '../../../utils/formatBalance';
import TokenSymbol from '../../../components/TokenSymbol';
import useGrapeStats from '../../../hooks/useGrapeStats';
import useShareStats from '../../../hooks/useWineStats';
import useNodePrice from '../../../hooks/useNodePrice';
import useLpStatsBTC from '../../../hooks/useLpStatsBTC';

const Harvest = ({bank}) => {
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const grapeStats = useGrapeStats();
  const tShareStats = useShareStats();
  const grapemimLpStats = useLpStatsBTC('GRAPE-MIM-SW');
  const grapeWLRSLpStats = useLpStatsBTC('GRAPE-WLRS-LP');

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

  const isWineNode = () => {
    return bank.contract === 'WineNode'
  }

  const nodePrice = useNodePrice(bank.contract, bank.poolId, bank.sectionInUI);
  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const tokenPriceInDollarsLP = useMemo(
    () => (tokenStats ? Number(tokenStats.priceOfOne).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
  const earnedInDollarsLP = (Number(tokenPriceInDollarsLP) * Number(getDisplayBalance(earnings))).toFixed(2);
  const { onReward } = useHarvest(bank);
  const { onCompound } = useCompound(bank);

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>
              <TokenSymbol height={65} width={70} symbol={bank.earnTokenName} />
            </CardIcon>
            <Typography style={{textTransform: 'uppercase', color: '#930993'}}>
              <Value value={getDisplayBalance(earnings)} />
            </Typography>
            <Label text={bank.earnTokenName === 'GRAPE-MIM-SW' || bank.earnTokenName === 'GRAPE-WLRS-LP' ? `≈ $${earnedInDollarsLP}` : `≈ $${earnedInDollars}`} />
            <Typography style={{textTransform: 'uppercase', color: '#fff'}}>{bank.earnTokenName} Earned</Typography>
          </StyledCardHeader>
          <StyledCardActions>
          <Button
              onClick={onReward}
              disabled={earnings.eq(0)}
              className={earnings.eq(0) ? 'shinyButtonDisabled' : 'shinyButton'}
            >
              Claim
            </Button>
          </StyledCardActions>
          { isWineNode() && 
            <div style={{textAlign: 'center', fontSize: '12px', marginTop: '10px'}}>NOTE: If your wine node rewards are not what you expect, please wait up to 15 minutes for the contract to refill and try again.</div>
          }
          <Button
          style={{marginTop: '20px'}}
              onClick={onCompound}
              disabled={Number(earnings) < Number(nodePrice)}
              className={Number(earnings) < Number(nodePrice) ? 'shinyButtonDisabled' : 'shinyButton'}
            >
              Compound {(Number(earnings)/Number(nodePrice))|0} Nodes
          </Button>

        </StyledCardContentInner>
      </CardContent>
    </Card>
  );
};

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export default Harvest;
