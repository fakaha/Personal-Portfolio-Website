import React from 'react'
import { ProfileSidebar } from '../components/ProfileSidebar'
import { Main } from '../components/Main'

export const Homepage = () => {
  return (
    <div className='flex w-screen h-screen bg-[#000]'>
        <ProfileSidebar/>
        <Main/>
    </div>
  )
}
