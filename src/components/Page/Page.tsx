import {Container, useMediaQuery, Grid} from '@material-ui/core';
import useEagerConnect from '../../hooks/useEagerConnect';
import Tooltip from '@mui/material/Tooltip';
import {ReactComponent as IconDiscord} from '../../assets/img/discord-plain.svg';

import {ReactComponent as IconTwitter} from '../../assets/img/twitter.svg';

import Footer from '../Footer';

import React from 'react';
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import {Link} from 'react-router-dom';
import AccountButton from './AccountButton';

import soleraIcon from '../../assets/img/solera.png';
import grapeLogo from '../../assets/img/logo1.png';
import coinsImg from '../../assets/img/casinocoins.png';
import fantomHouseImg from '../../assets/img/houseflip.png';
import grapeImg from '../../assets/img/grape.png';
import xGrapeImg from '../../assets/img/xgrape-small.png';
import sodaImg from '../../assets/img/soda.png';
import nodesImg from '../../assets/img/gnode.png';
import bondImg from '../../assets/img/gbond.png';
import wineImg from '../../assets/img/gshare.png';
import vintageImg from '../../assets/img/vintage-token.png';
import magikImg from '../../assets/img/magik.png';
import beefyImg from '../../assets/img/beefy.png';
import yieldwolfImg from '../../assets/img/yieldwolf.png';
import debankImg from '../../assets/img/debank.png';
import rebatesImg from '../../assets/img/rebates.png';
import winemaker from '../../assets/img/vintage-token.png';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import vinium from '../../assets/img/vinium.png';
import pressimg from '../../assets/img/press.png';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Collapse from '@mui/material/Collapse';

