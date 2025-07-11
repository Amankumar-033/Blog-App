import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useRef } from 'react'



const Header = () => {

  const {setInput, input} = useAppContext()

  const inputRef = useRef()

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    setInput(inputRef.current.value)
  }

  const onClear = () => {
    setInput('')
    inputRef.current.value = ''
  }


  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>

        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-primary text-sm'>
            <p>New: AI features integrated</p>
            <img src={assets.star_icon} alt="header star-icon" className='w-2.5' />
        </div>

        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'> Your own <span className='text-primary'>Blogging</span> <br />platform </h1>

        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>This is your space to think out load. Whatever you think, you imagine be it in any form you can do it . You just need a correct mindset and very smart plan to accomplish it. Remember if you can think then u can also do.</p>

        <form onSubmit={onSubmitHandler} className='flex justify-between  mx-w-lg  mx-small:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidde'>
            <input ref={inputRef} type="text" placeholder='Search for blogs' required className='w-full pl-4 py-2.5 outline-none' />
            <button type='submit' className=' bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all curson-pointer'>Search</button>
        </form>

      </div>
      <div className='text-center'>
          {input && <button onClick={onClear} className='border font-light py-1 text-xs px-3 rounded-sm shadow-custom-sm cursor-pointer'> Clear Search </button>}
      </div>
      <img src={assets.gradientBackground} alt="Header bg-Image" className='absolute -top-50 -z-1 opacity-50' />
    </div>
  )
}

export default Header
