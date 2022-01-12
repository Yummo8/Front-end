import React from 'react';

//Graveyard ecosystem logos
import bombLogo from '../../assets/img/grape.png';
import tShareLogo from '../../assets/img/gshare.png';
import bombLogoPNG from '../../assets/img/grape.png';
import tShareLogoPNG from '../../assets/img/gshare.png';
import tBondLogo from '../../assets/img/gbond.png';

import bombFtmLpLogo from '../../assets/img/grape-mim.png';
import bshareFtmLpLogo from '../../assets/img/gshare-avax.png';

import bnbLogo from '../../assets/img/bnb.png';
import btcLogo from '../../assets/img/BCTB-icon.png';

const logosBySymbol: {[title: string]: string} = {
  //Real tokens
  //=====================
  BOMB: bombLogo,
  BOMBPNG: bombLogoPNG,
  BSHAREPNG: tShareLogoPNG,
  BSHARE: tShareLogo,
  BBOND: tBondLogo,
  WBNB: bnbLogo,
  BOO: bnbLogo,
  SHIBA: bnbLogo,
  ZOO: bnbLogo,
  CAKE: bnbLogo,
  SUSD: bnbLogo,
  SBTC: btcLogo,
  BTCB: btcLogo,
  BTC: btcLogo,
  SVL: bnbLogo,
  'BOMB-BNB-LP': bombFtmLpLogo,
  'BOMB-BTCB-LP': bombFtmLpLogo,
  'BSHARE-BNB-LP': bshareFtmLpLogo,
  'BSHARE-BNB-APELP': bshareFtmLpLogo,
  'BOMB-BTCB-APELP': bombFtmLpLogo,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({symbol}) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  if(symbol === 'BSHARE-BNB-LP' || symbol === 'BOMB-BTCB-LP'){
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={105} height={65} />;
  }else{
    return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={55} height={68} />;
  }
    
};

export default TokenSymbol;
