import React from 'react'
import './company.css'
import logo from '../../images/logo.png'
import twitter from '../../images/Default_pikachu_holding_twitterX_logo_2-removebg-preview.png'
import instagram from '../../images/Default_pikachu_left_side_of_instagram_logo_0-removebg-preview.png'
import facebook from '../../images/Default_pikachu_holding_facebook_logo_1-removebg-preview.png'
import linkedin from '../../images/pikachu_black_suit.png'
const AboutCompany = () => {
  return (
    <>
    <div className='company'>
        <div className='enter_text'>
            <p style={{fontSize: "25px", marginTop: "20px"}}>Stay Connected</p>
        </div>
        <div className='logos'>
            <div className='logos2'>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", position: "relative", bottom: "80px", left: "10vw"}}>
                    <div><img src = {logo} alt='logo' className='logo3'/></div>
                    <p style={{fontSize: "1.2vw", width: "15vw", textAlign: "center", position: "relative", bottom: "20px"}}>The social network built for sports enthusiasts. Connect with people who share your passion, form teams, and find local activities.</p>
                </div>
                <div style={{display: "flex", marginLeft: "75px", marginTop: "15px"}}>
                <div styel={{display: "flex", flexDirection: "column", alignItems: "center"}}><img src = {twitter} alt='twitter' style={{textAlign: "center", width: "14vw"}}/></div>
                <div styel={{display: "flex", flexDirection: "column", alignItems: "center"}}><img src = {instagram} alt='twitter' style={{textAlign: "center", width: "14vw", position: "relative", top: "73px", right: "3vw"}}/></div>
                <div styel={{display: "flex", flexDirection: "column", alignItems: "center"}}><img src = {facebook} alt='twitter' style={{textAlign: "center", width: "14vw", position: "relative", right: "10vw", bottom: "20px"}}/></div>
                <div styel={{display: "flex", flexDirection: "column", alignItems: "center"}}><img src = {linkedin} alt='twitter' style={{textAlign: "center", width: "14vw", position: "relative", top: "90px", right: "15vw"}}/></div>
                </div>
            </div>
            <div style={{marginTop: "30px", position: "relative", right: "15vw"}}>
                <div style={{fontSize: "25px"}}>Join Our Newsletter</div>
                <div className='button_flex'>
                    <input type='text' placeholder=" Your Email Address" style={{width: "25vw", height: "50px", border: "none", borderRadius: "27px", backgroundColor: "#ff0000"}}/>
                    <input type='button' value="Submit" style={{marginTop: "10px", border: "none", width: "10vw", height: "30px", borderRadius: "27px", backgroundColor: "#ff0000"}}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutCompany