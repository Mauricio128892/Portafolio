// src/components/AboutMe.jsx
import React, { useRef, useState, useEffect, useCallback } from 'react';

const AboutMe = () => {
  const risaAudioRef = useRef(null); // Referencia para el audio de la risa
  const sectionRef = useRef(null); // Referencia para la sección completa
  // Eliminado el estado para los rayos de Haki
  // const [hakiRays, setHakiRays] = useState([]); 
  const [luffyPowerAnimation, setLuffyPowerAnimation] = useState(''); // Estado para la animación de poder de Luffy
  const [sectionShakeAnimation, setSectionShakeAnimation] = useState(''); // Estado para la animación de temblor de la sección
  const [showAnimatedLuffy, setShowAnimatedLuffy] = useState(false); // Estado para controlar la visibilidad del Luffy animado

  useEffect(() => {
    // Inicializa el audio de la risa de Luffy
    risaAudioRef.current = new Audio('/audio/risa.mp3');
    risaAudioRef.current.load(); // Precarga el audio

    // Limpieza al desmontar el componente
    return () => {
      if (risaAudioRef.current) {
        risaAudioRef.current.pause();
        risaAudioRef.current.currentTime = 0;
      }
      risaAudioRef.current = null;
    };
  }, []); // Se ejecuta solo una vez al montar y desmontar

  // Manejador de clic para el GIF de Luffy
  const handleLuffyClick = useCallback(() => {
    if (risaAudioRef.current) {
      risaAudioRef.current.pause(); // Pausa si ya se estaba reproduciendo
      risaAudioRef.current.currentTime = 0; // Reinicia el audio
      risaAudioRef.current.play().catch(e => console.error("Error al reproducir el audio de risa:", e));

      // Activa la animación de poder de Luffy
      setShowAnimatedLuffy(true); // Muestra el Luffy animado
      setLuffyPowerAnimation('animate-luffy-power-release'); // Aplica la animación de poder
      // Activa la animación de temblor de la sección
      setSectionShakeAnimation('animate-section-tremble');

      // Eliminado la generación de rayos de Haki
      // const newRays = [];
      // const numberOfRays = 40; 
      // const rayDuration = 6000; 
      // const maxDelay = 2000; 

      // for (let i = 0; i < numberOfRays; i++) {
      //   const top = Math.random() * (80) + 10; 
      //   const left = Math.random() * 100; 
      //   const size = Math.random() * (250 - 100) + 100; 
      //   const delay = (i / numberOfRays) * maxDelay; 
      //   const shakeDirection = Math.random() > 0.5 ? 1 : -1; 

      //   newRays.push({
      //     id: Date.now() + i, 
      //     top: `${top}%`,
      //     left: `${left}%`,
      //     width: `${size}px`,
      //     height: `${size}px`,
      //     delay: `${delay}ms`, 
      //     shakeDirection: shakeDirection 
      //   });
      // }

      // setHakiRays(newRays);

      // Eliminar las referencias a los rayos en el setTimeout
      setTimeout(() => {
        // setHakiRays([]); // Eliminado
        setLuffyPowerAnimation('');
        setShowAnimatedLuffy(false); // Oculta el Luffy animado
        setSectionShakeAnimation('');
      }, 6000); // La duración de la animación de Luffy sigue siendo 6 segundos
    }
  }, []);

  return (
    <div className="about-me-container">
      <section
        id="sobre-mi"
        ref={sectionRef}
        className={`px-4 md:px-8 lg:px-16 pt-16 pb-16 bg-[url('/images/fondo2.png')] bg-cover bg-no-repeat bg-center relative z-10 overflow-hidden flex justify-center items-center ${sectionShakeAnimation}`}
      >
        {/* Separador superior */}
        <div className="w-full h-8 bg-[#15171F] absolute top-0 left-0"></div>

        {/* Contenedor principal del contenido. */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-x-8 relative z-10 w-full">

          {/* Contenedor de la información de "Sobre Mí" */}
          {/* Fondo a blanco */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg lg:pr-8">
            {/* Título principal a vibrant-purple con !important */}
            <h2 className="text-5xl md:text-6xl font-pirata-one text-vibrant-purple !important text-left mb-12">
              Sobre Mí
            </h2>

            <div className="mb-10">
              {/* Título de subsección a vibrant-purple con !important */}
              <h3 className="text-3xl font-metal-mania text-vibrant-purple !important mb-4">Formación</h3>
              {/* Párrafo a vibrant-purple con !important */}
              <p className="text-lg leading-relaxed text-vibrant-purple !important">Aquí va a ir la información de la formación.</p>
            </div>

            <div className="mb-10">
              {/* Título de subsección a vibrant-purple con !important */}
              <h3 className="text-3xl font-metal-mania text-vibrant-purple !important mb-4">El Saber Hacer</h3>
              {/* Párrafo a vibrant-purple con !important */}
              <p className="text-lg leading-relaxed text-vibrant-purple !important">Aquí va a estar la información de saber hacer.</p>
            </div>

            <div className="mb-10">
              {/* Título de subsección a vibrant-purple con !important */}
              <h3 className="text-3xl font-metal-mania text-vibrant-purple !important mb-4">El Saber Ser</h3>
              {/* Párrafo a vibrant-purple con !important */}
              <p className="text-lg leading-relaxed text-vibrant-purple !important">Aquí va a ir la información de saber ser.</p>
            </div>

            <div className="mb-10">
              {/* Título de subsección a vibrant-purple con !important */}
              <h3 className="text-3xl font-metal-mania text-vibrant-purple !important mb-4">Cursos y Formación Extra</h3>
              {/* Párrafo a vibrant-purple con !important */}
              <p className="text-lg leading-relaxed text-vibrant-purple !important">Aquí va a ir la información de cursos y formación extra.</p>
            </div>

            <div>
              {/* Título de subsección a vibrant-purple con !important */}
              <h3 className="text-3xl font-metal-mania text-vibrant-purple !important mb-4">Pasatiempos</h3>
              {/* Párrafo a vibrant-purple con !important */}
              <p className="text-lg leading-relaxed text-vibrant-purple !important">Aquí va a ir la información de pasatiempos.</p>
            </div>
          </div>
          
          {/* Contenedor del GIF de Luffy */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end lg:mr-8">
            <div className="relative w-full h-full flex justify-center items-center">
              {/* Luffy ORIGINAL - visible cuando la animación NO está activa */}
              {!showAnimatedLuffy && (
                <img
                  src="/images/gear5.gif"
                  alt="Gear 5 GIF"
                  className={`relative w-full max-h-[45.5vh] lg:max-h-[50vh] object-contain cursor-pointer z-10`}
                  onClick={handleLuffyClick}
                />
              )}

              {/* Luffy ANIMADO - visible SOLO cuando la animación está activa */}
              {showAnimatedLuffy && (
                <>
                  {/* Aura para el Luffy animado */}
                  <div className={`luffy-aura animate-luffy-aura-release`}></div>
                  <img
                    src="/images/gear5.gif"
                    alt="Gear 5 GIF Animation"
                    className={`relative w-full max-h-[45.5vh] lg:max-h-[50vh] object-contain animate-luffy-power-release z-20`}
                  />
                </>
              )}
            </div>
          </div>

        </div>

        {/* Eliminado el renderizado de los rayos de Haki */}
        {/* {hakiRays.map(ray => (
          <img
            key={ray.id}
            src="/images/rayo.png"
            alt="Rayo Haki"
            className="absolute object-contain animate-haki-agitate z-40"
            style={{
              top: ray.top,
              left: ray.left,
              width: ray.width,
              height: ray.height,
              transform: `translate(-50%, -50%) rotate(${ray.initialRotation}deg)`,
              animationDelay: ray.delay,
              '--shake-direction': ray.shakeDirection,
            }}
          />
        ))} */}

        {/* Separador inferior */}
        <div className="w-full h-8 bg-[#15171F] absolute bottom-0 left-0"></div>
      </section>

      <style>{`
        /* Eliminado @keyframes haki-agitate */

        @keyframes luffy-power-release {
          0% { filter: brightness(1); }
          5% { filter: brightness(2.5) drop-shadow(0 0 35px yellow) drop-shadow(0 0 60px orange); }
          95% { filter: brightness(2.5) drop-shadow(0 0 35px yellow) drop-shadow(0 0 60px orange); }
          100% { filter: brightness(1); }
        }
        .animate-luffy-power-release {
          animation: luffy-power-release 6s ease-in-out forwards; /* Dura 6 segundos */
        }

        .luffy-aura {
          position: absolute;
          width: 50%;
          height: 50%;
          border-radius: 50%;
          opacity: 0;
          transform: scale(0);
          z-index: 0;
          filter: blur(20px);
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scale(0);
        }

        @keyframes luffy-aura-effect {
          0% { opacity: 0; transform: translateX(-50%) scale(0); }
          5% { opacity: 0.5; transform: translateX(-50%) scale(1.5); }
          50% { opacity: 0.7; transform: translateX(-50%) scale(2.0); }
          95% { opacity: 0.5; transform: translateX(-50%) scale(1.5); }
          100% { opacity: 0; transform: translateX(-50%) scale(0); }
        }
        .animate-luffy-aura-release {
          animation: luffy-aura-effect 6s ease-out forwards;
        }

        @keyframes section-tremble {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-3px, -3px); }
          20% { transform: translate(3px, 3px); }
          30% { transform: translate(-3px, 3px); }
          40% { transform: translate(3px, -3px); }
          50% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          70% { transform: translate(-3px, 3px); }
          80% { transform: translate(3px, -3px); }
          90% { transform: translate(-3px, -3px); }
          100% { transform: translate(0, 0); }
        }
        .animate-section-tremble {
          animation: section-tremble 0.1s infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
