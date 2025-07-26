// src/components/Header.jsx
import React from 'react';
// Importa los iconos de redes sociales. Asegúrate de tener 'react-icons' instalado.
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';


const Header = () => {
  return (

    <header className="sticky top-0 z-50
                       bg-wood-dark
                       border-b-8 border-primary-gold
                       shadow-lg py-4 px-8 flex justify-between items-center">

      <nav>
        <ul className="flex space-x-6 md:space-x-10"> 
          <li>
    
            <a href="#inicio" className="group flex items-center space-x-2
                                        text-wood-light
                                        hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
              <span className="font-adventure text-lg">Inicio</span>
            </a>
          </li>
          <li>
         
            <a href="#sobre-mi" className="group flex items-center space-x-2
                                        text-wood-medium
                                        hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
              <span className="font-adventure text-lg">Sobre Mí</span>
            </a>
          </li>
          <li>
           
            <a href="#proyectos" className="group flex items-center space-x-2
                                        text-wood-medium
                                        hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
              <span className="font-adventure text-lg">Proyectos</span>
            </a>
          </li>
          <li>
            
            <a href="#blogs" className="group flex items-center space-x-2
                                        text-wood-medium
                                        hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
              <span className="font-adventure text-lg">Blogs</span>
            </a>
          </li>
          <li>
            
            <a href="#contacto" className="group flex items-center space-x-2
                                        text-wood-medium
                                        hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
              <span className="font-adventure text-lg">Contacto</span>
            </a>
          </li>
        </ul>
      </nav>

   
      <div className="flex space-x-4"> 
  
    
        <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer"
           className="text-wood-light hover:text-primary-gold transition-colors duration-300 transform hover:scale-125">
          <FaGithub className="w-7 h-7" /> 
        </a>
  
        <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer"
           className="text-wood-light hover:text-primary-gold transition-colors duration-300 transform hover:scale-125">
          <FaLinkedin className="w-7 h-7" /> 
        </a>
  
        <a href="https://youtube.com/tu_canal" target="_blank" rel="noopener noreferrer"
           className="text-wood-light hover:text-primary-gold transition-colors duration-300 transform hover:scale-125">
          <FaYoutube className="w-7 h-7" /> 
        </a>
      </div>
    </header>
  );
};

export default Header;
