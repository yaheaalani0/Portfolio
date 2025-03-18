import React from "react";
import "../projects/projects.css";
import Forum from "../../images/forum1.png";

/**
 * Projects Component
 * Displays a grid of project cards with hover effects and links
 */
function Projects() {
  // Project data array
  const projects = [
    {
      id: 1,
      title: "Forum Application",
      description:
        " A web app for discussion threads using React (frontend), Express.js (backend), and SQLite (database). Users can create, read, and reply to posts. Made as an assignment.",
      img: Forum,
      link: "https://github.com/yaheaalani0/Threads"
    },
    {
      id: 2,
      title: "👀",
      description: "Coming Soon!",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) =>
          project.link ? (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card soon-card"
            >
              {project.img && (
                <div className="project-image">
                  <img src={project.img} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ) : (
            <div key={project.id} className="project-card soon-card">
              {project.img && (
                <div className="project-image">
                  <img src={project.img} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
