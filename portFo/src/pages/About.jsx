import React from 'react'

const About = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto space-y-12">

        <h2 className="text-4xl font-bold text-center text-blue-600">About Me</h2>

        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">🎓 Education</h3>
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <p className="text-lg font-medium">B.E – Computer Science and Engineering</p>
            <p className="text-gray-700">Dhanalakshmi Srinivasan Engineering College, Perambalur, Tamil Nadu</p>
            <p className="text-gray-500 text-sm">Graduated: 2024</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">💼 Experience</h3>
          <div className="bg-blue-50 p-4 rounded-lg shadow mb-2">
            <p className="text-lg font-medium">Frontend Developer (3-Mon)</p>
            <p className="text-gray-700">CognigenNxt</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Built web pages for resort booking and admin management</li>
              <li>Integrated APIs and ensured responsive design</li>
              <li>Worked closely with design and backend teams</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <p className="text-lg font-medium">Frontend Developer Intern (6-Mon)</p>
            <p className="text-gray-700">CognigenNxt</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Built web pages for E-Commerce Website</li>
              <li>Created Product card for listing the products</li>
              <li>Added Cart and Search Functionalities</li>
            </ul>
          </div> 

        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">🛠️ Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
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
              <div
                key={tech}
                className="bg-blue-100 text-blue-800 font-medium py-2 rounded shadow hover:bg-blue-200 transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About