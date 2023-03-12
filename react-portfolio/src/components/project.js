/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import'../css/Project.css'
import  '../images/samueltuki.github.io_iRecipe_.png'

function Project(props) {
  return (
    <div className="card">
      <div className="card-image"><image src={props.image}></image></div>
      <div className="card-text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="card-links">
        <a href={props.deployed}></a>
        <a href={props.github}></a>

      </div>
    </div>
  );
}

export default Project