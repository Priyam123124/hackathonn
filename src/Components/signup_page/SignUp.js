import { useState, useContext, useEffect, react } from 'react'
import './signup.css'
import userContext from '../../context/users/userContext'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import picachu_on_pc from '../../images/picachu_on_pc.jpeg'
import picachu_coder from '../../images/coder_picachu.png'
import hacker_picachu from '../../images/hacker_picachu.png'

const SignUp = () => {
    const navigate = useNavigate();
    const context = useContext(userContext);
    const {createUser, fetchUser, flag, setFlag} = context
    const [userDATA, setUserDATA] = useState({name: "", email: "", password: "", age: "", phoneno: "", city: "", state: "", sports_prefrence: "" })

    const change = (e) => {
        setUserDATA({...userDATA, [e.target.name]: e.target.value})
    }

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
    const [value6, setValue6] = useState("");
    const [value7, setValue7] = useState("");
    const [value8, setValue8] = useState("");
    const [value9, setValue9] = useState("");
    const [num, setNum] = useState(1);

    const change1 = (e)=>{
        setValue1(e.target.value);
        change(e)
    }

    const change2 = (e)=>{
        setValue2(e.target.value);
        const fullName = `${value1} ${e.target.value}`;
        console.log(fullName);

        setUserDATA({...userDATA, [e.target.name]: fullName})
    }

    const change3 = (e)=>{
        setValue3(e.target.value);
        change(e);
    }

    const change4 = (e)=>{
        setValue4(e.target.value);
        change(e);
    }

    const change5 = (e)=>{
        setValue5(e.target.value);
        change(e);
    }

    const change6 = (e)=>{
        setValue6(e.target.value);
        change(e);
    }

    const change7 = (e)=>{
        setValue7(e.target.value);
        if(num>=1 && num<6) {
            setNum(num+1);
            }
            console.log(num);
        change(e);
    }

    const change8 = (e)=>{
        setValue8(e.target.value);
        change(e);
    }

    const change9 = (e)=>{
        setValue9(e.target.value);
        change(e);
    }

    useEffect(()=>{
        if(flag){
            navigate("/login")
            setFlag(false)
        } else {
            navigate("/signup")
        }
    }, [flag])


    const click = async ()=> {
        try{
        await createUser(userDATA);
    } catch(error) {
        console.error("Error creating user:", error);
        // Handle the error appropriately (e.g., display an error message to the user)
    }
    }

    return (
        <>
            <div style={{ display: "flex" }}>
                <div className='element1 mod'>
                    <img src = {picachu_on_pc} alt = 'picachu_on_pc' className='picachuonpc'/>
                </div>
                <div className='element2 mod'>
                    <div>
                    <p style={{fontSize: "35px"}}>New User</p>
                    <p style={{fontSize: "17px", marginTop: "8px"}}>Already have an account? <Link to="/login" style={{color: "#ff0000"}}>Sign in</Link></p>
                    <div style={{display: "flex", marginTop: "8px"}}>
                        <div className='first'>
                            <p>First Name</p>
                            <input type='text' placeholder='Enter your first name' onChange={change1} value={value1} className='sign_txtar'/>
                        </div>
                        <div className='first'>
                        <p>Last Name</p>
                        <input type='text' placeholder='Enter your last name' name='name' onChange={change2} value={value2} className='sign_txtar'/>
                        </div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>Phone</p>
                            <input type='text' placeholder='Enter your phone number' name='phoneno' onChange={change3} value={value3} className='sign_txtar big'/>
                        </div>
                        <div className='first'>
                        <p>Age</p>
                            <select className='sign_txtar small' name='age' onChange={change4} value={value4}>
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
                            <input type='text' placeholder='Enter your City' className='sign_txtar' name='city' onChange={change5} value={value5}/>
                        </div>
                        <div className='first'>
                        <p>State</p>
                        <input type='text' placeholder='Enter your State' className='sign_txtar' name='state' onChange={change6} value={value6}/>
                        </div>   
                        </div>
                        <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>{`Sport Prefrence${num}`}</p>
                            <select className='sign_txtar big' name={`sports_prefrence${num}`} onChange={change7} value={value7}>
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
                            <div style={{display: "flex"}}><input type='text' placeholder='Enter your Email' className='sign_txtar big' onChange={change8} name='email' value={value8}/><img src = {picachu_coder} alt = "picachu coder" style={{width: "8vw", position: "absolute", top: "480px", right: "8vw", zIndex: 1}}/></div>
                        </div>
                        </div> 
                        <div style={{display: "flex"}}>
                        <div className='first'>
                            <p>Password</p>
                            <div style = {{display: "flex"}}><input type='text' placeholder='Enter your Password' className='sign_txtar big' name='password' onChange={change9} value={value9}/><img src = {hacker_picachu} alt = "picachu coder" style={{width: "8vw", position: "absolute", top: "600px", right: "8vw", zIndex: 1}}/></div>
                        </div>
                        </div> 
                        <div style={{display: "flex", flexDirection: "row-reverse", width: "26.6vw"}}>
                            <input type='button' value='Sign Up' onClick={click}  className='big_text signupbtn'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp