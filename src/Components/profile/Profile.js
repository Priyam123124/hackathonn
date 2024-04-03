import React from 'react'
import './profile.css'
import Useable from './Useable'
const Profile = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <Useable/>
                <div className='element_1_2'>
                    <div style={{marginRight: "150px"}}>
                    <div style={{display: "flex"}}>
                        <div className='profile'>
                            <div className='profile1'></div>
                            <p style={{fontSize: "25px", marginTop: "15px"}}>Name</p>
                            <p style={{fontSize: "18px", marginTop: "15px"}}>Joined on 9th March</p>
                            <p style={{fontSize: "25px", marginTop: "25px"}}>About</p>
                            <p style={{fontSize: "18px", marginTop: "15px"}}>About person</p>
                        </div>
                        <div className='profile'>
                        <p style={{fontSize: "25px"}}>Interested Sports</p>
                        <div style={{display: "flex", marginTop: "15px"}}>
                        <p style={{fontSize: "18px", margin: "8px"}}>Sport 1</p>
                        <p style={{fontSize: "18px", margin: "8px"}}>Sport 2</p>
                        <p style={{fontSize: "18px", margin: "8px"}}>Sport 3</p>
                        </div>
                        <div style={{display: "flex"}}>
                        <p style={{fontSize: "18px", margin: "8px"}}>Sport 4</p>
                        <p style={{fontSize: "18px", margin: "8px"}}>Sport 5</p>
                        <p style={{fontSize: "18px", margin: "8px"}}>Sport 6</p>
                        </div>
                        <p style={{fontSize: "25px", position: "relative", top: "95px"}}>Location</p>
                        <p style={{fontSize: "18px", position: "relative", top: "95px", marginTop: "15px"}}>Location of the person</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile