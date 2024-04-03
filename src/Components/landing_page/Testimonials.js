import React from 'react'
import './testimonials.css'
import girl_under_tree from '../../images/girl_under_tree.jpg'
import coder from '../../images/coder.webp'
import girl from '../../images/girl.png'
const Testimonials = () => {
  return (
    <>
    <div className='desc testimonials'>
        <p className='small_text'>Testimonials</p>
        <p className='big_text'>Read What Others</p>
        <p className='big_text'>Have To Say</p>
        <div className='flex123'>
            <div className='row row2'>
                <div className='row1'>
                  <div><img src = {girl_under_tree} alt="girl under tree" className='testimage'/></div>
                  As a complete beginner, I felt intimidated joining a regular soccer team. Teamify helped me find a casual group looking for new players. The app s chill atmosphere and focus on having fun made me feel welcome, and I m already improving my skills thanks to the supportive environment
                  <p>-MD SAHIL</p>
                </div>
                <div className='row1'>
                <div><img src = {coder} alt="coder" className='testimage'/></div>
                Finding time for sports with a hectic work schedule was tough. Teamify s local search feature is amazing! I connected with a group that plays basketball early mornings near my office. Now, I can squeeze in a healthy activity before work and energize myself for the day 
                <p>-Priyam Kumar</p>
                </div>
            </div>
            <div className='row row3'>
                <div className='row1'>
                <div><img src = {girl} alt="girl" className='testimage'/></div>
                I used to play tennis competitively in college, but after years away from the sport, I missed the competition and camaraderie. Teamify rekindled my passion! I found a local doubles team looking for a competitive player, and we re already making waves in local tournaments. Thanks, Teamify!
                <p>-Tanisha Basu</p>
                </div>
                <div className='row1'>
                <div><img src = {coder} alt="coder" className='testimage'/></div>
                Teamify s search features were a game changer. I could filter users by volleyball interest, skill level, and even location. Within a week, I connected with a group of awesome players in my area looking for a teammate. We instantly clicked, and now we have regular practices and even participate in local tournaments together.
                <p>-Nitin Singh</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonials