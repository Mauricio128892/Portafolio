// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal'; // Asegúrate de que este componente exista
import ProjectChest from './ProjectChest'; // Asegúrate de que este componente exista

// Recibe onModalOpen y onModalClose como props
const Projects = ({ onModalOpen, onModalClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'Página Web Profesional para Psicóloga',
      description: 'Una página web profesional diseñada para mi madre, una psicóloga. Permite a los visitantes acceder a su información personal, conocer los tipos de terapias que ofrece y sus estudios. Además, los usuarios pueden agendar citas directamente o enviar mensajes a través de WhatsApp, facilitando la comunicación y el acceso a sus servicios.',
      link: 'https://mama432.netlify.app/',
      images: ['/images/foto1.png', '/images/foto2.png', '/images/foto3.png', '/images/foto4.png']
    },
    {
      id: 2,
      title: 'Página Web de Rutinas de Gimnasio',
      description: 'Una plataforma web dedicada a rutinas de gimnasio que incluye un sistema de inicio y cierre de sesión con Google. Los usuarios pueden acceder a diversas rutinas personalizadas y gestionar su progreso de entrenamiento de manera sencilla y segura.',
      link: 'https://examennnn.netlify.app/',
      images: ['/images/foto11.png', '/images/foto12.png', '/images/foto13.png', '/images/foto14.png']
    },
    {
      id: 3,
      title: 'Sistema de Gestión de Recursos Humanos',
      description: 'Una aplicación web de recursos humanos que permite el ingreso mediante una cuenta de Google. Facilita la adición de trabajadores, sus datos y roles, incluye una función de filtrado de búsqueda y una sección dedicada al perfil de usuario, con opción de cerrar sesión.',
      link: 'https://rh2.netlify.app/', // Link corregido
      images: ['/images/foto20.png', '/images/foto21.png', '/images/foto22.png', '/images/foto23.png'] // Imágenes corregidas
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    if (onModalOpen) {
      onModalOpen(); // Llama a la función de App para indicar que el modal está abierto
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    if (onModalClose) {
      onModalClose(); // Llama a la función de App para indicar que el modal está cerrado
    }
  };

  // No es necesario un useEffect para limpiar la clase del body aquí,
  // ya que App.jsx gestiona el estado centralmente.

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
            />
          </div>
        </div>

        {/* Right Side: Projects Container */}
        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-8">
          {projectsData.map((project) => (
            <ProjectChest
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
