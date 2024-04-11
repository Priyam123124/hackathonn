import {React, useContext} from 'react'
import userContext from '../../context/users/userContext'
import './join.css'
import { Link } from 'react-router-dom';
const Join = () => {
  const context = useContext(userContext);
  const {flag} = context
  return (
    <>
    <div className='join'>
        <div className='container12'>
            <p className='small_text center'>Are You Ready?</p>
            <p className='big_text center'>Become A Part Of The Next</p>
            <p className='big_text center'>Big Thing</p>
            <div className='center2'>
            {!flag && <Link to='/signup'><input type ='button' Value='Join Now' className='button2 big_text'/></Link>}
            </div>
        </div>
    </div>
    </>
  )
}

export default Join