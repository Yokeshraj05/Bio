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

const Contact = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4">Contact Me</h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-10">Feel free to reach out via the details below 👇</p>

        <div className="space-y-4 sm:space-y-6 text-left max-w-lg mx-auto text-sm sm:text-base lg:text-lg">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 p-3 sm:p-4 bg-blue-50 rounded-lg">
            <span className="font-semibold">📧 Email:</span>
            <a href="mailto:yokeshraj6662@gmail.com" className="text-blue-600 hover:underline break-all transition-colors duration-200">
              yokeshraj6662@gmail.com
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 p-3 sm:p-4 bg-blue-50 rounded-lg">
            <span className="font-semibold">📱 Phone:</span>
            <a href="tel:+916383038699" className="text-blue-600 hover:underline transition-colors duration-200">
              +91 63830 38699
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 p-3 sm:p-4 bg-blue-50 rounded-lg">
            <span className="font-semibold">🔗 LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/yokie-yokie-4b016a290"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all transition-colors duration-200"
            >
              linkedin.com/in/yokie-yokie-4b016a290
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 p-3 sm:p-4 bg-blue-50 rounded-lg">
            <span className="font-semibold">🌐 GitHub:</span>
            <a
              href="https://github.com/Yokeshraj05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all transition-colors duration-200"
            >
              github.com/Yokeshraj05
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;