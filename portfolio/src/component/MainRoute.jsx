import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';

const MainRoute = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/skills' element={<Skill/>}/>
       <Route path='/projects' element={<Projects/>}/>
       <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default MainRoute
