import React from 'react'
import HTMLIcon from '../assets/367627_html_html5_icon.svg'
import CSSIcon from '../assets/7422531_css3_css_file_development_icon.svg'
import JSIcon from '../assets/8666291_js_icon.svg'
import ReactJSIcon from '../assets/4691292_react native_react_icon.svg'

const Skills = () => {
  return (
    <section id='skills' className='skills bg-primary d-flex flex-column justify-center align-center'>
        <h2 className='text-primary'>My Skills</h2>
        <div className='skillsIcon d-flex justify-center'>
            <div className='kocak'><img src={HTMLIcon} alt="HTML" /><p>HTML</p></div>
            <div><img src={CSSIcon} alt="CSS" /><p>CSS</p></div>
            <div><img src={JSIcon} alt="Javascript" /><p>Javascript</p></div>
            <div><img src={ReactJSIcon} alt="React JS" /><p>React JS</p></div>
        </div>
    </section>
  )
}

export default Skills