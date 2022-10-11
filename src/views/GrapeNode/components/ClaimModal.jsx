import React, {} from 'react';
import {Button} from '@material-ui/core';
import ReactTooltip from 'react-tooltip';
import Modal from '../../../components/Modal';
import ModalActions from '../../../components/ModalActions';
import ModalTitle from '../../../components/ModalTitle';
import {getDisplayBalance} from '../../../utils/formatBalance';
import useEarnings from '../../../hooks/useEarnings';
import useGrapeNodeClaimFee from '../../../hooks/useGrapeNodeClaimFee';
import useHarvest from '../../../hooks/useHarvest';

const ClaimModal = ({bank, tokenName = ''}) => {
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const claimFee = useGrapeNodeClaimFee();
  
  const {onReward} = useHarvest(bank);

  return (
    <Modal>
      <ReactTooltip effect="solid" clickable type="dark" place="bottom" />
      <ModalTitle
        text={`Confirm claiming`}
      /> 
      <center><h3>Claim {getDisplayBalance(earnings) * (claimFee === 0 ? 1 : claimFee / 100)} {tokenName} after the {claimFee}% Fee?</h3><br /><br />With your GRAPE rewards, you can:<br /><br />1. Compound into more Nodes,<br />2. Single-stake GRAPE in the Vineyard to earn WINE,<br />3. Pair GRAPE with MIM and stake it in the Vineyard to earn WINE.</center>
      <ModalActions>
        <Button className="shinyButton" style={{marginTop: '10px', width: '100%'}} onClick={onReward}>
          Confirm
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default ClaimModal;