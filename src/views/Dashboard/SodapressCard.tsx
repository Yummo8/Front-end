//@ts-nocheck
import React, {useMemo, useState, useEffect} from 'react';
import {Box, Grid, Accordion, AccordionDetails, AccordionSummary, useMediaQuery} from '@material-ui/core';
import InfoIcon from '@mui/icons-material/Info';

import {Bank} from '../../grape-finance';
import TokenSymbol from '../../components/TokenSymbol';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProgressCountdown from './ProgressCountdown';
import moment from 'moment';
import {getFullDisplayBalance} from '../../utils/formatBalance';
import useClaimPress from '../../hooks/useClaimPress';
import useCompoundPress from '../../hooks/useCompoundPress';
import useStakePress from '../../hooks/useStakePress';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import useApprove, {ApprovalState} from '../../hooks/useApprove';
import usePressLottoInfo from '../../hooks/usePressLottoInfo';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import useTokenBalance from '../../hooks/useTokenBalance';
import useZapStakePress from '../../hooks/useZapStakePress';
import usePoolBalance from '../../hooks/usePoolBalance';
import {styled} from '@mui/material/styles';
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';
import useGetPressUsersNearAssassination from '../../hooks/useGetPressUsersNearAssassination';
import useAssassinatePress from '../../hooks/useAssassinatePress';
import useSodapressUserInfo from '../../hooks/useSodapressUserInfo';
import {subscribe, unsubscribe} from '../../state/txEvent';
import {SyncLoader} from 'react-spinners';
import useBurnGrapePress from '../../hooks/useBurnGrapePress';
import PressClaimModal from './PressClaimModal';
import useModal from '../../hooks/useModal';

const GRAPE_PER_BATCH = 10;

interface SodapressCardProps {
  displayName: string;
  bank: Bank;
  activesOnly: boolean;
}

