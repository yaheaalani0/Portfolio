import React from 'react';
import './homeBackground.css';

/**
 * Background component that renders animated shapes and particles
 * Supports dark/light mode themes
 */
const HomeBackground = ({ darkMode }) => {
  // Helper function to generate random styles for particles
  const getParticleStyles = () => ({
    width: `${Math.random() * 20 + 5}px`,
    height: `${Math.random() * 20 + 5}px`,
    left: `${Math.random() * 100}vw`,
    top: `${Math.random() * 100}vh`,
    animationDelay: `${Math.random() * 20}s`
  });

  return (
    <div className={`homepage-background ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Gradient background layer */}
      <div className="background-gradient" />
      
      {/* Animated background shapes */}
      <div className="background-shapes">
        {[...Array(4)].map((_, index) => (
          <div key={`shape-${index}`} className="shape" />
        ))}
      </div>
      
      {/* Floating particles */}
      {[...Array(20)].map((_, index) => (
        <div 
          key={`particle-${index}`}
          className="particle"
          style={getParticleStyles()}
        />
      ))}
    </div>
  );
};

export default HomeBackground;