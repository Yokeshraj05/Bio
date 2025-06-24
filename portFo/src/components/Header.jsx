import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/project' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className='flex justify-between items-center px-6 py-4 shadow-md bg-blue-500 sticky top-0 z-10'>
      <h1 className='text-white font-bold text-3xl'>YoYo</h1>
      <nav className='flex gap-6 text-2xl font-bold'>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'bg-blue-800 rounded-2xl px-2 pb-1'
                : 'text-white hover:text-yellow-200'
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header