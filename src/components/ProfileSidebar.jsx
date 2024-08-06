import React from 'react'
import photo from '../assets/PersonalPhoto.png'
import Contact from './Contact'

export const ProfileSidebar = () => {
  return (
    <div className='w-3/12 bg-[#333] m-4 rounded-xl h-fit pb-4'>
        <div className='flex flex-col items-center'>
            <img className='w-1/2 pt-2 rounded-xl my-4 bg-[#4b4b4b]' src={photo} alt="Photo Profile" />
            <h2 className='text-[#fff] text-2xl'>Zulfa Fakaha</h2>
            <p className='text-[#fff] bg-[#4b4b4b] p-1 rounded-lg my-3'>Front-End Developer</p>
            <hr className='border-t-2 border-gray-600 w-[75%] my-4' />
            <Contact/>
        </div>
    </div>
  )
}
