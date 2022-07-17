import React from 'react';
import {withStyles, Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Page from '../../components/Page';
import {useGetEventQuery} from '../../services/event';
import {convertTime} from '../../utils/convertTime';
import {createGlobalStyle} from 'styled-components';
import { Typography } from '@material-ui/core';

const BackgroundImage = createGlobalStyle`
  body {
    background-size: cover !important;
    background: linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);
    ;
  }
`;

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: 'transparent',
      color: '#fff',
      fontSize: 20,
      fontWeight: 500,
    },
    body: {
      fontSize: 20,
      color: '#fff',
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const LeaderBoard = () => {
  const classes = useStyles();

  const {data: eventResponse} = useGetEventQuery();

  const [leaderBoardEntire, setLeaderBoardEntire] = React.useState([]);
  const [leaderBoardLastWeek, setLeaderBoardLastWeek] = React.useState([]);
  React.useEffect(() => {
    if (eventResponse && eventResponse.result) {
      setLeaderBoardEntire(eventResponse.data.leaderBoard);
      setLeaderBoardLastWeek(eventResponse.data.leaderBoardLastWeek);
    }
  }, [eventResponse]);

  return (
    <Page>
      <BackgroundImage />
      <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
        Node Leaderboard
      </Typography>

      <Typography color="textSecondary" align="left" variant="h4">
        All Time
      </Typography>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Rank</StyledTableCell>
              <StyledTableCell>User</StyledTableCell>
              <StyledTableCell>Last Node Time</StyledTableCell>
              <StyledTableCell>Node Count</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderBoardEntire.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{row._id.substring(35)}</StyledTableCell>
                <StyledTableCell>{convertTime(row.timestamp)}</StyledTableCell>
                <StyledTableCell>{row.num}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      
      <Typography color="textSecondary" style={{textAlign: 'left', marginTop: '15px', marginBottom: '15px'}} align="left" variant="h4">
        Last Week
      </Typography>
      
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Rank</StyledTableCell>
              <StyledTableCell>User</StyledTableCell>
              <StyledTableCell>Last Node Time</StyledTableCell>
              <StyledTableCell>Node Count</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderBoardLastWeek.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{row._id.substring(35)}</StyledTableCell>
                <StyledTableCell>{convertTime(row.timestamp)}</StyledTableCell>
                <StyledTableCell>{row.num}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Page>
  );
};

export default LeaderBoard;
