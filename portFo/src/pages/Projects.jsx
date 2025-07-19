import React from 'react'

const projects = [
  {
    title: 'Resort Booking System',
    description: 'A responsive booking platform for users and resort admins with API integration.',
    techStack: ['React', 'Tailwind CSS', 'Flask', 'MySQL'],
    liveLink: 'https://your-demo-link.com',
    githubLink: 'https://github.com/yourusername/resort-booking',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Tailwind CSS.',
    techStack: ['React', 'Tailwind CSS'],
    liveLink: 'https://your-portfolio-link.com',
    githubLink: 'https://github.com/yourusername/portfolio',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8 lg:mb-10">Projects</h2>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 sm:mb-3">{project.title}</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                <strong>Tech Stack:</strong> {project.techStack.join(', ')}
              </p>
              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 text-xs sm:text-sm font-medium">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition-colors duration-200 text-center sm:text-left">
                  🔗 Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition-colors duration-200 text-center sm:text-right">
                  💻 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects