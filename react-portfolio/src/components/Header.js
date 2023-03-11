import React from "react"
import './Header.css'
const Header = () => {
    return (
      <nav>
        <div className='navBar'>
          <ol>
          <li><a href="./Home.js">Home</a></li>
          <li><a href="./project.js">Project</a></li>
          <li><a href="./Contact.js">Contact</a></li>
          </ol>
        </div>
      </nav>
    )
}

export default Header