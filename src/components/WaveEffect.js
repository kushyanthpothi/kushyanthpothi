'use client';

import React, { useState, useEffect, useRef } from 'react';

const WaveEffect = ({ children, className }) => {
  const [waves, setWaves] = useState([]);
  const containerRef = useRef(null);
  const waveIdCounter = useRef(0);

  const handleClick = (e) => {
    // Only create waves on desktop
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }

    // Skip if clicking on interactive elements
    if (e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'input' ||
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.closest('input')) {
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    const newWave = {
      id: `wave-${waveIdCounter.current}`,
      x,
      y,
      createdAt: Date.now()
    };

    waveIdCounter.current += 1;
    setWaves(prev => [...prev, newWave]);

    // Remove wave after animation completes
    setTimeout(() => {
      setWaves(prev => prev.filter(wave => wave.id !== newWave.id));
    }, 2000); // Match with CSS animation duration
  };

  return (
    <div 
      ref={containerRef} 
      className={`wave-container w-full overflow-x-hidden ${className || ''}`} 
      onClick={handleClick}
    >
      {waves.map(wave => (
        <div
          key={wave.id}
          className="wave-element animate-wave-circle"
          style={{
            left: `${wave.x}px`,
            top: `${wave.y}px`,
          }}
        ></div>
      ))}
      {children}
    </div>
  );
};

export default WaveEffect;
