import React from 'react'
import './forgot.css'
import { Link } from 'react-router-dom'
import '../landing_page/Copyright'

const Forgot = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <div className='element1'>
                    <div className='logo11'></div>
                    <p className='text123'>Write About App</p>
                </div>
                <div className='element2'>
                    <div>
                        <p style={{ fontSize: "27px" }}>Forgot Password? Reset Password</p>
                        <p style={{ fontSize: "17px", marginTop: "8px" }}>New User? <Link to="/signup" style={{color: "black"}}>Create an account</Link></p>
                        <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>Email</p>
                            <input type='text' placeholder='Enter Email' className='sign_txtar big'/>
                        </div>
                        <input type='button' value ='submit' className='forgbtn'/>
                        </div>
                        <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>Verification Code</p>
                            <input type='text' placeholder='Enter Verification Code' className='sign_txtar big'/>
                        </div>
                        <input type='button' value ='submit' className='forgbtn'/>
                        </div>
                        <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>New Password</p>
                            <input type='text' placeholder='New Password' className='sign_txtar big'/>
                        </div>
                        </div>
                        <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>Confirm Password</p>
                            <input type='text' placeholder='Confirm Password' className='sign_txtar big'/>
                        </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row-reverse", width: "26.6vw"}}>
                            <input type='button' value='Sign In' className='big_text signupbtn'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgot