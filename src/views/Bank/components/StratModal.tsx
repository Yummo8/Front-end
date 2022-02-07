import React, {useCallback, useMemo, useState} from 'react';

import {Button} from '@material-ui/core';
// import Button from '../../../components/Button'
import Modal, {ModalProps} from '../../../components/Modal';
import ModalActions from '../../../components/ModalActions';
import ModalTitle from '../../../components/ModalTitle';




interface StratModalProps extends ModalProps {
  strat: string;
}

const StratModal: React.FC<StratModalProps> = ({strat}) => {
 
  return (
    <Modal>
        <img src={strat} width={'100%'} />
    </Modal>
  );
};

export default StratModal;
