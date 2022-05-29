import React, { useCallback, useMemo, useState, useEffect } from 'react';
import styled from 'styled-components';

import { Button } from '@material-ui/core';
// import Button from '../../../components/Button'
import Modal, { ModalProps } from '../../../components/Modal';
import ModalActions from '../../../components/ModalActions';
import ModalTitle from '../../../components/ModalTitle';
import TokenInput from '../../../components/TokenInput';
import useRebateTreasury from "../../../hooks/useRebateTreasury"
import useTombFinance from '../../../hooks/useGrapeFinance';
import useFantomPrice from '../../../hooks/useFantomPrice';
import useTombStats from '../../../hooks/useWineStats';

import { getFullDisplayBalance } from '../../../utils/formatBalance';
import { BigNumber } from 'ethers';




interface DepositModalProps extends ModalProps {
  max: BigNumber;
  onConfirm: (amount: Number) => void;
  tokenName?: string;
  token?: any;
}

const DepositModal: React.FC<DepositModalProps> = ({ max, onConfirm, onDismiss, tokenName = '', token }) => {
  const tombStats = useTombStats();
  const [val, setVal] = useState('');
  const [out, setOut] = useState(0);

  const tombFinance = useTombFinance();
  const rebateStats = useRebateTreasury();
  const { price: ftmPrice, marketCap: ftmMarketCap, priceChange: ftmPriceChange } = useFantomPrice();
  
  const tombPriceInDollars = useMemo(
    () => (tombStats ? Number(tombStats.priceInDollars).toFixed(2) : null),
    [tombStats],
  );

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max, 18);
  }, [max, tokenName]);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value);
    },
    [setVal],
  );

  const handleSelectMax = useCallback(() => {
    setVal((rebateStats.tombAvailable > +fullBalance ? fullBalance : fullBalance));
  }, [fullBalance, setVal, rebateStats]);

  function getAssetPrice(token: String) {
    const address = tombFinance.externalTokens[tokenName].address
    const assetPrice = rebateStats.assets.find((a: any) => a.token === address).price
    return assetPrice
  }

  function getOutAmount() {
    const toBondPrice = getAssetPrice(tokenName)
    const outAmount = +val * (toBondPrice / rebateStats.tombPrice * (1 + (rebateStats.bondPremium / 100)) * (token.params.multiplier / 1000000))
    return outAmount
  }

  function formatOutAmount() {
    const outAmount = getOutAmount()
    return `Receiving: ${outAmount.toFixed(4)} WINE ($${(outAmount * Number(tombPriceInDollars)).toFixed(2)})`
  }

  function formatInAmount() {
    return `Input: ${(+val).toFixed(4)} ${tokenName} ($${((+val) * getAssetPrice(tokenName) * ftmPrice).toFixed(2)})`
  }

  return (
    <Modal>
      <ModalTitle text={`Bond ${tokenName}`} />
      <TokenInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol={tokenName}
      />
      <StyledMaxText style={{marginTop: "14px"}}>
        { formatInAmount() }
      </StyledMaxText>
      <StyledMaxText>
        { formatOutAmount() }
      </StyledMaxText>
      <StyledMaxText>
         Estimated Return: {((((getOutAmount() * Number(tombPriceInDollars)) - ((+val) * getAssetPrice(tokenName) * ftmPrice))/((+val) * getAssetPrice(tokenName) * ftmPrice))*100).toFixed(2)}%
      </StyledMaxText>
      <StyledMaxText style = {{color: getOutAmount() < rebateStats.tombAvailable ? "white" : "var(--accent)"}}>
        {rebateStats.tombAvailable > 0 ? `${rebateStats.tombAvailable.toFixed(4)} Wine Available` : "Wine Sold Out"}
      </StyledMaxText>
      <ModalActions>
        <Button color={ (getOutAmount() < rebateStats.tombAvailable ? "primary" : "secondary") } variant="contained" disabled = { getOutAmount() >= rebateStats.tombAvailable } onClick={() => onConfirm(+val)}>
          Confirm
        </Button>
      </ModalActions>
    </Modal>
  );
};

const StyledMaxText = styled.div`
  align-items: center;
  color: ${(props) => props.theme.color.grey[600]};
  display: flex;
  font-size: 18px;
  margin-top: 2px;
  font-weight: 700;
  justify-content: flex-start;
`;


export default DepositModal;
