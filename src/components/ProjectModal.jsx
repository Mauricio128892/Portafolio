// En tu archivo src/components/ProjectModal.jsx
import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50 p-4">
      {/* Fondo de pergamino o mapa envejecido para el modal - Usando fondo3.png */}
      <div className="relative bg-amber-900 border-4 border-yellow-700 rounded-lg p-8 max-w-4xl w-full
                      shadow-2xl transform scale-95 animate-scale-in opacity-0 fill-mode-forwards"
           style={{ backgroundImage: "url('/images/fondo3.png')", backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>

        {/* Botón de Cerrar (ancla/hueso cruzado) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold p-2
                     hover:text-red-500 transition-colors duration-300"
        >
          &#x2715; {/* Unicode para una 'X' grande */}
        </button>

        {/* Contenido del Modal */}
        <h2 className="text-4xl font-bold text-amber-100 mb-6 border-b-4 border-yellow-700 pb-2 text-center">
          {project.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {project.images.map((image, index) => (
            <div key={index} className="bg-gray-700 h-40 flex justify-center items-center text-gray-400 text-lg rounded-md shadow-inner">
              {image}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full text-lg
                       transition-colors duration-300 shadow-md"
          >
            ¡Zarpar a este Proyecto!
          </a>
        </div>
      </div>

      {/* Animación del modal */}
      <style jsx>{`
        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;