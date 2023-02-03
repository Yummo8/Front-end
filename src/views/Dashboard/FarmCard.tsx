//@ts-nocheck
import React, {useEffect, useMemo, useState} from 'react';
import {Box, Grid, Accordion, AccordionDetails, AccordionSummary, useMediaQuery} from '@material-ui/core';
import useEarnings from '../../hooks/useEarnings';
import useHarvest from '../../hooks/useHarvest';
import {getDisplayBalance, getFullDisplayBalance} from '../../utils/formatBalance';
import useTokenBalance from '../../hooks/useTokenBalance';
import useStakedBalance from '../../hooks/useStakedBalance';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import useStake from '../../hooks/useStake';
import useZap from '../../hooks/useZap';
import useWithdraw from '../../hooks/useWithdraw';
import ZapModal from '../Bank/components/ZapModal';
import {Bank} from '../../grape-finance';
import useStatsForPool from '../../hooks/useStatsForPool';
import TokenSymbol from '../../components/TokenSymbol';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useModal from '../../hooks/useModal';
import useApprove, {ApprovalState} from '../../hooks/useApprove';
import {SyncLoader} from 'react-spinners';
import {subscribe, unsubscribe} from '../../state/txEvent';
import {TokenStat} from '../../grape-finance/types';

interface FarmCardProps {
  bank: Bank;
  grapeStats: TokenStat;
  tShareStats: TokenStat;
  activesOnly: boolean;
}

