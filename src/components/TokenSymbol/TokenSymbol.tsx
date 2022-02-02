import React from 'react';

//Graveyard ecosystem logos
import bombLogo from '../../assets/img/grape.png';
import tShareLogo from '../../assets/img/gshare.png';
import bombLogoPNG from '../../assets/img/grape.png';
import tShareLogoPNG from '../../assets/img/gshare.png';
import tBondLogo from '../../assets/img/gbond.png';
import mimLogo from '../../assets/img/mim.png';
import wavax from '../../assets/img/wavax.png';
import grapeWine from '../../assets/img/grape-wine.png';
import bombFtmLpLogo from '../../assets/img/grape-mim.png';
import bshareFtmLpLogo from '../../assets/img/gshare-mim.png';
import wamp from '../../assets/img/WAMP.png';
import bnbLogo from '../../assets/img/bnb.png';
import btcLogo from '../../assets/img/BCTB-icon.png';

const logosBySymbol: {[title: string]: string} = {
  //Real tokens
  //=====================
  BOMB: bombLogo,
  BOMBPNG: bombLogoPNG,
  WAVAX: wavax,
  BSHAREPNG: tShareLogoPNG,
  GRAPE: bombLogo,
  BSHARE: tShareLogo,
  BBOND: tBondLogo,
  GBOND: tBondLogo,
  WBNB: bnbLogo,
  BOO: bnbLogo,
  SHIBA: bnbLogo,
  ZOO: bnbLogo,
  CAKE: bnbLogo,
  SUSD: bnbLogo,
  SBTC: btcLogo,
  MIM: mimLogo,
  BTCB: btcLogo,
  BTC: btcLogo,
  SVL: bnbLogo,
  WINE: tShareLogoPNG,
  WAMP: wamp,
  'BOMB-BNB-LP': bombFtmLpLogo,
  'BOMB-BTCB-LP': bombFtmLpLogo,
  'BSHARE-BNB-LP': bshareFtmLpLogo,
  'BSHARE-BNB-APELP': bshareFtmLpLogo,
  'BOMB-BTCB-APELP': bombFtmLpLogo,
  'GRAPE-MIM-LP' : bombFtmLpLogo,
  'GRAPE-WINE-LP' : grapeWine,
  'WINE-MIM-LP' : bshareFtmLpLogo,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({symbol}) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  if(symbol === 'GRAPE-MIM-LP' || symbol === 'BSHARE-BNB-LP' || symbol === 'BOMB-BTCB-LP' || symbol === 'WINE-MIM-LP' || symbol === 'GRAPE-WINE-LP'){
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={95} height={60} />;
  }else if(symbol === 'MIM' || symbol === 'WAVAX' || symbol === 'WAMP'){
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={65} height={65} />;
  }else{
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={55} height={68} />;
  }
    
};

export default TokenSymbol;
