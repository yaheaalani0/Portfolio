import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, delay, text]);

  return (
    <div className="typewriter-container">
      {currentText}
      <span className={`cursor ${isTypingComplete ? 'typing-complete' : ''}`}>|</span>
    </div>
  );
};

export default TypeWriter;