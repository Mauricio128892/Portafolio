// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    // Contenedor principal del pie de página.
    // py-8: Padding vertical.
    // px-4 md:px-8 lg:px-16: Padding horizontal responsivo.
    // bg-wood-dark: Color de fondo (asumiendo que quieres el color de madera oscura).
    // text-white: Color de texto.
    // text-center: Centra el texto.
    // relative z-10: Asegura que esté por encima del fondo general.
    <footer className="py-8 px-4 md:px-8 lg:px-16 bg-wood-dark text-white text-center relative z-10">
      {/* Contenedor para la imagen del Going Merry */}
      {/* w-full: Ocupa todo el ancho disponible. */}
      {/* h-auto: Mantiene la proporción de la imagen. */}
      {/* object-contain: Escala la imagen para que quepa dentro del contenedor sin recortarla. */}
      {/* mx-auto: Centra la imagen horizontalmente. */}
      {/* opacity-80: Reduce la opacidad para que sea más sutil. */}
      {/* mb-2: Margen inferior para separar la imagen del texto del copyright (reducido). */}
      <div className="w-full text-center mb-2">
        <img
          src="/images/goingmerry.jpg" // Asegúrate de que esta ruta sea correcta
          alt="Going Merry"
          className="w-full h-auto max-w-xs mx-auto object-contain opacity-80 animate-float-up" // ¡Añadida la clase animate-float-up!
        />
      </div>

      {/* Texto de copyright o información del pie de página */}
      <p className="text-white">&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p> {/* Asegurado text-white */}
    </footer>
  );
};

export default Footer;
