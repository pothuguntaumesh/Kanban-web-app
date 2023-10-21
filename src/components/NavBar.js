import React from 'react'
import logoLight from '../assets/logo-dark.svg'
import verticalEllipsis from '../assets/icon-vertical-ellipsis.svg';

const NavBar = () => {
return (
  <div className='flex h-nav items-center '>
    <div className='w-64 flex-shrink-0  border-r-2 ml-6 border-light-gray self-stretch items-center flex'>
      <img src={logoLight} alt='/' className='items-center'/>
    </div>
    <div className=' pl-20 flex-shrink-0'>
      <h1>Platform Launch</h1>
    </div>
    <div className=' ml-auto flex gap-4 items-center mr-6'>
      <button className='rounded-full bg-dark-violet px-2 py-2 text-white'><p>+Add New Task</p></button>
      <img className='cursor-pointer' src={verticalEllipsis} alt='/'/>
    </div>

  </div>
)
}

export default NavBar
