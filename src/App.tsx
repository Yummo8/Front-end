import React, {Suspense, lazy} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ThemeProvider as TP} from '@material-ui/core/styles';
import {ThemeProvider as TP1} from 'styled-components';
import {UseWalletProvider} from 'use-wallet';
import usePromptNetwork from './hooks/useNetworkPrompt';
import BanksProvider from './contexts/Banks';
import GrapeFinanceProvider from './contexts/GrapeFinanceProvider';
import ModalsProvider from './contexts/Modals';
import {store} from './state';
import theme from './theme';
import newTheme from './newTheme';
import config from './config';
import Updaters from './state/Updaters';
import Loader from './components/Loader';
import Popups from './components/Popups';
import {RefreshContextProvider} from './contexts/RefreshContext';

const Home = lazy(() => import('./views/Home'));
const Dashboard = lazy(() => import('./views/Dashboard'));
const Vineyard = lazy(() => import('./views/Vineyard'));
const Winery = lazy(() => import('./views/Winery'));
const Bond = lazy(() => import('./views/Bond'));
const Launchpad = lazy(() => import('./views/Launchpad'));
const Roadmap = lazy(() => import('./views/Roadmap'));
const Raffle = lazy(() => import('./views/Raffle'));
const Strategies = lazy(() => import('./views/Strategies'));
const Help = lazy(() => import('./views/Help'));
const Nodes = lazy(() => import('./views/Nodes'));
const Leaderboard = lazy(() => import('./views/Leaderboard'));
const Stats = lazy(() => import('./views/Stats'));
const NFTRaffle = lazy(() => import('./views/NFTRaffle'));
const Rebates = lazy(() => import('./views/Rebates'));

const NoMatch = () => (
  <h3 style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
    URL Not Found. <a href="/">Go back home.</a>
  </h3>
);

const App: React.FC = () => {
  // Clear localStorage for mobile users
  if (typeof localStorage.version_app === 'undefined' || localStorage.version_app !== '1.1') {
    localStorage.clear();
    localStorage.setItem('connectorId', '');
    localStorage.setItem('version_app', '1.1');
  }

  usePromptNetwork();

  return (
    <Providers>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/vineyard">
              <Vineyard />
            </Route>
            <Route path="/winery">
              <Winery />
            </Route>
            <Route path="/nodes">
              <Nodes />
            </Route>
            <Route path="/rebates">
              <Rebates />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/bond">
              <Bond />
            </Route>
            <Route path="/launchpad">
              <Launchpad />
            </Route>
            <Route path="/roadmap">
              <Roadmap />
            </Route>
            <Route path="/strategies">
              <Strategies />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/raffle">
              <Raffle />
            </Route>
            <Route path="/nftraffle">
              <NFTRaffle />
            </Route>
            <Route path="/help">
              <Help />
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Providers>
  );
};

const Providers: React.FC = ({children}) => {
  return (
    <TP1 theme={theme}>
      <TP theme={newTheme}>
        <UseWalletProvider
          chainId={config.chainId}
          connectors={{
            walletconnect: {rpcUrl: config.defaultProvider},
            walletlink: {
              url: config.defaultProvider,
              appName: 'grapefinance.app',
              appLogoUrl: '#',
            },
          }}
        >
          <Provider store={store}>
            <Updaters />
            <RefreshContextProvider>
              <GrapeFinanceProvider>
                  <ModalsProvider>
                    <BanksProvider>
                      <>
                        <Popups />
                        {children}
                      </>
                    </BanksProvider>
                  </ModalsProvider>
             </GrapeFinanceProvider>
            </RefreshContextProvider>
          </Provider>
        </UseWalletProvider>
      </TP>
    </TP1>
  );
};

export default App;