const FarmCard: React.FC<FarmCardProps> = ({bank, grapeStats, tShareStats, activesOnly}) => {
  const widthUnder600 = useMediaQuery('(max-width:600px)');
  const poolStats = useStatsForPool(bank);

  const [loading, setLoading] = useState(true);
  const [activeDetailsBoxTab, setActiveDetailsBoxTab] = useState('Deposit');
  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [claimLoading, setClaimLoading] = useState(false);
  const [depositingLoading, setDepositingLoading] = useState(false);
  const [approveLoading, setApproveLoading] = useState(false);
  const [withdrawLoading, setWithdrawLoading] = useState(false);

  const tokenBalance = useTokenBalance(bank.depositToken);
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const tokenStats = bank.earnTokenName === 'WINE' ? tShareStats : grapeStats;
  const stakedBalance = useStakedBalance(bank.contract, bank.poolId);
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);
  const rewardTokenpriceInDollars = useStakedTokenPriceInDollars(bank.earnTokenName, bank.earnToken);
  const {approveStatus, approve} = useApprove(bank.depositToken, bank.address);

  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );

  // Used in UI
  const earnedInToken = Number(getDisplayBalance(earnings));
  const earnedInDollars = (Number(tokenPriceInDollars) * earnedInToken).toFixed(2);
  const stakedInToken = Number(getDisplayBalance(stakedBalance, bank.depositToken.decimal));
  const stakedInDollars = (Number(stakedTokenPriceInDollars) * stakedInToken).toFixed(2);
  const rewardsPerDay = useMemo(
    () =>
      stakedInDollars && poolStats && rewardTokenpriceInDollars
        ? (Number(stakedInDollars) * (Number(poolStats.dailyAPR) / 100)) / Number(rewardTokenpriceInDollars)
        : null,
    [stakedInDollars, poolStats, rewardTokenpriceInDollars],
  );

  useEffect(() => {
    if (stakedInToken != null && earnedInToken != null && poolStats) {
      setLoading(false);
    }
  }, [stakedInToken, earnedInToken, poolStats]);

  useEffect(() => {
    subscribe('failedTx', () => {
      setClaimLoading(false);
      setWithdrawLoading(false);
      setDepositingLoading(false);
      setApproveLoading(false);
    });

    subscribe('successTx', () => {
      setWithdrawLoading(false);
      setClaimLoading(false);
      setDepositingLoading(false);
      setApproveLoading(false);
    });

    return () => {
      unsubscribe('failedTx');
      unsubscribe('successTx');
    };
  }, []);

  // Custom Hooks functinos
  const {onReward} = useHarvest(bank);
  const {onStake} = useStake(bank);
  const {onZap} = useZap(bank);
  const {onWithdraw} = useWithdraw(bank);

  // Custom functions
  const expand = () => {
    setExpanded(!expanded);
  };

  const withdraw = () => {
    if (Number(inputValue) > 0) {
      setWithdrawLoading(true);
      onWithdraw(inputValue.toString());
    }
  };

  const stake = () => {
    if (Number(inputValue) > 0) {
      setDepositingLoading(true);
      onStake(inputValue.toString());
    } else {
    }
  };

  const maxClicked = () => {
    if (activeDetailsBoxTab === 'Deposit') {
      setInputValue(getFullDisplayBalance(tokenBalance, 18));
    } else if (activeDetailsBoxTab === 'Withdraw') {
      setInputValue(stakedInToken.toString());
    }
  };

  const updateInput = (event: any) => {
    setInputValue(event.target.value);
  };

  const getLiquidityLink = () => {
    if (bank.depositTokenName === 'GRAPE-MIM-LP') {
      return 'https://traderjoexyz.com/avalanche/pool/v1/0x130966628846bfd36ff31a822705796e8cb8c18d/0x5541d83efad1f281571b343977648b75d95cdac2';
    } else if (bank.depositTokenName === 'GRAPE-MIM-SW') {
      return 'https://www.swapsicle.io/add/0x130966628846BFd36ff31a822705796e8cb8C18D/0x5541D83EFaD1f281571B343977648B75d95cdAC2';
    } else if (bank.depositTokenName.includes('WINE-MIM')) {
      return 'https://traderjoexyz.com/avalanche/pool/v1/0x130966628846bfd36ff31a822705796e8cb8c18d/0xc55036b5348cfb45a932481744645985010d3a44';
    } else if (bank.depositTokenName.includes('GRAPE-WINE')) {
      return 'https://traderjoexyz.com/avalanche/pool/v1/0x5541D83EFaD1f281571B343977648B75d95cdAC2/0xc55036b5348cfb45a932481744645985010d3a44';
    } else if (bank.depositTokenName.includes('WINE-POPS')) {
      return 'https://www.swapsicle.io/add/0xC55036B5348CfB45a932481744645985010d3A44/0x240248628B7B6850352764C5dFa50D1592A033A8';
    }
  };

  const [onPresentZap, onDissmissZap] = useModal(
    <ZapModal
      decimals={bank.depositToken.decimal}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onZap(zappingToken, tokenName, amount);
        onDissmissZap();
      }}
      LPtokenName={bank.depositTokenName}
    />,
  );

  const zap = () => {
    onPresentZap();
  };

  return (
    <>
      {(activesOnly === false || (activesOnly === true && stakedInToken > 0)) && (
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
                      Deposit {bank.depositTokenName} and earn {bank.earnTokenName}
                    </div>
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
                      <span style={{color: '#fcfcfc'}}>{stakedInToken}</span>
                      <span style={{marginLeft: '5px', fontSize: '14px'}}>(${stakedInDollars})</span>
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
                      <span style={{color: '#fcfcfc'}}>{earnedInToken}</span>
                      <span style={{marginLeft: '5px', fontSize: '14px'}}>(${earnedInDollars})</span>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <Grid container direction={widthUnder600 ? 'row' : 'column'} justifyContent="space-between">
                  <Grid item>
                    <div className="lineLabel">APR Yearly | Daily</div>
                  </Grid>
                  <Grid item>
                    <div className="lineValue">
                      {poolStats?.yearlyAPR ? Number(poolStats.yearlyAPR).toFixed(0) : '---'}% |{' '}
                      {poolStats?.dailyAPR ? poolStats?.dailyAPR : '-.--'}%
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
                        1 {bank.depositTokenName} = $
                        {stakedTokenPriceInDollars ? Number(stakedTokenPriceInDollars).toFixed(3) : '0.000'}
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
                          {activeDetailsBoxTab === 'Deposit' && (
                            <span>
                              Wallet: {getFullDisplayBalance(tokenBalance, 18)} {bank.depositTokenName}
                            </span>
                          )}
                          {activeDetailsBoxTab === 'Withdraw' && (
                            <span>
                              Staked: {stakedInToken} {bank.depositTokenName}
                            </span>
                          )}
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

                  <Box>
                    <Grid container justifyContent="center">
                      {activeDetailsBoxTab === 'Deposit' && (
                        <>
                          {(bank.depositTokenName.includes('LP') || bank.depositTokenName === 'GRAPE-MIM-SW') && (
                            <Grid item xs={6}>
                              <button
                                onClick={zap}
                                className="secondary-button"
                                disabled={Number(inputValue) === 0 || inputValue === '' || bank.closedForStaking == true}
                                title="Zap"
                                style={{
                                  borderTopLeftRadius: '0',
                                  borderTopRightRadius: '0',
                                  borderBottomRightRadius: '0',
                                }}
                              >
                                Zap
                              </button>
                            </Grid>
                          )}
                          {activeDetailsBoxTab === 'Deposit' && (
                            <Grid
                              item
                              xs={
                                bank.depositTokenName.includes('LP') || bank.depositTokenName === 'GRAPE-MIM-SW'
                                  ? 6
                                  : 12
                              }
                            >
                              {approveStatus !== ApprovalState.APPROVED ? (
                                <button
                                  style={{
                                    borderTopLeftRadius: '0',
                                    borderTopRightRadius: '0',
                                    borderBottomLeftRadius:
                                      bank.depositTokenName.includes('LP') || bank.depositTokenName === 'GRAPE-MIM-SW'
                                        ? '0'
                                        : '5px',
                                  }}
                                  onClick={() => {
                                    setApproveLoading(true);
                                    approve();
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
                                  )}{' '}
                                </button>
                              ) : (
                                <button
                                  style={{
                                    borderTopLeftRadius: '0',
                                    borderTopRightRadius: '0',
                                    borderBottomLeftRadius:
                                      bank.depositTokenName.includes('LP') || bank.depositTokenName === 'GRAPE-MIM-SW'
                                        ? '0'
                                        : '5px',
                                  }}
                                  disabled={Number(inputValue) === 0 || inputValue === '' || bank.closedForStaking == true}
                                  onClick={stake}
                                  className="primary-button"
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
                              )}
                            </Grid>
                          )}
                        </>
                      )}

                      {activeDetailsBoxTab === 'Withdraw' && (
                        <>
                          <Grid item xs={12}>
                            {activeDetailsBoxTab === 'Withdraw' && (
                              <button
                                style={{borderTopLeftRadius: '0', borderTopRightRadius: '0'}}
                                disabled={inputValue === ''}
                                onClick={withdraw}
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
                          ${earnedInDollars}
                        </Grid>
                      </Grid>
                    </Box>
                    <Box mt={2}>
                      <div className="rewards-per-day">
                        <span>
                          {rewardsPerDay?.toFixed(2)} {bank.earnTokenName} per day
                          <span style={{marginLeft: '5px', fontSize: '14px'}} className="rewardTokenValue">
                            ($
                            {(rewardsPerDay * Number(rewardTokenpriceInDollars)).toFixed(2)})
                          </span>
                        </span>
                      </div>
                    </Box>
                  </div>
                  <Box>
                    <Grid container justifyContent="center">
                      <Grid item xs={12}>
                        <button
                          className="secondary-button"
                          title="Claim"
                          onClick={() => {
                            setClaimLoading(true);
                            onReward();
                          }}
                          disabled={earnings.eq(0)}
                          style={{borderTopLeftRadius: '0', borderTopRightRadius: '0'}}
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
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
};

export default FarmCard;
