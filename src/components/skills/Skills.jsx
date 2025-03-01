import React from 'react';
import '../skills/skills.css';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';

function Skills() {
  const skills = [
    {
      name: "React.js",
      level: 85,
      icon: <FaReact className="skill-icon" />,
      color: "#61DAFB"
    },
    {
      name: "JavaScript",
      level: 80,
      icon: <FaJs className="skill-icon" />,
      color: "#F7DF1E"
    },
    {
      name: "HTML",
      level: 90,
      icon: <FaHtml5 className="skill-icon" />,
      color: "#E34F26"
    },
    {
      name: "CSS",
      level: 85,
      icon: <FaCss3Alt className="skill-icon" />,
      color: "#1572B6"
    },
    {
      name: "Tailwind CSS",
      level: 75,
      icon: <SiTailwindcss className="skill-icon" />,
      color: "#06B6D4"
    },
    {
      name: "Python",
      level: 30,
      icon: <FaPython className="skill-icon" />,
      color: "#3776AB"
    },
    {
      name: "SQL",
      level: 35,
      icon: <SiMysql className="skill-icon" />,
      color: "#4479A1"
    },
    {
      name: "GitHub",
      level: 70,
      icon: <FaGithub className="skill-icon" />,
      color: "#181717"
    }
  ];

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
            </div>
            <div className="skill-bar-container">
              <div 
                className="skill-bar"
                style={{ 
                  width: `${skill.level}%`,
                  backgroundColor: skill.color
                }}
              >
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;