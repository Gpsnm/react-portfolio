import React from "react";
import'../css/Project.css'
function Project(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
          {props.title}
          </li>
          <li>
       {props.github}
          </li>
          <li>
            {props.deployed}
          </li>
          <li>{props.description}</li>
        </ul>
      </div>
    </div> 
  );
}

export default Project