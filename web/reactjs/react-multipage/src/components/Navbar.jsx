import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const links = [
    { url: "/",  title: "Home"},
    { url: "/about",  title: "About"},
    { url: "/blog",  title: "Blog"},
    { url: "/help",  title: "Help"},
  ];

  return (
    <>
    <div className='m-5'>
      <nav className='flex items-center justify-between'>
        <div className='bg-white p-4 rounded-lg'><NavLink to={'/'}>Logo</NavLink></div>
        <ul className='text-amber-500 flex gap-4 bg-white p-4 rounded-lg'>
          { links.map((link, i)=>{
            return (
              <li key={i}>
                <NavLink className={(e) => e.isActive ? "text-purple-600" : "hover:text-purple-500" } 
                  to={link.url}>
                    {link.title}
                </NavLink>
              </li>
            )
          }) }
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Navbar
