import React from 'react'
import ig from '../assets/5340248_ig_instagram_photo_icon.svg'
import linkedin from '../assets/104493_linkedin_icon.svg'
import github from '../assets/211904_social_github_icon.svg'

const Contact = () => {
  const goto = (socialMedia) =>{
    window.open(socialMedia)
  }
  return (
    <section id='contact' className='contact bg-primary d-flex flex-column justify-center align-center'>
        <h2 className='text-light'>My Social Media</h2>
        <div className='social-medias d-flex'>
            <img src={ig} alt="" onClick={() => goto('https://www.instagram.com/zulfa_fakaha')}/>
            <img src={linkedin} alt="" onClick={() => goto('https://www.linkedin.com/in/zulfa-fakaha')}/>
            <img src={github} alt="" onClick={() => goto('https://github.com/fakaha')}/>
        </div>
    </section>
  )
}

export default Contact