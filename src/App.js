import './App.css';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Services from './Component/Services';
import {
  Routes,
  Route
} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <React.Fragment>
     <Routes>
       <Route  path='/' element={<Home />} />
       <Route  path='/Contact' element={<Contact />} />
       <Route  path='/About' element={<About />} />
       <Route  path='/Services' element={<Services />} />
     </Routes>
     </React.Fragment>
  );
}

export default App;
