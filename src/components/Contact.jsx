import React from 'react'
import ig from '../assets/icon-instagram.svg'
import linkedin from '../assets/icon-linkedin.svg'
import github from '../assets/icons8-github.svg'

const Contact = () => {
  const goto = (socialMedia) =>{
    window.open(socialMedia)
  }
  return (
    <section id='contact' className='contact bg-primary d-flex flex-column justify-center align-center'>
        <h2 className='text-light'>My Social Media</h2>
        <div className='social-medias d-flex'>
            <img src={ig} alt="instagram" onClick={() => goto('https://www.instagram.com/zulfa_fakaha')}/>
            <img src={linkedin} alt="linkedin" onClick={() => goto('https://www.linkedin.com/in/zulfa-fakaha')}/>
            <img src={github} alt="github" onClick={() => goto('https://github.com/fakaha')}/>
        </div>
    </section>
  )
}

export default Contact