//@ts-nocheck
import moment from 'moment';
import React, {useEffect, useMemo, useState} from 'react';
import {Box, Grid, Accordion, AccordionDetails, AccordionSummary, useMediaQuery} from '@material-ui/core';
import useApprove, {ApprovalState} from '../../hooks/useApprove';
import ProgressCountdown from '../Winery/components/ProgressCountdown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useRedeemOnBoardroom from '../../hooks/useRedeemOnBoardroom';
import useStakedBalanceOnBoardroom from '../../hooks/useStakedBalanceOnBoardroom';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useGetBoardroomPrintRate from '../../hooks/useGetBoardroomPrintRate';
import useCashPriceInEstimatedTWAP from '../../hooks/useCashPriceInEstimatedTWAP';
import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import useFetchBoardroomAPR from '../../hooks/useFetchBoardroomAPR';
import useClaimRewardCheck from '../../hooks/boardroom/useClaimRewardCheck';
import useWithdrawCheck from '../../hooks/boardroom/useWithdrawCheck';
import usebShareStats from '../../hooks/useWineStats';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import useBondStats from '../../hooks/useBondStats';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import useGrapeFinance from '../../hooks/useGrapeFinance';
import {getDisplayBalance} from '../../utils/formatBalance';
import useTokenBalance from '../../hooks/useTokenBalance';
import useUnstakeTimerBoardroom from '../../hooks/boardroom/useUnstakeTimerBoardroom';
import TokenSymbol from '../../components/TokenSymbol';
import useStakeToBoardroom from '../../hooks/useStakeToBoardroom';
import useWithdrawFromBoardroom from '../../hooks/useWithdrawFromBoardroom';
import useHarvestFromBoardroom from '../../hooks/useHarvestFromBoardroom';
import useEarningsOnBoardroom from '../../hooks/useEarningsOnBoardroom';
import useGrapeStats from '../../hooks/useGrapeStats';
import useClaimRewardTimerBoardroom from '../../hooks/boardroom/useClaimRewardTimerBoardroom';
import {subscribe, unsubscribe} from '../../state/txEvent';
import {SyncLoader} from 'react-spinners';

