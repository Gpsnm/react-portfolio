/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import'../css/Project.css'
import image from '../images/samueltuki.github.io_iRecipe_.png'

function Project(props) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt="project screen shot"></img>
      </div>
      <div className="card-text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="card-links">
        <a href={props.deployed}>Live</a>
        <a href={props.github}>Github</a>

      </div>
    </div>
  );
}

export default Project