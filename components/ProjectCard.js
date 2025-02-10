import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card bg-darkBg p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
      <div className="project-image mb-6">
        <image
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-2xl font-semibold text-primary mb-4">{project.title}</h3>
      <p className="text-lg text-gray-300 mb-4">{project.description}</p>
      <div className="project-buttons flex justify-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-opacity-80 transition-all"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
