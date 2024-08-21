import React from 'react'

export const Button = (props) => {
    const { children = "..." } = props;
  return (
    <button className='text-md lg:text-lg'>
        { children }
    </button>
  )
}
