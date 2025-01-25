
import React from 'react'
import { NavLink } from 'react-router'
import download from '../assets/download.png'
import Button from './Button'
const NavBar = (props) => {

  return (
    <div className='navContainer'>
      <div className="logo">
       <h1 className='logoimg'>Smita</h1>
      </div>

      <ul className='links'>
          
          <li>
            <NavLink className="link" to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">About Me!</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contact">Contact</NavLink>
          </li>
      </ul>
      <div className="cta-container">
        <Button name="Connect Me"/>
      </div>
    </div>
  )
}

export default NavBar
