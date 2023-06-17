import React from 'react'
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
    className='
    px-[90px]
    h-[70px] 
    hidden
    md:flex 
    justify-between 
    items-center 
    fixed 
    bottom-0 
    left-0 
    right-0 
    z-50 
    bg-[rgba(255,255,255,0.8)]'
    >
        <div>Koox Clone</div>
        <div>
            <BsInstagram />
        </div>
    </footer>

    
    
  )
}

export default Footer