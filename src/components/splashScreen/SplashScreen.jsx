import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const SplashScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [displayText, setDisplayText] = useState('');

  // Typewriter effect for "Hello"
  useEffect(() => {
    const fullText = 'Hello';
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Adjust typing speed as needed
    return () => clearInterval(typingInterval);
  }, []);

  // Fade out and trigger onComplete after display
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const completeTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000); // 1s fade out duration
      return () => clearTimeout(completeTimer);
    }, 3000); // Show splash for 3s before fade out

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 1s ease',
        opacity: fadeOut ? 0 : 1,
        zIndex: 1300, // Ensure splash is on top
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 700,
          color: 'primary.main',
        }}
      >
        {displayText}
      </Typography>
    </Box>
  );
};

export default SplashScreen;