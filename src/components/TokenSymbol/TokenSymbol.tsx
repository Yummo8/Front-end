import React from 'react';

//Graveyard ecosystem logos
import grapeLogo from '../../assets/img/grape.png';
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

const logosBySymbol: {[title: string]: string} = {
  //Real tokens
  //=====================
  GRAPE: grapeLogo,
  WAVAX: wavax,
  WINE: wine,
  GBOND: gbondLogo,
  MIM: mimLogo,
  WAMP: wamp,
  HSHARE: wamp,
  GNODE: gnode,
  'GRAPE-MIM-LP' : grapeMimLpLogo,
  'GRAPE-MIM-SW' : grapeMimLpLogo,
  'GRAPE-WLRS-LP' : grapewlrs,
  'GRAPE-WINE-LP' : grapeWine,
  'WINE-MIM-LP' : wineMimLpLogo,
  'HSHARE-WINE-LP' : hsharewine,
  'WINE-POPS-LP' : winePops,
  
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({symbol}) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  if(symbol === 'GRAPE-MIM-LP' || symbol === 'WINE-MIM-LP' || symbol === 'GRAPE-WINE-LP' || symbol === 'HSHARE-WINE-LP' || symbol === 'GRAPE-MIM-SW' || symbol === 'GRAPE-WLRS-LP' || symbol === 'WINE-POPS-LP'){
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={95} height={60} />;
  }else if(symbol === 'MIM' || symbol === 'WAVAX' || symbol === 'WAMP'){
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={65} height={65} />;
  }else{
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={55} height={68} />;
  }
    
};

export default TokenSymbol;
