import {Box, Button} from '@material-ui/core';
import ReactTooltip from 'react-tooltip';
import Modal from '../../components/Modal';
import ModalActions from '../../components/ModalActions';
import ModalTitle from '../../components/ModalTitle';
import {Grid} from '@mui/material';

const PressClaimModal = ({shares, callback}) => {
  return (
    <Modal>
      <ReactTooltip effect="solid" clickable type="dark" place="bottom" />
      <ModalTitle text={`Confirm claiming`} />
      <center>
        <h3>Claim {shares} shares</h3>
        <Box mt={4}>
          Claiming all your remaining shares will kick you out of the Press, which resets your press to 0. Do you wish
          to continue?
        </Box>
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
              Continue
            </Button>
          </Grid>
        </Grid>
      </ModalActions>
    </Modal>
  );
};

export default PressClaimModal;
