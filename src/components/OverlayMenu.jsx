import React from 'react'
import { Link } from 'react-router-dom'

const menuList = [
    {
        id: 1,
        title: 'cold pressed',
    },
    {
        id: 2,
        title: 'smoothies',
    },
    {
        id: 3,
        title: 'boosters',
    },
    {
        id: 4,
        title: 'bowls',
    },
    {
        id: 5,
        title: 'treats',
    }
]


const OverlayMenu = () => {
  return (
    <>
        <ul className=" h-full flex flex-col justify-center items-center gap-9 text-[#215732] text-4xl md:hidden">
            <li>
                <Link to='/menu'>
                    Menu
                </Link>
                <ul>
                    {menuList.map((item) => (
                        <li key={item.id} className='text-base text-center'><Link to='/'>{item.title}</Link></li>
                    ))}
                </ul>
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
    <div className='h-screen hidden md:flex flex-col gap-4 w-full justify-center items-center bg-white'>
        {menuList.map((item) => (
            <h1 key={item.id} className='text-7xl font-bold'>{item.title}</h1>
        ))}
    </div>
    </>
  )
}

export default OverlayMenu