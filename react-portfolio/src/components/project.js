/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import'../css/Project.css'

const Project = (props) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.image} alt="project screen shot"></img>
      </div>
      <div className="card-text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="card-links">
        <a target="_blank"  href={props.deployed} rel="noreferrer">Live</a>
        <a target="_blank" href={props.github} rel="noreferrer">Github</a>

      </div>
    </div>
  );
}

export default Project