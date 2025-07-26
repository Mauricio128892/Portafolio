// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (

    <footer className="py-8 px-4 md:px-8 lg:px-16 bg-wood-dark text-white text-center relative z-10">
   
      <div className="w-full text-center mb-2">
        <img
          src="/images/goingmerry.jpg" 
          alt="Going Merry"
          className="w-full h-auto max-w-xs mx-auto object-contain opacity-80 animate-float-up" 
        />
      </div>

      <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
