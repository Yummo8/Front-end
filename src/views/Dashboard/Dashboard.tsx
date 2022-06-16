import React from 'react';
import { useWallet } from 'use-wallet';
import { createGlobalStyle } from 'styled-components';
import moment from 'moment';
import { Box, Grid, Button, Typography } from '@material-ui/core'
import ProgressCountdown from './ProgressCountdown';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import FarmCard from './FarmCard';
import GrapeNodeCard from './GrapeNodeCard';
import BoardroomCard from './BoardroomCard';
import HomeImage from '../../assets/img/background.jpg';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import useBanks from '../../hooks/useBanks';
import useBank from '../../hooks/useBank';
import useHarvestAll from '../../hooks/useHarvestAll';

const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background: radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%);
  }
`;

const Dashboard = () => {
    const { account } = useWallet();
    const {to} = useTreasuryAllocationTimes();
    const [banks] = useBanks();
    const vineyardPools = banks.filter((bank) => !bank.finished && bank.sectionInUI === 2);
    const nodePools = [useBank('GrapeNode'), useBank('LPNode'), useBank('WineNode'), useBank('LPWlrsNode')];
    const { onReward } = useHarvestAll(vineyardPools);
    return (
        <Page>
            <BackgroundImage />
            {!!account ? (
                <>
                    <h1 style={{ fontSize: '80px', textAlign: 'center' }}>Dashboard</h1>
                
                    <h1 style={{ fontSize: '60px', textAlign: 'center', marginTop: '50px' }}>Vineyard</h1>
                    <Box mt={3} display="flex" justifyContent="center">
                        <Button className='shinyButton' onClick={onReward}>Claim All From Vineyard</Button>
                    </Box>
                    <Box mt={3}>
                        <Grid container justifyContent="center" spacing={3}>
                            {vineyardPools
                                .map((bank) => (
                                    <React.Fragment key={bank.name}>
                                        <FarmCard bank={bank} />
                                    </React.Fragment>
                                ))}
                        </Grid>
                    </Box>
                    <h1 style={{ fontSize: '60px', textAlign: 'center', marginTop: '50px' }}>Nodes</h1>
                    <Box mt={3}>
                        <Grid container justifyContent="center" spacing={3}>
                            {nodePools
                                .map((bank) => (
                                    <React.Fragment key={bank.name}>
                                        <GrapeNodeCard bank={bank} />
                                    </React.Fragment>
                                ))}
                        </Grid>
                    </Box>
                    <h1 style={{ fontSize: '60px', textAlign: 'center', marginTop: '50px' }}>Winery</h1>
                    <Typography style={{textTransform: 'uppercase', color: '#fff', textAlign: 'center'}}>
                    <b>Next Epoch: </b><ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
                    </Typography>
                    <Box mt={3}>
                    
                        <Grid container justifyContent="center" spacing={3}>
                            <BoardroomCard />
                        </Grid>
                    </Box>
                </>
            ) : (
                <UnlockWallet />
            )}
        </Page>
    );
};

export default Dashboard;
