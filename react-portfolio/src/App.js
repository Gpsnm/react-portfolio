import Header from './components/Header';
import React from 'react';
import "./index.css"
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery'
import Contact from './components/Contact';

function App() {
  return(
    <div>
  <Header />
  <Home />
  <Contact />
  </div>
  )
}

export default App;
