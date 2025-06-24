import React from 'react'
import GlassBreak from '../components/GlassBreak'

function Home() {
  return (
    <>
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300'>
    <GlassBreak />
        <h1 className='text-5xl font-bold font-serif mt-16'>Hi 👋, I'm Yokeshraj</h1>
        <p className='text-xl mt-4'>Software Developer | Freelancer</p>
        <p className='text-xl mt-4 mx-20'>I specialize in building dynamic and scalable web applications using modern technologies like React (for frontend), Python (for backend), and MySQL (for database management).
          From creating beautiful user interfaces to building robust APIs and deploying full-fledged web apps, I bring your ideas to life with clean code and real-world solutions.
          Whether you're a startup, a business, or an individual looking to build your online presence — I'm here to help.</p>
        <p>🚀 Let's build something amazing together!</p>

          <div className="flex justify-center gap-20 mt-6">
        <a
          href="/contact"
          className="bg-blue-600 font-bold text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100 hover:text-gray-800 transition duration-300"
        >
          Hire Me
        </a>

        <a
          href="/Resume"
          className="bg-gray-100 font-bold text-gray-800 px-6 py-3 rounded-2xl hover:bg-blue-600 hover:text-white transition duration-300"
        >
          View Resume
        </a>
      </div>

        </div>
    </>
  )
}

export default Home