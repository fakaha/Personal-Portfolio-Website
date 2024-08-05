import React from 'react'
import email from '../assets/email-icon.png'
import phone from '../assets/phone-logo.png'
import location from '../assets/location.png'

const Contact = () => {
  const goto = (socialMedia) =>{
    window.open(socialMedia)
  }
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <img src={email} alt="" className='w-[2rem]'/>
        <p className='text-[#fff]'>zulfakaha@gmail.com</p>
      </div>
      <div className='flex gap-2 items-center'>
        <img src={phone} alt="" className='w-[2rem]'/>
        <p className='text-[#fff]'>087708899020</p>
      </div>
      <div className='flex gap-2 items-center'>
        <img src={location} alt="" className='w-[2rem]'/>
        <p className='text-[#fff]'>Yogyakarta, Indonesia</p>
      </div>
    </div>
  )
}

export default Contact