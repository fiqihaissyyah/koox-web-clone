import React from 'react'
import Slider from '../components/Slider'
import {SwiperSlide } from "swiper/react";
import pattern from '../assets/pattern-bg.jpg'
import batik from '../assets/batik.png'
import Button from '../components/Button';

const Menu = () => {
  return (
    <>
        <Slider>
            <SwiperSlide>
                <div style={{backgroundImage: `url(${pattern})`}} className='bg-cover w-full h-full flex md:flex-row flex-col justify-center items-center md:justify-start md:items-start'>
                    <div className='w-[20%] flex flex-col gap-2 items-center mt-5'>
                        <h2 className='text-2xl font-semibold'>cold-pressed</h2>
                        <p className='mb-5'>£8.95</p>
                        <Button/>
                    </div>
                    <div style={{backgroundImage: `url(${batik})`}} className='bg-contain w-[80%] h-full bg-no-repeat bg-center'>
                        <img src="https://koox.co.uk/data/wp-content/uploads/2018/05/Test_nico-575x1024.png" alt="" className='object-contain w-full h-full md:py-20 py-0' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{backgroundImage: `url(${pattern})`}} className='bg-cover w-full h-full flex md:flex-row flex-col justify-center items-center md:justify-start md:items-start'>
                    <div style={{backgroundImage: `url(${batik})`}} className='bg-contain w-[80%] h-full bg-no-repeat bg-center '>
                        <img src="https://koox.co.uk/data/wp-content/uploads/2018/05/drinkable_skincare.png" alt="" className='object-contain w-full h-full md:py-20 py-0 md:order-first order-last' />
                    </div>
                    <div className='w-[20%] flex flex-col gap-2 items-center mt-5'>
                        <h2 className='text-2xl font-semibold'>cold-pressed</h2>
                        <p className='mb-5'>£8.95</p>
                        <Button/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{backgroundImage: `url(${pattern})`}} className='bg-cover w-full h-full flex md:flex-row flex-col justify-center items-center md:justify-start md:items-start'>
                    <div className='w-[20%] flex flex-col gap-2 items-center mt-5'>
                        <h2 className='text-2xl font-semibold'>cold-pressed</h2>
                        <p className='mb-5'>£8.95</p>
                        <Button/>
                    </div>
                    <div style={{backgroundImage: `url(${batik})`}} className='bg-contain w-[80%] h-full bg-no-repeat bg-center'>
                        <img src="https://koox.co.uk/data/wp-content/uploads/2018/05/GREEN_VITALITY-575x1024.png" alt="" className='object-contain w-full h-full md:py-20 py-0' />
                    </div>
                </div>
            </SwiperSlide>
        </Slider>
    </>
  )
}

export default Menu