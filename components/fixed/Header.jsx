import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const navlist = [
    {
      id: 1,
      path: '/',
      label: 'Home',
    },
    {
      id: 2,
      path: '/events',
      label: 'Events',
    },
    {
      id: 3,
      path: '/about',
      label: 'About',
    },
    {
      id: 4,
      path: '/contact',
      label: 'Contact',
    },
  ]
  
  return (
    <div className='flex justify-between px-12 bg-primary py-3'>
      <div className='flex gap-2 my-auto'>
        <div className="my-auto"><img src="/images/ticket.png" alt="logo" /></div>
        <p className='text-5xl my-auto text-secondary lalezar'>Eventify</p>
      </div>
      <div className="flex my-auto nav gap-5">
        {
          navlist.map(item => (
            <NavLink
              key={item.id}
              className="flex text-white relative font-medium text-2xl"
              to={item.path}
            >
              {item.label}
              {/* <span className='w-full bg-secondary h-2 absolute -bottom-0'></span> */}
            </NavLink>
          ))
        }
      </div>
      <div className="flex my-auto gap-10">
        <p className='font-medium my-auto text-2xl text-white'>Create Event</p>
        <div className='flex my-auto gap-8'>
          <p className='font-medium text-2xl my-auto text-white'>Login</p>
          <button className='bg-secondary text-primary font-medium text-2xl rounded-md px-4 py-2'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Header