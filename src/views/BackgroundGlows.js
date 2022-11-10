import React, {useEffect, useCallback, useState, useRef} from 'react';
import heroImg from '../assets/img/grape-glass-bg.png';
import backgroundImg from '../assets/img/backgroundblur.png'

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
      <img alt="" src={backgroundImg} className="background-blur" />
    </div>
  );
}

export default BackgroundGlows;
