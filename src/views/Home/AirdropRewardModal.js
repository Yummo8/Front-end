import { Modal, Box, Typography, makeStyles, CircularProgress } from '@material-ui/core';
import React, { useState, useMemo, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import useWalletNodesAndNFTs from '../../hooks/useWalletNodesAndNFTs';
import {NFT_TICKET_COUNT, GRAPE_NODE_MULTIPLIER, WINE_NODE_MULTIPLIER, GRAPEMIMSW_NODE_MULTIPLIER, GOON_MULTIPLIER, GLASS_MULTIPLIER, DECANTER_MULTIPLIER, GOBLET_MULTIPLIER} from '../../utils/constants';

const useStyles = makeStyles((theme) => ({
  textField: {
    color: 'black',
    '& *': {
      color: 'black',
    },
  },
  text: {
    fontSize: '14px',
  },
  biggerText: {
    fontSize: '15px',
  },
  purpleText: {
    fontSize: '16px',
    color: '#930993'
  },
  noEligible: {
    fontSize: '16px',
    color: 'red'
  },
  subTitle: {
    color: '#0a274280',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  greenText: {
    color: '#36d846',
    fontSize: '14px',
  },
  inputButton: {
    marginLeft: '8px',
    fontSize: '12px',
    borderRadius: '4px',
    background: '#0c7aca',
    border: 'none',
    outline: 'none',
    padding: '0px 4px',
    lineHeight: '24px',
    color: 'white',
    cursor: 'pointer',
  },
  input: {
    appearance: 'none',
    fontSize: '20px',
    border: 'none',
    outline: 'none',
    padding: 'none',
    width: '100%',
    paddingBlock: '5px',
    backgroundColor: 'transparent',
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
    },
    '&[type=number]': {
      MozAppearance: 'none',
    },
  },
}));

const style = {
  position: 'absolute',
  color: '#fff',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min(90%, 450px)',
  bgcolor: 'rgba(0,0,0,0.8)',
  p: '24px',
  display: 'flex',
  flexDirection: 'column',
  outline: 'none',
  boxSizing: 'border-box',
  borderRadius: '12px',
};


const AirdropRewardModal = ({ open, handleClose, grapes, grapePrice, wines, winePrice, grapeMimSW, grapeMimSWPrice, totalGrapes, totalWine, totalGrapeMimSW }) => {
  const grapeFinance = useGrapeFinance();  
  const [ticketNumber, setTicketNumber] = useState(1);
  const [manualEntry, setManualEntry] = useState(false);
  const [loading, setLoading] = useState(false);

  const useWalletsNodesAndNFTs = useWalletNodesAndNFTs();
  const walletNodesAndNFTs = useMemo(() => {

    setLoading(grapeFinance?.myAccount && !useWalletsNodesAndNFTs);

    if (useWalletsNodesAndNFTs && manualEntry === false) {
      setLoading(false);
      setTicketNumber((useWalletsNodesAndNFTs.grapes * GRAPE_NODE_MULTIPLIER) + 
                      (useWalletsNodesAndNFTs.wines * WINE_NODE_MULTIPLIER) + 
                      (useWalletsNodesAndNFTs.grapeMimSWs * GRAPEMIMSW_NODE_MULTIPLIER) +
                      (useWalletsNodesAndNFTs.goonBags * GOON_MULTIPLIER) +
                      (useWalletsNodesAndNFTs.glasses * GLASS_MULTIPLIER) +
                      (useWalletsNodesAndNFTs.decanters * DECANTER_MULTIPLIER) +
                      (useWalletsNodesAndNFTs.goblets * GOBLET_MULTIPLIER));
    }
    return useWalletsNodesAndNFTs;
    
  }, [useWalletsNodesAndNFTs, manualEntry, grapeFinance.myAccount]);

  const classes = useStyles();

  const getNumberOfNodes = (coin) => {
    if (coin === 'GRAPE') {
      return Number(grapes);
    }
    else if (coin === 'WINE') {
      return Number((wines));
    }
    else if (coin === 'GRAPE-MIM SW') {
      return Number((grapeMimSW));
    }
  }

  const getPriceForNodes = (coin) => {
    if (coin === 'GRAPE') {
      return Number((totalGrapes * grapePrice).toFixed(0));
    }
    else if (coin === 'WINE') {  
      return Number((totalWine * winePrice).toFixed(0)); 
    }
    else if (coin === 'GRAPE-MIM SW') {
      return Number((totalGrapeMimSW * grapeMimSWPrice).toFixed(0));
    }
  }

  const getTotalPriceForNodes = () => {
    return getPriceForNodes('GRAPE') + getPriceForNodes('WINE') + getPriceForNodes('GRAPE-MIM SW');
  }

  const getShareDollarValue = () => {
    return Number(((ticketNumber * (getTotalPriceForNodes())) / (getTotalTicketsFromNodes() + 9600)).toFixed(0));
  }

  const getShareGrapes = () => {
    return Number((ticketNumber * totalGrapes) / (getTotalTicketsFromNodes() + NFT_TICKET_COUNT)).toFixed(2);
  }

  const getShareWines = () => {
    return Number((ticketNumber * totalWine) / (getTotalTicketsFromNodes() + NFT_TICKET_COUNT)).toFixed(2);
  }

  // const getShareGrapeMimSW = () => {
  //   return Number((ticketNumber * totalGrapeMimSW) / (getTotalTicketsFromNodes() + NFT_TICKET_COUNT)).toFixed(2);
  // }

  const elibileToAirdrop = () => {
    return walletNodesAndNFTs && 
            (manualEntry === true ||
            walletNodesAndNFTs.goonBags > 0 ||
            walletNodesAndNFTs.glasses > 0 ||
            walletNodesAndNFTs.decanters > 0 ||
            walletNodesAndNFTs.goblets > 0)
  }

  const getTotalTicketsFromNodes = () => {
    return (getNumberOfNodes('GRAPE') * GRAPE_NODE_MULTIPLIER) + 
           (getNumberOfNodes('WINE') * WINE_NODE_MULTIPLIER) + 
           (getNumberOfNodes('GRAPE-MIM SW') * GRAPEMIMSW_NODE_MULTIPLIER);
  }

  return (
    <Modal open={open}>
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box
            sx={{
              cursor: 'pointer',
            }}
            onClick={() => {
              setManualEntry(false);
              setLoading(false);
              handleClose();
            }}
          >
            <CloseIcon />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2 style={{fontSize: '22px'}}>Number of tickets 
          { loading && 
              <CircularProgress style={{marginLeft: '10px'}} size={22} color='inherit'  />
          }
          </h2>
          <Box
            sx={{
              borderRadius: '10px',
              bgcolor: '#eff2f4',
              border: '1px solid #d0d3d4',
              p: '10px',
              mt: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                mb: '10px',
              }}
            >
              <input
                type="number"
                value={ticketNumber}
                className={classes.input}
                onChange={(e) => {
                    setManualEntry(true);
                    setLoading(false);
                    setTicketNumber(e.target.value)
                  }
                }
              /> <br/>
            </Box>
            <Box sx={{ fontStyle: 'italic', marginTop: '10px', fontSize: '11px', color: '#000' }}>
                1 Grape node gives {GRAPE_NODE_MULTIPLIER} ticket. 
                { walletNodesAndNFTs && 
                  <b>You have {walletNodesAndNFTs.grapes} Grape Nodes.</b>
                }<br/>

                1 Wine node gives {WINE_NODE_MULTIPLIER} tickets. 
                { walletNodesAndNFTs && 
                  <b>You have {walletNodesAndNFTs.wines} Wine Nodes.</b>
                }<br/>

                1 Grape-Mim SW node gives {GRAPEMIMSW_NODE_MULTIPLIER} ticket. 
                { walletNodesAndNFTs && 
                  <b>You have {walletNodesAndNFTs.grapeMimSWs} Grape-Mim SW Nodes.</b>
                }<br/>

                1 Goon Bag gives {GOON_MULTIPLIER} ticket. 
                { walletNodesAndNFTs && 
                  <b>You have {walletNodesAndNFTs.goonBags} Goon Bag(s).</b>
                }<br/>

                1 Glass gives {GLASS_MULTIPLIER} tickets. 
                { walletNodesAndNFTs && 
                  <b>You have {walletNodesAndNFTs.glasses} Glass(es).</b>
                }<br/>

                1 Decanter gives {DECANTER_MULTIPLIER} tickets.
                { walletNodesAndNFTs && 
                  <b>You have {walletNodesAndNFTs.decanters} Decanter(s).</b>
                }<br/>

                1 Goblet gives {GOBLET_MULTIPLIER} tickets.
                { walletNodesAndNFTs && 
                  <b>You have {walletNodesAndNFTs.goblets} Goblet(s).</b>
                }<br/>
              </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '20px',
            }}
          >
            <Box>
              <h2 style={{fontSize: '22px'}}>Details</h2>
              <Typography className={classes.text}>{getNumberOfNodes('GRAPE')} Grape Nodes ({totalGrapes} Grapes in pool)</Typography>
              <Typography className={classes.text}>{getNumberOfNodes('WINE')} Wine Nodes ({totalWine} Wine in pool) </Typography>
              <Typography className={classes.text}>{getNumberOfNodes('GRAPE-MIM SW')} Grape-Mim SW Nodes</Typography>
              
              <Box sx={{ marginTop: '10px'}} className={classes.text}>Tickets from Nodes: {getTotalTicketsFromNodes()}</Box>
              <Typography className={classes.text}>Tickets from NFTs: {NFT_TICKET_COUNT}</Typography>
              <Typography className={classes.biggerText}><b>TOTAL TICKETS: {getTotalTicketsFromNodes() + NFT_TICKET_COUNT}</b></Typography>

              <h2 sx={{ marginTop: '20px'}} style={{fontSize: '22px'}}>Results</h2>
              {elibileToAirdrop() ?  
                <div>
                  <Box className={classes.purpleText}><b>At current prices, your {ticketNumber} tickets are worth ≈${getShareDollarValue()}</b></Box>
                  <Typography className={classes.text}>≈{getShareGrapes()} Grape(s)</Typography>
                  <Typography className={classes.text}>≈{getShareWines()} Wine(s)</Typography>
                </div>
                : 
                <Typography className={classes.noEligible}>You are not eligible to the NFT monthly airdrop. You need to own at least 1 NFT (any kind) and at least 1 node (any kind).</Typography>
              }


              <Box sx={{ fontStyle: 'italic', marginTop: '10px', fontSize: '11px' }}>Please note that the numbers are only an estimation, they are based upon the current balance of the reward pool and the current prices. They also estimate that all NFTs are held by node holders. Do not consider the results as your final reward amount.</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AirdropRewardModal;