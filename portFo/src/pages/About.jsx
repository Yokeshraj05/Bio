import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-800"
    >
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">

        <motion.h2 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-hover"
        >
          About Me
        </motion.h2>

        <motion.div variants={itemVariants}>
          <motion.h3 
            whileHover={{ x: 10 }}
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-500 mb-4 cursor-hover"
          >
            🎓 Education
          </motion.h3>
          <motion.div 
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)" 
            }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg shadow-lg border border-blue-100 cursor-hover"
          >
            <p className="text-base sm:text-lg font-medium">B.E – Computer Science and Engineering</p>
            <p className="text-sm sm:text-base text-gray-700">Dhanalakshmi Srinivasan Engineering College, Perambalur, Tamil Nadu</p>
            <p className="text-gray-500 text-xs sm:text-sm">Graduated: 2024</p>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h3 
            whileHover={{ x: 10 }}
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-500 mb-4 cursor-hover"
          >
            💼 Experience
          </motion.h3>
          <motion.div 
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)" 
            }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg shadow-lg border border-blue-100 mb-4 cursor-hover"
          >
            <p className="text-base sm:text-lg font-medium">Frontend Developer (3-Mon)</p>
            <p className="text-sm sm:text-base text-gray-700">CognigenNxt</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 mt-2 space-y-1">
              <li>Built web pages for resort booking and admin management</li>
              <li>Integrated APIs and ensured responsive design</li>
              <li>Worked closely with design and backend teams</li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)" 
            }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg shadow-lg border border-blue-100 cursor-hover"
          >
            <p className="text-base sm:text-lg font-medium">Frontend Developer Intern (6-Mon)</p>
            <p className="text-sm sm:text-base text-gray-700">CognigenNxt</p>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 mt-2 space-y-1">
              <li>Built web pages for E-Commerce Website</li>
              <li>Created Product card for listing the products</li>
              <li>Added Cart and Search Functionalities</li>
            </ul>
          </motion.div> 

        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h3 
            whileHover={{ x: 10 }}
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-500 mb-4 cursor-hover"
          >
            🛠️ Tech Stack
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 text-center">
            {[
              'React.js',
              'Tailwind CSS',
              'Flask (Python)',
              'Python',
              'MySQL',
              'Git & GitHub',
              'Postman',
              'Vercel / Railway'
            ].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-medium py-2 sm:py-3 px-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm lg:text-base cursor-hover border border-blue-200"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About