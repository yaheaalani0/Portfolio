import React, { useEffect, useState } from "react";
import "./aboutme.css";
import myPhoto from "../../images/image5.jpeg";
import TypeWriter from "../TypeWrite";

/**
 * AboutMe component - Displays personal information and profile image
 * Features a typewriter effect for the title and lazy-loaded image
 */
const AboutMe = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(true);
  }, []);

  const bioText = `Hi! I'm a passionate Front-End Developer currently studying at Jensen 
    Yrkeshögskola in Malmö. At 24 years old, I've been diving into the world 
    of web development with a focus on creating interactive and user-friendly 
    websites. I have a strong foundation in React, JavaScript, HTML, and CSS, 
    which I've been using to build dynamic, responsive web applications. In 
    addition, I'm continuously expanding my skills by exploring TailwindCSS in 
    my own time to enhance my front-end design capabilities and improve workflow 
    efficiency. I'm always eager to learn new technologies and tools that allow 
    me to create intuitive, visually appealing, and highly functional user 
    experiences. I thrive in environments where I can challenge myself and grow 
    while contributing to meaningful projects. Feel free to take a look at my 
    work and reach out if you'd like to collaborate!`;

  return (
    <section className="about-section">
      <div className="profile-image-container">
        {isImageLoaded && (
          <img 
            src={myPhoto} 
            alt="Yahea Alani" 
            className="profile-image"
            loading="lazy"
          />
        )}
      </div>

      <div className="about-content">
        <h2 className="about-title">
          <TypeWriter text="Hi! it's Yahea" delay={150} />
        </h2>
        <p>{bioText}</p>
      </div>
    </section>
  );
};

export default AboutMe;