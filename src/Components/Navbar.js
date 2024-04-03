import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    <>
    <div className='nav'>
        <Link to="/profile"><div className='circle'><img src = {logo} rel='logo' className='logo'/></div></Link>
        <Link to="/profile"><div className='logo_name'>TEAMIFY</div></Link>
        <div className='nav_items'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar