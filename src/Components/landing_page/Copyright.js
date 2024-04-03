import React from 'react'
import { Link } from 'react-router-dom'

const Copyright = () => {
  return (
    <>
    <div style={{width: "100%", height: "100px", backgroundColor: "#0057ff", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "25px", color: "white"}}>
        <p style={{zIndex: 2}}>Copyright 2024 Online Legal India | Terms And Conditions | <Link style={{color: "white"}} to="/privacy_policy">Privacy Policy</Link></p>
    </div>
    </>
  )
}

export default Copyright