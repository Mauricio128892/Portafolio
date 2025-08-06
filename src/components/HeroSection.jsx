import React, { useEffect, useRef, useState, useCallback } from 'react';

const HeroSection = () => {
  const luffyAudioRef = useRef(null);
  // Eliminado: mingoAudioRef
  // Eliminado: mingoImageRef
  const cartelImageRef = useRef(null);
  const [luffyAnimationState, setLuffyAnimationState] = useState('idle');
  // Eliminado: mingoAnimation
  const [cartelAnimation, setCartelAnimation] = useState('');

  useEffect(() => {
    // Inicializa el audio de Luffy
    luffyAudioRef.current = new Audio('/audio/sonido1.mp3');
    luffyAudioRef.current.load();

    // Eliminado: Inicialización del audio de Mingo
    // mingoAudioRef.current = new Audio('/audio/mingo.mp3');
    // mingoAudioRef.current.load();

    const audio = luffyAudioRef.current;
    const handleAudioEnded = () => {
      console.log('Audio terminado, Luffy regresando...');
      setLuffyAnimationState('returning');
    };

    audio.addEventListener('ended', handleAudioEnded);

    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleAudioEnded);
        audio.pause();
        audio.currentTime = 0;
      }
      // Eliminado: Limpieza del audio de Mingo
      // if (mingoAudioRef.current) {
      //   mingoAudioRef.current.pause();
      //   mingoAudioRef.current.currentTime = 0;
      // }
      luffyAudioRef.current = null;
      // Eliminado: mingoAudioRef.current = null;
    };
  }, []);

  const handleLuffyClick = () => {
    if (luffyAudioRef.current && luffyAnimationState === 'idle') {
      setLuffyAnimationState('leaving');
      luffyAudioRef.current.pause();
      luffyAudioRef.current.currentTime = 0;
      luffyAudioRef.current.play().catch(e => console.error("Error al reproducir el audio:", e));
    }
  };

  useEffect(() => {
    if (luffyAnimationState === 'returning') {
      const returnDuration = 1000;
      const timer = setTimeout(() => {
        setLuffyAnimationState('idle');
      }, returnDuration);
      return () => clearTimeout(timer);
    }
  }, [luffyAnimationState]);

  const getLuffyAnimationClasses = () => {
    let animationClass = '';
    if (luffyAnimationState === 'leaving') {
      animationClass = 'animate-slide-out-left';
    } else if (luffyAnimationState === 'returning') {
      animationClass = 'animate-slide-in-right-fade-in';
    }
    return `object-contain cursor-pointer ${animationClass}`;
  };

  // Eliminado: handleMingoClick

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full
                   bg-cover bg-center bg-no-repeat overflow-hidden" // Se eliminaron las clases de flexbox
      style={{ backgroundImage: `url('/images/cielo2.gif')` }}
    >
      {/* Contenedor principal para el grupo de Mingo, cuerda y cartel */}
      {/* Se ha cambiado justify-center a justify-start y se ha añadido padding-left responsivo */}
      {/* Eliminado el div padre con top: '5vh' */}
      <div className="relative w-full h-full flex justify-start items-start pt-10 md:pt-20 lg:pt-0 pl-4 md:pl-8 lg:pl-16">
        {/* Contenedor del grupo Mingo, cuerda y cartel */}
        {/* Se ha añadido posicionamiento left responsivo para mover el grupo a la izquierda */}
        {/* Posicionado directamente debajo del navbar con top-[70px] */}
        <div className="absolute top-[70px] left-[5%] md:left-[8%] lg:left-[10%] flex flex-col items-center">
          {/* Eliminado: Imagen de Mingo */}
          {/* Cuerda: Ajustado height para responsividad */}
          <div className="h-[80px] md:h-[100px] lg:h-[120px] w-[2px] bg-white origin-top animate-swing-rope z-20"></div>
          {/* Cartel: Ajustado width y height para ser 35% más chicos */}
          <img
            ref={cartelImageRef}
            src="/images/cartel.png"
            alt="Cartel de Se Busca"
            className={`w-[163px] h-[228px] object-contain animate-swing-poster origin-top z-10 ${cartelAnimation}
                        md:w-[260px] md:h-[358px]
                        lg:w-[325px] lg:h-[455px]`}
            style={{ marginTop: '-2px' }}
            // Eliminado: onClick={handleMingoClick}
          />
        </div>
      </div>

      <img
        src="/images/luffy.gif"
        alt="Luffy navegando en su barco"
        // Ajustado height para ser 25% más pequeño
        className={`absolute bottom-[0px] right-0 h-[225px] object-contain z-20 ${getLuffyAnimationClasses()}
                    md:h-[300px] lg:h-[375px]`}
        onClick={handleLuffyClick}
      />

      <style>
        {`
        @keyframes swing-rope {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes swing-poster {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        .animate-swing-rope {
          animation: swing-rope 4s ease-in-out infinite;
        }

        .animate-swing-poster {
          animation: swing-poster 4s ease-in-out infinite;
        }

        @keyframes slide-out-left {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-150%); opacity: 0; }
        }
        .animate-slide-out-left {
          animation: slide-out-left 1s forwards;
        }

        @keyframes slide-in-right-fade-in {
          from { transform: translateX(150%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right-fade-in {
          animation: slide-in-right-fade-in 1s forwards;
        }

        /* Eliminado: @keyframes mingo-laugh */
        /* Eliminado: .animate-mingo-laugh */

        @keyframes cartel-shake {
          0%, 100% { transform: translateX(0) rotate(-5deg); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px) rotate(-8deg); } /* Aumentado el temblor */
          20%, 40%, 60%, 80% { transform: translateX(10px) rotate(-2deg); } /* Aumentado el temblor */
        }
        .animate-cartel-shake {
          animation: cartel-shake 4s ease-in-out; /* Duración ajustada a 4 segundos */
        }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
