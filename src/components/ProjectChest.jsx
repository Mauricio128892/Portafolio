import React from 'react';

const ProjectChest = ({ project, onClick, isAudioPlaying }) => { // Accept isAudioPlaying prop
  return (
    <div
      className={`relative w-full max-w-md bg-amber-800 border-4 border-yellow-600 rounded-lg p-6 shadow-xl
                  flex flex-col items-center space-y-4 cursor-pointer
                  transform transition-transform duration-300 hover:scale-105
                  ${isAudioPlaying ? 'animate-chest-tremble-intense' : ''}`} // Apply tremble conditionally
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-repeat opacity-10" style={{ backgroundImage: "url('/images/madera.png')" }}></div> {/* Subtle wood background */}
      <h3 className="relative z-10 text-3xl font-bold text-amber-100 text-center drop-shadow-lg">
        {project.title}
      </h3>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 bg-yellow-500 hover:bg-yellow-600 text-amber-900 font-extrabold py-2 px-6 rounded-full text-lg uppercase tracking-wide
                   transition-colors duration-300 shadow-md transform hover:scale-105"
      >
        ¡Abrir Cofre!
      </a>
    </div>
  );
};

export default ProjectChest;
