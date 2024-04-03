import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import picachu_on_pc2 from '../../images/picachu_on_pc2.jpeg'
import hacker_picachu from '../../images/hacker_picachu.png'
const Login = () => {
  return (
    <>
    <div className='login'>
        <div className='element1'>
            <img src= {picachu_on_pc2} alt = 'pikachu on pc' style={{width: "100%", height: "100%"}}/>
        </div>
        <div className='element2'>
            <div>
                <p style={{fontSize: "35px"}}>Welcome Back</p>
                <p style={{fontSize: "17px", marginTop: "8px"}}>New User? <Link to="/signup" style={{color: "#ff0000"}}>Create an account</Link><img src = {hacker_picachu} alt='hacker picachu' style={{position: "absolute", top: "80px", right: "10vw", width: "8vw"}}/></p>
                <p className='text121 margiin'>Email</p>
                <input type='text' placeholder='Enter Your Email' className='txtar'/>
                <div className='text121 margiin2 flexbox'>
                    <p>Password</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "7vw"}}><Link to="/forgot_password" style={{color: "black"}}>Forgot Password</Link></p>
                </div>
                <input type='text' placeholder='Enter Your Password' className='txtar'/><br/>
                <input type='button' value='Sign In' className='text121 txtar margiin2 bgcolor'/>
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