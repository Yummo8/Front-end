import React from 'react';
import grapeImg from '../../assets/img/grape.png';

export function AnimatedButton({
  title,
  backgroundColor,
  icon,
  onClick,
}: {
  title: string;
  backgroundColor: string;
  icon: unknown;
  onClick: (() => void) | undefined;
}) {
  return (
    <button
      onClick={onClick}
      className="button-hover animated-button"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {icon && <div style={{marginRight: '7px'}}>{icon}</div>}
      <div style={{position: 'relative', zIndex: '20'}}>{title}</div>

      <img className="animated-hover-1" alt="grape" height={10} src={grapeImg} />
      <span className="animated-hover-2"></span>
      <span className="animated-hover-3"></span>
    </button>
  );
}

export default AnimatedButton;
