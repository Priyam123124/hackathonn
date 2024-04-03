import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import picachu_on_pc from '../../images/picachu_on_pc.jpeg'
import picachu_coder from '../../images/coder_picachu.png'
import hacker_picachu from '../../images/hacker_picachu.png'

const SignUp = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <div className='element1 mod'>
                    <img src = {picachu_on_pc} alt = 'picachu_on_pc' className='picachuonpc'/>
                </div>
                <div className='element2 mod'>
                    <div>
                    <p style={{fontSize: "35px"}}>New User</p>
                    <p style={{fontSize: "17px", marginTop: "8px"}}>Already have an account? <Link to="/login" style={{color: "#ff0000"}}>Sign in</Link></p>
                    <div style={{display: "flex", marginTop: "8px"}}>
                        <div className='first'>
                            <p>First Name</p>
                            <input type='text' placeholder='Enter your first name' className='sign_txtar'/>
                        </div>
                        <div className='first'>
                        <p>Last Name</p>
                        <input type='text' placeholder='Enter your last name' className='sign_txtar'/>
                        </div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>Phone</p>
                            <input type='text' placeholder='Enter your phone number' className='sign_txtar big'/>
                        </div>
                        <div className='first'>
                        <p>Age</p>
                            <select className='sign_txtar small'>
                            <option>Select Your Age</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            </select>
                        </div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>City</p>
                            <input type='text' placeholder='Enter your City' className='sign_txtar'/>
                        </div>
                        <div className='first'>
                        <p>State</p>
                        <input type='text' placeholder='Enter your State' className='sign_txtar'/>
                        </div>   
                        </div>
                        <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>Sport Prefrence</p>
                            <select className='sign_txtar big'>
                            <option>Choose your Interested Sport</option>
                            <option>Cricket</option>
                            <option>Football</option>
                            <option>Badminton</option>
                            <option>Athletics</option>
                            <option>Vollyball</option>
                            <option>Rugby</option>
                            </select>
                            {/* <input type='text' placeholder='Choose your Interested Sport' className='sign_txtar big'/> */}
                        </div>
                        </div> 
                        <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>Email</p>
                            <div style={{display: "flex"}}><input type='text' placeholder='Enter your Email' className='sign_txtar big'/><img src = {picachu_coder} alt = "picachu coder" style={{width: "8vw", position: "absolute", top: "480px", right: "8vw", zIndex: 1}}/></div>
                        </div>
                        </div> 
                        <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>Password</p>
                            <div style = {{display: "flex"}}><input type='text' placeholder='Enter your Password' className='sign_txtar big'/><img src = {hacker_picachu} alt = "picachu coder" style={{width: "8vw", position: "absolute", top: "600px", right: "8vw", zIndex: 1}}/></div>
                        </div>
                        </div> 
                        <div style={{display: "flex", flexDirection: "row-reverse", width: "26.6vw"}}>
                            <input type='button' value='Sign Up' className='big_text signupbtn'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp