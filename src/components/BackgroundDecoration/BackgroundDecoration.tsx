import React from 'react';
import "./style.css";
import grapeImg from "../../assets/img/grape.png";
import wineImg from "../../assets/img/gshare.png";
import vintageImg from "../../assets/img/vintage-token.png";
import gbondImg from "../../assets/img/gbond.png";

const BackgroundDecoration: React.FC = () => {

  const {innerWidth} = window;
  
  function randomNumberInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  const grapeRandomPosY = randomNumberInRange(70, 150)
  const wineRandomPosY = randomNumberInRange(70, 250)
  const gBondRandomPosY = randomNumberInRange(0, 100)
  const vintageRandomPosY = randomNumberInRange(0, 200)

  const grapeRandomPosX = randomNumberInRange(0, innerWidth / 3)
  const wineRandomPosX = randomNumberInRange(40, innerWidth / 4)
  const gBondRandomPosX = randomNumberInRange(40, innerWidth / 2)
  const vintageRandomPosX = randomNumberInRange(0, innerWidth / 5)

  const grapeRandomRotate = randomNumberInRange(-20, 20)
  const wineRandomRotate = randomNumberInRange(-20, 20)
  const gBondRandomRotate = randomNumberInRange(-20, 20)
  const vintageRandomRotate = randomNumberInRange(-20, 20)

  const grapeRandomScale = randomNumberInRange(1, 2.3)
  const wineRandomScale = randomNumberInRange(1, 2.5)
  const gBondRandomScale = randomNumberInRange(1, 2.5)
  const vintageRandomScale = randomNumberInRange(1, 2.7)
  
  return (
    <>
      <div className="background-image-1" style={{top: `${grapeRandomPosY}px`, right: `${grapeRandomPosX}px`, transform: `rotate(${grapeRandomRotate}deg) scale(${grapeRandomScale})`}}>
        <img alt="grape" src={grapeImg} width={70} height={70} />
      </div>
      <div className="background-image-2" style={{top: `${wineRandomPosY}px`, left: `${wineRandomPosX}px`, transform: `rotate(${wineRandomRotate}deg) scale(${wineRandomScale})`}}>
        <img alt="wine" src={wineImg} width={70} height={70} />
      </div>
      <div className="background-image-3" style={{bottom: `${gBondRandomPosY}px`, right: `${gBondRandomPosX}px`, transform: `rotate(${gBondRandomRotate}deg) scale(${gBondRandomScale})`}}>
        <img alt="gbond" src={vintageImg} width={70} height={70} />
      </div>
      <div className="background-image-4" style={{bottom: `${vintageRandomPosY}px`, left: `${vintageRandomPosX}px`, transform: `rotate(${vintageRandomRotate}deg) scale(${vintageRandomScale})`}}>
        <img alt="vintage" src={gbondImg} width={70} height={70} />
      </div>
    </>
  );
};

export default BackgroundDecoration;
