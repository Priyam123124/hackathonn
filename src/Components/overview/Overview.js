import React, { useContext, useState, useEffect } from 'react';
import userContext from '../../context/users/userContext';
import './overview.css';
import Useable from '../profile/Useable';
import profile from '../../images/profile.png';
import io from 'socket.io-client';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Overview = () => {
    const context = useContext(userContext);
    const { data3, getallusers, fetchUser, data2 } = context;
    document.title = 'Teamify - Explore';

    const [message, setMessage] = useState([]);
    const [message2, setMessage2] = useState([])
    const [value, setValue] = useState('');
    const [userJoined, setUserJoined] = useState(false); // Use useState with default false
    const [name, setName] = useState('')
    const [check, setCheck] = useState(false);
    const [check2, setCheck2] = useState(false)

    const genAI = new GoogleGenerativeAI("AIzaSyA3x6lbJDBuSoiKaVbLRX5eJz3E-VskOig");

const [text123, setText123] = useState('')

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const result = await model.generateContent(value);
  const response = await result.response;
    //setText123(response.text())
  console.log(result.response)
  setMessage2((prevMessages) => [...prevMessages, { message: response.text(), class: 'left' }]);
}


    useEffect(() => {
        const func = async()=>{
        await fetchUser();
        setName(data2.name)
        }
        func();
        getallusers();
    }, []);

    const socket = io('https://rebase-chat-app.glitch.me');
    useEffect(() => {
        // Emit "new-user-joined" event when user data is available (once)
        if (data2.name && !userJoined) {
            socket.emit('new-user-joined', name);
            setUserJoined(true);
        }

        // Listen for "user-joined" and "receive" events
        socket.on('user-joined', name => {
            setMessage((prevMessages) => [...prevMessages, { message: `${name} joined the chat`, class: 'left' }]);
        });

        socket.on('receive', data => {
            setMessage((prevMessages) => [...prevMessages, { message: `${data.name}: ${data.message}`, class: 'left' }]);
        });

        return () => {
            socket.disconnect(); // Clean up socket connection when component unmounts
        };
    }, [data2, socket, userJoined]); // Only re-run when data2 or userJoined changes

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        setMessage((prevMessages) => [...prevMessages, { message: `You: ${value}`, class: 'right' }]);
        socket.emit('send', value);
        setValue(''); // Clear input field after sending message
    };

    const handleSubmit2 = async() => {
        setMessage2((prevMessages) => [...prevMessages, { message: `${value}`, class: 'right' }]);
        await run()
        setValue(''); // Clear input field after sending message
    };

    const chat = () => {
        if(check2){
            setCheck2(!check)
        }
        setCheck(!check);
    }

    const chat2 = () => {
        if(check){
            setCheck(!check)
        }
        setCheck2(!check2)
    }
    return (
        <>
            <div style={{ display: "flex" }}>
                <Useable />
                <div className='element_1_2'>
                    <div>
                        <div style={{ display: "flex" }}>
                            <div className='box1'>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "4px", marginLeft: "8px" }}>
                                    <div className='logo_last2'><img src={profile} alt='profile pic' style={{ width: "4vw" }} /></div>
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
                            <div style={{ display: "flex" }}>
                                <div className='section'>Name</div>
                                <div className='section'>City</div>
                                <div className='section'>State</div>
                                <div className='section'>Sports Preference</div>
                            </div>
                            <div>
                                {data3 && data3.map((e) => {
                                    return <div style={{ display: "flex" }}>
                                        <div className='section gap234'>{e.name}</div>
                                        <div className='section gap234'>{e.city}</div>
                                        <div className='section gap234'>{e.state}</div>
                                        <div className='section gap234'>{e.sports_prefrence1}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                       <input onClick={chat} style={{textAlign: 'center', width: '9vw', height: '33px', display: 'block', margin: 'auto', backgroundColor: '#37ffce', border: 'none', borderRadius: '8px'}} type='button' value='chat'/>
                       <input onClick={chat2} style={{textAlign: 'center', width: '9vw', height: '33px', display: 'block', margin: 'auto', backgroundColor: '#37ffce', border: 'none', borderRadius: '8px',  marginTop: '8px'}} type='button' value='chat_with_AI'/>
                    </div>
                </div>
                {check && <div style={{ position: "absolute", backgroundColor: "white", width: "25vw", height: "360px", left: "72vw", top: "185px" }}>
                    <div className='container234' style={{ width: "25vw", height: "360px", overflowY: "auto", backgroundColor: '#9e6a6a'}}>
                        {message.map((e, key) => { 
                            return (
                                <div key={key} className={`message ${e.class}`}>{e.message}</div>
                            )
                        })}
                    </div>
                    <div id='send-container' style={{ display: "flex" }}>
                        <input type='text' name='messageInp' id='messageInp' value={value} onChange={handleChange} style={{ backgroundColor: "white", width: "90%", height: "30px", borderRadius: "4px" }} />
                        <button className="btn" onClick={handleSubmit}>Send</button>
                    </div>
                </div>}

                {check2 && <div style={{ position: "absolute", backgroundColor: "white", width: "25vw", height: "360px", left: "72vw", top: "185px" }}>
                    <div className='container234' style={{ width: "25vw", height: "360px", overflowY: "auto", backgroundColor: '#9e6a6a'}}>
                    {message2.map((e, key) => { 
                            return (
                                <div key={key} className={`message ${e.class}`}>{e.message}</div>
                            )
                        })}
                    </div>
                    <div id='send-container' style={{ display: "flex" }}>
                        <input type='text' name='messageInp' id='messageInp' value={value} onChange={handleChange} style={{ backgroundColor: "white", width: "90%", height: "30px", borderRadius: "4px" }} />
                        <button className="btn" onClick={handleSubmit2}>Send</button>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Overview