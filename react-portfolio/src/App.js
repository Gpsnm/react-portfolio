import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import "./index.css"
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery'
import Contact from './components/Contact';
import NavRoute from './components/NavRoute';

function App() {
  return(
    <Router>
    <div>
  <NavRoute />
  <Routes>
  <Header />
  <Route path="/" element={<Home />}/>
  <Route path="/" element={<ProjectGallery/>}/>
  <Route path="/" element={ <Contact />}/>
  </Routes>
  </div>
  </Router>
  )
}

export default App;
