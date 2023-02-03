//@ts-nocheck
import React, {useMemo} from 'react';
import styled from 'styled-components';

import {Button, Card, CardContent, Typography, Grid} from '@material-ui/core';
// import Button from '../../../components/Button';
// import Card from '../../../components/Card';
// import CardContent from '../../../components/CardContent';
import CardIcon from '../../../components/CardIcon';
import Label from '../../../components/Label';
import Value from '../../../components/Value';
import useEarnings from '../../../hooks/useEarnings';
import useHarvest from '../../../hooks/useHarvest';

import {getDisplayBalance} from '../../../utils/formatBalance';
import TokenSymbol from '../../../components/TokenSymbol';
import {Bank} from '../../../grape-finance';
import useGrapeStats from '../../../hooks/useGrapeStats';
import useShareStats from '../../../hooks/useWineStats';
import ReactTooltip from 'react-tooltip';
import rewards from '../../../assets/jsons/rewards.json';

interface HarvestProps {
  bank: Bank;
}

const Harvest: React.FC<HarvestProps> = ({bank}) => {
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);

  const {onReward} = useHarvest(bank);
  const grapeStats = useGrapeStats();
  const tShareStats = useShareStats();
  const tokenName = bank.earnTokenName === 'GRAPE' ? 'GRAPE' : 'WINE';
  const tokenStats = bank.earnTokenName === 'WINE' ? tShareStats : grapeStats;

  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);

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
            <Label text={`≈ $${Number(earnedInDollars).toLocaleString('en-US')}`} />
            <Typography style={{textTransform: 'uppercase', color: '#fff'}}>{`${tokenName} Earned`}</Typography>
          </StyledCardHeader>
          <StyledCardActions>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <Button
                  onClick={onReward}
                  disabled={earnings.eq(0)}
                  style={{width: '100%'}}
                  className={earnings.eq(0) ? 'shinyButtonDisabled' : 'shinyButton'}
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
          </StyledCardActions>
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
  margin-top: ${(props) => props.theme.spacing[6]}px;
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
