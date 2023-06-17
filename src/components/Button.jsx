import React from 'react'

const Button = () => {
  return (
    <>
        <button className=' w-[70px] h-[70px] border-2 border-[#215732] relative text-center rotate-45 font-bold text-5xl '>
            <p className='inline-block absolute top-[50%] left[50%] rotate-45 translate-x-[-50%] translate-y-[-50%] '>+</p>
        </button>
    </>
  )
}

export default Button