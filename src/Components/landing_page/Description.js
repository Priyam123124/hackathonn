import React from 'react'
import './description.css'
import { Link } from 'react-router-dom'
import picachu_football from '../../images/picachu_football.jpeg'
const Description = () => {
  return (
    <>
    <div className='desc'>
        <div className='box'>
            <p className='big_text'>Teamify</p>
            <p className='small_text margin_top'>Stop playing solo! Find teammates, join </p>
            <p className= 'small_text'>matches, and elevate your game with Teamify.</p>
            <div className='buttons'>
            <Link to="/signup"><input type='button' value='Sign Up' className='button'/></Link>
            <Link to="/login"><input type='button' value='Sign In' className='button'/></Link>
            </div>
        </div>
        <div className='box'>
            <div className='logo_image'><img src = {picachu_football} alt = 'picachu_football' className='picachu_football'/></div>
        </div>
    </div>
    </>
  )
}

export default Description