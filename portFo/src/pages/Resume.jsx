import React from 'react'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center"
    >
      <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-hover"
      >
        My Resume
      </motion.h1>
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
        }}
        className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 h-[70vh] sm:h-[80vh] lg:h-[85vh] xl:h-[90vh] rounded-xl overflow-hidden shadow-2xl border border-blue-100"
      >
        <iframe
        src="/YOKESH-SDE.pdf"
        title="Resume"
        className="w-full h-full bg-white"
        ></iframe>
      </motion.div>
      
      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 text-center px-4"
      >
        If the resume doesn't load properly, you can{' '}
        <motion.a 
          href="/YOKESH-SDE.pdf" 
          download 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-blue-600 hover:text-purple-600 font-medium transition-colors duration-200 cursor-hover"
        >
          download it here
        </motion.a>
      </motion.p>
    </motion.div>
  );
};

export default Resume