// src/components/HeroSection.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';

const HeroSection = () => {
  const luffyAudioRef = useRef(null);
  const mingoAudioRef = useRef(null);
  const mingoImageRef = useRef(null);
  const cartelImageRef = useRef(null);
  const [luffyAnimationState, setLuffyAnimationState] = useState('idle');
  const [mingoAnimation, setMingoAnimation] = useState('');
  const [cartelAnimation, setCartelAnimation] = useState('');

  useEffect(() => {
    // Inicializa el audio de Luffy
    luffyAudioRef.current = new Audio('/audio/sonido1.mp3');
    luffyAudioRef.current.load();

    // Inicializa el audio de Mingo
    mingoAudioRef.current = new Audio('/audio/mingo.mp3');
    mingoAudioRef.current.load();

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
      if (mingoAudioRef.current) {
        mingoAudioRef.current.pause();
        mingoAudioRef.current.currentTime = 0;
      }
      luffyAudioRef.current = null;
      mingoAudioRef.current = null;
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

  const handleMingoClick = useCallback(() => {
    if (mingoAudioRef.current) {
      mingoAudioRef.current.pause();
      mingoAudioRef.current.currentTime = 0;
      mingoAudioRef.current.play().catch(e => console.error("Error al reproducir el audio de Mingo:", e));

      // Animación de Mingo
      setMingoAnimation('animate-mingo-laugh');
      setTimeout(() => {
        setMingoAnimation('');
      }, 4000); // Duración de la animación de Mingo (4 segundos)

      // Animación del cartel
      setCartelAnimation('animate-cartel-shake');
      setTimeout(() => {
        setCartelAnimation('');
      }, 4000); // Duración de la animación del cartel (4 segundos)
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[950px] w-full
                 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('/images/cielo2.gif')` }}
    >
      <div className="relative w-full h-[950px]">
        <div className="absolute top-[10%] left-[10%] flex flex-col items-center">
          <img
            ref={mingoImageRef}
            src="/images/mingo.png"
            alt="Mingo"
            className={`absolute top-[-150px] left-[31%] -translate-x-1/2 w-[220px] h-[220px] object-contain z-30 cursor-pointer ${mingoAnimation}`}
            onClick={handleMingoClick}
          />
          <div className="h-[100px] w-[2px] bg-white origin-top animate-swing-rope z-20"></div>
          <img
            ref={cartelImageRef}
            src="/images/cartel.png"
            alt="Cartel de Se Busca"
            className={`w-[500px] h-[700px] object-contain animate-swing-poster origin-top z-10 ${cartelAnimation}`}
            style={{ marginTop: '-2px' }}
          />
        </div>
      </div>

      <img
        src="/images/luffy.gif"
        alt="Luffy navegando en su barco"
        className={`absolute bottom-[0px] right-0 h-[500px] object-contain z-20 ${getLuffyAnimationClasses()}`}
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

        @keyframes mingo-laugh {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.05) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        .animate-mingo-laugh {
          animation: mingo-laugh 4s ease-in-out; /* Duración ajustada a 4 segundos */
        }

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
