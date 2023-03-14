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
      image = {projects[0].image}
      title= {projects[0].title}
      github= {projects[0].github}
      deployed= {projects[0].deployed}
      description = {projects[0].description}
      />
      <Project
      image = {projects[1].image}
      title= {projects[1].title}
      github= {projects[1].github}
      deployed= {projects[1].deployed}
      description = {projects[1].description}
      />
      </div>
      <div className="row">
      <Project 
      image = {projects[2].image}       
      title= {projects[2].title}
      github= {projects[2].github}
      deployed= {projects[2].deployed}
      description = {projects[2].description}/>
      <Project  
      image = {projects[3].image}      
      title= {projects[3].title}
      github= {projects[3].github}
      deployed= {projects[3].deployed}
      description = {projects[3].description}/>
      </div>
      <div className="row">
      <Project 
      image = {projects[4].image}
      title= {projects[4].title}
      github= {projects[4].github}
      deployed= {projects[4].deployed}
      description = {projects[4].description}/>
      <Project 
      image = {projects[5].image}       
      title= {projects[5].title}
      github= {projects[5].github}
      deployed= {projects[5].deployed}
      description = {projects[5].description}/>
    </div>
    </div>
  );
}

export default ProjectGallery;