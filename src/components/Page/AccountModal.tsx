import React, {useMemo} from 'react';
import styled from 'styled-components';
import useTokenBalance from '../../hooks/useTokenBalance';
import {getDisplayBalance} from '../../utils/formatBalance';

import Label from '../Label';
import Modal, {ModalProps} from '../Modal';
import ModalTitle from '../ModalTitle';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import TokenSymbol from '../TokenSymbol';
import {useMediaQuery} from '@material-ui/core';

const AccountModal: React.FC<ModalProps> = ({onDismiss}) => {
  const grapeFinance = useGrapeFinance();

  const grapeBalance = useTokenBalance(grapeFinance.GRAPE);
  const displayGrapeBalance = useMemo(() => getDisplayBalance(grapeBalance), [grapeBalance]);

  const wineBalance = useTokenBalance(grapeFinance.WINE);
  const displayWineBalance = useMemo(() => getDisplayBalance(wineBalance), [wineBalance]);

  const gbondBalance = useTokenBalance(grapeFinance.GBOND);
  const displayGbondBalance = useMemo(() => getDisplayBalance(gbondBalance), [gbondBalance]);

  const matches = useMediaQuery('(min-width:900px)');

  return (
    <Modal>
      <ModalTitle text="My Wallet" />

      <Balances style={{display: 'flex', flexDirection: matches ? 'row' : 'column'}}>
        <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
          <TokenSymbol symbol="GRAPE" />
          <StyledBalance>
            <StyledValue>{displayGrapeBalance}</StyledValue>
            <Label text="GRAPE Available" />
          </StyledBalance>
        </StyledBalanceWrapper>

        <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
          <TokenSymbol symbol="WINE" />
          <StyledBalance>
            <StyledValue>{displayWineBalance}</StyledValue>
            <Label text="WINE Available" />
          </StyledBalance>
        </StyledBalanceWrapper>

        <StyledBalanceWrapper style={{paddingBottom: '15px'}}>
          <TokenSymbol symbol="GBOND" />
          <StyledBalance>
            <StyledValue>{displayGbondBalance}</StyledValue>
            <Label text="GBOND Available" />
          </StyledBalance>
        </StyledBalanceWrapper>
      </Balances>
    </Modal>
  );
};

const StyledValue = styled.div`
  //color: ${(props) => props.theme.color.grey[300]};
  font-size: 30px;
  font-weight: 700;
`;

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Balances = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`;

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 ${(props) => props.theme.spacing[3]}px;
`;

export default AccountModal;
