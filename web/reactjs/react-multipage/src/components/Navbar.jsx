import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='m-5'>
      <nav className='flex items-center justify-between'>
        <div className='bg-white p-4 rounded-lg'><NavLink to={'/'}>Logo</NavLink></div>
        <ul className='text-purple-900 flex gap-4 bg-white p-4 rounded-lg'>
          <li className='hover:text-purple-500'><NavLink to={'/'}>Home</NavLink></li>
          <li className='hover:text-purple-500'><NavLink to={'/about'}>About</NavLink></li>
          <li className='hover:text-purple-500'><NavLink to={'/blog'}>Blog</NavLink></li>
          <li className='hover:text-purple-500'><NavLink to={'/help'}>Help</NavLink></li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Navbar
