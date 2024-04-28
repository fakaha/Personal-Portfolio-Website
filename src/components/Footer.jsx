import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [yearTime, setYearTime] = useState('')

  useEffect(() => {
    setYearTime(new Date().getFullYear())
  },[])
  return (
    <section className='footer bg-secondary'>
        <p className='text-light'>©{yearTime} Zulfa Fakaha</p>
    </section>
  )
}

export default Footer