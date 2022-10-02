import {Container, useMediaQuery} from '@material-ui/core';
import useEagerConnect from '../../hooks/useEagerConnect';
import Menu, {MenuProps} from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';

import Footer from '../Footer';

import React, {useEffect, useMemo} from 'react';
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
import creamImg from '../../assets/img/cream.png';
import beefyImg from '../../assets/img/beefy.png';
import yieldwolfImg from '../../assets/img/yieldwolf.png';
import debankImg from '../../assets/img/debank.png';
import rebatesImg from '../../assets/img/rebates.png';
import winemaker from '../../assets/img/vintage-token.png';
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
import useVintagePrice from '../../hooks/useVintagePrice';
import useXGrapePrice from '../../hooks/useXGrapePrice';

import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import FeedIcon from '@mui/icons-material/Feed';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceWalletSharpIcon from '@mui/icons-material/AccountBalanceWalletSharp';
import LinkIcon from '@mui/icons-material/Link';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MapIcon from '@mui/icons-material/Map';
import StorefrontIcon from '@mui/icons-material/Storefront';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import pressIcon from '../../assets/img/barrel.png';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {ReactComponent as IconDiscord} from '../../assets/img/discord-plain.svg';
import ledgerIcon from '../../assets/img/ledger.png';
import AddBoxIcon from '@mui/icons-material/AddBox';
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
  background: 'linear-gradient(144deg, rgb(0, 0, 0) 10%, rgba(120, 19, 120, 0.9) 50%, rgba(50, 50, 50, 0.8))',
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
  const vintagePrice = useVintagePrice();
  const xGrapePrice = useXGrapePrice();

  const grapePrice = useMemo(() => (grapeStats ? Number(grapeStats.tokenInFtm).toFixed(3) : null), [grapeStats]);
  const winePrice = useMemo(() => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null), [bShareStats]);

  const cashStat = useCashPriceInEstimatedTWAP();
  // const twap = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);

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

  const [contractsOpen, setContractsOpen] = React.useState(false);
  const handleContractsClick = () => {
    if (!open) {
      handleDrawerOpen();
    }
    setContractsOpen(!contractsOpen);
  };

  const [tokensOpen, setTokensOpen] = React.useState(false);
  const handleTokensClick = () => {
    if (!open) {
      handleDrawerOpen();
    }
    setTokensOpen(!tokensOpen);
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

  const screenSM = useMediaQuery('(min-width:1050px)');

  // useEffect(() => {
  //   if (screenSM) {
  //     setOpen(true);
  //   }
  // }, [screenSM]);

  const changeBackground = (c: any) => {
    c.target.style.transform = 'scale(1.035)';
  };

  const resetBackground = (r: any) => {
    r.target.style.transform = 'scale(1,1)';
  };

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
                  <img src={grapeImg} alt="Grape" width={24} height={24} />
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
                  <img src={wineImg} alt="Wine" width={24} height={24} />
                  <span className="token-price">{winePrice ? '$' + winePrice : '--'}</span>
                </a>
              </div>
              <div className="price-item">
                <a
                  className="text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://xgrape.grapefinance.app/"
                >
                  <img src={xGrapeImg} alt="xGrape" width={21} height={21} />
                  <span className="token-price">{xGrapePrice ? '$' + xGrapePrice : '--'}</span>
                </a>
              </div>
              <div className="price-item">
                <a
                  className="text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.swapsicle.io/swap?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0x01Af64EF39AEB5612202AA07B3A3829f20c395fd#/"
                >
                  <img src={vintageImg} alt="Wine" width={24} height={24} />
                  <span className="token-price">{vintagePrice ? '$' + vintagePrice : '--'}</span>
                </a>
              </div>
              {/* <div className="price-item">
                <a
                  className="text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0x5541D83EFaD1f281571B343977648B75d95cdAC2"
                >
                  <img src={xGrapeImg} alt="xGrape" width={24} height={24} />
                  <span className="token-price">{xGrapePrice ? '$' + xGrapePrice : '--'}</span>
                </a>
              </div> */}
              {/* <div className="price-item">
                <img src={grapeMimImg} alt="TWAP" height={35} />
                <span className="token-price">{twap ? twap : '--'}/1.01</span>
              </div> */}
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
                    aria-haspopup="true"
                    aria-expanded={buyOpen ? 'true' : undefined}
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
                    <a
                      className="menu-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.swapsicle.io/swap?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0x01Af64EF39AEB5612202AA07B3A3829f20c395fd#/"
                    >
                      <MenuItem onClick={handleBuyClose} disableRipple>
                        Buy Vintage
                      </MenuItem>
                    </a>
                    <a
                      className="menu-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://nftrade.com/assets/avalanche/0xe26168f45030e1eb7477fa5f9a4a28d93c0658b4"
                    >
                      <MenuItem onClick={handleBuyClose} disableRipple>
                        Buy Vintners
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
              <a
                href="https://discord.gg/grapefinance"
                rel="noopener noreferrer"
                target="_blank"
                style={{color: '#fff'}}
              >
                <IconDiscord width={30} style={{fill: '#fff', height: '42px'}} />
              </a>{' '}
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
                marginTop: '-45px',
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
                style={{paddingLeft: '9px', paddingRight: '10px'}}
                onMouseOver={changeBackground}
                onMouseOut={resetBackground}
              />
            </Tooltip>
          </Link>

          <List>
            <Tooltip arrow followCursor title={open ? '' : 'Apps'} placement="top-start">
              <ListItemButton onClick={handleAppsClick}>
                <ListItemIcon
                  sx={{
                    color: 'white',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AppsIcon style={{fill: '#e647e6'}} />
                </ListItemIcon>
                <ListItemText primary="Apps" sx={{opacity: open ? 1 : 0}} />
                {open ? appsOpen ? <ExpandLess /> : <ExpandMore /> : null}
              </ListItemButton>
            </Tooltip>
            {open && (
              <Collapse in={appsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
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

                  <a
                    className="menu-item"
                    href="https://soda.grapefinance.app/"
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
                        <img src={sodaImg} alt="Grape Soda Press" height={30} />{' '}
                      </ListItemIcon>
                      <ListItemText primary="Grape Soda" />
                    </ListItemButton>
                  </a>

                  <ListItem
                    className="menu-item"
                    component={Link}
                    to="/vineyard"
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

                  <ListItem className="menu-item" component={Link} to="/winery" disablePadding sx={{display: 'block'}}>
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

                  <ListItem className="menu-item" component={Link} to="/bond" disablePadding sx={{display: 'block'}}>
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

                  <ListItem className="menu-item" component={Link} to="/nodes" disablePadding sx={{display: 'block'}}>
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

                  <a
                    className="menu-item"
                    href="https://winepress.grapefinance.app/"
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
                        <img src={pressIcon} alt="WinePress" width={30} />{' '}
                      </ListItemIcon>
                      <ListItemText primary="Wine Press" />
                    </ListItemButton>
                  </a>

                  <ListItem className="menu-item" component={Link} to="/rebates" disablePadding sx={{display: 'block'}}>
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
                  </ListItem>

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
                </List>
              </Collapse>
            )}

            <Tooltip arrow followCursor title={open ? '' : 'Dashboard'} placement="top-start">
              <ListItem className="menu-item" component={Link} to="/dashboard" disablePadding sx={{display: 'block'}}>
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
                    <DashboardSharpIcon style={{fill: '#e647e6'}} />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" sx={{opacity: open ? 1 : 0}} />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          </List>

          <Divider color="#aaa" />

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
                  <SavingsIcon style={{fill: '#cd72f6'}} />
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
                  <AccountBalanceWalletSharpIcon style={{fill: '#cd72f6'}} />
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
            <Tooltip arrow followCursor title={open ? '' : 'Contracts'} placement="top-start">
              <ListItemButton onClick={handleContractsClick}>
                <ListItemIcon
                  sx={{
                    color: 'white',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <FeedIcon style={{fill: '#f1d1ff'}} />
                </ListItemIcon>
                <ListItemText primary="Contracts" sx={{opacity: open ? 1 : 0}} />
                {open ? contractsOpen ? <ExpandLess /> : <ExpandMore /> : null}
              </ListItemButton>
            </Tooltip>
            {open && (
              <Collapse in={contractsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0x3ce7bC78a7392197C569504970017B6Eb0d7A972"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Winery (Boardroom)" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0xb260547c37bC80fBD1a0D742Af71C2324151640c"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Treasury" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0x4cDE1deb1FD11FeC61b6e2d322c1520527992196"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Grape Node" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0xfCbD88AD9a9f33a227c307EC1478bCDeB0412EdB"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Grape-MIM SW Node" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0x153d78155d1d579F8CC56dD110aBf6343184cA55"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Grape-Wlrs Node" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0x2707ccc10D6C1ce49f72867aB5b85dE11e64979f"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="WinePress" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0x567971069EdCe50235c33FAb133e1EcdF838d3b3"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="WinePress (Lotto)" />
                    </ListItemButton>
                  </a>
                </List>
              </Collapse>
            )}
          </List>

          <List>
            <Tooltip arrow followCursor title={open ? '' : 'Tokens / LPs'} placement="top-start">
              <ListItemButton onClick={handleTokensClick}>
                <ListItemIcon
                  sx={{
                    color: 'white',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AddBoxIcon style={{fill: '#f1d1ff'}} />
                </ListItemIcon>
                <ListItemText primary="Tokens / LPs" sx={{opacity: open ? 1 : 0}} />
                {open ? tokensOpen ? <ExpandLess /> : <ExpandMore /> : null}
              </ListItemButton>
            </Tooltip>
            {open && (
              <Collapse in={tokensOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0x130966628846BFd36ff31a822705796e8cb8C18D"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="MIM" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0x5541D83EFaD1f281571B343977648B75d95cdAC2"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Grape" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0xC55036B5348CfB45a932481744645985010d3A44"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Wine" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0x01Af64EF39AEB5612202AA07B3A3829f20c395fd"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Vintage" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0xf016e69F2c08a0b743a7d815d1059318DCa8Fc0e"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="sVintage" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0x9076C15D7b2297723ecEAC17419D506AE320CbF1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Grape-MIM SW" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0xb382247667fe8ca5327ca1fa4835ae77a9907bc8"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Grape-MIM TJ" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0xA3F24b18608606079a0317Cbe6Cda54CED931420"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Grape-Wlrs LP" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0xd3d477Df7f63A2623464Ff5Be6746981FdeD026F"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Grape-Wine LP" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0x00cB5b42684DA62909665d8151fF80D1567722c3"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Wine-MIM LP" />
                    </ListItemButton>
                  </a>
                  <a
                    className="menu-item"
                    href="https://snowtrace.io/address/0xE9b9FA7f3A047d77655A9Ff8df5055f1d7826A6e"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: 0, display: 'block'}}
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemText primary="Wine-POPs LP" />
                    </ListItemButton>
                  </a>
                </List>
              </Collapse>
            )}
          </List>

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
                  <LinkIcon style={{fill: '#f1d1ff'}} />
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
                  <Tooltip
                    arrow
                    followCursor
                    title={open ? '' : 'Buy NFTs with Avax (NFT Trade)'}
                    placement="top-start"
                  >
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
                        <ListItemText primary="Buy NFTs on NFT Trade" />
                      </ListItemButton>
                    </a>
                  </Tooltip>
                  <Tooltip
                    arrow
                    followCursor
                    title={open ? '' : 'Buy NFTs with Avax (NFT Trade)'}
                    placement="top-start"
                  >
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
                          <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Buy NFTs on Alpha Shares" />
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
                  {/*<Tooltip arrow followCursor title={open ? '' : 'Dashboard'} placement="top-start">
                    <a
                      className="menu-item"
                      href="https://stats.grapefinance.app/"
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
                          <QueryStatsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                      </ListItemButton>
                    </a>
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
                  </Tooltip>*/}
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
          </List>
        </Drawer>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <DrawerHeader />
          <Container maxWidth="lg" style={{paddingBottom: '5rem'}}>
            {children}
          </Container>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Page;
