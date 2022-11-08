import React from 'react';
import grapeImg from '../../assets/img/grape.png';

export function AnimatedButton({
  title,
  backgroundColor,
  icon,
  onClick,
  fullWidth,
}: {
  title: string;
  backgroundColor: string;
  icon: unknown;
  onClick: (() => void) | undefined;
  fullWidth?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="button-hover animated-button"
      style={{
        backgroundColor: backgroundColor,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(4px)',
        width: fullWidth ? '100%' : 'inherit',
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
