import React from 'react'
import '../projects/projects.css'

/**
 * Projects Component
 * Displays a grid of project cards with hover effects and links
 */
function Projects() {
  // Project data array
  const projects = [
    {
      id: 1,
      title: "👀",
      description: "Coming Soon!",
    },
    {
      id: 2,
      title: "👀",
      description: "Coming Soon!",
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="project-card soon-card"
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects