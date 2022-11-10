import {Button} from '@material-ui/core';
import ReactTooltip from 'react-tooltip';
import Modal from '../../../components/Modal';
import ModalActions from '../../../components/ModalActions';
import ModalTitle from '../../../components/ModalTitle';
import {getDisplayBalance} from '../../../utils/formatBalance';
import useEarnings from '../../../hooks/useEarnings';
import useGrapeNodeClaimFee from '../../../hooks/useGrapeNodeClaimFee';
import {Grid} from '@mui/material';

const ClaimModal = ({bank, tokenName = '', callback}) => {
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const claimFee = useGrapeNodeClaimFee();

  return (
    <Modal>
      <ReactTooltip effect="solid" clickable type="dark" place="bottom" />
      <ModalTitle text={`Confirm claiming`} />
      <center>
        <h3>
          Claim {getDisplayBalance(earnings) * (claimFee === 0 ? 1 : (100 - claimFee) / 100)} {tokenName} after the{' '}
          {claimFee}% Fee?
        </h3>
        <br />
        <br />
        With your GRAPE rewards, you can:
        <br />
        <br />
        1. Compound into more Nodes,
        <br />
        2. Single-stake GRAPE in the Vineyard to earn WINE,
        <br />
        3. Pair GRAPE with MIM and stake it in the Vineyard to earn WINE.
      </center>
      <ModalActions>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              className="shinyButton-secondary"
              style={{backgroundColor: '#e1e1e1 !important', marginTop: '10px', width: '100%'}}
              onClick={() => {
                callback('Cancel');
              }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              className="shinyButton"
              style={{marginTop: '10px', width: '100%'}}
              onClick={() => {
                callback('Claim');
              }}
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </ModalActions>
    </Modal>
  );
};

export default ClaimModal;
