import React from 'react'
import { Link } from 'react-router-dom'

const Useable = () => {
    return (
        <>
            <div className='element_1_1'>
                <div style={{marginLeft: "18px"}}>
                    <Link to="/profile"><input type='button' value='Profile' className='big_text last_btn' /></Link><br />
                    <input type='button' value='General' className='big_text last_btn' /><br />
                    <Link to="/explore"><input type='button' value='Explore' className='big_text last_btn' /></Link>
                </div>
            </div>
        </>
    )
}

export default Useable