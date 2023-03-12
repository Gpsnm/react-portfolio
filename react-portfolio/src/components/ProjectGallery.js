import React from "react";
import Project from "./project";
import '../css/ProjectGallery.css'
import projects from './projects.json'


function ProjectGallery() {
  return (
    <div className="project-container" id="project">
      <Project
      title= {projects[0].title}
      github= {projects[0].github}
      deployed= {projects[0].deployed}
      description = {projects[0].description}

      />
      <Project
      title= {projects[1].title}
      github= {projects[1].github}
      deployed= {projects[1].deployed}
      description = {projects[1].description}

      />
      <Project/>
      <Project/>
      <Project/>
      <Project/>
    </div>
  );
}

export default ProjectGallery;