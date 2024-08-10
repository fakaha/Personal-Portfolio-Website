import React from 'react'
import email from '../assets/email-logo.png'
import phone from '../assets/phone-logo.png'
import location from '../assets/location-logo.png'

const Contact = () => {
  const goto = (socialMedia) =>{
    window.open(socialMedia)
  }
  return (
    <div className='flex flex-col gap-2 text-[#fff]'>
      <div className='flex gap-2 items-center'>
        <img src={email} alt="" className='w-[2rem]'/>
        <div>
          <p className='text-[#efcc84]'>Email</p>
          <p className='font-bold'>zulfakaha@gmail.com</p>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <img src={phone} alt="" className='w-[2rem]'/>
        <div>
          <p className='text-[#efcc84]'>Phone</p>
          <p className='font-bold'>087708899020</p>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <img src={location} alt="" className='w-[2rem]'/>
        <div>
          <p className='text-[#efcc84]'>Address</p>
          <p className='font-bold'>Yogyakarta, Indonesia</p>        
        </div>
      </div>
    </div>
  )
}

export default Contact