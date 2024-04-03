import React from 'react'
import project from '../../data/projectdata.json'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {
  return (
    <section className="project-container" id="projects">
      <h2 className="showroom-title">SHOWROOM</h2>
      <div className ="project-content">
          {project.map((project, id) => {
            return (
              <ProjectCard key={id} project={project} />
      );
    })}
      </div>
        
      </section>
  );
}

export default Projects


