import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>

      <h1 className='md:text-4xl text-2xl font-semibold'>Never miss any Blog! </h1>
      <p className='text-gray-500/70 md:text-lg pb-8'> Subsrcibe to get the latest blog, new tech and exclusive news</p>

      <form className='flex w-full max-w-2xl items-center justify-between rounded-md md:h-13 h-12'>
        <input type="text" placeholder='Enter your email' className='w-full h-full px-3 rounded-md border border-r-0 border-gray-300 outline-none rounded-r-none text-gray-500' required/>
        <button type="submit" className='md:px-12 px-8 h-full  bg-primary/80 text-white rounded-md hover:bg-primary transition-all cursor-pointer rounded-l-none'>Subscribe</button>
      </form>

    </div>
  )
}

export default Newsletter
