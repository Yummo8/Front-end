import React from 'react';

//Graveyard ecosystem logos
import grapeLogo from '../../assets/img/grape.png';
import xGrape from '../../assets/img/xgrape-small.png';
import wine from '../../assets/img/gshare.png';
import gbondLogo from '../../assets/img/gbond.png';
import mimLogo from '../../assets/img/mim.png';
import wavax from '../../assets/img/wavax.png';
import grapeWine from '../../assets/img/grape-wine.png';
import grapeMimLpLogo from '../../assets/img/grape-mim.png';
import wineMimLpLogo from '../../assets/img/gshare-mim.png';
import wamp from '../../assets/img/WAMP.png';
import hsharewine from '../../assets/img/hshare-wine.png';
import gnode from '../../assets/img/gnode.png';
import grapewlrs from '../../assets/img/grape-wlrs.png';
import winePops from '../../assets/img/wine-pops.png';
import vintage from '../../assets/img/vintage-token.png';
import solera from '../../assets/img/solera.png';
import xGrapeGrape from '../../assets/img/xGrapeGrape.png';
import goonbag from '../../assets/img/goonbag.png';
import glass from '../../assets/img/glass.png';
import decanter from '../../assets/img/decanter.png';
import goblet from '../../assets/img/goblet.png';
import vintners from '../../assets/img/vintners.png';
import nodes from '../../assets/img/gnode.png';
import vinium from '../../assets/img/vinium.png';

const logosBySymbol: {[title: string]: string} = {
  //Real tokens
  //=====================
  GRAPE: grapeLogo,
  XGRAPE: xGrape,
  WAVAX: wavax,
  WINE: wine,
  GBOND: gbondLogo,
  MIM: mimLogo,
  WAMP: wamp,
  HSHARE: wamp,
  GNODE: gnode,
  VINTAGE: vintage,
  sVintage: solera,
  SOLERA: solera,
  'GRAPE-MIM-LP': grapeMimLpLogo,
  'GRAPE-MIM-SW': grapeMimLpLogo,
  'GRAPE-WLRS-LP': grapewlrs,
  'GRAPE-WINE-LP': grapeWine,
  'WINE-MIM-LP': wineMimLpLogo,
  'HSHARE-WINE-LP': hsharewine,
  'WINE-POPS-LP': winePops,
  'GRAPE-XGRAPE-LP': xGrapeGrape,
  // NFTS
  GOONBAG: goonbag,
  GLASS: glass,
  DECANTER: decanter,
  GOBLET: goblet,
  NODE: nodes,
  VINTNERS: vintners,
  VINIUM: vinium,
};

type LogoProps = {
  symbol: string;
  width?: number;
  height?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({symbol, width, height}) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  if (!width) {
    width = 60;
  }
  if (!height) {
    height = 60;
  }

  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={width} height={height} />;
};

export default TokenSymbol;
