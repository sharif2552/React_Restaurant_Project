import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import './App.css';
import Navbar from './components/Menu/Navbar';


function App() {
  return (
    <div>
<Router>
      <Navbar  />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

    </div>
    
  );
}

export default App;
