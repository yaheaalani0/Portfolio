import React, { useEffect, useState } from 'react';
import './aboutme.css';
import myPhoto from '../../images/image5.jpeg';

function AboutMe() {
  // Use state to track if we're in browser environment
  const [isBrowser, setIsBrowser] = useState(false);

  // Set isBrowser to true once component mounts (we're in browser environment)
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <section className="about-me p-4">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image container - only render in browser environment */}
        <div className="mb-6 md:mb-0 md:mr-8">
          {isBrowser && (
            <img 
              src={myPhoto} 
              alt="Yahea Alani" 
              className="profile-image"
            />
          )}
        </div>
        
        {/* Text content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I'm a passionate developer with experience in building web applications using modern technologies.
            I love creating interactive and dynamic user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;