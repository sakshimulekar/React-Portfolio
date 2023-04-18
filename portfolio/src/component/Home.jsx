import React from 'react'
import About from './About'
import Skill from './Skill'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
  return (
    <div id='home'>
      <h1>Home Page</h1>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
