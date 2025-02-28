import React, { useState, useEffect } from 'react';
import './homeBackground.css';

const HomeBackground = ({ darkMode }) => {
  return (
    <div className={`homepage-background ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="background-gradient"></div>
      <div className="background-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="code-decoration">
{`function Portfolio() {
  const skills = ['React', 'JavaScript', 'CSS'];
  return <div>Welcome to my world</div>;
}`}
      </div>
      <div className="code-decoration">
{`const Project = () => {
  useEffect(() => {
    // Initialize project
  }, []);
  
  return <Component />;
}`}
      </div>
    </div>
  );
};

export default HomeBackground;