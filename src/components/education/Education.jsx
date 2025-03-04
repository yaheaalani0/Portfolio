import React from 'react';
import './education.css';

const Education = () => {
  const education = [
    {
      degree: "Front End Developer",
      school: "Jensen Education",
      location: "Malmö, Sweden",
      period: "2023 - Present",
      details: [
        "Focus on modern web development technologies",
        "Building responsive and interactive web applications",
        "Working with React, JavaScript, HTML, and CSS"
      ]
    },
    {
      degree: "Full Stack Developer",
      school: "Code Institute",
      location: "Remote",
      period: "6 months, 2023",
      details: [
        "Basics and fundementals of web development",
        "Developing and deploying web applications",
        "HTML, CSS, JavaScript, Python, Django",
      ]
    },
    {
      degree: "Bygg och Anläggning",
      school: "Furulundsskolan",
      location: "Sölvesborg, Sweden",
      period: "2016 - 2019",
      details: [
        "Snickare"
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div>
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <p>{edu.school} | {edu.location}</p>
            <p>{edu.period}</p>
            <ul>
              {edu.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;