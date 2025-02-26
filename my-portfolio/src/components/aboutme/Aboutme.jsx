import React from 'react';
import './aboutme.css'; // Assuming you have a CSS file for styling

function AboutMe() {
  return (
    <section className="about-me p-4">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg">
        I'm a passionate developer with experience in building web applications using modern technologies.
        I love creating interactive and dynamic user experiences.
      </p>
      <img src="/path/to/your/photo.jpg" alt="Your Name" className="my-photo mt-4" />
    </section>
  );
}

export default AboutMe;