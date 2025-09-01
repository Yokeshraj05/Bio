import React from 'react'
import GlassBreak from '../components/GlassBreak'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-purple-50 to-blue-300 px-4 sm:px-6 lg:px-8 py-8 relative overflow-hidden'>
      <ParticleBackground />
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <GlassBreak />
      </motion.div>
      
      <motion.h1 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mt-8 sm:mt-12 lg:mt-16 text-center relative z-10 cursor-hover'
      >
        <motion.span
          animate={{ 
            backgroundPosition: ['0%', '100%'],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-300% animate-gradient"
        >
          Hi 👋, I'm Yokeshraj
        </motion.span>
      </motion.h1>
      
      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className='text-base sm:text-lg md:text-xl mt-3 sm:mt-4 text-center font-medium relative z-10'
      >
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="cursor-hover"
        >
          Software Developer | Freelancer
        </motion.span>
      </motion.p>
      
      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 mx-4 sm:mx-8 md:mx-12 lg:mx-20 text-center leading-relaxed max-w-4xl relative z-10'
      >
        I specialize in building dynamic and scalable web applications using modern technologies like React (for frontend), Python (for backend), and MySQL (for database management).
          From creating beautiful user interfaces to building robust APIs and deploying full-fledged web apps, I bring your ideas to life with clean code and real-world solutions.
          Whether you're a startup, a business, or an individual looking to build your online presence — I'm here to help.
      </motion.p>
      
      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className='text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-center font-medium relative z-10 cursor-hover'
      >
        🚀 Let's build something amazing together!
      </motion.p>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-20 mt-6 sm:mt-8 w-full max-w-md sm:max-w-none relative z-10"
      >
        <motion.div
          whileHover={{ 
            scale: 1.1, 
            y: -5,
            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center text-sm sm:text-base cursor-hover relative overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Hire Me</span>
          </Link>
        </motion.div>
      
        <motion.div
          whileHover={{ 
            scale: 1.1, 
            y: -5,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/resume"
            className="bg-white font-bold text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl border-2 border-transparent hover:border-blue-600 transition-all duration-300 text-center text-sm sm:text-base cursor-hover relative overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span className="relative z-10" whileHover={{ color: "#ffffff" }}>
              View Resume
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

    </div>
    </>
  )
}

export default Home