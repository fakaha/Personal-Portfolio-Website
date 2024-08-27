import React, { useEffect, useState } from 'react'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import instagram from '../assets/ig.svg'

const Footer = () => {
  const [yearTime, setYearTime] = useState('')
  const goto = (sosmed) => {
    window.open(sosmed)
  }

  useEffect(() => {
    setYearTime(new Date().getFullYear())
  },[])
  return (
    <section className='footer flex justify-between items-center lg:mx-12 mx-8 pt-20 pb-5 px-8'>
        <p className='text-sm lg:text-lg'>{yearTime} | Zulfa Fakaha</p>
        <div className='flex'>
          <img onClick={() => goto('https://www.linkedin.com/in/zulfa-fakaha/')} className='h-8' src={linkedin} alt="Social Media" />
          <img onClick={() => goto('https://github.com/fakaha')} className='h-8' src={github} alt="Social Media" />
          <img onClick={() => goto('https://www.instagram.com/zulfa_fakaha')} className='h-8' src={instagram} alt="Social Media" />
        </div>
    </section>
  )
}

export default Footer