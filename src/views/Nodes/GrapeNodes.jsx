import React, {useState, useMemo} from 'react';
import {Link} from 'react-router-dom';

import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Page from '../../components/Page';
import GrapeNode from '../GrapeNode';
import useBank from '../../hooks/useBank';
import NodesInfoCard from '../../components/NodesInfoCard';
import AirdropRewardModal from '../../views/Home/AirdropRewardModal';
import useGrapeStats from '../../hooks/useGrapeStats';
import useWineStats from '../../hooks/useWineStats';
import useLpStats from '../../hooks/useLpStats';
import useNodeRewardPoolStats from '../../hooks/useNodesRewardBalance';
import {roundAndFormatNumber} from '../../0x';
import {Grid, Typography, Button, Card, CardContent, CircularProgress} from '@material-ui/core';

const GrapeNodes = () => {
  const {path} = useRouteMatch();

  //const grapeNodeBank = useBank('GrapeNode');
  const grapeNodeV2Bank = useBank('GrapeNodeV2');
  const grapeMimSWBank = useBank('LPNode');
  const grapeWrlsBank = useBank('LPWlrsNode');

  const [rewardModelOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const grapeStats = useGrapeStats();
  const grapePriceInDollars = useMemo(
    () => (grapeStats ? Number(grapeStats.priceInDollars).toFixed(2) : null),
    [grapeStats],
  );

  const bShareStats = useWineStats();
  const winePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );

  const grapeMimSWStats = useLpStats('GRAPE-MIM-SW');
  const grapeMimSWPriceInDollars = useMemo(
    () => (grapeMimSWStats ? Number(grapeMimSWStats.priceOfOne).toFixed(2) : null),
    [grapeMimSWStats],
  );

  const nodeRewardPoolStats = useNodeRewardPoolStats();

  return (
    <Page>
      <AirdropRewardModal
        open={rewardModelOpen}
        handleClose={handleCloseModal}
        grapePrice={grapePriceInDollars}
        winePrice={winePriceInDollars}
        grapeMimSWPrice={grapeMimSWPriceInDollars}
        totalGrapes={nodeRewardPoolStats?.grapes}
        totalWine={nodeRewardPoolStats?.wines}
        totalGrapeMimSW={nodeRewardPoolStats?.grapeMimSWs}
      />
      <Switch>
        <Route exact path={path}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography color="textPrimary" variant="h3" gutterBottom>
                Nodes (Locked Staking)
              </Typography>
              <Typography color="textPrimary" variant="h6" gutterBottom style={{marginBottom: '20px'}}>
                Buy Nodes and lock supply to earn daily returns
                <br />
                Earn monthly airdrops by buying Nodes and NFTs
              </Typography>
              <div>
                <Button component={Link} to={`/leaderboard`} className="shinyButton">
                  Go to Leaderboard
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography color="textPrimary" variant="h3" align="right" gutterBottom>
                NFT REWARD POOL
              </Typography>
              <Typography color="textPrimary" variant="h6" align="right" gutterBottom style={{marginBottom: '20px'}}>
                {nodeRewardPoolStats?.grapes} Grape (
                {nodeRewardPoolStats != null ? (
                  `≈$${roundAndFormatNumber(nodeRewardPoolStats?.grapes * grapePriceInDollars, 0)}`
                ) : (
                  <CircularProgress size={22} color="inherit" />
                )}
                )
                <br />
                {nodeRewardPoolStats?.wines} Wine ({' '}
                {nodeRewardPoolStats != null ? (
                  `≈$${roundAndFormatNumber(nodeRewardPoolStats?.wines * winePriceInDollars, 0)}`
                ) : (
                  <CircularProgress size={22} color="inherit" />
                )}
                )
              </Typography>
              <div style={{textAlign: 'right'}}>
                <Button onClick={handleOpenModal} className="shinyButton">
                  Estimate my Rewards
                </Button>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={3} style={{marginTop: '30px'}}>
            <NodesInfoCard bank={grapeNodeV2Bank} />
            <NodesInfoCard bank={grapeMimSWBank} />
            <NodesInfoCard bank={grapeWrlsBank} />
          </Grid>
        </Route>
        <Route path={`${path}/:bankId`}>
          <GrapeNode />
        </Route>
      </Switch>
    </Page>
  );
};

export default GrapeNodes;
