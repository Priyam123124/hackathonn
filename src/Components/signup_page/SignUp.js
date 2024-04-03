import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <div className='element1 mod'>
                    <div className='logo11'></div>
                    <p className='text123'>Write About App</p>
                </div>
                <div className='element2 mod'>
                    <div>
                    <p style={{fontSize: "35px"}}>New User</p>
                    <p style={{fontSize: "17px", marginTop: "8px"}}>Already have an account? <Link to="/login" style={{color: "black"}}>Sign in</Link></p>
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
                            <input type='text' placeholder='Enter your Email' className='sign_txtar big'/>
                        </div>
                        </div> 
                        <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>Password</p>
                            <input type='text' placeholder='Enter your Password' className='sign_txtar big'/>
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