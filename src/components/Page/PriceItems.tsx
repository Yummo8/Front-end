import React from 'react';
import grapeImg from '../../assets/img/grape.png';
import xGrapeImg from '../../assets/img/xgrape-small.png';
import wineImg from '../../assets/img/gshare.png';
import vintageImg from '../../assets/img/vintage-token.png';
import useGrapeStats from '../../hooks/useGrapeStats';
import useVintagePrice from '../../hooks/useVintagePrice';
import useXGrapePrice from '../../hooks/useXGrapePrice';
import useGetBurntGrape from '../../hooks/useGetBurntGrape';
import useWineStats from '../../hooks/useWineStats';
import burningGrapeIcon from '../../assets/img/burninggrape.png';

export default function PriceItems() {
  const grapeStats = useGrapeStats();
  const bShareStats = useWineStats();
  const vintagePrice = useVintagePrice();
  const xGrapePrice = useXGrapePrice();
  const grapeBurnt = useGetBurntGrape();

  const grapePrice = React.useMemo(() => (grapeStats ? Number(grapeStats.tokenInFtm).toFixed(3) : null), [grapeStats]);
  const winePrice = React.useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  return (
    <div className="price-flex">
      <div className="price-item">
        <a
          className="text-decoration-none "
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.bogged.finance/avax/swap?tokenIn=0x130966628846BFd36ff31a822705796e8cb8C18D&tokenOut=0x5541D83EFaD1f281571B343977648B75d95cdAC2"
        >
          <img src={grapeImg} alt="Grape" width={24} height={24} />
          <span className="token-price ">${grapePrice ? grapePrice : '0.000'}</span>
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
          <span className="token-price">${winePrice ? winePrice : '0.00'}</span>
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
          <span className="token-price">${xGrapePrice ? xGrapePrice : '0.000'}</span>
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
          <span className="token-price">${vintagePrice ? vintagePrice.toFixed(4) : '0.0000'}</span>
        </a>
      </div>
      <div className="price-item">
        <img src={burningGrapeIcon} alt="xGrape" width={24} height={24} />
        <span className="token-price" style={{marginLeft: '5px'}}>
          {grapeBurnt ? grapeBurnt.toLocaleString('en-US') : '000.000'}
        </span>
      </div>
      {/* <div className="price-item">
                <img src={grapeMimImg} alt="TWAP" height={35} />
                <span className="token-price">{twap ? twap : '--'}/1.01</span>
              </div> */}
    </div>
  );
}
