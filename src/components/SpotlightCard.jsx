import React, { useRef } from 'react';
import './SpotlightCard.css';

const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)',
  enableTilt = true,
  rotateAmplitude = 8,
  scaleOnHover = 1.03
}) => {
  const divRef = useRef(null);

  const handleMouseMove = e => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);

    if (enableTilt) {
      const relX = (x - rect.width / 2) / (rect.width / 2);
      const relY = (y - rect.height / 2) / (rect.height / 2);
      const rotY = relX * rotateAmplitude;
      const rotX = -relY * rotateAmplitude;
      divRef.current.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scaleOnHover})`;
    }
  };

  const handleMouseLeave = () => {
    if (enableTilt && divRef.current) {
      divRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
