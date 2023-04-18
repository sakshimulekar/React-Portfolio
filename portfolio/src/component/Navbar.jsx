import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id='nav-menu'>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/skills"}>Skills</Link>
      <Link to={"/project"}>Project</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  )
}

export default Navbar
