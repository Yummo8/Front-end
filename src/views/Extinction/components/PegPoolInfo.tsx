import React from 'react';
import { Box, Button, Grid, Card, CardContent, Typography } from '@material-ui/core';
import useModal from '../../../hooks/useModal';
import DepositModal from '../../Bank/components/DepositModal';
import useTokenBalance from '../../../hooks/useTokenBalance';
import usePegPoolDeposit from '../../../hooks/usePegPoolDeposit';
import { PegPool, PegPoolToken } from '../../../grape-finance/types';
//import { ApprovalState } from '../../../hooks/useApprove';
import PegPoolRewards from './PegPoolRewards';
import usePegPoolApprove from '../../../hooks/usePegPoolApproval';
import TokenSymbol from '../../../components/TokenSymbol';
import usePegPoolWithdrawFee from '../../../hooks/usePegPoolWithdrawFee';
import { Skeleton } from '@material-ui/lab';
import usePegPoolWithdraw from '../../../hooks/usePegPoolWithdraw';
import WithdrawModal from '../../Bank/components/WithdrawModal';
import useApprove, {ApprovalState} from '../../../hooks/useApprove';



const PegPoolInfo: React.FC<{
  pegPool: PegPool;
  rewardTokens: PegPoolToken[];
  totalRewardValue: string;
  apr: { daily: string; yearly: string };
}> = ({ pegPool, rewardTokens, totalRewardValue, apr }) => {
  const tokenBalance = useTokenBalance(pegPool.depositToken);
  const { onDeposit } = usePegPoolDeposit(pegPool);
  const { onWithdraw } = usePegPoolWithdraw(pegPool);
  const [approveStatus, approve] = useApprove(pegPool.depositToken, '0x6Cc4D2653aaaCD005E076300796d4981339C5fAF');
  const { withdrawFeePercent } = usePegPoolWithdrawFee();

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      decimals={pegPool.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onDeposit(amount);
        onDismissDeposit();
      }}
      tokenName={pegPool.depositTokenName}
    />,
  );

  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={pegPool.userInfo.amountDepositedBN}
      decimals={pegPool.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onWithdraw(amount);
        onDismissWithdraw();
      }}
      tokenName={pegPool.depositTokenName}
    />,
  );

  return (
    <Grid container justifyContent="space-evenly">
      <Grid item>
        <Card variant="outlined">
          <CardContent>
            <Box style={{ width: '376px' }}>
              <Grid container justifyContent="space-between" style={{ marginTop: '10px' }}>
                <Grid item xs={6}>
                  <Grid container alignItems="center">
                    <TokenSymbol symbol={'MIM'} />
                    <span
                      style={{
                        display: 'inline-block',
                        marginLeft: '4px',
                        fontWeight: 'bold',
                      }}
                    >
                      Your Deposits:
                    </span>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right"> {pegPool.userInfo?.amountDeposited}</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
              {approveStatus != ApprovalState.APPROVED ? (
                  <Button
                    className="shinyButtonSecondary"
                    disabled={!pegPool.depositsEnabled}
                    onClick={approve}
                    fullWidth={true}
                  >
                    Approve
                  </Button>
                ) : (
                  <Button
                    className="shinyButtonSecondary"
                    disabled={!pegPool.depositsEnabled}
                    onClick={onPresentDeposit}
                    fullWidth={true}
                  >
                    {pegPool.depositsEnabled ? 'Deposit' : 'Above Peg'}
                  </Button>
                )}
              </Grid>

              <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                <Typography>
                  Current TWAP withdraw fee ={' '}
                  {withdrawFeePercent || withdrawFeePercent == 0 ? withdrawFeePercent : <Skeleton />}%
                </Typography>

                <Button
                  className={pegPool.userInfo?.isDeposited ? 'shinyButtonSecondary' : 'shinyButtonDisabled'}
                  fullWidth={true}
                  disabled={!pegPool.userInfo?.isDeposited}
                  onClick={onPresentWithdraw}
                >
                  Withdraw
                </Button>
                <Typography>
                You will receive GRAPE-MIM LP tokens when you withdraw
                </Typography>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        {rewardTokens && <PegPoolRewards rewardTokens={rewardTokens} totalRewardValue={totalRewardValue} apr={apr} />}
      </Grid>
    </Grid>
  );
};

export default PegPoolInfo;
