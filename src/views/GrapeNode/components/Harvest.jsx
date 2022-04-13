import React, {useMemo} from 'react';
import styled from 'styled-components';

import {Button, Card, CardContent, Typography} from '@material-ui/core';
// import Button from '../../../components/Button';
// import Card from '../../../components/Card';
// import CardContent from '../../../components/CardContent';
import CardIcon from '../../../components/CardIcon';
import Label from '../../../components/Label';
import Value from '../../../components/Value';
import useEarnings from '../../../hooks/useEarnings';
import useHarvest from '../../../hooks/useHarvest';
import useCompound from '../../../hooks/useCompound';
import {getDisplayBalance} from '../../../utils/formatBalance';
import TokenSymbol from '../../../components/TokenSymbol';
import {Bank} from '../../../grape-finance';
import useGrapeStats from '../../../hooks/useGrapeStats';
import useShareStats from '../../../hooks/useWineStats';

const Harvest = ({bank}) => {
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const grapeStats = useGrapeStats();
  const tShareStats = useShareStats();
  const tokenStats = bank.earnTokenName === 'WINE' ? tShareStats : grapeStats;
  
  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
  const { onReward } = useHarvest(bank);
  const { onCompound } = useCompound(bank);

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>
              <TokenSymbol symbol={bank.earnTokenName} />
            </CardIcon>
            <Typography style={{textTransform: 'uppercase', color: '#930993'}}>
              <Value value={getDisplayBalance(earnings)} />
            </Typography>
           <Label text={`≈ $${earnedInDollars}`} />
            <Typography style={{textTransform: 'uppercase', color: '#322f32'}}>{bank.earnTokenName} Earned</Typography>
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
          {bank.earnTokenName === 'WINE' ?
          <Button
          style={{marginTop: '20px'}}
              onClick={onCompound}
              disabled={earnings < 0.5*1e18}
              className={earnings < 0.5*1e18 ? 'shinyButtonDisabled' : 'shinyButton'}
            >
              Compound {(earnings/(0.5*1e18)).toFixed(0)} Nodes
          </Button>:
          <Button
          style={{marginTop: '20px'}}
              onClick={onCompound}
              disabled={earnings < 50*1e18}
              className={earnings < 50*1e18 ? 'shinyButtonDisabled' : 'shinyButton'}
            >
              Compound {(earnings/(50*1e18))|0} Nodes
          </Button>}

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
