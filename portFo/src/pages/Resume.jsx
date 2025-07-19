import React from 'react'

const Resume = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gray-100 flex flex-col items-center">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">My Resume</h1>
      <iframe
        src="/YOKESH-SDE.pdf"
        title="Resume"
        className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 h-[70vh] sm:h-[80vh] lg:h-[85vh] xl:h-[90vh] border border-gray-300 shadow-lg rounded-lg bg-white"
      ></iframe>
      <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 text-center px-4">
        If the resume doesn't load properly, you can{' '}
        <a 
          href="/YOKESH-SDE.pdf" 
          download 
          className="text-blue-600 hover:underline font-medium"
        >
          download it here
        </a>
      </p>
    </div>
  );
};

export default Resume