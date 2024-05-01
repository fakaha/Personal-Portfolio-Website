import React from 'react'
import PersonalPhoto from '../assets/PersonalPhoto.png'

const AboutMe = () => {
  return (
    <section id='about' className='about bg-primary d-flex flex-column align-center justify-center'>
        <h2 className='text-light'>About Me</h2>
        <div className='about-content d-flex align-center justify-center'>
            <img src={PersonalPhoto} alt="Personal Photo of ZFakaha" />
            <p className='text-light'>Hello everyone, I'm Zulfa Fakaha. I'm a Computer science student at Amikom University Yogyakarta with special interest in <span className='text-secondary'>website development</span>, particularly in <span className='text-secondary'>Front End</span>. During my studies, i have learned HTML, CSS, Bootstrap, JavaScript, and React JS.</p>
        </div>
    </section>
  )
}

export default AboutMe