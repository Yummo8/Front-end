import React, {useMemo, useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from 'styled-components';
import {Button, Card, CardContent, Typography} from '@material-ui/core';
import DepositModal from './DepositModal';

import CardIcon from '../../../components/CardIcon';
import {AddIcon} from '../../../components/icons';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '../../../components/IconButton';
import Label from '../../../components/Label';
import Value from '../../../components/Value';

import useApprove, {ApprovalState} from '../../../hooks/useApprove';
import useModal from '../../../hooks/useModal';
import useStake from '../../../hooks/useStake';
import useZap from '../../../hooks/useZapSW';
import useNodePrice from '../../../hooks/useNodePrice';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import useTokenBalance from '../../../hooks/useTokenBalance';
import {getDisplayBalance} from '../../../utils/formatBalance';
import TokenSymbol from '../../../components/TokenSymbol';
import MetamaskFox from '../../../assets/img/metamask-fox.svg';
import useGrapeFinance from '../../../hooks/useGrapeFinance';

import ZapModal from './ZapModal';

const Stake = ({bank}) => {
  const [approveStatus, approve] = useApprove(bank.depositToken, bank.address);
  const {color: themeColor} = useContext(ThemeContext);
  const grapeFinance = useGrapeFinance();
  const tokenBalance = useTokenBalance(bank.depositToken);
  const nodePrice = useNodePrice(bank.contract, bank.poolId, bank.sectionInUI);
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);

  const tokenPriceInDollars = useMemo(
    () => (stakedTokenPriceInDollars ? stakedTokenPriceInDollars : null),
    [stakedTokenPriceInDollars],
  );
  const earnedInDollars = (
    Number(tokenPriceInDollars) * Number(getDisplayBalance(nodePrice, bank.depositToken.decimal))
  ).toFixed(2);
  const {onStake} = useStake(bank);
  const {onZapSW} = useZap(bank);
  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      bank={bank}
      max={tokenBalance}
      decimals={bank.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onStake(amount);
        onDismissDeposit();
      }}
      tokenName={bank.depositTokenName}
    />,
  );

  const [onPresentZap, onDissmissZap] = useModal(
    <ZapModal
      decimals={bank.depositToken.decimal}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onZapSW(zappingToken, tokenName, amount);
        onDissmissZap();
      }}
      LPtokenName={bank.depositTokenName}
    />,
  );

  let isZapLP = bank.depositTokenName.includes('SW') && !bank.depositTokenName.includes('HSHARE');

  return (
    <Card>
      <CardContent>
        {bank.depositTokenName === 'GRAPE-MIM-SW' ? (
          <Button
            onClick={() => {
              grapeFinance.watchAssetInMetamask('SW');
            }}
            style={{position: 'relative', top: '0px'}}
          >
            {' '}
            <b>+</b>&nbsp;&nbsp;
            <img alt="metamask fox" style={{width: '20px'}} src={MetamaskFox} />
          </Button>
        ) : null}
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>
              <TokenSymbol height={65} width={70} symbol={'GNODE'} />
            </CardIcon>
            <Typography style={{textTransform: 'uppercase', color: '#930993'}}>
              <Value value={getDisplayBalance(nodePrice, bank.depositToken.decimal, 1)} />
            </Typography>

            <Label text={`≈ $${earnedInDollars}`} />

            <Typography
              style={{textTransform: 'uppercase', color: '#fff'}}
            >{`${bank.earnTokenName} NODE COST`}</Typography>
          </StyledCardHeader>
          <StyledCardActions>
            {approveStatus !== ApprovalState.APPROVED ? (
              <Button
                disabled={
                  bank.closedForStaking ||
                  approveStatus === ApprovalState.PENDING ||
                  approveStatus === ApprovalState.UNKNOWN
                }
                onClick={approve}
                className={
                  bank.closedForStaking ||
                  approveStatus === ApprovalState.PENDING ||
                  approveStatus === ApprovalState.UNKNOWN
                    ? 'shinyButtonDisabled'
                    : 'shinyButton'
                }
                style={{marginTop: '20px'}}
              >
                {`Approve ${bank.depositTokenName}`}
              </Button>
            ) : (
              <>
                <IconButton
                  className="shinyButton"
                  disabled={bank.closedForStaking}
                  onClick={() => (bank.closedForStaking ? null : onPresentDeposit())}
                >
                  <AddIcon />
                </IconButton>
                {isZapLP ? <StyledActionSpacer /> : null}
                {isZapLP && (
                    
                  <IconButton
                    disabled={bank.closedForStaking}
                    onClick={() => (bank.closedForStaking ? null : onPresentZap())}
                  >
                    
                    <FlashOnIcon style={{color: themeColor.grey[400]}} />
                  </IconButton>
                )}
              </>
            )}
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  );
};

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  width: 100%;
`;
const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`;
const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export default Stake;
