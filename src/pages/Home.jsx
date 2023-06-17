import React, { useState } from 'react'
import Slider from '../components/Slider'
import {SwiperSlide } from "swiper/react";
import bg from "../assets/homebackground.jpg";
import orange from '../assets/orange.jpg'
import fruits from '../assets/fruits.jpg'
import pattern from '../assets/pattern-bg.jpg'
import Button from '../components/Button';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>

        <Slider>
            <SwiperSlide>
                <div style={{backgroundImage: `url(${bg})`}} className='bg-cover w-full h-full flex justify-center items-center md:text-7xl text-5xl font-semibold tracking-[0.5rem]'>
                    <h1>Juice Farmacy</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='grid md:grid-cols-2 grid-rows-2'>
                    <img src={orange} className="object-contain md:order-first order-last"/>
                    <div className='flex flex-col items-center justify-center md:justify-start md:text-5xl text-xl md:font-semibold font-bold md:tracking-[0.25rem] tracking-normal pt-5'>
                        <p className='text-base'>.02.</p>
                        <h1> 100% <br/> organic </h1>
                        <h2 className='md:mt-20 mt-5' >certified by <br/> Soil <br/> Association</h2>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='grid md:grid-cols-2 grid-rows-2'>
                    <img src={fruits} className="object-contain md:order-first order-last"/>
                    <div className='flex flex-col items-center justify-center md:justify-start md:text-5xl text-xl md:font-semibold font-bold md:tracking-[0.25rem] tracking-normal pt-5'>
                        <p className='text-base'>.03.</p>
                        <h1> Cold <br/> pressed </h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{backgroundImage: `url(${pattern})`}} className='bg-cover w-full h-full flex flex-col gap-5 justify-center items-center'>
                    <h1 className='md:text-9xl text-7xl font-bold tracking-[1rem]'> menu</h1>
                    <p className='text-base font-medium'>Discover now</p>
                    <Link to='/menu'>
                        <Button/>
                    </Link>
                </div>
            </SwiperSlide>
        </Slider>
    </>
  )
}

export default Home