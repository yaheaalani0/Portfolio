import React, { useState, useEffect } from "react";
import './App.css'

import {
  AboutMe,
  Contact,
  Education,
  Experience,
  Navbar,
  Projects,
  Skills,
} from "./components";
import SplashScreen from "./components/splashScreen/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Handle splash screen completion
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <>
          <Navbar />
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
