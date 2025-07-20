import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Resort Booking System',
    description: 'A responsive booking platform for users and resort admins with API integration.',
    techStack: ['React', 'Tailwind CSS', 'Flask', 'MySQL'],
    liveLink: '',
    githubLink: 'https://github.com/yourusername/resort-booking',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Tailwind CSS.',
    techStack: ['React', 'Tailwind CSS'],
    liveLink: '',
    githubLink: 'https://github.com/yourusername/portfolio',
  },
  // Add more projects here
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
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
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gradient-to-br from-white via-purple-50 to-blue-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10 cursor-hover"
        >
          Projects
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-white to-blue-50 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 cursor-hover relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.h3 
                whileHover={{ x: 5 }}
                className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 sm:mb-3 relative z-10"
              >
                {project.title}
              </motion.h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 relative z-10">
                <strong>Tech Stack:</strong> {project.techStack.join(', ')}
              </p>
              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 text-xs sm:text-sm font-medium relative z-10">
                {/* <motion.a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 hover:text-purple-600 transition-colors duration-200 text-center sm:text-left cursor-hover"
                >
                  🔗 Live Demo
                </motion.a> */}
                <motion.a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 hover:text-purple-600 transition-colors duration-200 text-center sm:text-right cursor-hover"
                >
                  💻 GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects