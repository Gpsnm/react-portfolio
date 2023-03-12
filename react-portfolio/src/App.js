import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css"
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery'
import Contact from './components/Contact';
import NavRoute from './components/NavRoute';

function App() {
  return (
    <Router>
      <div>
        <NavRoute />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="ProjectGallery" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