const BoardroomCard = () => {
  useEffect(() => {
    subscribe('failedTx', () => {
      setClaimLoading(false);
      setWithdrawLoading(false);
      setRedeemLoading(false);
      setDepositingLoading(false);
      setApproveLoading(false);
    });

    subscribe('successTx', () => {
      setWithdrawLoading(false);
      setClaimLoading(false);
      setRedeemLoading(false);
      setDepositingLoading(false);
      setApproveLoading(false);
    });

    return () => {
      unsubscribe('failedTx');
      unsubscribe('successTx');
    };
  }, []);

  const widthUnder600 = useMediaQuery('(max-width:600px)');
  const widthUnder960 = useMediaQuery('(max-width:960px)');
  const [inputValue, setInputValue] = useState<string>('');

  const [loading, setLoading] = useState(true);
  const [claimLoading, setClaimLoading] = useState(false);
  const [depositingLoading, setDepositingLoading] = useState(false);
  const [approveLoading, setApproveLoading] = useState(false);
  const [redeemLoading, setRedeemLoading] = useState(false);
  const [withdrawLoading, setWithdrawLoading] = useState(false);

  const [activeDetailsBoxTab, setActiveDetailsBoxTab] = useState('Deposit');
  const [expanded, setExpanded] = useState(false);
  const expand = () => {
    setExpanded(!expanded);
  };

  const grapeFinance = useGrapeFinance();
  const stakedBalance = useStakedBalanceOnBoardroom();
  const totalStaked = useTotalStakedOnBoardroom();
  const currentEpoch = useCurrentEpoch();
  const printRate = useGetBoardroomPrintRate();
  const cashStat = useCashPriceInEstimatedTWAP();
  const boardroomAPR = useFetchBoardroomAPR();
  const canWithdraw = useWithdrawCheck();
  const bShareStats = usebShareStats();
  const nextEpoch = useTreasuryAllocationTimes();
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('WINE', grapeFinance.WINE);
  const wineBalance = useTokenBalance(grapeFinance.WINE);
  const earnings = useEarningsOnBoardroom();
  const grapeStats = useGrapeStats();
  const canClaim = useClaimRewardCheck();
  const claimRewardTimer = useClaimRewardTimerBoardroom();
  const withdrawTimer = useUnstakeTimerBoardroom();

  const parsedStakedBalance = useMemo(() => (stakedBalance ? Number(stakedBalance) / 1e18 : null), [stakedBalance]);
  const parsedTotalStaked = useMemo(() => (totalStaked ? Number(totalStaked) / 1e18 : null), [totalStaked]);
  const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(3) : null), [cashStat]);
  const bShareCirculatingSupply = useMemo(() => (bShareStats ? bShareStats.circulatingSupply : null), [bShareStats]);
  const parsedWineBalance = useMemo(() => (wineBalance ? Number(wineBalance) / 1e18 : null), [wineBalance]);
  const tokenPriceInDollars = useMemo(
    () =>
      stakedTokenPriceInDollars
        ? (Number(stakedTokenPriceInDollars) * parsedStakedBalance).toFixed(2).toString()
        : null,
    [stakedTokenPriceInDollars, parsedStakedBalance],
  );
  const parsedEarnings = useMemo(() => (earnings ? Number(earnings) / 1e18 : null), [earnings]);
  const grapePriceInDollars = useMemo(
    () => (grapeStats ? Number(grapeStats.priceInDollars).toFixed(2) : null),
    [grapeStats],
  );

  const rewards = (boardroomAPR / 365 / 100) * Number(tokenPriceInDollars);
  const percentageStaked =
    parsedTotalStaked && bShareCirculatingSupply
      ? ((parsedTotalStaked * 100) / Number(bShareCirculatingSupply)).toFixed(2)
      : null;
  const tvl = parsedTotalStaked * Number(stakedTokenPriceInDollars);
  const earnedInDollars =
    parsedEarnings && grapePriceInDollars ? (Number(grapePriceInDollars) * parsedEarnings).toFixed(2) : null;

  const {approveStatus, approve} = useApprove(grapeFinance.WINE, grapeFinance.contracts.Boardroom.address);
  const {onRedeem} = useRedeemOnBoardroom();
  const {onStake} = useStakeToBoardroom();
  const {onWithdraw} = useWithdrawFromBoardroom();
  const {onReward} = useHarvestFromBoardroom();

  const maxClicked = () => {
    if (activeDetailsBoxTab === 'Deposit') {
      setInputValue(parsedWineBalance.toString());
    } else if (activeDetailsBoxTab === 'Withdraw') {
      setInputValue(parsedStakedBalance.toString());
    }
  };

  const stake = () => {
    if (Number(inputValue) > 0) {
      setDepositingLoading(true);
      onStake(inputValue.toString());
    }
  };

  const withdraw = () => {
    if (Number(inputValue) > 0) {
      setWithdrawLoading(true);
      onWithdraw(inputValue.toString());
    }
  };

  const updateInput = (event: any) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (stakedBalance != null && parsedEarnings != null && tvl) {
      setLoading(false);
    }
  }, [stakedBalance, parsedEarnings, tvl]);

  return (
    <Accordion expanded={expanded} onChange={expand} className="accordion">
      <AccordionSummary
        expandIcon={loading ? <SyncLoader color="white" size={4} /> : <ExpandMoreIcon style={{color: 'white'}} />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Grid container justifyContent="space-between" className="lineItemInner" spacing={1}>
          <Grid item className="lineName" xs={12} sm={12} md={4}>
            <Grid container justifyContent="flex-start" alignItems="center" spacing={2}>
              <Grid item>
                <TokenSymbol symbol={'WINE'} height={30} width={30} />
              </Grid>
              <Grid item>
                <div>Winery (earn GRAPE)</div>

                {Number(scalingFactor) >= 1.01 ? (
                  <div className="lineLabel printing">Status: Printing</div>
                ) : (
                  <div className="lineLabel not-printing">Status: Not Printing</div>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Grid container direction={widthUnder600 ? 'row' : 'column'} justifyContent="space-between">
              <Grid item>
                <div className="lineLabel">Deposited</div>
              </Grid>
              <Grid item>
                <div className="lineValueDeposited">
                  <span style={{color: '#fcfcfc'}}>
                    {stakedBalance ? getDisplayBalance(stakedBalance, 18, 2) : '0'}
                  </span>
                  <span style={{marginLeft: '5px', fontSize: '14px'}}>(${tokenPriceInDollars})</span>
                </div>{' '}
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
                  <span style={{color: '#fcfcfc'}}>{parsedEarnings ? parsedEarnings : '0'}</span>
                  <span style={{marginLeft: '5px', fontSize: '14px'}}>
                    (${earnedInDollars ? earnedInDollars : '0'})
                  </span>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            style={{marginTop: widthUnder960 ? '15px' : '0', textAlign: widthUnder960 ? 'center' : 'left'}}
          >
            <Grid container direction={widthUnder600 ? 'row' : 'column'} justifyContent="space-between">
              <Grid item>
                <div className="lineLabel">APR Yearly | Daily</div>
              </Grid>
              <Grid item>
                <div className="lineValue">
                  {boardroomAPR.toFixed(0)}% | {(boardroomAPR / 365).toFixed(2)}%
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            style={{marginTop: widthUnder960 ? '15px' : '0', textAlign: widthUnder960 ? 'center' : 'left'}}
          >
            <Grid container direction={widthUnder600 ? 'row' : 'column'} justifyContent="space-between">
              <Grid item>
                <div className="lineLabel">TVL</div>
              </Grid>
              <Grid item>
                <div className="lineValue">
                  ${tvl ? Number(Number(tvl).toFixed(0)).toLocaleString('en-US') : '-.--'}
                </div>
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
                    <div className="lineLabel">Est Reward /day</div>
                    <div className="lineValueDeposited">
                      {Number(scalingFactor) >= 1.01 ? (
                        <span>~${rewards ? Number(rewards).toLocaleString('en-US') : '0.00'}</span>
                      ) : (
                        <span className="lineLabel not-printing">Not Printing</span>
                      )}
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={3}>
                <div className="statBox">
                  <div className="statBoxInner">
                    <div className="lineLabel">TWAP</div>
                    <div className="lineValue">{scalingFactor ? scalingFactor : '-.--'}</div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={3}>
                <div className="statBox">
                  <div className="statBoxInner">
                    <div className="lineLabel">WINE Staked</div>
                    <div className="lineValue">{getDisplayBalance(totalStaked, 18, 2)}</div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={3}>
                <div className="statBox">
                  <div className="statBoxInner">
                    <div className="lineLabel">% WINE Staked</div>
                    <div className="lineValue">{percentageStaked}%</div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={3}>
                <div className="statBox">
                  <div className="statBoxInner">
                    <div className="lineLabel">Your Share of Pool</div>
                    <div className="lineValue">
                      {((parsedStakedBalance * 100) / (Number(totalStaked) / 1e18)).toFixed(2)}%
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={3}>
                <div className="statBox">
                  <div className="statBoxInner">
                    <div className="lineLabel">Epochs Above Peg</div>
                    <div className="lineValue">{printRate.toFixed(2)}%</div>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} md={3}>
                <div className="statBox">
                  <div className="statBoxInner">
                    <div className="lineLabel">Next Epoch</div>
                    <div className="lineValue">
                      {' '}
                      <ProgressCountdown
                        base={moment().toDate()}
                        hideBar={true}
                        deadline={nextEpoch?.to}
                        description="Next Epoch"
                      />
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={3}>
                <div className="statBox">
                  <div className="statBoxInner">
                    <div className="lineLabel">Current Epoch</div>
                    <div className="lineValue">{Number(currentEpoch)}</div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12} md={6}>
                <Box className="lineDetailsBox">
                  <div className="line-details-inner">
                    <Grid container justifyContent="space-evenly" spacing={2}>
                      <Grid
                        item
                        className={activeDetailsBoxTab === 'Deposit' ? 'tabDetailsItemActive' : 'tabDetailsItem'}
                        onClick={() => setActiveDetailsBoxTab('Deposit')}
                      >
                        DEPOSIT
                      </Grid>
                      <Grid
                        item
                        className={activeDetailsBoxTab === 'Withdraw' ? 'tabDetailsItemActive' : 'tabDetailsItem'}
                        onClick={() => setActiveDetailsBoxTab('Withdraw')}
                      >
                        WITHDRAW
                      </Grid>
                    </Grid>

                    <div className="inputDetailsBox">
                      <Box className="box-price-of-one color-secondary">
                        1 WINE = ${stakedTokenPriceInDollars ? Number(stakedTokenPriceInDollars).toFixed(3) : '0.000'}
                      </Box>
                      <div className="inputDetailsBoxInner">
                        {' '}
                        <Grid container justifyContent="space-between" alignItems="center" wrap="nowrap">
                          <Grid item xs={10} md={11}>
                            <input
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
                          {activeDetailsBoxTab === 'Deposit' && <span>Wallet: {parsedWineBalance} WINE</span>}
                          {activeDetailsBoxTab === 'Withdraw' && <span>Staked: {parsedStakedBalance} WINE</span>}
                        </div>
                      </div>
                      {!canWithdraw && withdrawTimer && withdrawTimer.from && withdrawTimer.to && (
                        <Box mt={2}>
                          <div className="pending-rewards">
                            Withdraw possible in{' '}
                            <span className="withdraw-time-left">
                              <ProgressCountdown
                                hideBar={true}
                                base={withdrawTimer.from}
                                deadline={withdrawTimer.to}
                                description="Withdraw available in"
                              />
                            </span>
                          </div>
                        </Box>
                      )}
                    </div>
                  </div>
                  <Box>
                    <Grid container justifyContent="center">
                      {activeDetailsBoxTab === 'Deposit' && (
                        <>
                          {approveStatus !== ApprovalState.APPROVED ? (
                            <>
                              <Grid item xs={12}>
                                <button
                                  onClick={() => {
                                    setApproveLoading(true);
                                    approve();
                                  }}
                                  style={{
                                    borderTopLeftRadius: '0',
                                    borderTopRightRadius: '0',
                                  }}
                                  className="primary-button"
                                  title="Approve"
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
                              </Grid>
                            </>
                          ) : (
                            <>
                              <Grid item xs={12}>
                                <button
                                  disabled={Number(inputValue) === 0 || inputValue === ''}
                                  onClick={stake}
                                  className="primary-button"
                                  style={{
                                    borderTopLeftRadius: '0',
                                    borderTopRightRadius: '0',
                                  }}
                                  title="Deposit"
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
                              </Grid>
                            </>
                          )}
                        </>
                      )}
                      {activeDetailsBoxTab === 'Withdraw' && (
                        <>
                          <Grid item xs={12}>
                            {activeDetailsBoxTab === 'Withdraw' && (
                              <button
                                disabled={Number(inputValue) <= 0 || !canWithdraw}
                                onClick={withdraw}
                                style={{
                                  borderTopLeftRadius: '0',
                                  borderTopRightRadius: '0',
                                }}
                                className="secondary-button"
                                title="Withdraw"
                              >
                                {withdrawLoading ? (
                                  <span>
                                    <SyncLoader color="white" size={4} style={{marginRight: '10px'}} />
                                    WITHDRAWING
                                  </span>
                                ) : (
                                  <span>WITHDRAW</span>
                                )}
                              </button>
                            )}
                          </Grid>
                        </>
                      )}
                    </Grid>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Box className="lineDetailsBox">
                  <div className="line-details-inner">
                    <Box>
                      <div className="pending-rewards">PENDING REWARDS</div>
                    </Box>

                    <Box style={{textAlign: 'center'}} mt={2}>
                      <TokenSymbol symbol="GRAPE" width={60} height={60} />
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
                          {parsedEarnings} GRAPE
                        </Grid>
                        <Grid item className="rewardTokenValue">
                          <span className="lineValueDeposited">${earnedInDollars ? earnedInDollars : '0.00'}</span>
                        </Grid>
                      </Grid>
                    </Box>

                    {!canClaim && claimRewardTimer && claimRewardTimer.from && claimRewardTimer.to && (
                      <Box mt={2}>
                        <div className="pending-rewards">
                          Claim possible in
                          <span className="time-left">
                            <ProgressCountdown
                              hideBar={true}
                              base={claimRewardTimer.from}
                              deadline={claimRewardTimer.to}
                              description="Withdraw available in"
                            />
                          </span>
                        </div>
                      </Box>
                    )}
                  </div>
                  <Box>
                    <Grid container justifyContent="space-between">
                      <Grid item xs={6}>
                        <button
                          disabled={earnings.eq(0) || (!canClaim && !canWithdraw)}
                          style={{borderTopLeftRadius: '0', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}
                          className="secondary-button"
                          title="Claim & Withdraw"
                          onClick={() => {
                            setRedeemLoading(true);
                            onRedeem();
                          }}
                        >
                          {redeemLoading ? (
                            <span>
                              <SyncLoader color="white" size={4} style={{marginRight: '10px'}} />
                              CLAIMING & WITHDRAWING
                            </span>
                          ) : (
                            <span>CLAIM & WITHDRAW</span>
                          )}
                        </button>
                      </Grid>
                      <Grid item xs={6}>
                        <button
                          style={{borderTopLeftRadius: '0', borderTopRightRadius: '0', borderBottomLeftRadius: '0'}}
                          disabled={earnings.eq(0) || !canClaim}
                          className="primary-button"
                          title="Claim"
                          onClick={() => {
                            setClaimLoading(true);
                            onReward();
                          }}
                        >
                          {claimLoading ? (
                            <span>
                              <SyncLoader color="white" size={4} style={{marginRight: '10px'}} />
                              CLAIMING
                            </span>
                          ) : (
                            <span>CLAIM</span>
                          )}
                        </button>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default BoardroomCard;
