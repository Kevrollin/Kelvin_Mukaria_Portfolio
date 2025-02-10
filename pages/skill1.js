<section className="skills-section py-16 bg-gray-900 text-white">
  <div className="container mx-auto">
    {/* Overall Title */}
    <h2 className="text-4xl font-semibold text-primary text-center mb-12">Skills & Technologies</h2>

    <div className="flex flex-col md:flex-row gap-12">
      {/* Tech Skills */}
      <div className="tech-skills flex-1">
        <h3 className="text-3xl font-semibold text-primary mb-6 text-center md:text-left">Tech Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* JavaScript */}
          <div className="tech-card p-6 bg-darkBg rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l1.5 4.5H18l-3.5 3L15 14l-3-2.5L9 14l1.5-4.5L6 9h4.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">JavaScript</h3>
            <div className="progress-bar mt-4 h-2 bg-gray-600 rounded-full">
              <div className="progress h-2 bg-primary w-80"></div>
            </div>
          </div>

          {/* Python */}
          <div className="tech-card p-6 bg-darkBg rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l1.5 4.5H18l-3.5 3L15 14l-3-2.5L9 14l1.5-4.5L6 9h4.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Python</h3>
            <div className="progress-bar mt-4 h-2 bg-gray-600 rounded-full">
              <div className="progress h-2 bg-primary w-70"></div>
            </div>
          </div>

          {/* Add other technologies here */}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="soft-skills flex-1">
        <h3 className="text-3xl font-semibold text-primary mb-6 text-center md:text-left">Soft Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {/* Teamwork */}
          <div className="skill-item bg-darkBg p-6 rounded-lg shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2-2 2 2 3-3-5-5-5 5 3 3z" />
            </svg>
            <h3 className="text-xl font-semibold mt-4">Teamwork</h3>
          </div>

          {/* Problem-Solving */}
          <div className="skill-item bg-darkBg p-6 rounded-lg shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2-2 2 2 3-3-5-5-5 5 3 3z" />
            </svg>
            <h3 className="text-xl font-semibold mt-4">Problem Solving</h3>
          </div>

          {/* Add more soft skills */}
        </div>
      </div>
    </div>
  </div>
</section>