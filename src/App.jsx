import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './Homepage/Homepage.jsx'
import About from './About/About.jsx'
import './index.css'
import Navbar from './Navigation/navbar.jsx'

const App = () => {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      
      {/* Add more routes here as needed */}
    </Routes>
    <About /> {/*insert */}
  </>
  );
};
export default App;
