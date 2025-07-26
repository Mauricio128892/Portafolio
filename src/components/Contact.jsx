// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (

    <section id="contacto" className="py-20 px-4 md:px-8 lg:px-16 bg-black text-white relative z-10">
      {/* Separador de madera en la parte superior de la sección */}
      <div className="w-full h-8 bg-wood-separator absolute top-0 left-0"></div>

      <div className="max-w-4xl mx-auto text-center">
      
        <h2 className="text-5xl md:text-6xl font-pirata-one text-amber-500 mb-12">
          Contáctame
        </h2>

        {/* Información de contacto */}
        <p className="text-lg leading-relaxed text-white">
          Información personal
        </p>
      </div>

      {/* Separador de madera en la parte inferior de la sección */}
      <div className="w-full h-8 bg-wood-separator absolute bottom-0 left-0"></div>
    </section>
  );
};

export default Contact;
