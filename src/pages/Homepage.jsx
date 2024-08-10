import React from 'react'
import { ProfileSidebar } from '../components/ProfileSidebar'
import { Main } from '../components/Main'

export const Homepage = () => {
  return (
    <div className='flex w-screen lg:h-screen bg-[#111111] lg:flex-row flex-col gap-6 lg:gap-0'>
        <ProfileSidebar/>
        <Main/>
    </div>
  )
}
