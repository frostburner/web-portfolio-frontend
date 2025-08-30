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

      <Route path="/" element={
        <>
        <section id="home"><Homepage /></section>
        <section id='about'><About /></section>
        <section id='skills'><Skills /> </section>
        <section id='projects'></section>
        <section id='contact'></section>
        </>
      }
      />
    </Routes>
  
    
    {/*insert */}
  </>
  );
};
export default App;
