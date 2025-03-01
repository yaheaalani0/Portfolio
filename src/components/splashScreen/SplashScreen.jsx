import React, { useState, useEffect } from 'react';
import './splashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  // Typewriter effect for title
  useEffect(() => {
    const fullTitle = '< Hello World />';
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullTitle.length) {
        setTitleText(fullTitle.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start typing subtitle after title is complete
        typeSubtitle();
      }
    }, 100); // Adjust speed as needed
    
    return () => clearInterval(typingInterval);
  }, []);
  
  // Typewriter effect for subtitle
  const typeSubtitle = () => {
    const fullSubtitle = 'Welcome to my portfolio';
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullSubtitle.length) {
        setSubtitleText(fullSubtitle.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80); // Slightly faster than title
    
    return () => clearInterval(typingInterval);
  };
  
  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Fade out effect
  useEffect(() => {
    // Display splash screen for 3 seconds before starting fade out
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 5000); // Extended to allow for typing animation
    
    // After fade out animation completes, call the onComplete callback
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 6000); // 5s display + 1s for fade out animation
    
    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);
  
  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <h1 className="splash-title">
          {titleText}
          <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
        </h1>
        <div className="splash-subtitle">
          {subtitleText}
          {titleText.length === '< Hello World />'.length && subtitleText.length < 'Welcome to my portfolio'.length && (
            <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
          )}
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;