import {React, useContext, useEffect} from 'react'
import Description from './landing_page/Description'
import AboutUs from './landing_page/AboutUs'
import Featured from './landing_page/Featured'
import Testimonials from './landing_page/Testimonials'
import Join from './landing_page/Join'
import Copyright from './landing_page/Copyright'
import AboutCompany from './landing_page/AboutCompany'
import userContext from '../context/users/userContext'

const Landingpage = () => {
  const context = useContext(userContext);
  const { flag, setFlag } = context;
  const userexists = localStorage.getItem("key");

  useEffect(()=>{
    if(userexists) {
      setFlag(true)
      console.log(flag)
    }
  },[])
  return (
    <>
    <Description/>
    <AboutUs/>
    <Featured/>
    <Testimonials/>
    <Join/>
    <AboutCompany/>
    <Copyright/>
    </>
  )
}

export default Landingpage