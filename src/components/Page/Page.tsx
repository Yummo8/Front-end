import {Container, useMediaQuery} from '@material-ui/core';
import useEagerConnect from '../../hooks/useEagerConnect';
import Menu, {MenuProps} from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';

import Footer from '../Footer';

import React, {useMemo} from 'react';
import {styled, alpha, useTheme, Theme, CSSObject} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import {Link} from 'react-router-dom';
import AccountButton from '../Nav/AccountButton';
import useCashPriceInEstimatedTWAP from '../../hooks/useCashPriceInEstimatedTWAP';

import grapeLogo from '../../assets/img/logo1.png';
import grapeImg from '../../assets/img/grape.png';
import grapeMimImg from '../../assets/img/twap.png';
import nodesImg from '../../assets/img/gnode.png';
import bondImg from '../../assets/img/gbond.png';
import wineImg from '../../assets/img/gshare.png';
import magikImg from '../../assets/img/magik.png';
import creamImg from '../../assets/img/cream.png';
import beefyImg from '../../assets/img/beefy.png';
import yieldwolfImg from '../../assets/img/yieldwolf.png';
import debankImg from '../../assets/img/debank.png';
import rebatesImg from '../../assets/img/rebates.png';
import lcImg from '../../assets/img/lc.png';
import dashboardImg from '../../assets/img/dashboard.png';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import useGrapeStats from '../../hooks/useGrapeStats';
import useWineStats from '../../hooks/useWineStats';

import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CasinoIcon from '@mui/icons-material/Casino';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StadiumIcon from '@mui/icons-material/Stadium';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LinkIcon from '@mui/icons-material/Link';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MapIcon from '@mui/icons-material/Map';
import StorefrontIcon from '@mui/icons-material/Storefront';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
    width: `calc(${theme.spacing(8)} + 1px)`,
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
  background: 'linear-gradient(90deg, rgba(144,17,105,1) 0%, rgba(95,17,144,1) 100%);',
  boxShadow: '50px 4px 26px -18px rgba(0,0,0,0.99) !important',
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

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({theme}) => ({
  '& .MuiPaper-root': {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    borderRadius: 6,
    backgroundColor: 'rgba(147, 9, 147, 0.9) !important',
    marginTop: theme.spacing(1),
    minWidth: 190,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

const Page: React.FC = ({children}) => {
  useEagerConnect();

  const grapeStats = useGrapeStats();
  const bShareStats = useWineStats();

  const grapePrice = useMemo(() => (grapeStats ? Number(grapeStats.tokenInFtm).toFixed(3) : null), [grapeStats]);
  const winePrice = useMemo(() => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null), [bShareStats]);

  const cashStat = useCashPriceInEstimatedTWAP();
  const twap = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [gamesOpen, setGamesOpen] = React.useState(false);
  const handleGamesClick = () => {
    if (!open) {
      handleDrawerOpen();
    }
    setGamesOpen(!gamesOpen);
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

  const [usefullLinksOpen, setUsefulllinksOpen] = React.useState(false);
  const handleUsefullLinksClick = () => {
    if (!open) {
      handleDrawerOpen();
    }
    setUsefulllinksOpen(!usefullLinksOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const buyOpen = Boolean(anchorEl);
  const handleBuyClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleBuyClose = () => {
    setAnchorEl(null);
  };

  const screenSM = useMediaQuery('(min-width:600px)');

  return (
    <div style={{position: 'relative', minHeight: '100vh'}}>
      <Box sx={{display: 'flex'}}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: !open ? '24px !important' : '0 !important',
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
            <div className="price-flex">
              <div className="price-item">
                <a
                  className="text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0x5541D83EFaD1f281571B343977648B75d95cdAC2"
                >
                  <img src={grapeImg} alt="Grape" width={35} height={35} />
                  <span className="token-price">{grapePrice ? '$' + grapePrice : '--'}</span>
                </a>
              </div>
              <div className="price-item">
                <a
                  className="text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0xC55036B5348CfB45a932481744645985010d3A44"
                >
                  <img src={wineImg} alt="Wine" width={35} height={35} />
                  <span className="token-price">{winePrice ? '$' + winePrice : '--'}</span>
                </a>
              </div>
              <div className="price-item">
                <img src={grapeMimImg} alt="TWAP" height={35} />
                <span className="token-price">{twap ? '$' + twap : '--'}</span>
              </div>
            </div>
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
              {screenSM && (
                <div>
                  <Button
                    className="shinyButton"
                    aria-controls={buyOpen ? 'customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={buyOpen ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleBuyClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Buy
                  </Button>
                  <StyledMenu
                    id="customized-menu"
                    MenuListProps={{
                      'aria-labelledby': 'customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={buyOpen}
                    onClose={handleBuyClose}
                  >
                    <a
                      className="menu-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0x5541D83EFaD1f281571B343977648B75d95cdAC2"
                    >
                      <MenuItem onClick={handleBuyClose} disableRipple>
                        Buy Grape
                      </MenuItem>
                    </a>
                    <a
                      className="menu-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0xC55036B5348CfB45a932481744645985010d3A44"
                    >
                      <MenuItem onClick={handleBuyClose} disableRipple>
                        Buy Wine
                      </MenuItem>
                    </a>
                    <a className="menu-item" href="/bond">
                      <MenuItem onClick={handleBuyClose} disableRipple>
                        Buy Gbond
                      </MenuItem>
                    </a>
                    <Divider sx={{my: 0.5}} />
                    <a
                      className="menu-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://nftrade.com/assets/avalanche/0x99fec0ca5cd461884e2e6e8484c219bbfb91e2df"
                    >
                      <MenuItem onClick={handleBuyClose} disableRipple>
                        Buy NFTs with Avax
                      </MenuItem>
                    </a>
                    <a
                      className="menu-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://hexagon.market/collections/0x99fec0ca5cd461884e2e6e8484c219bbfb91e2df?sort=-highestPrice"
                    >
                      <MenuItem onClick={handleBuyClose} disableRipple>
                        Buy NFTs with Grape
                      </MenuItem>
                    </a>
                  </StyledMenu>
                </div>
              )}
              <AccountButton text="Connect" />
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
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
                color: 'white',
                fill: 'white',
                ...(!open && {display: 'none'}),
              }}
            >
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Link to="/" color="inherit">
            <Tooltip arrow followCursor title={open ? '' : 'Home'} placement="top-start">
              <img
                alt="Grape Finance"
                src={grapeLogo}
                width={drawerWidth}
                style={{paddingLeft: '14px', paddingRight: '10px'}}
              />
            </Tooltip>
          </Link>

          <List>
            <Tooltip arrow followCursor title={open ? '' : 'LC Presale'} placement="top-start">
              <a
                href="https://grape.liquidcapital.finance/"
                target="_blank"
                className="menu-item"
                rel="noopener noreferrer"
                style={{padding: 0, display: 'block'}}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
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
                    <img src={lcImg} alt="LC" height={25} />
                  </ListItemIcon>

                  <ListItemText primary="LC Presale" sx={{opacity: open ? 1 : 0}} />
                </ListItemButton>
              </a>
            </Tooltip>
          </List>
          <Divider color="#aaa" />

          <List>
            <Tooltip arrow followCursor title={open ? '' : 'Dashboard'} placement="top-start">
              <ListItem
                className="menu-item"
                button
                component={Link}
                to="/dashboard"
                disablePadding
                sx={{display: 'block'}}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
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
                    <img src={dashboardImg} alt="LC" width={25} />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" sx={{opacity: open ? 1 : 0}} />
                </ListItemButton>
              </ListItem>
            </Tooltip>

            <Tooltip arrow followCursor title={open ? '' : 'VIneyard'} placement="top-start">
              <ListItem
                className="menu-item"
                button
                component={Link}
                to="/vineyard"
                disablePadding
                sx={{display: 'block'}}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
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
                    <img src={grapeImg} alt="Grape" height={30} />
                  </ListItemIcon>

                  <ListItemText primary="Vineyard" sx={{opacity: open ? 1 : 0}} />
                </ListItemButton>
              </ListItem>
            </Tooltip>
            <Tooltip arrow followCursor title={open ? '' : 'Winery'} placement="top-start">
              <ListItem
                className="menu-item"
                button
                component={Link}
                to="/winery"
                disablePadding
                sx={{display: 'block'}}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
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
                    <img src={wineImg} alt="Wine" height={30} />
                  </ListItemIcon>
                  <ListItemText primary="Winery" sx={{opacity: open ? 1 : 0}} />
                </ListItemButton>
              </ListItem>
            </Tooltip>
            <Tooltip arrow followCursor title={open ? '' : 'Nodes'} placement="top-start">
              <ListItem
                className="menu-item"
                button
                component={Link}
                to="/nodes"
                disablePadding
                sx={{display: 'block'}}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
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
                    <img src={nodesImg} alt="Nodes" height={28} width={28} />
                  </ListItemIcon>
                  <ListItemText primary="Nodes" sx={{opacity: open ? 1 : 0}} />
                </ListItemButton>
              </ListItem>
            </Tooltip>
            <Tooltip arrow followCursor title={open ? '' : 'Rebates'} placement="top-start">
              <ListItem
                className="menu-item"
                button
                component={Link}
                to="/rebates"
                disablePadding
                sx={{display: 'block'}}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
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
                    <img src={rebatesImg} alt="Rebates" height={30} />
                  </ListItemIcon>
                  <ListItemText primary="Rebates" sx={{opacity: open ? 1 : 0}} />
                </ListItemButton>
              </ListItem>
            </Tooltip>
            <Tooltip arrow followCursor title={open ? '' : 'Bonds'} placement="top-start">
              <ListItem className="menu-item" button component={Link} to="/bond" disablePadding sx={{display: 'block'}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
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
                    <img src={bondImg} alt="Wine" height={30} />{' '}
                  </ListItemIcon>
                  <ListItemText primary="Bonds" sx={{opacity: open ? 1 : 0}} />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          </List>

          <Divider color="#aaa" />

          <List>
            <Tooltip arrow followCursor title={open ? '' : 'Games'} placement="top-start">
              <ListItemButton onClick={handleGamesClick}>
                <ListItemIcon
                  sx={{
                    color: 'white',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <SportsEsportsIcon sx={{color: '#14b236'}} />
                </ListItemIcon>
                <ListItemText primary="Games" sx={{opacity: open ? 1 : 0}} />
                {open ? gamesOpen ? <ExpandLess /> : <ExpandMore /> : null}
              </ListItemButton>
            </Tooltip>
            {open && (
              <Collapse in={gamesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Tooltip arrow followCursor title={open ? '' : 'Slots'} placement="top-start">
                    <a
                      className="menu-item"
                      href="https://slot.grapefinance.app/"
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
                          <CasinoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Slots" />
                      </ListItemButton>
                    </a>
                  </Tooltip>
                  <Tooltip arrow followCursor title={open ? '' : 'Space Shooter'} placement="top-start">
                    <a
                      className="menu-item"
                      href="https://lianyou.io/burnforfun"
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
                          <RocketLaunchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Space Shooter" />
                      </ListItemButton>
                    </a>
                  </Tooltip>
                  <Tooltip arrow followCursor title={open ? '' : 'King Of Colosseum'} placement="top-start">
                    <a
                      className="menu-item"
                      href="https://koc.money/"
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
                          <StadiumIcon />
                        </ListItemIcon>
                        <ListItemText primary="King Of Colosseum" />
                      </ListItemButton>
                    </a>
                  </Tooltip>
                </List>
              </Collapse>
            )}
          </List>

          <List>
            <Tooltip arrow followCursor title={open ? '' : 'Vaults'} placement="top-start">
              <ListItemButton onClick={handleVaultsClick}>
                <ListItemIcon
                  sx={{
                    color: 'white',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <SavingsIcon sx={{color: '#d232d2'}} />
                </ListItemIcon>
                <ListItemText primary="Vaults" sx={{opacity: open ? 1 : 0}} />
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
                  <Tooltip arrow followCursor title={open ? '' : 'Ice Cream'} placement="top-start">
                    <a
                      className="menu-item"
                      href="https://froyo.farm/#/avax"
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
                          <img src={creamImg} alt="Froyo IceCream" height={30} />{' '}
                        </ListItemIcon>
                        <ListItemText primary="Ice Cream" />
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
          </List>

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
                  <AccountBalanceWalletIcon sx={{color: '#e88f38'}} />
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
                  <Tooltip arrow followCursor title={open ? '' : 'Node Rewards'} placement="top-start">
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
                  </Tooltip>
                </List>
              </Collapse>
            )}
          </List>

          <Divider color="#aaa" />
          <List>
            <Tooltip arrow followCursor title={open ? '' : 'Useful Links'} placement="top-start">
              <ListItemButton onClick={handleUsefullLinksClick}>
                <ListItemIcon
                  sx={{
                    color: 'white',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LinkIcon sx={{color: '#fff3d7'}} />
                </ListItemIcon>
                <ListItemText primary="Useful Links" sx={{opacity: open ? 1 : 0}} />
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
                      <ListItemButton sx={{pl: 4}}>
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
                        <ListItemText primary="Docs" />
                      </ListItemButton>
                    </a>
                  </Tooltip>
                  <Tooltip arrow followCursor title={open ? '' : 'Leaderboard'} placement="top-start">
                    <ListItem
                      className="menu-item"
                      button
                      component={Link}
                      to="/leaderboard"
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
                          <LeaderboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Leaderboard" />
                      </ListItemButton>
                    </ListItem>
                  </Tooltip>
                  <Tooltip arrow followCursor title={open ? '' : 'Buy NFTs with Avax'} placement="top-start">
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
                          <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Buy NFTs with Avax" />
                      </ListItemButton>
                    </a>
                  </Tooltip>
                  <Tooltip arrow followCursor title={open ? '' : 'Buy NFTs with Grape'} placement="top-start">
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
                          <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Buy NFTs with Grape" />
                      </ListItemButton>
                    </a>
                  </Tooltip>
                  <Tooltip arrow followCursor title={open ? '' : 'Strategies'} placement="top-start">
                    <ListItem
                      className="menu-item"
                      button
                      component={Link}
                      to="/strategies"
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
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Strategies" />
                      </ListItemButton>
                    </ListItem>
                  </Tooltip>
                  <Tooltip arrow followCursor title={open ? '' : 'Node Rewards'} placement="top-start">
                    <ListItem
                      className="menu-item"
                      button
                      component={Link}
                      to="/stats"
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
                          <QueryStatsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Stats" />
                      </ListItemButton>
                    </ListItem>
                  </Tooltip>
                  <Tooltip arrow followCursor title={open ? '' : 'Roadmap'} placement="top-start">
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
                  </Tooltip>
                  <Tooltip arrow followCursor title={open ? '' : 'Beginner Videos'} placement="top-start">
                    <ListItem
                      className="menu-item"
                      button
                      component={Link}
                      to="/help"
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
                          <YouTubeIcon sx={{color: 'red'}} />
                        </ListItemIcon>
                        <ListItemText primary="Beginner Videos" />
                      </ListItemButton>
                    </ListItem>
                  </Tooltip>
                </List>
              </Collapse>
            )}
          </List>
        </Drawer>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <DrawerHeader />
          <Container maxWidth="lg" style={{paddingBottom: '5rem'}}>
            {children}
          </Container>
          <Footer />
        </Box>
      </Box>
    </div>
  );
};

export default Page;
