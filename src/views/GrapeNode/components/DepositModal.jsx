import React, {useCallback, useEffect, useMemo, useState} from 'react';

import {Button} from '@material-ui/core';
import ReactTooltip from 'react-tooltip';
import Modal from '../../../components/Modal';
import ModalActions from '../../../components/ModalActions';
import ModalTitle from '../../../components/ModalTitle';
import TokenInput from '../../../components/TokenInput';

import {getFullDisplayBalance} from '../../../utils/formatBalance';

import useNodeText from '../../../hooks/useNodeText';

const DepositModal = ({nodePrice, bank, max, decimals, onConfirm, onDismiss, tokenName = ''}) => {
  const [val, setVal] = useState('');
  const {getNodeText} = useNodeText();
  const [width, setWidth] = useState(window.innerWidth);
  const [amount, setAmount] = useState(1);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max, decimals, false);
  }, [max, decimals]);

  const handleChange = useCallback(
    (e) => {
      setVal(e.currentTarget.value);
    },
    [setVal],
  );

  const handleSelectMax = useCallback(() => {
    setVal(Math.round(fullBalance / (nodePrice / 1e18)));
  }, [fullBalance, setVal]);

  const handleAmountChange = (event) => {
    setAmount(parseInt(event.currentTarget.value));
  };

  return (
    <Modal>
      <ReactTooltip effect="solid" clickable type="dark" place="bottom" />
      <ModalTitle
        text={bank.sectionInUI !== 3 ? `Deposit ${tokenName}` : `Purchase ${getNodeText(bank.poolId)}s`}
      />
      
      <div style={{textAlign: 'right', fontSize: "14px", fontWeight: 700}}>1 {tokenName} Node = {nodePrice / 1e18} {tokenName}</div>
      <TokenInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol={tokenName}
      />
      {bank.contract === 'GrapeNodeV2' && (
        <p style={{fontSize: '0.7rem'}}>
          If you have unclaimed earned Grape, it is recommended to compound (if possible) before creating new nodes
        </p>
      )}
      <ModalActions>
        <Button className="shinyButton" onClick={() => onConfirm(val)}>
          Confirm
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default DepositModal;
