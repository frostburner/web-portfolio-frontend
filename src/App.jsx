import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './Homepage/Homepage.jsx'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      
      {/* Add more routes here as needed */}
    </Routes>
  );
};
export default App;
