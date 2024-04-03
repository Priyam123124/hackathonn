import React from 'react'
import "./pp.css"
import picachu_suit from '../../images/pikachu_black_suit.png'
const Pp = () => {
  return (
    <>
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <div className="comp1"></div>
        <div style={{width: "85%", fontSize: "25px", marginTop: "30px"}}><p>Privacy Policy & Terms and Conditions</p></div>
        <div style={{width: "85%", height: "400px", display: "flex", marginBottom: "8px", marginTop: "30px"}}>
          <div style={{width: "70%", height: "400px", backgroundColor: "#ff0000"}}></div>
          <div style={{width: "30%", height: "400px", marginLeft: "15px", display: "flex", flexDirection: "column"}}>
            <div style={{height: "50%"}}><img src = {picachu_suit} alt='picachu suit' style={{height: "100%"}}/></div>
            <div style={{backgroundColor: "#ABABAB", height: "50%", marginTop: "40px"}}></div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Pp