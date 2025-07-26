// src/components/AboutMe.jsx
import React from 'react';

import rogerGif from '../../public/images/roger.gif';

const AboutMe = () => {
  return (
 
    <section id="sobre-mi" className="py-20 px-4 md:px-8 lg:px-16 bg-black relative z-10 overflow-hidden">
    
      <div className="w-full h-8 bg-wood-separator absolute top-0 left-0"></div>

    
      <div className="max-w-4xl mx-auto relative">
      
        <h2 className="text-5xl md:text-6xl font-pirata-one text-amber-500 text-center mb-12">
          Sobre Mí
        </h2>

   
        <div className="mb-10">
          <h3 className="text-3xl font-metal-mania text-amber-500 mb-4">Formación</h3>
          <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de la formación.</p>
        </div>

    
        <div className="mb-10">
          <h3 className="text-3xl font-metal-mania text-amber-500 mb-4">El Saber Hacer</h3>
          <p className="text-lg leading-relaxed text-white">Aquí va a estar la información de saber hacer.</p>
        </div>

   
        <div className="mb-10">
          <h3 className="text-3xl font-metal-mania text-amber-500 mb-4">El Saber Ser</h3>
          <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de saber ser.</p>
        </div>

  
        <div className="mb-10">
          <h3 className="text-3xl font-metal-mania text-amber-500 mb-4">Cursos y Formación Extra</h3>
          <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de cursos y formación extra.</p>
        </div>

        <div>
          <h3 className="text-3xl font-metal-mania text-amber-500 mb-4">Pasatiempos</h3>
          <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de pasatiempos.</p>
        </div>
      </div>

   
      <div className="absolute top-1/4 right-80 z-0">
     
        <img src={rogerGif} alt="Gol D. Roger GIF" className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl opacity-70" />
      </div>

  
      <div className="w-full h-8 bg-wood-separator absolute bottom-0 left-0"></div>
    </section>
  );
};

export default AboutMe;
