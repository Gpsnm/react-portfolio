import React from "react";
import Project from "./project";
import '../css/ProjectGallery.css'
import projects from './projects.json'


function ProjectGallery() {
  return (
    <div className="container" id="project">
      <h1>Some Of My Work.</h1>
      <div className="row">
      <Project
      title= {projects[0].title}
      github= {projects[0].github}
      deployed= {projects[0].deployed}
      description = {projects[0].description}
      />
      <Project
      title= {projects[0].title}
      github= {projects[0].github}
      deployed= {projects[0].deployed}
      description = {projects[0].description}
      />
      </div>
      <div className="row">
      <Project       
      title= {projects[0].title}
      github= {projects[0].github}
      deployed= {projects[0].deployed}
      description = {projects[0].description}/>
      <Project       
      title= {projects[0].title}
      github= {projects[0].github}
      deployed= {projects[0].deployed}
      description = {projects[0].description}/>
      </div>
      <div className="row">
      <Project
      title= {projects[0].title}
      github= {projects[0].github}
      deployed= {projects[0].deployed}
      description = {projects[0].description}/>
      <Project       
      title= {projects[0].title}
      github= {projects[0].github}
      deployed= {projects[0].deployed}
      description = {projects[0].description}/>
    </div>
    </div>
  );
}

export default ProjectGallery;