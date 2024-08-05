import React from 'react'

const AboutMe = () => {
  return (
    <div id='about' className='about flex flex-col justify-center'>
        <h2 className='text-[#fff] text-2xl m-3'>About Me</h2>
        <div className='text-[#fff] flex flex-col items-center mt-5 justify-center px-36'>            
            <p className=''>Hello everyone, I'm Zulfa Fakaha. I'm a Computer science student at Amikom University Yogyakarta with special interest in <span className='text-secondary'>website development</span>, particularly in <span className='text-secondary'>Front End</span>. During my studies, i have learned HTML, CSS, Bootstrap, JavaScript, and React JS.</p>
        </div>
    </div>
  )
}

export default AboutMe