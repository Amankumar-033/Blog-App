import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'


const Layout = () => {
  
  const Navigate = useNavigate()

  const logout = async () => {
    Navigate('/')
  }

  return (
    <>

      {/* This is admin navbar */}
      <div className='flex justify-between items-center bg-white py-2 h-[-80px] px-8 sm:px-12 border-b border-gray-200'>
        <img src={assets.logo} alt='' className='w-36 sm:w-28 cursor-pointer' onClick={() => Navigate('/')} />
        <button onClick={logout} className='text-sm px-6 sm:px-8 py-2 bg-primary text-white rounded-full cursor-pointer hover:opacity-90 transition'> Logout </button>
      </div>

      {/* This is admin layout's sidebar and outlet */}
      <div className='flex h-[calc(100vh-80px)]'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
