import React, {useMemo, useEffect} from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

import ListItemLink from '../ListItemLink';
import useBombStats from '../../hooks/useBombStats';
import useBtcStats from '../../hooks/useBtcStats';
import useShareStats from '../../hooks/usebShareStats';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AccountButton from './AccountButton';

import bombLogo from '../../assets/img/logo1.png';
import {roundAndFormatNumber} from '../../0x';
import TokenSymbol from '../TokenSymbol';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    color: '#322f32',
    'background-color': 'rgba(255,255,255,0.0) !important',
    // borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '10px',
    marginBottom: '3rem',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    fontFamily: 'Rubik',
    fontSize: '0px',
    flexGrow: 1,
  },
  link: {
    textTransform: 'uppercase',
    color: '#322f32',
    fontSize: '18px',
    marginTop: '15px',
    margin: theme.spacing(10, 1, 1, 2),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  brandLink: {
    textDecoration: 'none',
    color: '#322f32',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Nav = () => {
  const matches = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  //const bombStats = useBombStats();
  //const btcStats = useBtcStats();
  //const shareStats = useShareStats();

  const [connected, setConnected] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //const btcPriceInDollars = useMemo(() => (bombStats ? Number(btcStats).toFixed(2) : null), [bombStats]);
  /*const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const sharePriceInDollars = useMemo(
    () => (bombStats ? Number(shareStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
*/
  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <>
            <Typography variant="h6" color="inherit" noWrap style={{flexGrow: '0'}} className={classes.toolbarTitle}>
              {/* <a className={ classes.brandLink } href="/">Bomb Money</a> */}
              <Link to="/" color="inherit" className={classes.brandLink}>
                <img alt="Grape Finance" src={bombLogo} height="60px" />
              </Link>
            </Typography>
            <Box style={{paddingLeft: '15px', paddingTop: '10px', fontSize: '1rem', flexGrow: '1'}}>
              <Link to="/" className={'navLink ' + classes.link}>
                Home
              </Link>
              
              <Link to="/farm" className={'navLink ' + classes.link}>
                Vineyard
              </Link>
              <Link to="/boardroom" className={'navLink ' + classes.link}>
                Winery
              </Link>
              <Link to="/bond" className={'navLink ' + classes.link}>
                Bond
              </Link>
              <Link to="/launchpad" className={'navLink ' + classes.link}>
                Launchpad
              </Link>
              <a href="https://yieldwolf.finance/avalanche" className={'navLink ' + classes.link} rel="noopener" target="_blank">
                Autocompound
              </a>
              
              <a href="https://grapefinance.gitbook.io/grape-finance-docs/" className={'navLink ' + classes.link} rel="noopener" target="_blank">
                Docs
              </a>
              
              
{/*
               <Link color="textPrimary" to="/sbs" className={classes.link}>
                SBS
              </Link>
              <Link color="textPrimary" to="/liquidity" className={classes.link}>
                Liquidity
              </Link>
              <Link color="textPrimary" to="/regulations" className={classes.link}>
                Regulations
              </Link> 
              <a href="https://app.gitbook.com/s/NUqRuqfjnQX78cGRsBTc/" className={'navLink ' + classes.link} rel="noopener" target="_blank">
                Docs
              </a>
                <a href="https://bomb.farm" className={'navLink ' + classes.link} rel="noopener" target="_blank">
                AutoVaults
              </a>*/}
            </Box>

            <Box
              style={{
                flexGrow: '0',
                paddingLeft: '15px',
                paddingTop: '5px',
                fontSize: '1rem',
                paddingRight: '15px',
                height: '30px',
                display: 'flex',
              }}
            >{/*}
              <div className="navTokenIcon bomb"></div>{' '}
              <div className="navTokenPrice">${roundAndFormatNumber(Number(bombPriceInDollars), 2)}</div>
              <div className="navTokenIcon bshare"></div>{' '}
              <div className="navTokenPrice">${roundAndFormatNumber(Number(sharePriceInDollars), 2)}</div>
            <div className="navTokenIcon btc"></div>{' '}*/}
              {/*<div className="navTokenPrice">${roundAndFormatNumber(Number(btcPriceInDollars), 2)}</div>*/}
            </Box>
            <AccountButton text="Connect" />
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>

            <img
              alt="bomb.money"
              src={bombLogo}
              style={{height: '40px', marginTop: '-10px', marginLeft: '10px', marginRight: '15px'}}
            />
            <AccountButton text="Connect" />
            <Drawer
                className={classes.drawer}
                onClose={handleDrawerClose}
              // onEscapeKeyDown={handleDrawerClose}
              // onBackdropClick={handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? (
                    <ChevronRightIcon htmlColor="white" />
                  ) : (
                    <ChevronLeftIcon htmlColor="white" />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem>
                  <AccountButton text="Connect" />
                </ListItem>
                <ListItemLink primary="Home" to="/" />
                <ListItemLink primary="Vineyard" to="/farm" />
                <ListItemLink primary="Winery" to="/boardroom" />
                <ListItemLink primary="Bond" to="/bond" />
                <ListItem button component="a" href="https://yieldwolf.finance/avalanche">
                  <ListItemText>Autocompound</ListItemText>
                  </ListItem>
                <ListItem button component="a" href="https://grapefinance.gitbook.io/grape-finance-docs/">
                  <ListItemText>Docs</ListItemText>
                  </ListItem>
                
                
                
                {/* <ListItemLink primary="SBS" to="/sbs" /> */}
                {/* <ListItemLink primary="Liquidity" to="/liquidity" /> */}
                {/* <ListItemLink primary="Regulations" to="/regulations" /> 
                <ListItem button component="a" href="#">
                  <ListItemText>Docs</ListItemText>
                  </ListItem>
                   <ListItem button component="a" href="https://bomb.farm">
                  <ListItemText>AutoVaults</ListItemText>
                  </ListItem>*/}
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
