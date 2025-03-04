import React from 'react';
import './experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Jensen Education",
      location: "Malmö, Sweden",
      period: "2023 - Present",
      responsibilities: [
        "Developing and maintaining web applications using React",
        "Collaborating with senior developers on feature implementation",
        "Learning and implementing modern web development practices"
      ]
    },
    {
      title: "IT Support Technician",
      company: "Previous Company",
      location: "Malmö, Sweden",
      period: "2022 - 2023",
      responsibilities: [
        "Provided technical support to end users",
        "Maintained and troubleshot computer systems",
        "Assisted with network maintenance"
      ]
    }
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3>{exp.title}</h3>
            <p>{exp.company} | {exp.location}</p>
            <p>{exp.period}</p>
            <ul>
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;