import React from 'react'
import './featured.css'
import adidas from '../../images/ADS.DE.svg'
import nike from '../../images/nike_logo.png'
import newyorktimes from '../../images/newyorktimes.svg'
import timesofindia from '../../images/The_times_of_india.svg.png'
import fifa from '../../images/FIFA_Logo__2010_.svg-removebg-preview.png'

const Featured = () => {
  return (
    <>
    <div className='featured'>
        <div className='featured_item'>
            <div style={{margin: "8px", fontSize: "20px"}}>Featured On</div>
            <div className='flex_item'>
                <div className='container2'><img src= {adidas} alt="adidas logo" className='sizeoffeaturedlogo'/></div>
                <div className='container2'><img src= {nike} alt="adidas logo" className='sizeoffeaturedlogo'/></div>
                <div className='container2'><img src= {newyorktimes} alt="adidas logo" className='sizeoffeaturedlogo'/></div>
                <div className='container2'><img src= {timesofindia} alt="adidas logo" style={{width: "15vw"}}/></div>
                <div className='container2'><img src= {fifa} alt="adidas logo" style={{width: "15vw"}}/></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Featured