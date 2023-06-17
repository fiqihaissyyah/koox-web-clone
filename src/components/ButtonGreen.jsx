import React, { useState } from 'react'

import { Link } from 'react-router-dom';


export const ButtonGreen = () => {
    return (
        <div className='relative md:h-screen md:max-w-[120px] w-full'>
            <Link to='/'>
                <button className='absolute bg-[#215732] text-white z-[99] md:top-[50%] md:translate-y-[-50%] top-0 left-[50%] translate-x-[-50%] w-[120px] h-[70px]'>
                    <p className="text-xl">KooX</p>
                </button>
            </Link>
        </div>
      ) 
}

export const ButtonGreen2 = ({children, handleOpen}) => {
    return (
        <div className='relative md:h-screen md:max-w-[120px] w-full'>
            <button className='absolute bg-[#215732] text-white z-[99] md:top-[50%] md:translate-y-[-50%] bottom-0 left-[50%] translate-x-[-50%] w-[120px] h-[70px] flex justify-center items-center' onClick={handleOpen}>
                {children}
            </button>
        </div>
      )
}
