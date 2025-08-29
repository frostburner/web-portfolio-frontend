import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './Components/Homepage.jsx'
import About from './Components/About.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Skills from './Components/Skills.jsx'

const App = () => {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      {/* Add more routes here as needed */}
    </Routes>
    
    <About /> 
    <Skills />
    
    {/*insert */}
  </>
  );
};
export default App;
