import React from 'react'
import './aboutus.css'
import game_lobby from '../../images/game_lobby.jpeg'

const AboutUs = () => {
  return (
    <>
    <div className='container'>
        <div className='box2'>
            <div className='logo2'><img src= {game_lobby} alt='game lobby' className='gamelobby'/></div>
        </div>
        <div className='box2 box2_1'>
            <p className='big_text'>About Us</p>
            <p className='small_text my'>
              <ul style={{flexDirection: "column"}}>
                <li className='smalltext1'>Never play solo again! Teamify connects you withsports enthusiasts in your area...</li>
                <li className='smalltext1'> Level up your game! Find teammates, form teams,and discover local activities with Teamify..U</li>
                <li className='smalltext1'>Discover local activities: Find matches, leagues, tournaments, and training sessions happening nearby.</li>
              </ul>
            </p>
        </div>
    </div>
    </>
  )
}

export default AboutUs