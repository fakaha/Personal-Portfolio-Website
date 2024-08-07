import React from 'react'
import Github from '../assets/github.svg'
import Instagram from '../assets/ig.svg'
import Linkedin from '../assets/linkedin.svg'

const SocialMedia = () => {
  const goto = (socialMedia) =>{
    window.open(socialMedia)
  }
  return (
    <div className='flex flex-col justify-center p-5'>        
        <h2 className='text-[#fff] text-2xl'>Contact Me</h2>
        <div className='flex justify-center mt-5 gap-x-8 text-[#fff]'>
            <div target="blank" onClick={() => goto('https://github.com/fakaha')} className='w-[90px] text-center flex flex-col'><img className='hover:cursor-pointer' src={Github} alt="Github" /><p className='hover:cursor-pointer'>Github</p></div>
            <div target="blank" onClick={() => goto('https://www.instagram.com/zulfa_fakaha')} className='w-[90px] text-center flex flex-col'><img className='hover:cursor-pointer' src={Instagram} alt="Instagram" /><p className='hover:cursor-pointer'>Instagram</p></div>            
            <div target="blank" onClick={() => goto('https://www.linkedin.com/in/zulfa-fakaha/')} className='w-[90px] text-center flex flex-col'><img className='hover:cursor-pointer' src={Linkedin} alt="Linkedin" /><p className='hover:cursor-pointer'>Linkedin</p></div>            
        </div>    
    </div>
  )
}

export default SocialMedia