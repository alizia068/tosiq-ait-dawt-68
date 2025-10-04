import React from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'
import page404 from '../assets/pagenotfound.png'
const Page404 = () => {
  return (
    <div>
      <Navbar />

      <div className='flex justify-center bg-white/50 m-5 rounded-lg'>
        <img src={page404} className='h-144 w-144' />
      </div>
    </div>
  )
}

export default Page404