const LightTooltip = styled(({className, ...props}: TooltipProps) => (
  <Tooltip {...props} classes={{popper: className}} />
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const SodapressCard: React.FC<SodapressCardProps> = ({displayName, bank, activesOnly}) => {
  const widthUnder600 = useMediaQuery('(max-width:600px)');

  const [loading, setLoading] = useState(true);

  const grapeFinance = useGrapeFinance();
  const pressUserInfo = useSodapressUserInfo();
  const pressLottoInfo = usePressLottoInfo(bank.name);
  const usersNearAssassination = useGetPressUsersNearAssassination(bank.name);

  const depositTokenBalance = useTokenBalance(bank.depositToken);
  const mimTokenBalance = useTokenBalance(grapeFinance.MIM);
  const grapeTokenBalance = useTokenBalance(grapeFinance.GRAPE);

  const pressBalance = usePoolBalance(grapeFinance.externalTokens[bank.depositTokenName], bank.address);

  const depositTokenApprove = useApprove(bank.depositToken, bank.address);
  const mimTokenApprove = useApprove(grapeFinance.MIM, bank.address);
  const grapeTokenApprove = useApprove(grapeFinance.GRAPE, grapeFinance.contracts[bank.name + 'Lotto'].address);

  useEffect(() => {
    subscribe('failedTx', () => {
      setClaimLoading(false);
      setCompoundLoading(false);
      setDepositingLoading(false);
      setApproveLoading(false);
    });

    subscribe('successTx', () => {
      setClaimLoading(false);
      setCompoundLoading(false);
      setDepositingLoading(false);
      setApproveLoading(false);
    });

    return () => {
      unsubscribe('failedTx');
      unsubscribe('successTx');
    };
  }, []);

  const {onClaim} = useClaimPress(bank);
  const {onCompound} = useCompoundPress(bank);
  const {onStake} = useStakePress(bank);
  const {onZapAndStake} = useZapStakePress(bank);
  const {onAssassinate} = useAssassinatePress(bank);
  const {onBurnGrape} = useBurnGrapePress(bank);

  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [payWith, setPayWith] = useState(bank.depositTokenName);
  const [batchAmount, setBatchAmount] = useState('');
  const [claimLoading, setClaimLoading] = useState(false);
  const [depositingLoading, setDepositingLoading] = useState(false);
  const [approveLoading, setApproveLoading] = useState(false);
  const [compoundLoading, setCompoundLoading] = useState(false);

  const displayDailyAPR = useMemo(
    () => (pressUserInfo ? (Number(pressUserInfo.rewardsPerDay) * 100) / pressUserInfo.totalDeposited : null),
    [pressUserInfo],
  );

  const displayRemainingTime = useMemo(() => {
    if (pressLottoInfo) {
      const dateTo = new Date();
      dateTo.setSeconds(dateTo.getSeconds() + Number(pressLottoInfo.timeLeftUntilNewDay));
      return dateTo;
    }
    return null;
  }, [pressLottoInfo]);

  const numGrapeToBurn = useMemo(() => {
    if (!batchAmount) return '';
    return Number(batchAmount) * GRAPE_PER_BATCH;
  }, [batchAmount]);

  useEffect(() => {
    if (pressUserInfo != null && displayDailyAPR != null) {
      setLoading(false);
    }
  }, [pressUserInfo, displayDailyAPR]);

  // Custom functions
  const expand = () => {
    setExpanded(!expanded);
  };

  const stake = () => {
    if (Number(inputValue) > 0) {
      setDepositingLoading(true);
      if (payWith === bank.depositTokenName) {
        onStake(inputValue);
      } else {
        onZapAndStake(inputValue, payWith);
      }
    }
  };

  const burn = () => {
    if (Number(batchAmount) > 0) {
      onBurnGrape(Number(batchAmount));
    }
  };

  const handleBatchAmountChanged = (e: any) => {
    if (isNaN(Number(e.target.value))) return;
    setBatchAmount(e.target.value);
  };

  const maxClicked = () => {
    setInputValue(getFullDisplayBalance(payWith === 'MIM' ? mimTokenBalance : depositTokenBalance, 18));
  };

  const maxBatchClicked = () => {
    const batches = Math.floor(Number(grapeTokenBalance) / 1e18 / 10);
    setBatchAmount(batches.toFixed(0));
  };

  const updateInput = (event: any) => {
    setInputValue(event.target.value);
  };

  const getLiquidityLink = () => {
    if (payWith === bank.depositTokenName) {
      return 'https://xgrape.grapefinance.app/';
    }
  };

  const handlePayWithChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayWith(event.target.value);
  };

  const approve = () => {
    if (payWith === 'MIM') {
      mimTokenApprove.approve();
      return;
    }
    depositTokenApprove.approve();
  };

  const showApprove = () => {
    return (
      (payWith === 'MIM' && mimTokenApprove.approveStatus !== ApprovalState.APPROVED) ||
      (payWith === bank.depositTokenName && depositTokenApprove.approveStatus !== ApprovalState.APPROVED)
    );
  };

  const shortenAddress = (addr: string) => {
    if (!addr) return '';
    return addr.slice(0, 6) + '...' + addr.slice(addr.length - 4, addr.length);
  };

  const assassinate = (user: string) => {
    onAssassinate(user);
  };

  
  const modalCallback = (action: string) => {
    if (action === 'Cancel') {
      onDismissModal();
    }
    if (action === 'Claim') {
      onDismissModal();
      setClaimLoading(true);
      onClaim();
    }
  };

  const [onPresentModal, onDismissModal] = useModal(
    <PressClaimModal shares={pressUserInfo?.pendingShares} callback={modalCallback} />,
  );


  return (
    <>
      {(activesOnly === false || (activesOnly === true && pressUserInfo && pressUserInfo.totalTracked > 0)) && (
        <Accordion expanded={expanded} onChange={expand} className="accordion">
          <AccordionSummary
            expandIcon={loading ? <SyncLoader color="white" size={4} /> : <ExpandMoreIcon style={{color: 'white'}} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Grid container justifyContent={'space-between'} alignItems="center" className="lineItemInner" spacing={1}>
              <Grid item className="lineName" xs={12} sm={12} md={4}>
                <Grid container justifyContent="flex-start" alignItems="center" spacing={2} wrap="nowrap">
                  <Grid item>
                    <TokenSymbol symbol={bank.depositTokenName} height={30} width={30} />
                  </Grid>
                  <Grid item>
                    <div>{displayName}</div>
                    <div className="lineDescription">
                      Lock {bank.depositTokenName} and earn up to 350% back in {bank.depositTokenName}
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <Grid container direction={widthUnder600 ? 'row' : 'column'} justifyContent="space-between">
                  <Grid item>
                    <div className="lineLabel">
                      {' '}
                      Total Tracked{' '}
                      <LightTooltip arrow placement="top" enterDelay={0} title="Token Deposited + Compounded">
                        <InfoIcon style={{verticalAlign: 'text-bottom', fontSize: '17px'}} />
                      </LightTooltip>
                    </div>
                  </Grid>
                  <Grid item>
                    {' '}
                    <div className="lineValueDeposited">
                      <span style={{color: '#fcfcfc'}}>
                        {pressUserInfo ? pressUserInfo.totalTracked.toFixed(2) : '0.00'} LP
                      </span>
                      <span style={{marginLeft: '5px', fontSize: '14px'}}>
                        ($
                        {pressUserInfo
                          ? (pressUserInfo.totalTracked * Number(pressUserInfo.depositTokenPrice)).toFixed(2)
                          : '0.00'}
                        )
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <Grid container direction={widthUnder600 ? 'row' : 'column'} justifyContent="space-between">
                  <Grid item>
                    <div className="lineLabel">Rewards</div>
                  </Grid>
                  <Grid item>
                    <div className="lineValueDeposited">
                      <span style={{color: '#fcfcfc'}}>
                        {pressUserInfo ? pressUserInfo.totalClaimable.toFixed(2) : '0.00'} LP
                      </span>
                      <span style={{marginLeft: '5px', fontSize: '14px'}}>
                        ($
                        {pressUserInfo
                          ? (pressUserInfo.totalClaimable * Number(pressUserInfo.depositTokenPrice)).toFixed(2)
                          : '0.00'}
                        )
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <Grid container direction={widthUnder600 ? 'row' : 'column'} justifyContent="space-between">
                  <Grid item>
                    <div className="lineLabel">
                      APR Yearly | Daily
                      <LightTooltip
                        arrow
                        placement="top"
                        enterDelay={0}
                        title="Base APR is 1.25%, then changes based on your deposits, compounds and claims"
                      >
                        <InfoIcon style={{verticalAlign: 'text-bottom', fontSize: '17px'}} />
                      </LightTooltip>
                    </div>{' '}
                  </Grid>
                  <Grid item>
                    <div className="lineValue">
                      {displayDailyAPR ? (displayDailyAPR * 365).toFixed(0) : '456'}% |{' '}
                      {displayDailyAPR ? displayDailyAPR.toFixed(2) : '1.25'}%
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <Grid container direction={widthUnder600 ? 'row' : 'column'} justifyContent="space-between">
                  <Grid item>
                    <div className="lineLabel">Total Deposited</div>
                  </Grid>
                  <Grid item>
                    ${pressUserInfo ? pressUserInfo.tvl.toLocaleString('en-US', {maximumFractionDigits: 2}) : '0.00'}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails style={{overflow: 'hidden'}}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                  <Grid item xs={6} md={3}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">Est. Reward /day</div>
                        <div className="lineValue">
                          {pressUserInfo ? pressUserInfo.rewardsPerDay.toFixed(2) : '0.00'} LP
                          <span className="wallet-token-value">
                            {' '}
                            ($
                            {pressUserInfo
                              ? (pressUserInfo.rewardsPerDay * Number(pressUserInfo.depositTokenPrice)).toFixed(2)
                              : '0.00'}
                            )
                          </span>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">
                          Your Deposits{' '}
                          <LightTooltip
                            arrow
                            placement="top"
                            enterDelay={0}
                            title="Shows 90% of the sum of all your deposits"
                          >
                            <InfoIcon style={{verticalAlign: 'text-bottom', fontSize: '17px'}} />
                          </LightTooltip>
                        </div>
                        <div className="lineValue">
                          {pressUserInfo ? pressUserInfo.totalDeposited.toFixed(2) : '0.00'} LP{' '}
                          <span className="wallet-token-value">
                            ($
                            {pressUserInfo
                              ? (pressUserInfo.totalDeposited * Number(pressUserInfo.depositTokenPrice)).toFixed(2)
                              : '0.00'}
                            )
                          </span>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">
                          Your Compounds{' '}
                          <LightTooltip arrow placement="top" enterDelay={0} title="Sum of all your compounds">
                            <InfoIcon style={{verticalAlign: 'text-bottom', fontSize: '17px'}} />
                          </LightTooltip>
                        </div>
                        <div className="lineValue">
                          {pressUserInfo
                            ? (pressUserInfo.totalTracked - pressUserInfo.totalDeposited).toFixed(2)
                            : '0.00'}{' '}
                          LP
                          <span className="wallet-token-value">
                            {' '}
                            ($
                            {pressUserInfo
                              ? (
                                  (pressUserInfo.totalTracked - pressUserInfo.totalDeposited) *
                                  Number(pressUserInfo.depositTokenPrice)
                                ).toFixed(2)
                              : '0.00'}
                            )
                          </span>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">
                          Assassination Tracker{' '}
                          <LightTooltip
                            arrow
                            placement="top"
                            enterDelay={0}
                            title="You don't want to reach 3.5... ((tracked share in token - tracked token balance) / tracked token balance)"
                          >
                            <InfoIcon style={{verticalAlign: 'text-bottom', fontSize: '17px'}} />
                          </LightTooltip>
                        </div>
                        <div className="lineValue">
                          {pressUserInfo ? pressUserInfo.profitRatio.toFixed(2) : '0.00'} / 3.5
                        </div>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={6} md={3}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">
                          Contract Balance{' '}
                          <LightTooltip
                            arrow
                            placement="top"
                            enterDelay={0}
                            title="Amount of Token left in the Contract"
                          >
                            <InfoIcon style={{verticalAlign: 'text-bottom', fontSize: '17px'}} />
                          </LightTooltip>
                        </div>
                        <div className="lineValue">
                          {pressBalance
                            ? (Number(pressBalance) / 1e18).toLocaleString('en-US', {maximumFractionDigits: 2})
                            : '0.00'}{' '}
                          <span className="wallet-token-value">
                            {' '}
                            ($
                            {pressBalance && pressUserInfo
                              ? (
                                  (Number(pressBalance) / 1e18) *
                                  Number(pressUserInfo.depositTokenPrice)
                                ).toLocaleString('en-US', {maximumFractionDigits: 2})
                              : '0.00'}
                            )
                          </span>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">
                          Remaining Shares | Tokens{' '}
                          <LightTooltip
                            arrow
                            placement="top"
                            enterDelay={0}
                            title="Your remaining shares in the pool. Claiming while 'Remaining Shares' = 'Pending Shares' kicks out of the Press."
                          >
                            <InfoIcon style={{verticalAlign: 'text-bottom', fontSize: '17px'}} />
                          </LightTooltip>
                        </div>
                        <div className="lineValue">
                          {pressUserInfo
                            ? `${pressUserInfo.currentShares.toFixed(2)} | ${pressUserInfo.currentSharesInToken.toFixed(
                                2,
                              )} LP`
                            : '0.00'}{' '}
                          <span className="wallet-token-value">
                            {' '}
                            ($
                            {pressUserInfo
                              ? (
                                  Number(pressUserInfo.currentSharesInToken) * Number(pressUserInfo.depositTokenPrice)
                                ).toLocaleString('en-US', {maximumFractionDigits: 2})
                              : '0.00'}
                            )
                          </span>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">
                          Pending Shares | Tokens{' '}
                          <LightTooltip
                            arrow
                            placement="top"
                            enterDelay={0}
                            title="Compounding allows you to have a greater return than your initial."
                          >
                            <InfoIcon style={{verticalAlign: 'text-bottom', fontSize: '17px'}} />
                          </LightTooltip>
                        </div>
                        <div className="lineValue">
                          {pressUserInfo
                            ? `${pressUserInfo.pendingShares.toFixed(2)} | ${pressUserInfo.pendingSharesInToken.toFixed(
                                2,
                              )} LP`
                            : '0.00'}{' '}
                          <span className="wallet-token-value">
                            {' '}
                            ($
                            {pressUserInfo
                              ? (
                                  Number(pressUserInfo.pendingSharesInToken) * Number(pressUserInfo.depositTokenPrice)
                                ).toLocaleString('en-US', {maximumFractionDigits: 2})
                              : '0.00'}
                            )
                          </span>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">
                          Claimed Shares{' '}
                          <LightTooltip
                            arrow
                            placement="top"
                            enterDelay={0}
                            title="Total Shares claimed so far. (Total Share Balance - Current Share Balance)"
                          >
                            <InfoIcon style={{verticalAlign: 'text-bottom', fontSize: '17px'}} />
                          </LightTooltip>
                        </div>
                        <div className="lineValue">
                          {pressUserInfo ? pressUserInfo.claimedInShares.toFixed(2) : '0.00'}
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Box className="lineDetailsBox">
                      <div className="press-line-details-inner">
                        <Box>
                          <div className="pending-rewards">DEPOSIT IN {bank.name}</div>
                        </Box>
                        <Box mt={2}>
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              value={payWith}
                              onChange={handlePayWithChange}
                            >
                              <FormControlLabel
                                value={bank.depositTokenName}
                                control={<Radio />}
                                label={bank.depositTokenName}
                              />

                              <FormControlLabel value="MIM" control={<Radio />} label="MIM" />
                            </RadioGroup>
                          </FormControl>
                        </Box>
                        <div className="node-inputDetailsBox">
                          <Box className="box-price-of-one color-secondary">
                            1 share = {pressUserInfo ? pressUserInfo.priceOfOneShare.toFixed(2) : '0.00'}{' '}
                            {bank.depositTokenName} = $
                            {pressUserInfo
                              ? (pressUserInfo.priceOfOneShare * pressUserInfo.depositTokenPrice).toFixed(3)
                              : '0.000'}
                          </Box>
                          <div className="inputDetailsBoxInner">
                            <Grid container justifyContent="space-between" alignItems="center" wrap="nowrap">
                              <Grid item xs={10} md={11}>
                                <input
                                  type="number"
                                  placeholder="Enter amount"
                                  className="amount-input"
                                  value={inputValue}
                                  onChange={updateInput}
                                />
                              </Grid>
                              <Grid item xs={2} md={1} className="color-secondary">
                                <div onClick={maxClicked} className="max-button">
                                  MAX
                                </div>
                              </Grid>
                            </Grid>
                            <div className="balance">
                              <span>
                                Wallet:{' '}
                                {getFullDisplayBalance(payWith === 'MIM' ? mimTokenBalance : depositTokenBalance, 18)}{' '}
                                {payWith}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Box mt={2}>
                          {getLiquidityLink() != null && (
                            <a
                              style={{textDecoration: 'none'}}
                              rel="noopener noreferrer"
                              target="_blank"
                              href={getLiquidityLink()}
                            >
                              <div className="addRemoveLiquidity color-secondary">Add / Remove Liquidity</div>
                            </a>
                          )}
                        </Box>
                      </div>
                      <Box mt={2}>
                        <Grid container justifyContent="center">
                          <Grid item xs={12}>
                            {showApprove() ? (
                              <button
                                onClick={() => {
                                  setApproveLoading(true);
                                  approve();
                                }}
                                className="primary-button"
                                title="Approve"
                                style={{borderTopLeftRadius: '0', borderTopRightRadius: '0'}}
                              >
                                {approveLoading ? (
                                  <span>
                                    <SyncLoader color="white" size={4} style={{marginRight: '10px'}} />
                                    APPROVING
                                  </span>
                                ) : (
                                  <span>APPROVE</span>
                                )}
                              </button>
                            ) : (
                              <button
                                disabled={Number(inputValue) === 0}
                                onClick={stake}
                                className="primary-button"
                                title="Create Nodes"
                                style={{borderTopLeftRadius: '0', borderTopRightRadius: '0'}}
                              >
                                {depositingLoading ? (
                                  <span>
                                    <SyncLoader color="white" size={4} style={{marginRight: '10px'}} />
                                    DEPOSITING
                                  </span>
                                ) : (
                                  <span>DEPOSIT</span>
                                )}
                              </button>
                            )}
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <Box className="lineDetailsBox">
                      <div className="press-line-details-inner">
                        <Box>
                          <div className="pending-rewards">PENDING {bank.earnTokenName} SHARES</div>
                        </Box>
                        <Box style={{textAlign: 'center'}} mt={2}>
                          <TokenSymbol symbol={bank.earnTokenName} width={59} height={59} />
                        </Box>
                        <Box mt={2}>
                          <Grid
                            container
                            direction="column"
                            spacing={0}
                            justifyContent="center"
                            alignContent="center"
                            alignItems="center"
                          >
                            <Grid item className="rewardTokenAmount">
                              {pressUserInfo ? pressUserInfo.totalClaimable.toFixed(2) : '0.00'} {bank.earnTokenName}
                            </Grid>
                            <Grid item className="rewardTokenValue">
                              $
                              {pressUserInfo
                                ? (pressUserInfo.totalClaimable * Number(pressUserInfo.depositTokenPrice)).toFixed(2)
                                : '0.00'}
                            </Grid>
                            {pressUserInfo && pressUserInfo.totalDeposited != 0 && (
                              <Grid item style={{marginTop: '20px'}} className="sharesLeftValue">
                                After claiming, you will have{' '}
                                {(pressUserInfo.currentShares - pressUserInfo.pendingShares).toFixed(2)} share(s) left.
                                {pressUserInfo.currentShares - pressUserInfo.pendingShares == 0 && (
                                  <div style={{color: 'red'}}>Claiming will kick you out of the Press.</div>
                                )}
                              </Grid>
                            )}
                          </Grid>
                        </Box>
                      </div>
                      <Box mt={2}>
                        <Grid container justifyContent="center">
                          <Grid item xs={6}>
                            <button
                              className="primary-button"
                              title="Compound"
                              onClick={() => {
                                setCompoundLoading(true);
                                onCompound();
                              }}
                              disabled={!pressUserInfo || (pressUserInfo && pressUserInfo.totalClaimable <= 0)}
                              style={{
                                borderTopLeftRadius: '0',
                                borderTopRightRadius: '0',
                                borderBottomRightRadius: '0',
                              }}
                            >
                              {compoundLoading ? (
                                <span>
                                  <SyncLoader color="white" size={4} style={{marginRight: '10px'}} />
                                  PRESSING
                                </span>
                              ) : (
                                <span>PRESS</span>
                              )}
                            </button>
                          </Grid>
                          <Grid item xs={6}>
                            <button
                              style={{borderTopLeftRadius: '0', borderTopRightRadius: '0', borderBottomLeftRadius: '0'}}
                              className="secondary-button"
                              title="Claim"
                              onClick={() => {
                                if (pressUserInfo.currentShares - pressUserInfo.pendingShares == 0) {
                                  onPresentModal();
                                } else {
                                  setClaimLoading(true);
                                  onClaim();
                                }
                              }}
                              disabled={!pressUserInfo || (pressUserInfo && pressUserInfo.totalClaimable <= 0)}
                            >
                              {claimLoading ? (
                                <span>
                                  <SyncLoader color="white" size={4} style={{marginRight: '10px'}} />
                                  CLAIMING SHARES
                                </span>
                              ) : (
                                <span>CLAIM SHARES</span>
                              )}
                            </button>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box className="lineDetailsBox">
                      <div className="press-line-details-inner">
                        <Box>
                          <div className="pending-rewards">{bank.name} LOTTERY</div>
                        </Box>
                        <Box mt={2}>
                          <Grid container direction="column" spacing={1}>
                            <Grid item xs={12}>
                              <Grid container justifyContent="space-between">
                                <Grid item>Daily Top Deposit</Grid>
                                <Grid item>
                                  {pressLottoInfo ? pressLottoInfo.largestDaily.toFixed(2) : '0.00'} LP
                                  <span className="wallet-token-value">
                                    {' '}
                                    $
                                    {pressLottoInfo && pressUserInfo
                                      ? (pressLottoInfo.largestDaily * Number(pressUserInfo.depositTokenPrice)).toFixed(
                                          2,
                                        )
                                      : '0.00'}
                                  </span>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container justifyContent="space-between">
                                <Grid item>Daily Deposit Pot</Grid>
                                <Grid item>
                                  {pressLottoInfo ? pressLottoInfo.dailyDepositPot.toFixed(2) : '0.00'} LP
                                  <span className="wallet-token-value">
                                    {' '}
                                    $
                                    {pressLottoInfo && pressUserInfo
                                      ? (
                                          pressLottoInfo.dailyDepositPot * Number(pressUserInfo.depositTokenPrice)
                                        ).toFixed(2)
                                      : '0.00'}
                                  </span>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container justifyContent="space-between">
                                <Grid item>Largest Deposit Pot</Grid>
                                <Grid item>
                                  {pressLottoInfo ? pressLottoInfo.largestDailyPot.toFixed(2) : '0.00'} LP
                                  <span className="wallet-token-value">
                                    {' '}
                                    $
                                    {pressLottoInfo && pressUserInfo
                                      ? (
                                          pressLottoInfo.largestDailyPot * Number(pressUserInfo.depositTokenPrice)
                                        ).toFixed(2)
                                      : '0.00'}
                                  </span>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container justifyContent="space-between">
                                <Grid item>Next Winner Drawing</Grid>
                                <Grid item>
                                  {displayRemainingTime && (
                                    <ProgressCountdown
                                      description="Next Drawing"
                                      base={moment().toDate()}
                                      hideBar={true}
                                      deadline={displayRemainingTime}
                                    />
                                  )}
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container justifyContent="space-between">
                                <Grid item>Lotto Tickets</Grid>
                                <Grid item>
                                  {pressLottoInfo
                                    ? `${pressLottoInfo.lottoTickets} / ${pressLottoInfo.totalLottoTickets}`
                                    : '0 / 0'}{' '}
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container justifyContent="space-between">
                                <Grid item>
                                  <div>Your Lotto Winnings</div>
                                  <div className="color-secondary" style={{fontSize: '12px'}}>
                                    Your winnings are sent to you automatically
                                  </div>
                                </Grid>
                                <Grid item>{pressLottoInfo ? pressLottoInfo.lottoWinnings : '0'} LP</Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Box>
                      </div>
                      <Box mt={2}>
                        <Grid container justifyContent="center">
                          <Grid item xs={12}>
                            {grapeTokenApprove.approveStatus !== ApprovalState.APPROVED ? (
                              <>
                                <span style={{paddingLeft: '35px', paddingRight: '35px'}}>
                                  {' '}
                                  Burn Grape for Tickets (1 Grape each)
                                </span>
                                <button
                                  className="primary-button"
                                  title="Approve"
                                  onClick={grapeTokenApprove.approve}
                                  style={{
                                    marginTop: '15px',
                                    borderTopLeftRadius: '0',
                                    borderTopRightRadius: '0',
                                  }}
                                >
                                  Approve
                                </button>
                              </>
                            ) : (
                              <>
                                <Grid container style={{paddingLeft: '35px', paddingRight: '35px'}}>
                                  <Grid item xs={12}>
                                    Burn batches of {GRAPE_PER_BATCH} Grape in exchange for 10 Lotto tickets
                                  </Grid>
                                  <Grid item xs={12}>
                                    <div className="inputDetailsBoxInner">
                                      <Grid container justifyContent="space-between" alignItems="center" wrap="nowrap">
                                        <Grid item xs={10} md={11}>
                                          <input
                                            type="number"
                                            placeholder="Number of batches"
                                            className="amount-input"
                                            value={batchAmount}
                                            onChange={handleBatchAmountChanged}
                                          />
                                        </Grid>
                                        <Grid item xs={2} md={1} className="color-secondary">
                                          <div onClick={maxBatchClicked} className="max-button">
                                            MAX
                                          </div>
                                        </Grid>
                                      </Grid>
                                      <div className="balance">
                                        <span>Wallet: {getFullDisplayBalance(grapeTokenBalance, 18)} GRAPE</span>
                                      </div>
                                    </div>
                                  </Grid>
                                </Grid>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                                  <button
                                    className="primary-button"
                                    title="Buy "
                                    onClick={burn}
                                    disabled={
                                      Number(batchAmount) <= 0 ||
                                      Number(batchAmount) > Number(grapeTokenBalance) / 1e18 / 10
                                    }
                                    style={{
                                      marginTop: '15px',
                                      borderTopLeftRadius: '0',
                                      borderTopRightRadius: '0',
                                    }}
                                  >
                                    Burn {numGrapeToBurn} GRAPE
                                  </button>
                                </div>
                              </>
                            )}
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <Box className="lineDetailsBox">
                      <div className="press-line-details-inner">
                        <Box>
                          <div className="pending-rewards">{bank.earnTokenName} ASSASSINATION</div>
                        </Box>

                        <Box mt={2}>
                          <Grid container justifyContent="space-between">
                            <Grid item>Your Assassination Profits</Grid>
                            <Grid item>
                              {pressUserInfo ? pressUserInfo.profitsAssassinated.toFixed(2) : '0.00'}{' '}
                              {bank.depositTokenName}
                              <span className="wallet-token-value">
                                {' '}
                                $
                                {pressUserInfo
                                  ? (
                                      pressUserInfo.profitsAssassinated * Number(pressUserInfo.depositTokenPrice)
                                    ).toFixed(2)
                                  : '0.00'}
                              </span>
                            </Grid>
                          </Grid>
                        </Box>

                        <Box mt={3}>
                          <div className="pending-rewards">USERS NEAR ASSASSINATION (95%)</div>
                          {usersNearAssassination && usersNearAssassination.length > 0 ? (
                            <Grid
                              container
                              direction="column"
                              spacing={1}
                              style={{marginTop: '20px', paddingBottom: '20px'}}
                            >
                              {usersNearAssassination.map((user) => (
                                <Grid item xs={12}>
                                  <Grid container justifyContent="space-between" alignItems="center">
                                    <Grid item>{shortenAddress(user)}</Grid>
                                    <Grid item>
                                      <button
                                        onClick={() => assassinate(user)}
                                        className="primary-button"
                                        style={{height: '35px'}}
                                      >
                                        Assassinate
                                      </button>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              ))}
                            </Grid>
                          ) : (
                            <div className="color-secondary" style={{marginTop: '20px'}}>
                              No users near assassination
                            </div>
                          )}
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

export default SodapressCard;
