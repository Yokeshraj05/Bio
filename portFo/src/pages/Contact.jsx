// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });
  
//       const result = await response.json();
//       if (result.success) {
//         alert("Message sent successfully!");
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         alert(result.error || "Something went wrong.");
//       }
//     } catch (error) {
//       alert("Server error");
//       console.error(error);
//     }
//   };
  

//   return (
//     <section className="min-h-screen px-6 py-12 bg-white text-gray-800">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-4xl font-bold text-blue-600 mb-4 text-center">Contact Me</h2>
//         <p className="text-gray-600 mb-10 text-center">Feel free to reach out via the form below 👇</p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block mb-1 font-medium">Name</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block mb-1 font-medium">Message</label>
//             <textarea
//               name="message"
//               id="message"
//               rows="5"
//               required
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact

// this is for later use to link with backend

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
    hidden: { y: 30, opacity: 0 },
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
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 cursor-hover"
        >
          Contact Me
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-10"
        >
          Feel free to reach out via the details below 👇
        </motion.p>

        <div className="space-y-4 sm:space-y-6 text-left max-w-lg mx-auto text-sm sm:text-base lg:text-lg">
          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              x: 10,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)" 
            }}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg border border-blue-100 cursor-hover"
          >
            <span className="font-semibold">📧 Email:</span>
            <motion.a 
              href="mailto:yokeshraj6662@gmail.com" 
              whileHover={{ scale: 1.05 }}
              className="text-blue-600 hover:text-purple-600 break-all transition-colors duration-200 cursor-hover"
            >
              yokeshraj6662@gmail.com
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              x: 10,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)" 
            }}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg border border-blue-100 cursor-hover"
          >
            <span className="font-semibold">📱 Phone:</span>
            <motion.a 
              href="tel:+916383038699" 
              whileHover={{ scale: 1.05 }}
              className="text-blue-600 hover:text-purple-600 transition-colors duration-200 cursor-hover"
            >
              +91 63830 38699
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              x: 10,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)" 
            }}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg border border-blue-100 cursor-hover"
          >
            <span className="font-semibold">🔗 LinkedIn:</span>
            <motion.a
              href="https://www.linkedin.com/in/yokie-yokie-4b016a290"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-blue-600 hover:text-purple-600 break-all transition-colors duration-200 cursor-hover"
            >
              linkedin.com/in/yokie-yokie-4b016a290
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              x: 10,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)" 
            }}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg border border-blue-100 cursor-hover"
          >
            <span className="font-semibold">🌐 GitHub:</span>
            <motion.a
              href="https://github.com/Yokeshraj05"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-blue-600 hover:text-purple-600 break-all transition-colors duration-200 cursor-hover"
            >
              github.com/Yokeshraj05
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;