import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FeedIcon from '@mui/icons-material/Feed';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceWalletSharpIcon from '@mui/icons-material/AccountBalanceWalletSharp';
import LinkIcon from '@mui/icons-material/Link';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MapIcon from '@mui/icons-material/Map';
import StorefrontIcon from '@mui/icons-material/Storefront';
import YouTubeIcon from '@mui/icons-material/YouTube';
import pressIcon from '../../assets/img/barrel.png';
import ledgerIcon from '../../assets/img/ledger.png';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PriceItems from './PriceItems';
import TokenSymbol from '../TokenSymbol';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  overflow: 'hidden',
  overflowY: 'auto',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  marginTop: '25px',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  color: '#322f32 !important',
  background: 'linear-gradient(144deg, rgb(59,17, 59) 10%, rgba(120, 19, 120, 0.9) 50%, rgba(50, 50, 50, 0.8))',
  boxShadow: '50px 4px 26px -18px rgba(0,0,0,0.99) !important',
  backdropFilter: 'blur(4px)',
  borderRadius: '0 !important',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(({theme, open}) => ({
  width: drawerWidth,
  overflow: 'hidden',
  height: '100%',
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const Page: React.FC = ({children}) => {
  useEagerConnect();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [appsOpen, setAppsOpen] = React.useState(false);
  const handleAppsClick = () => {
    if (!open) {
      handleDrawerOpen();
    }
    setAppsOpen(!appsOpen);
  };

  const [vaultsOpen, setVaultsOpen] = React.useState(false);
  const handleVaultsClick = () => {
    if (!open) {
      handleDrawerOpen();
    }
    setVaultsOpen(!vaultsOpen);
  };

  const [walletsOpen, setWalletsOpen] = React.useState(false);
  const handleWalletsClick = () => {
    if (!open) {
      handleDrawerOpen();
    }
    setWalletsOpen(!walletsOpen);
  };

  // const [tokensOpen, setTokensOpen] = React.useState(false);
  // const handleTokensClick = () => {
  //   if (!open) {
  //     handleDrawerOpen();
  //   }
  //   setTokensOpen(!tokensOpen);
  // };

  const [usefullLinksOpen, setUsefulllinksOpen] = React.useState(false);
  const handleUsefullLinksClick = () => {
    if (!open) {
      handleDrawerOpen();
    }
    setUsefulllinksOpen(!usefullLinksOpen);
  };

  const [buyOpen, setBuyOpen] = React.useState(false);
  const handleBuyClick = () => {
    if (!open) {
      handleDrawerOpen();
    }
    setBuyOpen(!buyOpen);
  };

  const [buyNFTsOpen, setBuyNFTsOpen] = React.useState(false);
  const handleBuyNFTsClick = () => {
    if (!open) {
      handleDrawerOpen();
    }
    setBuyNFTsOpen(!buyNFTsOpen);
  };

  const screenMD = useMediaQuery('(min-width:1050px)');
  const screen800 = useMediaQuery('(min-width:800px)');

  return (
    <div style={{position: 'relative', minHeight: '100vh'}}>
      <Box sx={{display: 'flex'}}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            {!screen800 && (
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: '0 !important',
                  ...(open && {display: 'none'}),
                }}
              >
                <MenuIcon
                  sx={{
                    color: 'white',
                    fill: 'white',
                  }}
                />
              </IconButton>
            )}
            <Link to="/" color="inherit">
              <img alt="Grape Finance" src={grapeLogo} width={!screen800 ? 150 : 220} style={{paddingTop: '5px'}} />
            </Link>
            {screen800 && (
              <div style={{paddingLeft: '15px'}}>
                <PriceItems />
              </div>
            )}
            <Box
              style={{
                flexGrow: '1',
                display: 'flex',
              }}
            ></Box>

            <Box
              style={{
                display: 'flex',
                gridGap: '20px',
              }}
            >
              {screenMD && (
                <div>
                  <div className="animated-underline" style={{height: '40px', lineHeight: '40px'}}>
                    <a
                      href="https://grape-finance.gitbook.io/grape-finance-docs/"
                      target="_blank"
                      rel="noreferrer noopener"
                      style={{textDecoration: 'none', color: 'inherit'}}
                    >
                      <Grid container alignItems="center" justifyContent="center" spacing={1}>
                        <Grid item>
                          <ImportContactsIcon style={{verticalAlign: 'text-bottom'}} />
                        </Grid>
                        <Grid item>Docs</Grid>
                      </Grid>
                    </a>
                  </div>
                </div>
              )}
              <AccountButton text="Connect" />
            </Box>
          </Toolbar>
          {!screen800 && (
            <div style={{paddingLeft: '15px', paddingRight: '15px', paddingBottom: '5px'}}>
              <PriceItems />
            </div>
          )}
        </AppBar>
        <Drawer
          onMouseEnter={handleDrawerOpen}
          onMouseLeave={handleDrawerClose}
          variant="permanent"
          open={open}
          style={{
            color: '#322f32 !important',
            backgroundColor: '#fff !important',
            boxShadow: 'none !important',
            borderRadius: '0 !important',
          }}
        >
          <DrawerHeader>
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                marginTop: '-45px',
                color: 'white',
                fill: 'white',
                ...(!open && {display: 'none'}),
              }}
            >
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Grid container direction="column" justifyContent="space-between">
            <Grid item>
              <List>
              <Tooltip arrow followCursor title={open ? '' : 'Dashboard'} placement="top-start">
                  <ListItem
                    className="menu-item"
                    component={Link}
                    to="/dashboard"
                    disablePadding
                    sx={{display: 'block'}}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: 'white',
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <AttachMoneyIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dashboard" sx={{opacity: open ? 1 : 0}} />
                    </ListItemButton>
                  </ListItem>
                </Tooltip>
                <Tooltip arrow followCursor title={open ? '' : 'DeFi Products'} placement="top-start">
                  <ListItemButton onClick={handleAppsClick}>
                    <ListItemIcon
                      sx={{
                        color: 'white',
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <AppsIcon />
                    </ListItemIcon>
                    <ListItemText primary="DeFi Products" sx={{opacity: open ? 1 : 0}} />
                    {open ? appsOpen ? <ExpandLess /> : <ExpandMore /> : null}
                  </ListItemButton>
                </Tooltip>     
                {open && (
                  <Collapse in={appsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <a
                        className="menu-item"
                        href="https://main.vinium.finance/#/markets"
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img src={vinium} alt="Vinium" height={23} />{' '}
                          </ListItemIcon>
                          <ListItemText primary="Vinium" />
                        </ListItemButton>
                      </a>
                      <a
                        className="menu-item"
                        href="https://winemaker.grapefinance.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img src={winemaker} alt="winemaker" height={30} />{' '}
                          </ListItemIcon>
                          <ListItemText primary="Wine Maker" />
                        </ListItemButton>
                      </a>
            
                      <ListItem
                        className="menu-item"
                        component={Link}
                        to="/dashboard#farms"
                        disablePadding
                        sx={{display: 'block'}}
                      >
                        <ListItemButton
                          sx={{
                            pl: 4,
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img alt="grape" height={30} src={grapeImg} />
                          </ListItemIcon>
                          <ListItemText primary="Vineyard" sx={{opacity: open ? 1 : 0}} />
                        </ListItemButton>
                      </ListItem>

                      <ListItem
                        className="menu-item"
                        component={Link}
                        to="/dashboard#winery"
                        disablePadding
                        sx={{display: 'block'}}
                      >
                        <ListItemButton
                          sx={{
                            pl: 4,
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img alt="Wine" height={30} src={wineImg} />
                          </ListItemIcon>
                          <ListItemText primary="Winery" sx={{opacity: open ? 1 : 0}} />
                        </ListItemButton>
                      </ListItem>
                      <ListItem
                        className="menu-item"
                        component={Link}
                        to="/dashboard#presses"
                        disablePadding
                        sx={{display: 'block'}}
                      >
                        <ListItemButton
                          sx={{
                            pl: 4,
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img alt="grape" height={30} src={sodaImg} />
                          </ListItemIcon>
                          <ListItemText primary="Soda Press" sx={{opacity: open ? 1 : 0}} />
                        </ListItemButton>
                      </ListItem>
                      <ListItem
                        className="menu-item"
                        component={Link}
                        to="/dashboard#presses"
                        disablePadding
                        sx={{display: 'block'}}
                      >
                        <ListItemButton
                          sx={{
                            pl: 4,
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img alt="grape" height={30} src={soleraIcon} />
                          </ListItemIcon>
                          <ListItemText primary="Solera Press" sx={{opacity: open ? 1 : 0}} />
                        </ListItemButton>
                      </ListItem>
                      
                      <ListItem
                        className="menu-item"
                        component={Link}
                        to="/dashboard#presses"
                        disablePadding
                        sx={{display: 'block'}}
                      >
                        <ListItemButton
                          sx={{
                            pl: 4,
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img alt="grape" height={30} src={pressIcon} />
                          </ListItemIcon>
                          <ListItemText primary="WinePress" sx={{opacity: open ? 1 : 0}} />
                        </ListItemButton>
                      </ListItem>
                      <a
                        className="menu-item"
                        href="https://xgrape.grapefinance.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{padding: 0, display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img src={xGrapeImg} alt="xGrape" width={30} />{' '}
                          </ListItemIcon>
                          <ListItemText primary="Mint xGrape" />
                        </ListItemButton>
                      </a>

                      {/*<ListItem
                        className="menu-item"
                        component={Link}
                        to="/dashboard#nodes"
                        disablePadding
                        sx={{display: 'block'}}
                      >
                        <ListItemButton
                          sx={{
                            pl: 4,
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img alt="Nodes" height={30} src={nodesImg} />
                          </ListItemIcon>
                          <ListItemText primary="Nodes" sx={{opacity: open ? 1 : 0}} />
                        </ListItemButton>
                          </ListItem>

                      <ListItem
                        className="menu-item"
                        component={Link}
                        to="/rebates"
                        disablePadding
                        sx={{display: 'block'}}
                      >
                        <ListItemButton
                          sx={{
                            pl: 4,
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img alt="Rebates" height={30} src={rebatesImg} />
                          </ListItemIcon>
                          <ListItemText primary="Peg Health Campaign" sx={{opacity: open ? 1 : 0}} />
                        </ListItemButton>
                      </ListItem>*/}
                      <a
                        className="menu-item"
                        href="https://casino.grapefinance.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img src={coinsImg} alt="Grape Casino" height={30} />{' '}
                          </ListItemIcon>
                          <ListItemText primary="Grape Casino" />
                        </ListItemButton>
                      </a>

                      <a
                        className="menu-item"
                        href="https://avax.fantom.house/grapeflip"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img src={fantomHouseImg} alt="Fantom House" height={30} />{' '}
                          </ListItemIcon>
                          <ListItemText primary="Fantom House" />
                        </ListItemButton>
                      </a>
                      <ListItem
                        className="menu-item"
                        component={Link}
                        to="/bond"
                        disablePadding
                        sx={{display: 'block'}}
                      >
                        <ListItemButton
                          sx={{
                            pl: 4,
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img alt="bonds" height={30} src={bondImg} />
                          </ListItemIcon>
                          <ListItemText primary="Bonds" sx={{opacity: open ? 1 : 0}} />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Collapse>
                )}
              </List>

              <Divider color="#aaa" />

              <List>
                <Tooltip arrow followCursor title={open ? '' : 'Buy Tokens'} placement="top-start">
                  <ListItemButton onClick={handleBuyClick}>
                    <ListItemIcon
                      sx={{
                        color: 'white',
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Buy Tokens" sx={{opacity: open ? 1 : 0}} />
                    {open ? buyOpen ? <ExpandLess /> : <ExpandMore /> : null}
                  </ListItemButton>
                </Tooltip>
                {open && (
                  <Collapse in={buyOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <a
                        className="menu-item"
                        href="https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0x5541D83EFaD1f281571B343977648B75d95cdAC2"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{padding: 0, display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img src={grapeImg} alt="Grape" height={22} />{' '}
                          </ListItemIcon>
                          <ListItemText primary="GRAPE" />
                        </ListItemButton>
                      </a>
                      <a
                        className="menu-item"
                        href="https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0xC55036B5348CfB45a932481744645985010d3A44"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{padding: 0, display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img src={wineImg} alt="Wine" height={22} />{' '}
                          </ListItemIcon>
                          <ListItemText primary="WINE" />
                        </ListItemButton>
                      </a>
                      <a
                        className="menu-item"
                        href="https://xgrape.grapefinance.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{padding: 0, display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img src={xGrapeImg} alt="xGRAPE" height={22} />{' '}
                          </ListItemIcon>
                          <ListItemText primary="xGRAPE" />
                        </ListItemButton>
                      </a>
                      <a
                        className="menu-item"
                        href="https://www.swapsicle.io/swap?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0x01Af64EF39AEB5612202AA07B3A3829f20c395fd#/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{padding: 0, display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img src={vintageImg} alt="Vintage" height={22} />{' '}
                          </ListItemIcon>
                          <ListItemText primary="VINTAGE" />
                        </ListItemButton>
                      </a>
                      <a
                        className="menu-item"
                        href="https://winemaker.grapefinance.app/app/Cellar"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{padding: 0, display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <img src={soleraIcon} alt="sVintage" height={22} />{' '}
                          </ListItemIcon>
                          <ListItemText primary="sVINTAGE (in Cellar)" />
                        </ListItemButton>
                      </a>
                    </List>
                  </Collapse>
                )}
              </List>

              <List>
                <Tooltip arrow followCursor title={open ? '' : 'Buy NFTs'} placement="top-start">
                  <ListItemButton onClick={handleBuyNFTsClick}>
                    <ListItemIcon
                      sx={{
                        color: 'white',
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <ImageSearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="Buy NFTs" sx={{opacity: open ? 1 : 0}} />
                    {open ? buyNFTsOpen ? <ExpandLess /> : <ExpandMore /> : null}
                  </ListItemButton>
                </Tooltip>
                {open && (
                  <Collapse in={buyNFTsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <a
                        className="menu-item"
                        href="https://hexagon.market/collections/0x99fec0ca5cd461884e2e6e8484c219bbfb91e2df?sort=-highestPrice"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{padding: 0, display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <TokenSymbol symbol="GOBLET" height={25} width={25} />
                          </ListItemIcon>
                          <ListItemText primary="Winery (Grape)" />
                        </ListItemButton>
                      </a>
                      <a
                        className="menu-item"
                        href="https://hexagon.market/collections/0xe26168f45030e1eb7477fa5f9a4a28d93c0658b4"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{padding: 0, display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <TokenSymbol symbol="VINTNERS" height={25} width={25} />
                          </ListItemIcon>
                          <ListItemText primary="Vintners (Grape)" />
                        </ListItemButton>
                      </a>

                      <a
                        className="menu-item"
                        href="https://nftrade.com/assets/avalanche/0x99fec0ca5cd461884e2e6e8484c219bbfb91e2df"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{padding: 0, display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <TokenSymbol symbol="GOBLET" height={25} width={25} />
                          </ListItemIcon>
                          <ListItemText primary="Winery (NFTrade)" />
                        </ListItemButton>
                      </a>
                      <a
                        className="menu-item"
                        href="https://nftrade.com/collection/the-vintners-v1?search=&sort=min_listed_desc&contractAddress=0xe26168f45030e1eb7477fa5f9a4a28d93c0658b4&chainName="
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{padding: 0, display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <TokenSymbol symbol="VINTNERS" height={25} width={25} />
                          </ListItemIcon>
                          <ListItemText primary="Vintners (NFTrade)" />
                        </ListItemButton>
                      </a>
                      <a
                        className="menu-item"
                        href="https://www.alphashares.io/explore/0x99fec0ca5cd461884e2e6e8484c219bbfb91e2df"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{padding: 0, display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <TokenSymbol symbol="GOBLET" height={25} width={25} />
                          </ListItemIcon>
                          <ListItemText primary="Winery (AlphaShares)" />
                        </ListItemButton>
                      </a>
                      <a
                        className="menu-item"
                        href="https://www.alphashares.io/explore/0xe26168f45030e1eb7477fa5f9a4a28d93c0658b4"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{padding: 0, display: 'block'}}
                      >
                        <ListItemButton sx={{pl: 4}}>
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              minWidth: 0,
                              mr: open ? 3 : 'auto',
                              justifyContent: 'center',
                            }}
                          >
                            <TokenSymbol symbol="VINTNERS" height={25} width={25} />
                          </ListItemIcon>
                          <ListItemText primary="Vintners (AlphaShares)" />
                        </ListItemButton>
                      </a>
                    </List>
                  </Collapse>
                )}
              </List>

              {/*<List>
                <Tooltip arrow followCursor title={open ? '' : 'AC Vaults'} placement="top-start">
                  <ListItemButton onClick={handleVaultsClick}>
                    <ListItemIcon
                      sx={{
                        color: 'white',
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <SavingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="AC Vaults" sx={{opacity: open ? 1 : 0}} />
                    {open ? vaultsOpen ? <ExpandLess /> : <ExpandMore /> : null}
                  </ListItemButton>
                </Tooltip>
                {open && (
                  <Collapse in={vaultsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Tooltip arrow followCursor title={open ? '' : 'Magik'} placement="top-start">
                        <a
                          className="menu-item"
                          href="https://magik.farm/#/avax"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{padding: 0, display: 'block'}}
                        >
                          <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon
                              sx={{
                                color: 'white',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              <img src={magikImg} alt="Magik" height={30} />{' '}
                            </ListItemIcon>
                            <ListItemText primary="Magik" />
                          </ListItemButton>
                        </a>
                      </Tooltip>

                      <Tooltip arrow followCursor title={open ? '' : 'Beefy'} placement="top-start">
                        <a
                          className="menu-item"
                          href="https://app.beefy.finance/#/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{padding: 0, display: 'block'}}
                        >
                          <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon
                              sx={{
                                color: 'white',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              <img src={beefyImg} alt="Beefy" height={30} />{' '}
                            </ListItemIcon>
                            <ListItemText primary="Beefy" />
                          </ListItemButton>
                        </a>
                      </Tooltip>
                      <Tooltip arrow followCursor title={open ? '' : 'Yield Wolf'} placement="top-start">
                        <a
                          className="menu-item"
                          href="https://yieldwolf.finance/avalanche"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{padding: 0, display: 'block'}}
                        >
                          <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon
                              sx={{
                                color: 'white',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              <img src={yieldwolfImg} alt="YieldWolf" height={30} />{' '}
                            </ListItemIcon>
                            <ListItemText primary="Yield Wolf" />
                          </ListItemButton>
                        </a>
                      </Tooltip>
                    </List>
                  </Collapse>
                )}
              </List>*/}

              <List>
                <Tooltip arrow followCursor title={open ? '' : 'Grape Wallets'} placement="top-start">
                  <ListItemButton onClick={handleWalletsClick}>
                    <ListItemIcon
                      sx={{
                        color: 'white',
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <AccountBalanceWalletSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Grape Wallets" sx={{opacity: open ? 1 : 0}} />
                    {open ? walletsOpen ? <ExpandLess /> : <ExpandMore /> : null}
                  </ListItemButton>
                </Tooltip>
                {open && (
                  <Collapse in={walletsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Tooltip arrow followCursor title={open ? '' : 'Treasury'} placement="top-start">
                        <a
                          className="menu-item"
                          href="https://debank.com/profile/0xEB755b81A786832705a3c0658127216eD36fE898"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{padding: 0, display: 'block'}}
                        >
                          <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon
                              sx={{
                                color: 'white',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              <img src={debankImg} alt="Debank" height={22} />{' '}
                            </ListItemIcon>
                            <ListItemText primary="Treasury" />
                          </ListItemButton>
                        </a>
                      </Tooltip>
                      <Tooltip arrow followCursor title={open ? '' : 'DAO'} placement="top-start">
                        <a
                          className="menu-item"
                          href="https://debank.com/profile/0xf29fD03Df2Cb7F81d8Ae4d10A76f8b1C898786BD"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{padding: 0, display: 'block'}}
                        >
                          <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon
                              sx={{
                                color: 'white',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              <img src={debankImg} alt="Debank" height={22} />{' '}
                            </ListItemIcon>
                            <ListItemText primary="DAO" />
                          </ListItemButton>
                        </a>
                      </Tooltip>
                      {/*<Tooltip arrow followCursor title={open ? '' : 'Node Rewards'} placement="top-start">
                        <a
                          className="menu-item"
                          href="https://debank.com/profile/0xa3C4C965BA6aA9382a8Edd965D13CB495F8da6F5"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{padding: 0, display: 'block'}}
                        >
                          <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon
                              sx={{
                                color: 'white',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              <img src={debankImg} alt="Debank" height={22} />{' '}
                            </ListItemIcon>
                            <ListItemText primary="Node Rewards" />
                          </ListItemButton>
                        </a>
                        </Tooltip>*/}
                    </List>
                  </Collapse>
                )}
              </List>

              <Divider color="#aaa" />

              <List>
                <Tooltip arrow followCursor title={open ? '' : 'Other Links'} placement="top-start">
                  <ListItemButton onClick={handleUsefullLinksClick}>
                    <ListItemIcon
                      sx={{
                        color: 'white',
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <LinkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Other Links" sx={{opacity: open ? 1 : 0}} />
                    {open ? usefullLinksOpen ? <ExpandLess /> : <ExpandMore /> : null}
                  </ListItemButton>
                </Tooltip>
                {open && (
                  <Collapse in={usefullLinksOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Tooltip arrow followCursor title={open ? '' : 'Docs'} placement="top-start">
                        <a
                          className="menu-item"
                          href="https://grapefinance.gitbook.io/grape-finance-docs/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{padding: 0, display: 'block'}}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? 'initial' : 'center',
                              pl: 4,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                color: 'white',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              <MenuBookIcon />
                            </ListItemIcon>
                            <ListItemText primary="Docs" sx={{opacity: open ? 1 : 0}} />
                          </ListItemButton>
                        </a>
                      </Tooltip>
                      <Tooltip arrow followCursor title={open ? '' : 'Contracts'} placement="top-start">
                        <a
                          className="menu-item"
                          href="https://app.gitbook.com/s/NUqRuqfjnQX78cGRsBTc/protocol/contracts"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{padding: 0, display: 'block'}}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? 'initial' : 'center',
                              pl: 4,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                color: 'white',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              <FeedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contracts" sx={{opacity: open ? 1 : 0}} />
                          </ListItemButton>
                        </a>
                      </Tooltip>
                      <Tooltip arrow followCursor title={open ? '' : 'Education'} placement="top-start">
                        <a
                          className="menu-item"
                          href="https://www.youtube.com/channel/UCaArraLhGOOzR1vZKr4y4Tw"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{padding: 0, display: 'block'}}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? 'initial' : 'center',
                              pl: 4,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                color: 'white',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              <YouTubeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Education" sx={{opacity: open ? 1 : 0}} />
                          </ListItemButton>
                        </a>
                      </Tooltip>
                      <Tooltip arrow followCursor title={open ? '' : 'Buy Ledger'} placement="top-start">
                        <a
                          className="menu-item"
                          href="https://shop.ledger.com/?r=ba80c2f11e62"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{padding: 0, display: 'block'}}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? 'initial' : 'center',
                              pl: 4,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                color: 'white',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              <img src={ledgerIcon} alt="Buy Ledger" width={24} height={24} />
                            </ListItemIcon>
                            <ListItemText primary="Buy Ledger" sx={{opacity: open ? 1 : 0}} />
                          </ListItemButton>
                        </a>
                      </Tooltip>

                      {/*<Tooltip arrow followCursor title={open ? '' : 'Roadmap'} placement="top-start">
                        <ListItem
                          className="menu-item"
                          button
                          component={Link}
                          to="/roadmap"
                          disablePadding
                          sx={{display: 'block'}}
                        >
                          <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon
                              sx={{
                                color: 'white',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              <MapIcon />
                            </ListItemIcon>
                            <ListItemText primary="Roadmap" />
                          </ListItemButton>
                        </ListItem>
                      </Tooltip>
                      <Tooltip arrow followCursor title={open ? '' : 'Merch'} placement="top-start">
                        <a
                          className="menu-item"
                          href="https://shop.grapefinance.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{padding: 0, display: 'block'}}
                        >
                          <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon
                              sx={{
                                color: 'white',
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                              }}
                            >
                              <StorefrontIcon />
                            </ListItemIcon>
                            <ListItemText primary="Merch" />
                          </ListItemButton>
                        </a>
                            </Tooltip>*/}
                    </List>
                  </Collapse>
                )}
              </List>
            </Grid>
            {open && (
              <Grid item style={{marginTop: '50px'}}>
                <Grid container spacing={2} justifyContent={'center'} alignItems="center">
                  <Grid item>
                    <a href="https://discord.gg/grapefinance" rel="noopener noreferrer" target="_blank">
                      <IconDiscord style={{fill: '#fff', width: '50px', transform: 'scale(0.6)'}} />
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://www.youtube.com/channel/UCaArraLhGOOzR1vZKr4y4Tw"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <YouTubeIcon style={{fill: 'white', width: '50px', transform: 'scale(1.5)'}} />
                    </a>
                  </Grid>
                  <Grid item>
                    {' '}
                    <a href="https://twitter.com/grape_finance" rel="noopener noreferrer" target="_blank">
                      <IconTwitter style={{fill: '#fff', width: '50px', transform: 'scale(1.0)'}} />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Drawer>
        <Box component="main" sx={{flexGrow: 1}}>
          <DrawerHeader />
          <Container maxWidth="lg" style={{paddingBottom: '30px'}}>
            <div
              style={{
                marginTop: screenMD ? '20px' : '40px',
              }}
            >
              {children}
            </div>
            <div style={{marginTop: '50px'}}>
              <Footer />
            </div>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Page;
