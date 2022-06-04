import React from 'react';
import styled from 'styled-components';

import {Button, Card, CardContent, Typography, Grid} from '@material-ui/core';

import Value from '../../../components/Value';
import useEarnings from '../../../hooks/useEarnings';
import useHarvest from '../../../hooks/useHarvest';
import {Bank} from '../../../grape-finance';
import WineImage from '../../../assets/img/gshare.png';
import HshareImage from '../../../assets/img/hshare.png';
interface HarvestProps {
  bank: Bank;
}

const Harvest: React.FC<HarvestProps> = ({bank}) => {

  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const {onReward} = useHarvest(bank);
  const tokenName = 'WINE';
  const tokenName2 = 'HSHARE';

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>

            <Grid container spacing={3} style={{marginTop: '0px', marginBottom: '-51px'}}>
         
      <Grid item xs={12} sm={12} lg={6}>  
  
        <div style={{width: '70px', margin:'0 auto'}}>
         <img alt='hshare logo' src={WineImage} width={'70px'} style={{width: '70px', margin:'0 auto'}}/>
         </div>
    
      <Typography style={{textTransform: 'uppercase', color: '#930993',textAlign:'center'}}>  
            <Value value={'0'} />
            </Typography>
            <p style={{textAlign:'center',marginBottom: '-10px'}}>0</p>
            <p style={{textAlign:'center'}}>{tokenName}</p>
     
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>  
          <div style={{width: '97px', margin:'0 auto'}}>
         <img alt='hshare logo' src={HshareImage} width={'97px'}/>
         </div>
          <Typography style={{textTransform: 'uppercase', color: '#930993',textAlign:'center'}}>  
            <Value value={'0'} />
            </Typography>
            <p style={{textAlign:'center',marginBottom: '-10px'}}>0</p>
            <p style={{textAlign:'center'}}>{tokenName2}</p>
          </Grid>
         </Grid>
    

   

                   
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
