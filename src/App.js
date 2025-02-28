import React, { useState, useEffect } from 'react';
import { 
  AboutMe, 
  Contact, 
  Education, 
  Experience, 
  Navbar, 
  Projects, 
  Skills 
} from './components';
import SplashScreen from './components/splashScreen/SplashScreen';
import HomeBackground from './components/homeBackground/HomeBackground';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  // Check for user's preferred color scheme on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  // Handle splash screen completion
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <>
          <HomeBackground darkMode={darkMode} />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="content-wrapper">
            <AboutMe />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;