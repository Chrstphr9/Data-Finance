import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
           <div className='lg:col-span-2 my-4'>
           <h1 className='md:text-3xl sm:text-3xl text-[25px] font-bold py-2'>
                Want Tips & Tricks To Optimize Your Flow
            </h1>
            <p>Sign Up To Our Newsletter and Stay Up To Date</p>
           </div>
           <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                <button className='bg-[#00df9a] w-[200px] text-black rounded-md font-medium ml-4 my-6 px-6 py-3 '>Notify Me</button>
            </div>
            <p>We Care About The Protection Of Your Data. Read Our <span className='text-[#00df9a]'>Privacy Policy</span> </p>
           </div>
          
        </div>
    </div>
  )
}

export default Newsletter