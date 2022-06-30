import React, {useState, useMemo} from 'react';

import {Button, Select, MenuItem, InputLabel, withStyles} from '@material-ui/core';
// import Button from '../../../components/Button'
import Modal, {ModalProps} from '../../../components/Modal';
import ModalActions from '../../../components/ModalActions';
import ModalTitle from '../../../components/ModalTitle';
import TokenInput from '../../../components/TokenInput';
import styled from 'styled-components';

import {getDisplayBalance} from '../../../utils/formatBalance';
import Label from '../../../components/Label';
import useLpStats from '../../../hooks/useLpStats';
import useTokenBalance from '../../../hooks/useTokenBalance';
import useGrapeFinance from '../../../hooks/useGrapeFinance';
import useApproveSWZapper, {ApprovalState} from '../../../hooks/useApproveSWZapper';
import {GRAPE_TICKER, MIM_TICKER} from '../../../utils/constants';
import {Alert} from '@material-ui/lab';

interface ZapProps extends ModalProps {
  onConfirm: (zapAsset: string, lpName: string, amount: string) => void;
  LPtokenName?: string;
  decimals?: number;
}

const ZapModal: React.FC<ZapProps> = ({onConfirm, onDismiss, LPtokenName = '', decimals = 18}) => {
  const grapeFinance = useGrapeFinance();
  //const {balance} = useWallet();

  const grapeBalance = useTokenBalance(grapeFinance.GRAPE);
  const mimBalance = useTokenBalance(grapeFinance.MIM);

  let [showZapData, setShowZapData] = useState(false);
  //const avaxDisplayBalance = (Number(balance) / 1e18).toFixed(4).toString();

  const [val, setVal] = useState('');
  // The token to be swapped from.
  const [zappingToken, setZappingToken] = useState(MIM_TICKER);
  const [zappingTokenBalance, setZappingTokenBalance] = useState(getDisplayBalance(mimBalance, decimals));
  const [estimate, setEstimate] = useState({token0: '0', token1: '0'});
  const {approvalState, approve} = useApproveSWZapper(zappingToken);
  const grapemimLpStats = useLpStats('GRAPE-MIM-SW');
  const grapeLPStats = useMemo(() => (grapemimLpStats ? grapemimLpStats : null), [grapemimLpStats]);
  const mimAmountPerLP = grapeLPStats?.mimAmount;
  /**
   * Checks if a value is a valid number or not
   * @param n is the value to be evaluated for a number
   * @returns
   */
  function isNumeric(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  const handleChangeAsset = (event: any) => {
    const value = event.target.value;
    if (value == 'NONE') {
      setShowZapData(false);
    } else {
      setVal('0');
      setEstimate({token0: '0', token1: '0'});
      setZappingToken(value);
      setZappingTokenBalance(getDisplayBalance(mimBalance, decimals));
      if (event.target.value === GRAPE_TICKER) {
        setZappingTokenBalance(getDisplayBalance(grapeBalance, decimals));
      }
      if (event.target.value === MIM_TICKER) {
        setZappingTokenBalance(getDisplayBalance(mimBalance, decimals));
      }
      setShowZapData(true);
    }
  };

  const handleChange = async (e: any) => {
    // the - is to stop negatives
    if (!isNumeric(e.currentTarget.value) || e.currentTarget.value.includes('-')) return;
    if (e.currentTarget.value === '' || Number(e.currentTarget.value) == 0) {
      setVal(e.currentTarget.value);
      setEstimate({token0: '0', token1: '0'});
    } else {
      setVal(e.currentTarget.value);
      const estimateZap = await grapeFinance.estimateZapIn(
        zappingToken,
        LPtokenName,
        String(e.currentTarget.value).trim(),
      );

      setEstimate({token0: estimateZap.amounts[0], token1: estimateZap.amounts[1]});
    }
  };

  const handleSelectMax = async () => {
    setVal(zappingTokenBalance);
    const estimateZap = await grapeFinance.estimateZapIn(zappingToken, LPtokenName, String(zappingTokenBalance));
    setEstimate({token0: estimateZap.amounts[0].toString(), token1: estimateZap.amounts[1].toString()});
  };

  function getOrderLPName(lpName: string): string[] {
    if (lpName.includes('GRAPE-MIM-SW')) return [GRAPE_TICKER, MIM_TICKER];
    return;
  }

  function getOrderLPBalanceThing(token0: string, token1: string): string[] {
    if (token0 == GRAPE_TICKER) return [token0, token1];
    if (token0 == MIM_TICKER) return [token1, token0];
    return;
  }

  function normalizeOrder(token0: string, tokenAmount0: string, tokenAmount1: string) {
    if (token0 == GRAPE_TICKER) return [tokenAmount0, tokenAmount1];
    if (token0 == MIM_TICKER) return [tokenAmount1, tokenAmount0];
    return;
  }

  let [token0Name, token1Name] = getOrderLPName(LPtokenName);
  let [tokenA, tokenB] = getOrderLPBalanceThing(token0Name, token1Name);
  return (
    <Modal>
      <ModalTitle text={`Zap in ${LPtokenName}`} />

      <StyledActionSpacer />
      <InputLabel style={{color: '#fff'}} id="label">
        Select asset to zap with
      </InputLabel>
      <Select
        onChange={handleChangeAsset}
        style={{color: '#fff'}}
        labelId="label"
        id="select"
        value={showZapData ? zappingToken : 'NONE'}
      >
        <StyledMenuItem value="NONE">Choose asset</StyledMenuItem>
        {LPtokenName.includes(MIM_TICKER) && <StyledMenuItem value={MIM_TICKER}>MIM</StyledMenuItem>}
        {LPtokenName.includes(GRAPE_TICKER) && <StyledMenuItem value={GRAPE_TICKER}>GRAPE</StyledMenuItem>}
      </Select>
      {showZapData && (
        <>
          <TokenInput
            onSelectMax={handleSelectMax}
            onChange={handleChange}
            value={val}
            max={zappingTokenBalance}
            symbol={zappingToken}
          />
          <Label text="Zap Estimations" />
          <StyledDescriptionText>
            {' '}
            {LPtokenName} tokens: {Number(estimate.token0) / Number(mimAmountPerLP)}
          </StyledDescriptionText>
          <StyledDescriptionText>
            {/* Spaghetti bolognese right here! */} (
            {Number(normalizeOrder(zappingToken, estimate.token0, estimate.token1)[0])} {tokenA} /{' '}
            {Number(normalizeOrder(zappingToken, estimate.token0, estimate.token1)[1])} {tokenB}){' '}
          </StyledDescriptionText>
          <ModalActions>
            <Button
              color="primary"
              variant="contained"
              onClick={() =>
                approvalState !== ApprovalState.APPROVED
                  ? approve()
                  : onConfirm(zappingToken, LPtokenName, val)
              }
            >
              {approvalState !== ApprovalState.APPROVED ? 'Approve' : 'Zap'}
            </Button>
          </ModalActions>
        </>
      )}

      <StyledActionSpacer />
      <Alert variant="filled" severity="info">
        You need to manually stake the LP tokens after zapping. Maximum slippage is 1%.{' '}
      </Alert>
    </Modal>
  );
};

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`;

const StyledDescriptionText = styled.div`
  align-items: center;
  color: ${(props) => props.theme.color.grey[400]};
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 22px;
  justify-content: flex-start;
`;
const StyledMenuItem = withStyles({
  root: {
    backgroundColor: 'white',
    color: '#2c2560',
    '&:hover': {
      backgroundColor: 'grey',
      color: '#2c2560',
    },
    selected: {
      backgroundColor: 'black',
    },
  },
})(MenuItem);

export default ZapModal;
