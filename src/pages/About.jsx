import React from 'react'
import Slider from '../components/Slider'
import {SwiperSlide } from "swiper/react";
import pattern from '../assets/pattern-bg.jpg'
import Button from '../components/Button';

const About = () => {
  return (
    <>
        <Slider>
            <SwiperSlide>
                <div style={{backgroundImage: `url(${pattern})`}} className='bg-cover w-full h-full flex flex-col gap-2 items-center md:justify-start justify-center '>
                    <h1 className='md:text-9xl text-7xl font-semibold mt-5 mb-10'>100%</h1>
                    <h2 className='md:text-5xl text-4xl font-semibold'>Organic</h2>
                    <h2 className='md:text-5xl text-4xl font-semibold'>Cold-pressed</h2>
                    <h2 className='md:text-5xl text-4xl font-semibold'>Raw</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{backgroundImage: `url(${pattern})`}} className='bg-cover w-full h-full flex flex-col gap-2 items-center md:justify-start justify-center '>
                    <h1 className='md:text-9xl text-7xl font-semibold mt-5 mb-10'>0%</h1>
                    <h2 className='md:text-5xl text-4xl font-semibold'>Additives</h2>
                    <h2 className='md:text-5xl text-4xl font-semibold'>Pasteurisation</h2>
                    <h2 className='md:text-5xl text-4xl font-semibold'>HPP</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{backgroundImage: `url(${pattern})`}} className='bg-cover w-full h-full flex flex-col gap-20 items-center justify-center '>
                    <h1 className='md:text-5xl text-3xl font-semibold'>IS THE WHITE SEDIMENT IN MY BOTTLE NORMAL?</h1>
                    <h2 className='md:text-3xl text-xl font-semibold'>Yes ! The white sediment is the gingerol – ginger’s bioactive compound. You will find it in the Ultimate Detox, Dr. Green, Happy Gut and Shield Immunity.</h2>
                    <h2 className='md:text-3xl text-xl font-semibold'>It is super good for you, so shake the bottle well</h2>
                </div>
            </SwiperSlide>
        </Slider>
    </>
  )
}

export default About