import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import ProjectChest from './ProjectChest';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    { id: 1, title: 'Proyecto 1', link: 'https://github.com/tu-usuario/proyecto1', images: ['foto 1', 'foto 2', 'foto 3', 'foto 4'] },
    { id: 2, title: 'Proyecto 2', link: 'https://github.com/tu-usuario/proyecto2', images: ['foto 1', 'foto 2', 'foto 3', 'foto 4'] },
    { id: 3, title: 'Proyecto 3', link: 'https://github.com/tu-usuario/proyecto3', images: ['foto 1', 'foto 2', 'foto 3', 'foto 4'] },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="proyectos" className="relative bg-black min-h-screen flex flex-col justify-center items-center py-16">
      {/* Background of the section without opacity */}
      <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/images/fondo3.png')" }}></div>

      {/* Solo se mantiene el contenido principal, sin animaciones ni videos */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between p-4">
        {/* Left Side: Garp GIF (ESTÁTICO) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <div className="relative">
            {/* La imagen de Garp, ahora sin el onClick y sin clases de animación */}
            <img
              src="/images/2.gif" // Usando el GIF de Garp (llamado 2.gif)
              alt="Garp" // Alt text simple, ya no "showing his power"
              className="max-h-screen object-contain relative z-30" // Clases para posicionamiento y tamaño
              // Eliminado: onClick={playSound}
              // Eliminado: {isAudioPlaying ? 'animate-garp-epic-transformation' : ''}
            />
            {/* Eliminado: <audio ref={audioRef} src="/audio/sound4.mp3" preload="auto"></audio> */}
          </div>
        </div>

        {/* Right Side: Projects Container */}
        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-8">
          {projectsData.map((project) => (
            <ProjectChest
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
              // Eliminado: isAudioPlaying={isAudioPlaying}
            />
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}

      {/* No es necesario el bloque <style jsx> si no hay animaciones ni estilos complejos */}
      {/* Si tienes estilos globales en un archivo CSS aparte, asegúrate de que no interfieran aquí */}
    </section>
  );
};

export default Projects;