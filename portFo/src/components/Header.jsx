import React from 'react'
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/project' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='bg-blue-500 shadow-md sticky top-0 z-50'>
      <div className='flex justify-between items-center px-4 sm:px-6 py-4'>
        <h1 className='text-white font-bold text-2xl sm:text-3xl'>YoYo</h1>
        
        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-6 text-lg lg:text-xl font-bold'>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className='text-white hover:text-yellow-200 px-3 py-1 transition-colors duration-200 hover:bg-blue-600 rounded-lg'
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden text-white p-2 hover:bg-blue-600 rounded-lg transition-colors duration-200'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`md:hidden bg-blue-600 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className='px-4 py-2 space-y-1'>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={closeMenu}
              className='block text-white hover:bg-blue-700 hover:text-yellow-200 px-4 py-3 rounded-xl transition-all duration-200 font-bold text-lg'
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header