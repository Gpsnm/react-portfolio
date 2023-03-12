import React from "react";
import { NavLink } from 'react-router-dom';
import '../css/NavRoute.css'

const NavRoute = () =>{
      return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="projectGallery"
        >projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
        >
         Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavRoute;