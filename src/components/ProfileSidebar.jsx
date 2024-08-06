import React from 'react'
import photo from '../assets/PersonalPhoto.png'
import Contact from './Contact'

export const ProfileSidebar = () => {
  return (
    <div className='w-3/12 bg-[#1e1e1e] m-4 rounded-xl h-fit pb-4'>
        <div className='flex flex-col items-center'>
            <img className='w-1/2 pt-2 rounded-xl my-4 bg-[#383838]' src={photo} alt="Photo Profile" />
            <h2 className='text-[#fff] text-2xl'>Zulfa Fakaha</h2>
            <p className='text-[#fff] bg-[#383838] p-1 rounded-lg my-3'>Front-End Developer</p>
            <hr className='border-t-2 border-[#efcc84] w-[75%] my-4' />
            <Contact/>
        </div>
    </div>
  )
}
