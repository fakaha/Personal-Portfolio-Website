import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <div className='main-display w-9/12 bg-[#1e1e1e] m-4 rounded-xl relative overflow-y-auto'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
