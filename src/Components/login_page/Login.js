import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <div className='login'>
        <div className='element1'>
            <div className='logo11'></div>
            <p className='text123'>Write About App</p>
        </div>
        <div className='element2'>
            <div>
                <p style={{fontSize: "35px"}}>Welcome Back</p>
                <p style={{fontSize: "17px", marginTop: "8px"}}>New User? <Link to="/signup" style={{color: "black"}}>Create an account</Link></p>
                <p className='text121 margiin'>Email</p>
                <input type='text' placeholder='Enter Your Email' className='txtar'/>
                <div className='text121 margiin2 flexbox'>
                    <p>Password</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "7vw"}}><Link to="/forgot_password" style={{color: "black"}}>Forgot Password</Link></p>
                </div>
                <input type='text' placeholder='Enter Your Password' className='txtar'/><br/>
                <input type='button' value='Sign In' className='text121 txtar margiin2'/>
            </div>
            <div className='flexbox'>
                    <p style={{margin: "30px"}}>Privacy Policy</p>
                    <p style={{margin: "30px"}}>Terms and Conditions</p>
                    <p style={{margin: "30px"}}>Privacy Policy</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default Login