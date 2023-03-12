import React from "react";
import'./Project.css'
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
        </ul>
      </div>
    </div> 
  );
}

export default Project