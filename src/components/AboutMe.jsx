// src/components/AboutMe.jsx
import React, { useRef, useState, useEffect, useCallback } from 'react';

const AboutMe = () => {
  const risaAudioRef = useRef(null); // Referencia para el audio de la risa
  const sectionRef = useRef(null); // Referencia para la sección completa
  const [hakiRays, setHakiRays] = useState([]); // Estado para almacenar los rayos de Haki
  const [luffyPowerAnimation, setLuffyPowerAnimation] = useState(''); // Estado para la animación de poder de Luffy
  const [sectionShakeAnimation, setSectionShakeAnimation] = useState(''); // Estado para la animación de temblor de la sección

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
      setLuffyPowerAnimation('animate-luffy-power-release');
      // Activa la animación de temblor de la sección
      setSectionShakeAnimation('animate-section-tremble');

      // Generar rayos de Haki
      const newRays = [];
      const numberOfRays = 15; // Puedes ajustar la cantidad de rayos
      const rayDuration = 6000; // Duración de la animación del rayo en ms (6 segundos)
      const maxDelay = 1500; // Retraso máximo para la aparición escalonada de los rayos (1.5 segundos)

      for (let i = 0; i < numberOfRays; i++) {
        // Posiciones aleatorias dentro de la sección, evitando bordes superior e inferior
        // (10% a 90% para top, dejando un 10% de margen arriba y abajo)
        const top = Math.random() * (80) + 10; // % desde 10% a 90%
        const left = Math.random() * 100; // % desde la izquierda
        const size = Math.random() * (200 - 80) + 80; // Tamaño aleatorio entre 80px y 200px (más grandes)
        const initialRotation = Math.random() * 360; // Rotación inicial aleatoria para variedad visual
        const delay = (i / numberOfRays) * maxDelay; // Retraso escalonado para cada rayo
        const shakeDirection = Math.random() > 0.5 ? 1 : -1; // Dirección aleatoria para la agitación (1 o -1)

        newRays.push({
          id: Date.now() + i, // ID único para cada rayo
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          initialRotation: initialRotation, // Guardamos la rotación inicial
          delay: `${delay}ms`, // Propiedad de retraso para la animación
          shakeDirection: shakeDirection // Propiedad para la dirección de agitación
        });
      }

      setHakiRays(newRays);

      // Eliminar los rayos, la animación de Luffy y la animación de temblor de la sección después de la duración del audio
      setTimeout(() => {
        setHakiRays([]);
        setLuffyPowerAnimation('');
        setSectionShakeAnimation('');
      }, rayDuration);
    }
  }, []);

  return (
    <> {/* Fragmento para envolver múltiples elementos de nivel superior */}
      {/* Contenedor principal de la sección "Sobre Mí". */}
      {/* py-20: Padding vertical para espacio arriba y abajo. */}
      {/* px-4 md:px-8 lg:px-16: Padding horizontal responsivo. */}
      {/* bg-[url('/images/fondo2.png')]: Establece la imagen de fondo. */}
      {/* bg-cover: Asegura que la imagen cubra todo el elemento. */}
      {/* bg-no-repeat: Evita que la imagen se repita. */}
      {/* bg-center: Centra la imagen de fondo. */}
      {/* relative z-10: Asegura que esté por encima del fondo de ondas generales de App.jsx */}
      {/* overflow-hidden: Evita que el contenido sobresalga. */}
      <section
        id="sobre-mi"
        ref={sectionRef} // Asignamos la referencia a la sección
        className={`py-20 px-4 md:px-8 lg:px-16 bg-[url('/images/fondo2.png')] bg-cover bg-no-repeat bg-center relative z-10 overflow-hidden ${sectionShakeAnimation}`} // Animación de temblor de la sección
      >
        {/* Separador superior */}
        <div className="w-full h-8 bg-[#15171F] absolute top-0 left-0"></div>

        {/* Contenedor principal del contenido de texto y el GIF */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-start gap-x-16 relative z-10">

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

          {/* Contenedor para el GIF de Gear 5 */}
          {/* w-full lg:w-1/2: Ocupa todo el ancho en móvil, la mitad en pantallas grandes. */}
          {/* flex justify-center items-center: Centra el GIF horizontal y verticalmente dentro de su contenedor. */}
          {/* lg:pl-8: Padding a la izquierda para separar del texto en pantallas grandes. */}
          <div className="w-full lg:w-1/2 flex justify-center items-center lg:pl-8">
            <img
              src="/images/gear5.gif"
              alt="Gear 5 GIF"
              className={`w-full max-w-lg md:max-w-xl lg:max-w-full cursor-pointer ${luffyPowerAnimation}`} // Animación de poder de Luffy
              style={{ transform: 'translateY(-106px) translateX(250px)' }} // Ajusta este valor para mover el GIF
              onClick={handleLuffyClick} // Manejador de clic para Luffy
            />
          </div>
        </div>

        {/* Imágenes del suelo (posicionadas directamente en la sección) */}
        {/* Cada imagen tiene un 'bottom' diferente para apilarse verticalmente. */}
        {/* 'left-1/2 -translate-x-1/2' las centra horizontalmente. */}
        {/* 'w-[WIDTHpx]' y 'h-[HEIGHTpx]' controlan el tamaño. */}
        {/* 'transform: translateX(Xpx)' permite mover el suelo horizontalmente sin afectar el apilamiento. */}

        {/* Imagen del suelo 1 */}
        <img
          src="/images/suelo.png"
          alt="Suelo 1"
          className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[100px] object-cover"
          style={{ bottom: '0px', transform: 'translateX(270px)' }} /* Movido a la derecha para estar bajo Luffy */
        />

        {/* Imagen del suelo 2 */}
        <img
          src="/images/suelo.png"
          alt="Suelo 2"
          className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[100px] object-cover"
          style={{ bottom: '100px', transform: 'translateX(270px)' }} /* Movido a la derecha para estar bajo Luffy */
        />

        {/* Imagen del suelo 3 */}
        <img
          src="/images/suelo.png"
          alt="Suelo 3"
          className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[100px] object-cover"
          style={{ bottom: '200px', transform: 'translateX(270px)' }} /* Movido a la derecha para estar bajo Luffy */
        />

        {/* Imagen del suelo 4 */}
        <img
          src="/images/suelo.png"
          alt="Suelo 4"
          className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[100px] object-cover"
          style={{ bottom: '300px', transform: 'translateX(270px)' }} /* Movido a la derecha para estar bajo Luffy */
        />

        {/* Renderizado de los rayos de Haki */}
        {hakiRays.map(ray => (
          <img
            key={ray.id}
            src="/images/rayo.png"
            alt="Rayo Haki"
            className="absolute object-contain animate-haki-agitate z-40" // Clase de animación cambiada a 'animate-haki-agitate'
            style={{
              top: ray.top,
              left: ray.left,
              width: ray.width,
              height: ray.height,
              // Combinamos la rotación inicial con la agitación
              transform: `translate(-50%, -50%) rotate(${ray.initialRotation}deg)`,
              animationDelay: ray.delay, // Aplicamos el retraso escalonado
              '--shake-direction': ray.shakeDirection, // Pasamos la dirección de agitación como variable CSS
            }}
          />
        ))}

        {/* Separador inferior */}
        <div className="w-full h-8 bg-[#15171F] absolute bottom-0 left-0"></div>
      </section>

      <style>
        {`
        /* Animación para los rayos de Haki (agitación) */
        @keyframes haki-agitate {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5) translateX(0px); }
          5% { opacity: 1; transform: translate(-50%, -50%) scale(1.2) translateX(0px); } /* Aparece y escala */
          10%, 30%, 50%, 70%, 90% { transform: translate(-50%, -50%) scale(1.2) translateX(calc(var(--shake-direction, 1) * 20px)); } /* Agitación más fuerte */
          20%, 40%, 60%, 80% { transform: translate(-50%, -50%) scale(1.2) translateX(calc(var(--shake-direction, 1) * -20px)); } /* Agitación más fuerte */
          95% { opacity: 1; transform: translate(-50%, -50%) scale(1.2) translateX(0px); } /* Se asienta antes de desvanecerse */
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.3) translateX(0px); } /* Se desvanece y escala un poco más */
        }
        .animate-haki-agitate {
          animation: haki-agitate 6s ease-out forwards; /* Duración de la animación ajustada a 6 segundos */
        }

        /* Animación de poder para Luffy */
        @keyframes luffy-power-release {
          0% { transform: translateY(-56px) translateX(250px) scale(1); filter: brightness(1); }
          5% { transform: translateY(-56px) translateX(250px) scale(1.1) rotate(5deg); filter: brightness(1.5) drop-shadow(0 0 15px yellow) drop-shadow(0 0 25px orange); }
          95% { transform: translateY(-56px) translateX(250px) scale(1.1) rotate(-5deg); filter: brightness(1.5) drop-shadow(0 0 15px yellow) drop-shadow(0 0 25px orange); }
          100% { transform: translateY(-56px) translateX(250px) scale(1); filter: brightness(1); }
        }
        .animate-luffy-power-release {
          animation: luffy-power-release 6s ease-in-out forwards; /* Dura 6 segundos */
        }

        /* Animación de temblor para la sección */
        @keyframes section-tremble {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-3px, -3px); } /* Aumentado el temblor */
          20% { transform: translate(3px, 3px); } /* Aumentado el temblor */
          30% { transform: translate(-3px, 3px); } /* Aumentado el temblor */
          40% { transform: translate(3px, -3px); } /* Aumentado el temblor */
          50% { transform: translate(-3px, -3px); } /* Aumentado el temblor */
          60% { transform: translate(3px, 3px); } /* Aumentado el temblor */
          70% { transform: translate(-3px, 3px); } /* Aumentado el temblor */
          80% { transform: translate(3px, -3px); } /* Aumentado el temblor */
          90% { transform: translate(-3px, -3px); } /* Aumentado el temblor */
          100% { transform: translate(0, 0); }
        }
        .animate-section-tremble {
          animation: section-tremble 0.1s infinite; /* Animación rápida e infinita durante los 6 segundos */
        }
        `}
      </style>
    </> // Cierre del Fragmento
  );
};

export default AboutMe;
