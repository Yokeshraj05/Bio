import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', index: 0 },
    { name: 'About', path: '/about', index: 1 },
    { name: 'Projects', path: '/project', index: 2 },
    { name: 'Resume', path: '/resume', index: 3 },
    { name: 'Contact', path: '/contact', index: 4 }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='bg-blue-500/90 backdrop-blur-md shadow-lg sticky top-0 z-50'
    >
      <div className='flex justify-between items-center px-4 sm:px-6 py-4'>
        <motion.h1 
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className='text-white font-bold text-2xl sm:text-3xl cursor-hover'
        >
          YoYo
        </motion.h1>
        
        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-6 text-lg lg:text-xl font-bold'>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.index * 0.1 + 0.3, duration: 0.5 }}
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-white hover:text-yellow-200 px-3 py-1 transition-all duration-300 hover:bg-blue-600 rounded-lg cursor-hover relative overflow-hidden ${
                    isActive ? 'bg-blue-600 text-yellow-200' : ''
                  }`
                }
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-0"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <motion.button
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: 180 }}
          className='md:hidden text-white p-2 hover:bg-blue-600 rounded-lg transition-all duration-300 cursor-hover'
          aria-label='Toggle menu'
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
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
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.nav 
        className="md:hidden bg-blue-600 overflow-hidden"
        initial={false}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className='px-4 py-2 space-y-1'>
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: isMenuOpen ? 0 : -100, opacity: isMenuOpen ? 1 : 0 }}
              transition={{ delay: isMenuOpen ? item.index * 0.1 : 0, duration: 0.3 }}
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block text-white hover:bg-blue-700 hover:text-yellow-200 px-4 py-3 rounded-xl transition-all duration-300 font-bold text-lg cursor-hover ${
                    isActive ? 'bg-blue-700 text-yellow-200' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
}

export default Header