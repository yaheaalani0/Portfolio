import React from 'react'
import '../projects/projects.css'

/**
 * Projects Component
 * Displays a grid of project cards with hover effects and links
 * @returns {JSX.Element} Projects section with interactive project cards
 */
function Projects() {
  // Project data array - each object represents a project card
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1",
      image: "/path-to-image1.jpg",
      url: "https://project1-url.com"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of project 2",
      image: "/path-to-image2.jpg",
      url: "https://project2-url.com"
    }
    // Add more projects here as needed
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <a 
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects