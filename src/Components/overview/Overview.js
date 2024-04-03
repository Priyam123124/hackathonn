import React from 'react'
import './overview.css'
import Useable from '../profile/Useable'
const Overview = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <Useable/>
                <div className='element_1_2'>
                    <div>
                        <div style={{ display: "flex" }}>
                            <div className='box1'>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "4px", marginLeft: "8px" }}>
                                    <div className='logo_last2'></div>
                                    <div style={{ marginLeft: "10px" }}>
                                        <p style={{ fontSize: "25px" }}>Username</p>
                                        <p>Location</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box1'>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px", marginLeft: "8px" }}>
                                    <p style={{ fontSize: "25px" }}>Filter Section</p>
                                    <div className='smallbox'></div>
                                    <div className='smallbox'></div>
                                    <div className='smallbox'></div>
                                </div>
                            </div>
                        </div>
                        <div className='boxxx2'>
                            <div style={{display: "flex"}}>
                                <div className='section'>Name</div>
                                <div className='section'>City</div>
                                <div className='section'>Address</div>
                                <div className='section'>Sports Preference</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview