import React, { useRef, useState, useEffect, useCallback } from 'react';

const AboutMe = () => {
  const risaAudioRef = useRef(null);
  const sectionRef = useRef(null);
  const [hakiRays, setHakiRays] = useState([]);
  const [sectionShakeAnimation, setSectionShakeAnimation] = useState('');
  // Estado para controlar si el Luffy original está siendo "cubierto" por la animación
  const [showAnimatedLuffy, setShowAnimatedLuffy] = useState(false);

  useEffect(() => {
    risaAudioRef.current = new Audio('/audio/risa.mp3');
    risaAudioRef.current.load();

    return () => {
      if (risaAudioRef.current) {
        risaAudioRef.current.pause();
        risaAudioRef.current.currentTime = 0;
      }
      risaAudioRef.current = null;
    };
  }, []);

  const handleLuffyClick = useCallback(() => {
    if (risaAudioRef.current) {
      risaAudioRef.current.pause();
      risaAudioRef.current.currentTime = 0;
      risaAudioRef.current.play().catch(e => console.error("Error al reproducir el audio de risa:", e));

      setShowAnimatedLuffy(true); // Mostrar el Luffy animado
      setSectionShakeAnimation('animate-section-tremble');

      const newRays = [];
      const numberOfRays = 15;
      const rayDuration = 6000;
      const maxDelay = 1500;

      for (let i = 0; i < numberOfRays; i++) {
        const top = Math.random() * (80) + 10;
        const left = Math.random() * 100;
        const size = Math.random() * (200 - 80) + 80;
        const initialRotation = Math.random() * 360;
        const delay = (i / numberOfRays) * maxDelay;
        const shakeDirection = Math.random() > 0.5 ? 1 : -1;

        newRays.push({
          id: Date.now() + i,
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          initialRotation: initialRotation,
          delay: `${delay}ms`,
          '--shake-direction': shakeDirection,
        });
      }

      setHakiRays(newRays);

      setTimeout(() => {
        setHakiRays([]);
        setSectionShakeAnimation('');
        setShowAnimatedLuffy(false); // Ocultar el Luffy animado después de la animación
      }, rayDuration);
    }
  }, []);

  return (
    <div className="about-me-container">
      <section
        id="sobre-mi"
        ref={sectionRef}
        className={`py-20 px-4 md:px-8 lg:px-16 bg-[url('/images/fondo2.png')] bg-cover bg-no-repeat bg-center relative z-10 overflow-hidden min-h-screen ${sectionShakeAnimation}`}
      >
        {/* Separador superior - ABSOLUTO RESPECTO A LA SECCIÓN */}
        <div className="w-full h-8 bg-[#15171F] absolute top-0 left-0"></div>

        {/* Contenedor principal del contenido de texto */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-start gap-x-16 relative z-10 h-full">
          {/* Contenedor para el fondo negro del texto. */}
          <div className="w-full lg:w-1/2 bg-black p-6 rounded-lg shadow-lg text-white mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-5xl md:text-6xl font-pirata-one text-amber-500 text-left mb-12">
              Sobre Mí
            </h2>

            <div className="mb-10">
              <h3 className="3xl font-metal-mania text-amber-500 mb-4">Formación</h3>
              <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de la formación.</p>
            </div>

            <div className="mb-10">
              <h3 className="3xl font-metal-mania text-amber-500 mb-4">El Saber Hacer</h3>
              <p className="text-lg leading-relaxed text-white">Aquí va a estar la información de saber hacer.</p>
            </div>

            <div className="mb-10">
              <h3 className="3xl font-metal-mania text-amber-500 mb-4">El Saber Ser</h3>
              <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de saber ser.</p>
            </div>

            <div className="mb-10">
              <h3 className="3xl font-metal-mania text-amber-500 mb-4">Cursos y Formación Extra</h3>
              <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de cursos y formación extra.</p>
            </div>

            <div>
              <h3 className="3xl font-metal-mania text-amber-500 mb-4">Pasatiempos</h3>
              <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de pasatiempos.</p>
            </div>
          </div>
        </div>

        {/* CONTENEDOR ESPECÍFICO PARA LOS SUELOS - Restaurado a tu código original */}
        <div
          className="w-full lg:w-[45%] absolute bottom-0 left-1/2 transform -translate-x-1/2"
          style={{ height: 'auto', maxHeight: 'calc(100% - 8rem)' }}
        >
          <img
            src="/images/suelo.png"
            alt="Suelo 1"
            className="absolute w-full h-[10vh] object-cover left-24 -translate-x-1/2 z-0"
            style={{ bottom: '0vh' }}
          />
          <img
            src="/images/suelo.png"
            alt="Suelo 2"
            className="absolute w-full h-[10vh] object-cover left-24 -translate-x-1/2 z-0"
            style={{ bottom: '9vh' }}
          />
          <img
            src="/images/suelo.png"
            alt="Suelo 3"
            className="absolute w-full h-[10vh] object-cover left-24 -translate-x-1/2 z-0"
            style={{ bottom: '18vh' }}
          />
          <img
            src="/images/suelo.png"
            alt="Suelo 4"
            className="absolute w-full h-[10vh] object-cover left-24 -translate-x-1/2 z-0"
            style={{ bottom: '27vh' }}
          />
        </div>

        {/* CONTENEDOR DE LUFFY (PADRE DE ORIGINAL Y ANIMADO) */}
        {/* Este contenedor mantiene la posición del Luffy original */}
        <div
          className="absolute bottom-0 right-0 transform translate-x-1/4 flex justify-center items-end"
          style={{ width: '45%', height: '80vh', zIndex: 20 }}
        >
          {/* Luffy ORIGINAL - visible cuando la animación NO está activa */}
          {!showAnimatedLuffy && (
            <img
              src="/images/gear5.gif"
              alt="Gear 5 GIF"
              className={`relative w-full h-full object-contain cursor-pointer z-10`}
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
                className={`relative w-full h-full object-contain animate-luffy-power-release z-20`}
                // No es clickeable, solo una visualización temporal
              />
            </>
          )}
        </div>

        {/* Renderizado de los rayos de Haki */}
        {hakiRays.map(ray => (
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
        ))}

        {/* Separador inferior - ABSOLUTO RESPECTO A LA SECCIÓN */}
        <div className="w-full h-8 bg-[#15171F] absolute bottom-0 left-0"></div>
      </section>

      <style>{`
        /* Tus estilos de animación aquí */
        @keyframes haki-agitate {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5) translateX(0px); }
          5% { opacity: 1; transform: translate(-50%, -50%) scale(1.2) translateX(0px); }
          10%, 30%, 50%, 70%, 90% { transform: translate(-50%, -50%) scale(1.2) translateX(calc(var(--shake-direction, 1) * 20px)); }
          20%, 40%, 60%, 80% { transform: translate(-50%, -50%) scale(1.2) translateX(calc(var(--shake-direction, 1) * -20px)); }
          95% { opacity: 1; transform: translate(-50%, -50%) scale(1.2) translateX(0px); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.3) translateX(0px); }
        }
        .animate-haki-agitate {
          animation: haki-agitate 6s ease-out forwards;
        }

        @keyframes luffy-power-release {
          0% { transform: scale(1) rotate(0deg); filter: brightness(1); }
          5% { transform: scale(1.1) rotate(5deg); filter: brightness(1); }
          95% { transform: scale(1.1) rotate(-5deg); filter: brightness(1); }
          100% { transform: scale(1) rotate(0deg); filter: brightness(1); }
        }
        .animate-luffy-power-release {
          animation: luffy-power-release 6s ease-in-out forwards;
        }

        /* NEW AURA ANIMATION - MODIFIED FOR SUBTLE BLUR */
        .luffy-aura {
          position: absolute;
          width: 50%; /* Start size, relative to parent container */
          height: 50%;
          border-radius: 50%;
          opacity: 0;
          transform: scale(0);
          z-index: 0; /* Behind Luffy */
          filter: blur(20px); /* Keep the blur effect */
          bottom: 0; /* Asegurarse de que esté en la base del Luffy */
          left: 50%;
          transform: translateX(-50%) scale(0); /* Centrar horizontalmente y escalar */
        }

        @keyframes luffy-aura-effect {
          0% { opacity: 0; transform: translateX(-50%) scale(0); }
          5% { opacity: 0.5; transform: translateX(-50%) scale(1.5); }
          50% { opacity: 0.7; transform: translateX(-50%) scale(2.0); }
          95% { opacity: 0.5; transform: translateX(-50%) scale(1.5); }
          100% { opacity: 0; transform: translateX(-50%) scale(0); }
        }
        .animate-luffy-aura-release {
          animation: luffy-aura-effect 6s ease-out forwards; /* Matches ray duration */
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