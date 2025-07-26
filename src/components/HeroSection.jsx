// src/components/HeroSection.jsx
import React, { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const luffyAudioRef = useRef(null);
  const [luffyAnimationState, setLuffyAnimationState] = useState('idle');

  useEffect(() => {
    luffyAudioRef.current = new Audio('/audio/sonido1.mp3');
    luffyAudioRef.current.load();

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
      luffyAudioRef.current = null;
    };
  }, []);

  const handleLuffyClick = () => {
    if (luffyAudioRef.current && luffyAnimationState === 'idle') {
      console.log('Luffy clickeado, sonido y salida...');
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
        console.log('Luffy ha regresado y está en idle.');
      }, returnDuration);

      return () => clearTimeout(timer);
    }
  }, [luffyAnimationState]);

  const getLuffyAnimationClasses = () => {
    let baseClasses = 'object-contain w-full h-full animate-float-up cursor-pointer';
    let animationClass = '';

    if (luffyAnimationState === 'leaving') {
      animationClass = 'animate-slide-out-left';
    } else if (luffyAnimationState === 'returning') {
      animationClass = 'animate-slide-in-right-fade-in';
    }

    return `${baseClasses} ${animationClass}`;
  };

  return (
    <section
      id="inicio"
      className="relative h-screen w-full flex items-center justify-center
                 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('/images/cielo2.gif')` }}
    >
      
      <div className="absolute left-[20%] -translate-x-1/2 top-1/2 -translate-y-1/2 // 
                      w-[600px] h-auto
                      max-w-[90%] md:max-w-[500px]
                      z-20
                      animate-float-water
                      ">
        <img
          src="/images/cartel.png"
          alt="Cartel de Se Busca de One Piece con la foto de Mauricio Valladares Velueta"
          className="object-contain w-full h-full"
        />
      </div>

      <div className="absolute right-0 bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2
                      w-auto max-w-[80%] md:max-w-[600px]
                      h-auto max-h-[80vh] md:max-h-[600px]
                      flex items-center justify-end z-10"
                      style={{ bottom: '-30px', transform: 'translateY(16px)' }}
                      >
        <img
          src="/images/luffy.gif"
          alt="Luffy navegando en su barco"
          className={getLuffyAnimationClasses()}
          onClick={handleLuffyClick}
        />
      </div>

    </section>
  );
};

export default HeroSection;