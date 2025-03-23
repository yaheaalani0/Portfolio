import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { 
  AboutMe, 
  Contact, 
  Education, 
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

  const sections = [
    { id: 'about-me', component: <AboutMe /> },
    { id: 'skills', component: <Skills /> },
    { id: 'education', component: <Education /> },
    { id: 'projects', component: <Projects /> },
    { id: 'contact', component: <Contact /> }
  ];

  return (
    <HashRouter>
      <CssBaseline />
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <Box sx={{ position: 'relative' }}>
          {/* Background for modern, futuristic look */}
          <HomeBackground darkMode={darkMode} />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Box component="main">
            {sections.map((section) => (
              <Box key={section.id} id={section.id} sx={{ py: 8 }}>
                {section.component}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </HashRouter>
  );
}

export default App;