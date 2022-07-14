import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Button } from '@material-ui/core';
import ReactTooltip from 'react-tooltip';
import Modal from '../../../components/Modal';
import ModalActions from '../../../components/ModalActions';
import ModalTitle from '../../../components/ModalTitle';
import TokenInput from '../../../components/TokenInput';

import { getFullDisplayBalance } from '../../../utils/formatBalance';

import useNodeText from '../../../hooks/useNodeText';


const DepositModal = ({ bank, max, decimals, onConfirm, onDismiss, tokenName = '' }) => {
  const [val, setVal] = useState('');
  const { getNodeText } = useNodeText();
  const [width, setWidth] = useState(window.innerWidth);
  const [amount, setAmount] = useState(1);
  
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
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
    setVal(fullBalance);
  }, [fullBalance, setVal]);

  const handleAmountChange = (event) => {
    setAmount(parseInt(event.currentTarget.value));
  }


  return (
    <Modal>
      <ReactTooltip effect="solid" clickable type="dark" place="bottom" />
      <ModalTitle text={bank.sectionInUI !== 3 ? `Deposit ${tokenName}` : `Purchase ${getNodeText(bank.poolId)}s`} />

      {bank.sectionInUI !== 3 ? <><TokenInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol={tokenName}
      />
        <ModalActions>
      
          <Button className="shinyButton" onClick={() => onConfirm(val)}>
            Confirm
          </Button>
        </ModalActions></>
        :
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <input type="number" value={amount} onChange={handleAmountChange} min="1" max="100" />
          <Button className="shinyButton" onClick={() => onConfirm(amount)}>
            Confirm
          </Button>
        </div>
      }
    </Modal>
  );
};

export default DepositModal;