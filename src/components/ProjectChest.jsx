// src/components/ProjectChest.jsx
import React from 'react';

const ProjectChest = ({ project, onClick }) => {
  return (
    <div
      // Se añadió 'w-full' para que el cuadro ocupe todo el ancho disponible en su columna.
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-center cursor-pointer transform transition-transform duration-200 hover:scale-105 border-4 border-transparent hover:border-primary-gold w-full"
      onClick={onClick}
    >
      {/* Título del proyecto: Cambiado a font-pirata-one para mejor legibilidad */}
      <h3 className="text-2xl font-pirata-one text-primary-gold mb-2">{project.title}</h3>
      <p className="text-lg leading-relaxed text-white mb-4">Haz clic para ver más detalles del proyecto.</p>
      {/* Puedes poner una imagen de un cofre aquí si quieres */}
      <img 
        src="/images/cofre.png" // Asegúrate de tener una imagen de cofre en esta ruta
        alt="Abrir Cofre" 
        className="mx-auto w-32 h-32 object-contain mt-4" 
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/128x128/555/eee?text=Cofre"; }}
      />
      <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
        Abrir Cofre
      </button>
    </div>
  );
};

export default ProjectChest;
