import React from "react"
import '../css/Header.css'
const Header = () => {
    return (
      <nav>
        <div className='navBar'>
          <ol>
          <li><a href="#home">Home</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
          </ol>
        </div>
      </nav>
    )
}

export default Header