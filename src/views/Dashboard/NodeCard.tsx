//@ts-nocheck
import React, {useEffect, useMemo, useState} from 'react';
import {Box, Grid, Accordion, AccordionDetails, AccordionSummary, useMediaQuery} from '@material-ui/core';
import useEarnings from '../../hooks/useEarnings';
import useHarvest from '../../hooks/useHarvest';
import {getDisplayBalance, getFullDisplayBalance} from '../../utils/formatBalance';
import useTokenBalance from '../../hooks/useTokenBalance';
import useStake from '../../hooks/useStake';
import useWithdraw from '../../hooks/useWithdraw';
import {Bank} from '../../grape-finance';
import useStatsForPool from '../../hooks/useStatsForPool';
import TokenSymbol from '../../components/TokenSymbol';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useGrapeStats from '../../hooks/useGrapeStats';
import useApprove, {ApprovalState} from '../../hooks/useApprove';
import useDailyDrip from '../../hooks/useDailyDrip';
import useNodes from '../../hooks/useNodes';
import useWallet from 'use-wallet';
import useUserDetails from '../../hooks/useUserDetails';
import useMaxPayout from '../../hooks/useMaxPayout';
import useTotalNodes from '../../hooks/useTotalNodes';
import {useGetMultiplierForNode} from '../../utils/constants';
import useLpStatsBTC from '../../hooks/useLpStatsBTC';
import useNodePrice from '../../hooks/useNodePrice';
import useCompound from '../../hooks/useCompound';
import useGrapeNodeClaimFee from '../../hooks/useGrapeNodeClaimFee';
import {subscribe, unsubscribe} from '../../state/txEvent';
import {SyncLoader} from 'react-spinners';
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';
import {styled} from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import useModal from '../../hooks/useModal';
import ClaimModal from '../GrapeNode/components/ClaimModal';
import { TokenStat } from '../../grape-finance/types';

interface FarmCardProps {
  bank: Bank;
  grapeStats: TokenStat;
  account: string;
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

const NodeCard: React.FC<FarmCardProps> = ({bank, grapeStats, account, activesOnly}) => {
  useEffect(() => {
    subscribe('failedTx', () => {
      setClaimLoading(false);
      setCompoundLoading(false);
      setDepositingLoading(false);
      setApproveLoading(false);
    });

    subscribe('successTx', () => {
      setCompoundLoading(false);
      setClaimLoading(false);
      setDepositingLoading(false);
      setApproveLoading(false);
    });

    return () => {
      unsubscribe('failedTx');
      unsubscribe('successTx');
    };
  }, []);

  const widthUnder600 = useMediaQuery('(max-width:600px)');
  const poolStats = useStatsForPool(bank);

  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [claimLoading, setClaimLoading] = useState(false);
  const [depositingLoading, setDepositingLoading] = useState(false);
  const [approveLoading, setApproveLoading] = useState(false);
  const [compoundLoading, setCompoundLoading] = useState(false);

  const dailyRewards = useDailyDrip(bank.contract, bank.sectionInUI, account);
  const nodes = useNodes(bank.contract, bank.sectionInUI, account);
  const userDetails = useUserDetails(bank.contract, bank.sectionInUI, account);
  const maxPayout = useMaxPayout(bank?.contract, bank?.sectionInUI, account);
  const total = useTotalNodes(bank?.contract, bank?.sectionInUI);
  const tokenBalance = useTokenBalance(bank.depositToken);
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const lpTokenStats = useLpStatsBTC(bank.depositTokenName);
  const nodePrice = useNodePrice(bank.contract, bank.poolId, bank.sectionInUI);
  const claimFee = useGrapeNodeClaimFee();

  const {approveStatus, approve} = useApprove(bank.depositToken, bank.address);

  const ticketRewards = useGetMultiplierForNode(bank.earnTokenName);

  const parsedDailyRewards = useMemo(() => (dailyRewards ? Number(dailyRewards) / 1e18 : null), [dailyRewards]);
  const parsedTotalClaimed = useMemo(
    () => (userDetails ? (userDetails as any).total_claims / 1e18 : null),
    [userDetails],
  );
  const parsedMaxPayout = useMemo(() => (maxPayout ? Number(maxPayout) / 1e18 : null), [maxPayout]);

  const parsedNodePrice = useMemo(() => (nodePrice ? Number(nodePrice) / 1e18 : null), [nodePrice]);
  const computedUserNode = useMemo(() => {
    if (nodes.length > 0) {
      return Number(nodes[0]);
    } else {
      return Number(nodes);
    }
  }, [nodes]);

  const dailyAPR = useMemo(() => {
    if (
      bank.contract === 'GrapeNodeV2' &&
      dailyRewards != null &&
      userDetails != null &&
      userDetails.length > 0 &&
      computedUserNode != null
    ) {
      if (computedUserNode > 0) {
        return ((Number(dailyRewards) / (Number(userDetails[0]) - Number(userDetails[4]) * 50e18)) * 100).toFixed(2);
      }
      return poolStats?.dailyAPR;
    } else if (bank.contract !== 'GrapeNodeV2' && poolStats) {
      return poolStats.dailyAPR;
    }
    return null;
  }, [poolStats, dailyRewards, computedUserNode]);

  const parsedTotalNodes = useMemo(() => {
    if (total) {
      let nodeTotal;
      try {
        nodeTotal = Number(total[0]);
      } catch (e) {}
      if (!nodeTotal) {
        nodeTotal = Number(total);
      }
      return nodeTotal;
    }
  }, [total]);

  const parsedRewardTokenPriceInDollars = useMemo(
    () =>
      bank.earnTokenName === 'GRAPE-MIM-SW' || bank.earnTokenName === 'GRAPE-WLRS-LP'
        ? Number(lpTokenStats?.priceOfOne).toFixed(2)
        : Number(grapeStats?.priceInDollars).toFixed(2),
    [lpTokenStats, grapeStats],
  );

  // Used in UI
  const earnedInToken = Number(getDisplayBalance(earnings));
  const earnedInDollars = useMemo(() => {
    return parsedRewardTokenPriceInDollars && earnedInToken
      ? (Number(parsedRewardTokenPriceInDollars) * earnedInToken).toFixed(2)
      : null;
  }, [parsedRewardTokenPriceInDollars, earnedInToken]);
  const nodeCost = (Number(parsedRewardTokenPriceInDollars) * parsedNodePrice).toFixed(2);

  useEffect(() => {
    if (computedUserNode != null && earnedInToken != null && poolStats) {
      setLoading(false);
    }
  }, [computedUserNode, earnedInToken, poolStats]);

  // Custom Hooks functinos
  const {onReward} = useHarvest(bank);
  const {onStake} = useStake(bank);
  const {onCompound} = useCompound(bank);

  // Custom functions
  const expand = () => {
    setExpanded(!expanded);
  };

  const stake = () => {
    if (Number(inputValue) > 0) {
      setDepositingLoading(true);
      onStake(inputValue.toString());
    }
  };

  const maxClicked = () => {
    const nodeNumber = Number(tokenBalance) / 1e18 / (Number(nodePrice) / 1e18);
    setInputValue(Math.floor(nodeNumber).toString());
  };

  const updateInput = (event: any) => {
    setInputValue(event.target.value);
  };

  const getLiquidityLink = () => {
    if (bank.depositTokenName === 'GRAPE-MIM-SW') {
      return 'https://www.swapsicle.io/add/0x130966628846BFd36ff31a822705796e8cb8C18D/0x5541D83EFaD1f281571B343977648B75d95cdAC2';
    } else if (bank.depositTokenName === 'GRAPE-WLRS-LP') {
      return 'https://traderjoexyz.com/pool/0x395908aeb53d33a9b8ac35e148e9805d34a555d3/0x5541d83efad1f281571b343977648b75d95cdac2#/';
    }
  };

  const claimCallback = (action: string) => {
    if (action === 'Cancel') {
      onDismissClaim();
    }
    if (action === 'Claim') {
      setClaimLoading(true);
      onReward();
      onDismissClaim();
    }
  };

  const [onPresentClaim, onDismissClaim] = useModal(
    <ClaimModal bank={bank} tokenName={bank.earnTokenName} callback={claimCallback} />,
  );

  const claim = () => {
    if (bank.contract === 'GrapeNodeV2' && claimFee != null && claimFee > 0) {
      onPresentClaim();
    } else {
      setClaimLoading(true);
      onReward();
    }
  };

  return (
    <>
      {(activesOnly === false || (activesOnly === true && computedUserNode > 0)) && (
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
                    <div>{bank.depositTokenName}</div>
                    <div className="lineDescription">
                      Lock {bank.depositTokenName} to earn {bank.earnTokenName}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Grid container direction={widthUnder600 ? 'row' : 'column'} justifyContent="space-between">
                  <Grid item>
                    <div className="lineLabel">Your Nodes</div>
                  </Grid>
                  <Grid item>
                    <div className="lineValueDeposited">
                      <span style={{color: '#fcfcfc'}}>{computedUserNode}</span>
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
                      <span style={{color: '#fcfcfc'}}>{earnedInToken}</span>
                      <span style={{marginLeft: '5px', fontSize: '14px'}}>
                        (${earnedInDollars ? earnedInDollars : '0.00'})
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
                      {bank.contract === 'GrapeNodeV2' && (
                        <LightTooltip
                          arrow
                          placement="top"
                          enterDelay={0}
                          title="APR is dynamic in this Node. Deposits, compounds, claims impact your daily APR"
                        >
                          <InfoIcon style={{marginLeft: '3px', verticalAlign: 'text-bottom', fontSize: '17px'}} />
                        </LightTooltip>
                      )}
                    </div>
                  </Grid>
                  <Grid item>
                    <div className="lineValue">
                      {dailyAPR ? (Number(dailyAPR) * 365).toFixed(0) : '---'}% | {dailyAPR ? dailyAPR : '-.--'}%
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <Grid container direction={widthUnder600 ? 'row' : 'column'} justifyContent="space-between">
                  <Grid item>
                    <div className="lineLabel">TVL</div>
                  </Grid>
                  <Grid item>${poolStats?.TVL ? Number(poolStats?.TVL).toLocaleString('en-US') : '--.--'}</Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails style={{overflow: 'hidden'}}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                  <Grid item xs={6} md={4}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">Est. $ /day</div>
                        <div className="lineValue wallet-token-value">
                          ${(parsedDailyRewards * Number(parsedRewardTokenPriceInDollars)).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">Est. Reward /day</div>
                        <div className="lineValue">
                          {parsedDailyRewards.toFixed(2)} {bank.depositTokenName}{' '}
                        </div>
                      </div>
                    </div>
                  </Grid>{' '}
                  <Grid item xs={6} md={4}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">Airdrop Tickets</div>
                        <div className="lineValue">
                          {ticketRewards === 0 ? 'No tickets for this pool' : Number(computedUserNode) * ticketRewards}
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">You Claimed</div>
                        <div className="lineValue">{parsedTotalClaimed.toFixed(2)}</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">
                          {bank.contract === 'GrapeNodeV2' ? 'Remaining' : 'Max Possible Pay'}
                        </div>
                        <div className="lineValue">{parsedMaxPayout.toFixed(2)}</div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <div className="statBox">
                      <div className="statBoxInner">
                        <div className="lineLabel">Total Nodes</div>
                        <div className="lineValue">{parsedTotalNodes}</div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Box className="lineDetailsBox">
                      <div className="node-line-details-inner">
                        <Box>
                          <div className="pending-rewards">{bank.depositTokenName} NODE</div>
                        </Box>
                        <div className="node-inputDetailsBox">
                          <Box>
                            <div className="box-price-of-one color-secondary">
                              1 Node Costs {parsedNodePrice}&nbsp;
                              {bank.depositTokenName}, ${nodeCost}
                            </div>
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
                                Wallet: {getFullDisplayBalance(tokenBalance, 18)} {bank.depositTokenName}
                              </span>
                            </div>
                          </div>
                          <Box mt={2}>
                            {bank.contract === 'GrapeNodeV2' && earnedInToken ? (
                              <div style={{fontSize: '12px'}}>
                                Creating new nodes will claim/tax your pending rewards. It is recommended to compound
                                before creating new Grape Nodes.
                              </div>
                            ) : null}
                          </Box>
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
                            {approveStatus !== ApprovalState.APPROVED ? (
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
                                disabled={Number(inputValue) === 0 || inputValue === ''}
                                onClick={stake}
                                className="primary-button"
                                title="Create Nodes"
                                style={{borderTopLeftRadius: '0', borderTopRightRadius: '0'}}
                              >
                                {depositingLoading ? (
                                  <span>
                                    <SyncLoader color="white" size={4} style={{marginRight: '10px'}} />
                                    CREATING NODES
                                  </span>
                                ) : (
                                  <span>CREATE NODES</span>
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
                      <div className="node-line-details-inner">
                        <Box>
                          <div className="pending-rewards">PENDING {bank.earnTokenName} REWARDS</div>
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
                              {earnedInToken} {bank.earnTokenName}
                            </Grid>
                            <Grid item className="rewardTokenValue">
                              ${earnedInDollars ? earnedInDollars : '0.00'}
                            </Grid>
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
                              disabled={Number(earnings) < Number(nodePrice)}
                              style={{
                                borderTopLeftRadius: '0',
                                borderTopRightRadius: '0',
                                borderBottomRightRadius: '0',
                              }}
                            >
                              {compoundLoading ? (
                                <span>
                                  <SyncLoader color="white" size={4} style={{marginRight: '10px'}} />
                                  COMPOUNDING
                                </span>
                              ) : (
                                <span>COMPOUND {(Number(earnings) / Number(nodePrice)) | 0} Nodes</span>
                              )}
                            </button>
                          </Grid>
                          <Grid item xs={6}>
                            <button
                              style={{borderTopLeftRadius: '0', borderTopRightRadius: '0', borderBottomLeftRadius: '0'}}
                              className="secondary-button"
                              title="Claim"
                              onClick={() => {
                                claim();
                              }}
                              disabled={earnings.eq(0)}
                            >
                              {claimLoading ? (
                                <span>
                                  <SyncLoader color="white" size={4} style={{marginRight: '10px'}} />
                                  CLAIMING
                                </span>
                              ) : (
                                <span>
                                  {' '}
                                  CLAIM{' '}
                                  {bank.contract === 'GrapeNodeV2' && claimFee && (
                                    <span style={{marginLeft: '5px'}}>({claimFee}% fee)</span>
                                  )}
                                </span>
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
      )}
    </>
  );
};

export default NodeCard;
