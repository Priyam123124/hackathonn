import {React, useContext, useEffect} from 'react'
import userContext from '../../context/users/userContext'
import './overview.css'
import Useable from '../profile/Useable'
import profile from '../../images/profile.png'
const Overview = () => {
    const context = useContext(userContext);
    const {data3, getallusers, fetchUser, data2} = context

    useEffect(()=>{
        getallusers()
        fetchUser()
    },[])
    return (
        <>
            <div style={{ display: "flex" }}>
                <Useable/>
                <div className='element_1_2'>
                    <div>
                        <div style={{ display: "flex" }}>
                            <div className='box1'>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "4px", marginLeft: "8px" }}>
                                    <div className='logo_last2'><img src={profile} alt='profile pic' style={{width: "4vw"}}/></div>
                                    <div style={{ marginLeft: "10px" }}>
                                        <p style={{ fontSize: "2vw" }}>{data2.name}</p>
                                        <p>{`${data2.city} ${data2.state}`}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box1'>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px", marginLeft: "8px" }}>
                                    <p style={{ fontSize: "2vw" }}>Filter Section</p>
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
                                <div className='section'>State</div>
                                <div className='section'>Sports Preference</div>
                            </div>
                            <div>
                            {data3 && data3.map((e)=>{
                                    return <div style={{display: "flex"}}>
                                        <div className='section gap234'>{e.name}</div>
                                        <div className='section gap234'>{e.city}</div>
                                        <div className='section gap234'>{e.state}</div>
                                        <div className='section gap234'>{e.sports_prefrence1}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview