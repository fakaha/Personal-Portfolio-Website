import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <div className='main-display w-full lg:w-9/12 bg-[#1e1e1e] lg:m-4 rounded-xl relative overflow-y-auto'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
