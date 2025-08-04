import React, { useRef, useState, useEffect, useCallback } from 'react';

const AboutMe = () => {
  const risaAudioRef = useRef(null);
  const sectionRef = useRef(null);
  const [hakiRays, setHakiRays] = useState([]);
  const [sectionShakeAnimation, setSectionShakeAnimation] = useState('');
  const [showAnimatedLuffy, setShowAnimatedLuffy] = useState(false);

  useEffect(() => {
    // Inicialización y limpieza del audio
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

  // Función para manejar el clic en Luffy
  const handleLuffyClick = useCallback(() => {
    if (risaAudioRef.current) {
      risaAudioRef.current.pause();
      risaAudioRef.current.currentTime = 0;
      risaAudioRef.current.play().catch(e => console.error("Error al reproducir el audio de risa:", e));

      setShowAnimatedLuffy(true);
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
        setShowAnimatedLuffy(false);
      }, rayDuration);
    }
  }, []);

  return (
    <div className="about-me-container">
      <section
        id="sobre-mi"
        ref={sectionRef}
        // Se ha ajustado la sección principal con `pt-16` y `pb-16` para un padding vertical consistente.
        className={`px-4 md:px-8 lg:px-16 pt-16 pb-16 bg-[url('/images/fondo2.png')] bg-cover bg-no-repeat bg-center relative z-10 overflow-hidden flex justify-center items-center ${sectionShakeAnimation}`}
      >
        {/* Separador superior */}
        <div className="w-full h-8 bg-[#15171F] absolute top-0 left-0"></div>

        {/* Contenedor principal del contenido. Se han eliminado los rellenos verticales. */}
        {/* Se utiliza flex-col-reverse para que el GIF vaya arriba en móvil, y se anula con lg:flex-row en desktop. */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-x-8 relative z-10 w-full">

          {/* Contenedor de la información de "Sobre Mí" */}
          {/* Se han eliminado los márgenes inferiores para evitar conflictos con el padding del contenedor padre. */}
          <div className="w-full lg:w-1/2 bg-black p-6 rounded-lg shadow-lg text-white lg:pr-8">
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
          
          {/* Contenedor del GIF de Luffy */}
          {/* Se han eliminado los márgenes inferiores para evitar conflictos con el padding del contenedor padre. */}
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

        {/* Separador inferior */}
        <div className="w-full h-8 bg-[#15171F] absolute bottom-0 left-0"></div>
      </section>

      <style>{`
        /* Animaciones para la sección */
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
