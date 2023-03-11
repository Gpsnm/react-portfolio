import React from "react";
import './Home.css'
import ProfilePic from '../images/profile picture.jpg'

const Home = () => {
    return (
<div className="home-container">
    <div className="profile-img"><img src={ProfilePic} alt="portfolio owner" /> 
    </div>
    <div className="profile-text typewriter">
        <h1>
            Hi, I am Adam a Junior Front End Developer.
        </h1>
        <p>
            I have been interested in becoming a Front end developer for the last 2 years, firstly trying the self taught route currently more than half way through a boot camp. I love building things on the web and seeing it happen in real time, i have always been a problem solver and since finding developing i get to practice it everyday.
        </p>
    </div>
</div>
    )
}

export default Home;