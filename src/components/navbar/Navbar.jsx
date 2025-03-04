import React, { useState, useEffect } from 'react';
import './navbar.css';

/**
 * Navbar Component
 * Responsive navigation bar with dark mode toggle and smooth scrolling
 * @param {boolean} darkMode - Current theme state
 * @param {function} toggleDarkMode - Function to toggle dark/light mode
 */
function Navbar({ darkMode, toggleDarkMode }) {
  // State management for mobile menu and scroll position
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /**
   * Handle scroll events to update navbar appearance
   * Adds scrolled class when page is scrolled beyond 50px
   */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Toggle mobile menu state
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Smooth scroll to target section and close mobile menu
   * @param {string} sectionId - ID of the target section
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value to match your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-container">
        {/* Brand logo */}
        <div className="navbar-logo">
          <h1>Yahea Alani</h1>
        </div>

        {/* Theme switcher */}
        <button 
          className="dark-mode-toggle" 
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Mobile menu trigger */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navigation menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Navigation items with smooth scroll functionality */}
          <li className="nav-item">
            <button onClick={() => scrollToSection('skills')}>Skills</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('education')}>Education</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;