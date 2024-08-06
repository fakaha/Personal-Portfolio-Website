import React from 'react'
import HTMLIcon from '../assets/367627_html_html5_icon.svg'
import CSSIcon from '../assets/7422531_css3_css_file_development_icon.svg'
import JSIcon from '../assets/8666291_js_icon.svg'
import ReactJSIcon from '../assets/4691292_react native_react_icon.svg'

const Skills = () => {
  return (
    <section id='skills' className='skills flex flex-col justify-center p-5'>
        <h2 className='text-[#fff] text-2xl'>My Skills</h2>
        <div className='skillsIcon flex justify-center mt-5 gap-x-3'>
            <div className='w-36 text-center'><img src={HTMLIcon} alt="HTML" /><p>HTML</p></div>
            <div className='w-36 text-center'><img src={CSSIcon} alt="CSS" /><p>CSS</p></div>
            <div className='w-36 text-center'><img src={JSIcon} alt="Javascript" /><p>Javascript</p></div>
            <div className='w-36 text-center'><img src={ReactJSIcon} alt="React JS" /><p>React JS</p></div>
        </div>
    </section>
  )
}

export default Skills