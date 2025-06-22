import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header className='flex justify-between items-center px-6 py-4 shadow-md bg-blue-500 sticky top-0 z-10'>
        <h1 className='text-white font-bold text-3xl'>YoYo</h1>
        <nav className='flex justify-between text-white font-bold text-2xl gap-6'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contacts</Link>
        </nav>
    </header>
    </>
  )
}

export default Header