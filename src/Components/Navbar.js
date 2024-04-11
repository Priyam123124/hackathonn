import {React, useContext} from 'react'
import userContext from '../context/users/userContext'
import './nav.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
const Navbar = () => {
  const context = useContext(userContext);
  const {flag} = context
  return (
    <>
    <div className='nav'>
        {flag ? <Link to="/profile"><div className='circle'><img src = {logo} rel='logo' className='logo'/></div></Link> : <div className='circle'><img src = {logo} rel='logo' className='logo'/></div>}
        {flag ? <Link to="/profile"><div className='logo_name'>TEAMIFY</div></Link> : <div className='logo_name'>TEAMIFY</div>}
        <div className='nav_items'>
        <ul className='shifting'>
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