// src/components/Header.jsx
import React, { useState, useEffect, useCallback } from 'react';
// Importa los iconos de redes sociales. Asegúrate de tener 'react-icons' instalado.
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Header = () => {
  // Estado para controlar la visibilidad del navbar
  const [isVisible, setIsVisible] = useState(true);
  // Estado para guardar la última posición de scroll
  const [lastScrollY, setLastScrollY] = useState(0);

  // Inicializa lastScrollY en el montaje del componente a la posición actual del scroll
  useEffect(() => {
    setLastScrollY(window.scrollY);
  }, []);

  // Función para manejar el evento de scroll
  const handleScroll = useCallback(() => {
    // Obtiene la posición actual del scroll vertical
    const currentScrollY = window.scrollY;

    // Si el scroll actual es mayor que el último scroll (bajando)
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Oculta el navbar
    } 
    // Si el scroll actual es menor que el último scroll (subiendo)
    else {
      setIsVisible(true); // Muestra el navbar (esto incluye cuando currentScrollY === 0)
    }
    
    // Actualiza la última posición de scroll
    setLastScrollY(currentScrollY);
  }, [lastScrollY]); // lastScrollY es una dependencia suficiente

  // useEffect para añadir y limpiar el event listener del scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Función de limpieza al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    // La etiqueta header es la barra de navegación principal.
    // fixed top-0 z-50: Fija la barra en la parte superior.
    // transform transition-transform duration-300 ease-in-out: Para una animación suave.
    // isVisible ? 'translate-y-0' : '-translate-y-full': Aplica la clase para mostrar/ocultar.
    <header className={`fixed top-0 w-full z-50
                       bg-[#4A2C2A] /* Color café madera más oscuro para el navbar */
                       border-b-8 border-primary-gold
                       shadow-lg py-4 px-8 flex justify-between items-center
                       transform transition-transform duration-300 ease-in-out
                       ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Sección de navegación principal. */}
      <nav>
        <ul className="flex space-x-6 md:space-x-10"> {/* Espaciado entre los enlaces. */}
          <li>
            {/* Enlace a la sección "Inicio". */}
            {/* text-wood-light: Color de texto claro para el enlace (por defecto). */}
            {/* hover:text-primary-gold: El texto se vuelve dorado al pasar el ratón. */}
            {/* transition-all duration-300 transform hover:scale-110: Animación suave al hacer hover. */}
            <a href="#inicio" className="group flex items-center space-x-2
                                        text-wood-light
                                        hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
              <span className="font-adventure text-lg">Inicio</span>
            </a>
          </li>
          <li>
            {/* Enlace a la sección "Sobre Mí". */}
            {/* text-wood-medium: Un tono de madera medio para los enlaces no activos. */}
            <a href="#sobre-mi" className="group flex items-center space-x-2
                                        text-wood-medium
                                        hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
              <span className="font-adventure text-lg">Sobre Mí</span>
            </a>
          </li>
          <li>
            {/* Enlace a la sección "Proyectos". */}
            <a href="#proyectos" className="group flex items-center space-x-2
                                        text-wood-medium
                                        hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
              <span className="font-adventure text-lg">Proyectos</span>
            </a>
          </li>
          <li>
            {/* Enlace a la sección "Blogs". */}
            <a href="#blogs" className="group flex items-center space-x-2
                                        text-wood-medium
                                        hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
              <span className="font-adventure text-lg">Blogs</span>
            </a>
          </li>
          <li>
            {/* Enlace a la sección "Contacto". */}
            <a href="#contacto" className="group flex items-center space-x-2
                                        text-wood-medium
                                        hover:text-primary-gold transition-all duration-300 transform hover:scale-110">
              <span className="font-adventure text-lg">Contacto</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Sección de iconos de redes sociales. */}
      <div className="flex space-x-4"> {/* Espaciado entre los iconos. */}
        {/* Enlace a GitHub. */}
        {/* text-wood-light: Color de los iconos. */}
        {/* hover:text-primary-gold: Se vuelven dorados al pasar el ratón. */}
        {/* transform hover:scale-125: Animación de escala al hacer hover. */}
        <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer"
           className="text-wood-light hover:text-primary-gold transition-colors duration-300 transform hover:scale-125">
          <FaGithub className="w-7 h-7" /> {/* Icono de GitHub. */}
        </a>
        {/* Enlace a LinkedIn. */}
        <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer"
           className="text-wood-light hover:text-primary-gold transition-colors duration-300 transform hover:scale-125">
          <FaLinkedin className="w-7 h-7" /> {/* Icono de LinkedIn. */}
        </a>
        {/* Enlace a YouTube. */}
        <a href="https://youtube.com/tu_canal" target="_blank" rel="noopener noreferrer"
           className="text-wood-light hover:text-primary-gold transition-colors duration-300 transform hover:scale-125">
          <FaYoutube className="w-7 h-7" /> {/* Icono de YouTube. */}
        </a>
      </div>
    </header>
  );
};

export default Header;
