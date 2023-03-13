import React from "react";
import Project from "./project";
import '../css/ProjectGallery.css'
import projects from './projects.json'
import '../images/samueltuki.github.io_iRecipe_.png'


function ProjectGallery() {
  return (
    <div className="container" id="project">
      <h1>Some Of My Work.</h1>
      <div className="row">
      <Project
      image = {projects[0].image}
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
      </div>
      <div className="row">
      <Project       
      title= {projects[2].title}
      github= {projects[2].github}
      deployed= {projects[2].deployed}
      description = {projects[2].description}/>
      <Project       
      title= {projects[3].title}
      github= {projects[3].github}
      deployed= {projects[3].deployed}
      description = {projects[3].description}/>
      </div>
      <div className="row">
      <Project
      title= {projects[4].title}
      github= {projects[4].github}
      deployed= {projects[4].deployed}
      description = {projects[4].description}/>
      <Project       
      title= {projects[5].title}
      github= {projects[5].github}
      deployed= {projects[5].deployed}
      description = {projects[5].description}/>
    </div>
    </div>
  );
}

export default ProjectGallery;