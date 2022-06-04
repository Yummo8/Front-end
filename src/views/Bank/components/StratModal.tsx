import React from 'react';
import Modal, {ModalProps} from '../../../components/Modal';


interface StratModalProps extends ModalProps {
  strat: string;
}

const StratModal: React.FC<StratModalProps> = ({strat}) => {
 
  return (
    <Modal>
        <img alt={'Strategy Flowchart'} src={strat} width={'100%'} />
    </Modal>
  );
};

export default StratModal;
