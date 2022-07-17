import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import useRebateTreasury from "../../hooks/useRebateTreasury"
import useApprove, { ApprovalState } from '../../hooks/useApprove';
import useModal from '../../hooks/useModal';
import useTokenBalance from '../../hooks/useTokenBalance';
import DepositModal from './components/DepositModal';
import useTombFinance from '../../hooks/useGrapeFinance';
import TokenSymbol from '../../components/TokenSymbol';
import Web3 from "web3"

const web3 = new Web3()
const BN = n => new web3.utils.BN(n)

const CemeteryCard = ({ bank }) => {
  const tombFinance = useTombFinance();

  const rebateStats = useRebateTreasury()

  const [approveStatus, approve] = useApprove(tombFinance.externalTokens[bank.depositTokenName], "0xde18bD8EC77692dC29608DFe962D65eC6B84161d");

  const tokenBalance = useTokenBalance(tombFinance.externalTokens[bank.depositTokenName]);

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={async (value) => {
        console.log("running my on confirm")
        console.log("doing the bond")
        console.log(BN(Math.floor(value * 10000)).mul(BN(10).pow(BN(14))).toString())
        if (!window.ethereum) return
        const account = (await window.ethereum.request({ method: "eth_accounts" }))[0]
        if (!account) return
         window.ethereum.request({
           method: "eth_sendTransaction",
           params: [{
              from: account,
              to: rebateStats.RebateTreasury._address,
              data: rebateStats.RebateTreasury.methods.bond(tombFinance.externalTokens[bank.depositTokenName].address, BN(Math.floor(value * 10000)).mul(BN(10).pow(BN(14)))).encodeABI()
          }]
        })
        
      }}
      tokenName={bank.depositTokenName}
      token={rebateStats.assets.find( token => token.token === tombFinance.externalTokens[bank.depositTokenName].address)}
    />,
  );

  return (
    <Grid item xs={12} md={4} lg={4}>
      
      <Card variant="outlined" style={{ padding: '10px', border: '1px solid var(--white)' }}>
        <CardContent>
          <Box style={{ position: 'relative' }}>
            <Box
              style={{
                position: 'absolute',
                right: '0px',
                top: '-5px',
                height: '48px',
                width: '48px',
                borderRadius: '40px',
                backgroundColor: 'transparent',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TokenSymbol size={32} symbol={bank.depositTokenName} />
            </Box>
            <Typography variant="h5" component="h2">
              {bank.depositTokenName}
            </Typography>
            <Typography color="textSecondary">
              {/* {bank.name} */}
              Bond {bank.depositTokenName.toUpperCase()} Earn WINE
            </Typography>
           
          </Box>
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end' }}>
          {approveStatus !== ApprovalState.APPROVED ? (
              <Button
              disabled={approveStatus !== ApprovalState.NOT_APPROVED}
              className="shinyButton"
              onClick={approve}
              >
              Approve {bank.depositTokenName}
              </Button>
          ) : (
            <Button color="primary" size="small" variant="contained" onClick={onPresentDeposit}>
              Bond
            </Button>
          )}

        </CardActions>
      </Card>
    </Grid>
  );
};

export default CemeteryCard;
