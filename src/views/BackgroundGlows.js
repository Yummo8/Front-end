import React, {useEffect, useCallback, useState, useRef} from 'react';
import heroImg from '../assets/img/grape-glass-bg.png';

function BackgroundGlows() {
  return (
    <div className="">
      <div
        style={{
          opacity: 0.7,
          position: 'fixed',
          top: '20%',
          right: '0',
          zIndex: '-1',
        }}
      >
        <img src={heroImg} alt={'GRAPE Logo'} style={{width: 'auto', height: '100%'}} />
      </div>
      <img alt="" src={require('../assets/img/background1.png')} className="back-logo3" />
      <img alt="" className="back-glow-2" src={require('../assets/img/background2.png')} />
      {/*<img
        alt=""
        className="back-glow-3"
        src="https://i.imgur.com/iWh7X3D.png"
      />
      <img
        alt=""
        className="back-glow-4"
        src="https://i.imgur.com/iWh7X3D.png"
      />
      <img
        alt=""
        className="back-glow-5"
        src="https://i.imgur.com/iWh7X3D.png"
      />
      <img
        alt=""
        className="back-glow-6"
        src="https://i.imgur.com/iWh7X3D.png"
      />
      <img
        alt=""
        className="back-glow-7"
        src="https://i.imgur.com/iWh7X3D.png"
      /> */}
    </div>
  );
}

export default BackgroundGlows;
