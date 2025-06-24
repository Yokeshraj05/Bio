import React from 'react'

const Resume = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>
      <iframe
        src="/YOKESH-SDE.pdf"
        title="Resume"
        className="w-full md:w-3/4 h-[90vh] border shadow-lg rounded-lg"
      ></iframe>
    </div>
  );
};

export default Resume