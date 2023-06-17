import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav 
    className='
    h-[90px] 
    hidden
    md:flex 
    justify-center 
    items-center 
    fixed 
    top-0 
    left-0 
    right-0 
    z-50 
    bg-[rgba(255,255,255,0.1)]'
    >
        <ul className="flex flex-row justify-center items-center gap-9 text-[#215732]">
            <li>
                <Link to='/'>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/menu'>
                    Menu
                </Link>
            </li>
            <li>
                <Link to='/about'>
                    About
                </Link>
            </li>
            <li>
                <Link to='/order'>
                    Order
                </Link>
            </li>
            <li>
                <Link to='/contact'>
                    Contact
                </Link>
            </li>
        </ul>
    </nav>
)
}

export default Navbar