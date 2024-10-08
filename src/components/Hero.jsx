import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] uppercase font-bold p-2'>
                Growing with data analytics
            </p>
            <h1 className='md:text-6xl sm:text-6xl text-3xl font-bold md:py-6'>
                Grow With Data
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-3xl sm:text-4xl text-[25px] font-bold py-4'>
                    Fast, Flexible Financing for
                </p>
                <ReactTyped className='md:text-4xl sm:text-4xl text-2xl font-bold  md:pl-4 pl-2'strings={['BTB', 'BTC', "SASS"]} 
                typeSpeed={120} 
                backSpeed={140} 
                loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor Your Data Analytics To Increase Revenue for BTB, BTC & SASS Platform</p>
            <button className='sm:text-2xl bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero 