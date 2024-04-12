import {React, useContext, useState, useEffect} from 'react'
import userContext from '../../context/users/userContext'
import './profile.css'
import Useable from './Useable'
import profile from '../../images/profile.png'
const Profile = () => {
    const context = useContext(userContext);
    const {data2, fetchUser} = context
    const [date, setDate] = useState("");
    document.title = 'Teamify - Your_Profile'
    useEffect(()=>{
        fetchUser()
    },[])

    useEffect(()=>{
        if(data2?.date) { 
            setDate(data2.date.slice(0, 10))
            }
    },[data2])
    console.log(data2)
    return (
        <>
            <div style={{ display: "flex" }}>
                <Useable/>
                <div className='element_1_2'>
                    <div style={{marginRight: "150px"}}>
                    <div style={{display: "flex"}}>
                        <div className='profile'>
                            <div className='profile1'><img src ={profile} alt='profile' style={{width: "16vw"}}/></div>
                            <p style={{fontSize: "2.3vw", marginTop: "15px"}}>{data2.name}</p>
                            <p style={{fontSize: "1.5vw", marginTop: "15px"}}>Joined on {date}</p>
                            <p style={{fontSize: "2vw", marginTop: "25px"}}>About</p>
                            <p style={{fontSize: "1.5vw", marginTop: "15px"}}>About person</p>
                        </div>
                        <div className='profile'>
                        <p style={{fontSize: "2.3vw"}}>Interested Sports</p>
                        <div style={{display: "flex", marginTop: "15px"}}>
                        <p style={{fontSize: "1.5vw", margin: "8px"}}>{data2.sports_prefrence1}</p>
                        <p style={{fontSize: "1.5vw", margin: "8px"}}>{data2.sports_prefrence2}</p>
                        <p style={{fontSize: "1.5vw", margin: "8px"}}>{data2.sports_prefrence3}</p>
                        </div>
                        <div style={{display: "flex"}}>
                        <p style={{fontSize: "1.5vw", margin: "8px"}}>{data2.sports_prefrence4}</p>
                        <p style={{fontSize: "1.5vw", margin: "8px"}}>{data2.sports_prefrence5}</p>
                        <p style={{fontSize: "1.5vw", margin: "8px"}}>{data2.sports_prefrence6}</p>
                        </div>
                        <p style={{fontSize: "2.3vw", position: "relative", top: "95px"}}>Location</p>
                        <p style={{fontSize: "1.5vw", position: "relative", top: "95px", marginTop: "15px"}}>{`${data2.city} ${data2.state}`}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile