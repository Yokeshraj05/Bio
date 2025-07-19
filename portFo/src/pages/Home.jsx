import React from 'react'
import GlassBreak from '../components/GlassBreak'

function Home() {
  return (
    <>
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 sm:px-6 lg:px-8 py-8'>
    <GlassBreak />
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mt-8 sm:mt-12 lg:mt-16 text-center'>Hi 👋, I'm Yokeshraj</h1>
        <p className='text-base sm:text-lg md:text-xl mt-3 sm:mt-4 text-center font-medium'>Software Developer | Freelancer</p>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 mx-4 sm:mx-8 md:mx-12 lg:mx-20 text-center leading-relaxed max-w-4xl'>I specialize in building dynamic and scalable web applications using modern technologies like React (for frontend), Python (for backend), and MySQL (for database management).
          From creating beautiful user interfaces to building robust APIs and deploying full-fledged web apps, I bring your ideas to life with clean code and real-world solutions.
          Whether you're a startup, a business, or an individual looking to build your online presence — I'm here to help.</p>
        <p className='text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-center font-medium'>🚀 Let's build something amazing together!</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-20 mt-6 sm:mt-8 w-full max-w-md sm:max-w-none">
        <a
          href="/contact"
          className="bg-blue-600 font-bold text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-md hover:bg-gray-100 hover:text-gray-800 transition duration-300 text-center text-sm sm:text-base"
        >
          Hire Me
        </a>

        <a
          href="/Resume"
          className="bg-gray-100 font-bold text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl hover:bg-blue-600 hover:text-white transition duration-300 text-center text-sm sm:text-base"
        >
          View Resume
        </a>
      </div>

        </div>
    </>
  )
}

export default Home