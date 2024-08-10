import React from 'react'
import HTMLIcon from '../assets/html.svg'
import CSSIcon from '../assets/css.svg'
import JSIcon from '../assets/js.svg'
import ReactJSIcon from '../assets/reactjs.svg'
import BootstrapIcon from '../assets/bootstrap.svg'
import TailwindIcon from '../assets/tailwindcss.svg'

const Skills = () => {
  return (
    <section id='skills' className='skills flex flex-col justify-center p-5'>
        <h2 className='text-[#fff] text-2xl'>My Skills</h2>
        <div className='flex justify-center mt-5 gap-x-8 gap-y-6 text-[#fff] flex-wrap'>
            <div className='w-[90px] text-center flex flex-col'><p>Experienced</p><img src={HTMLIcon} alt="HTML" /><p>HTML</p></div>
            <div className='w-[90px] text-center flex flex-col'><p>Experienced</p><img src={CSSIcon} alt="CSS" /><p>CSS</p></div>
            <div className='w-[90px] text-center flex flex-col'><p>Intermediate</p><img src={JSIcon} alt="Javascript" /><p>Javascript</p></div>
            <div className='w-[90px] text-center flex flex-col'><p>Intermediate</p><img src={BootstrapIcon} alt="Bootstrap" /><p>Bootstrap</p></div>
            <div className='w-[90px] text-center flex flex-col'><p>Intermediate</p><img src={TailwindIcon} alt="Tailwind CSS" /><p>Tailwind CSS</p></div>
            <div className='w-[90px] text-center flex flex-col'><p>Intermediate</p><img src={ReactJSIcon} alt="React JS" /><p>React JS</p></div>
        </div>
    </section>
  )
}

export default Skills