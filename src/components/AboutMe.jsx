// src/components/AboutMe.jsx
import React from 'react';
// Asegúrate de que la ruta al GIF sea correcta. Si está en la carpeta 'public/images', la ruta sería '/images/luffy2.gif'
import luffy2Gif from '../../public/images/luffy2.gif';

const AboutMe = () => {
  return (
    // Contenedor principal de la sección "Sobre Mí".
    // py-20: Padding vertical para espacio arriba y abajo.
    // px-4 md:px-8 lg:px-16: Padding horizontal responsivo.
    // bg-[url('/images/part1.png')]: Establece la imagen de fondo.
    // bg-cover: Asegura que la imagen cubra todo el elemento.
    // bg-no-repeat: Evita que la imagen se repita.
    // bg-center: Centra la imagen de fondo.
    // relative z-10: Asegura que esté por encima del fondo de ondas generales de App.jsx
    // overflow-hidden: Evita que el GIF sobresalga demasiado.
    <section
      id="sobre-mi"
      className="py-20 px-4 md:px-8 lg:px-16 bg-[url('/images/part1.png')] bg-cover bg-no-repeat bg-center relative z-10 overflow-hidden"
    >
      {/* Separador de madera en la parte superior de la sección */}
      <div className="w-full h-8 bg-wood-separator absolute top-0 left-0"></div>

      {/* Contenedor principal del contenido de texto y el GIF */}
      {/* flex flex-col lg:flex-row: Habilita flexbox, columnas en móvil, filas en pantallas grandes. */}
      {/* items-center lg:items-center: Centra verticalmente ambos elementos entre sí en pantallas grandes. */}
      {/* justify-start: Alinea los elementos al inicio (izquierda) del contenedor. */}
      {/* gap-x-16: Añade un espacio horizontal entre el cuadro de texto y el GIF. */}
      {/* max-w-6xl: Limita el ancho total del contenido. */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-start gap-x-16 relative z-10">

        {/* Contenedor para el fondo negro del texto. Ocupará la mitad izquierda en pantallas grandes. */}
        {/* w-full lg:w-1/2: Ocupa todo el ancho en móvil, la mitad en pantallas grandes. */}
        {/* lg:pr-8: Padding a la derecha para separar del GIF en pantallas grandes. */}
        <div className="w-full lg:w-1/2 bg-black p-6 rounded-lg shadow-lg text-white mb-8 lg:mb-0 lg:pr-8">
          {/* Título principal de la sección. */}
          {/* text-5xl md:text-6xl: Tamaño de texto grande y responsivo. */}
          {/* font-pirata-one: Fuente específica para el título (si la tienes definida). */}
          {/* text-amber-500: Color ámbar estándar de Tailwind para un tono más dorado. */}
          {/* text-left: Alinea el título a la izquierda. */}
          {/* mb-12: Margen inferior para separar del contenido. */}
          <h2 className="text-5xl md:text-6xl font-pirata-one text-amber-500 text-left mb-12">
            Sobre Mí
          </h2>

          {/* Sección de "Formación". */}
          <div className="mb-10">
            <h3 className="text-3xl font-metal-mania text-amber-500 mb-4">Formación</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de la formación.</p>
          </div>

          {/* Sección de "El Saber Hacer". */}
          <div className="mb-10">
            <h3 className="text-3xl font-metal-mania text-amber-500 mb-4">El Saber Hacer</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va a estar la información de saber hacer.</p>
          </div>

          {/* Sección de "El Saber Ser". */}
          <div className="mb-10">
            <h3 className="text-3xl font-metal-mania text-amber-500 mb-4">El Saber Ser</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de saber ser.</p>
          </div>

          {/* Sección de "Cursos y Formación Extra". */}
          <div className="mb-10">
            <h3 className="text-3xl font-metal-mania text-amber-500 mb-4">Cursos y Formación Extra</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de cursos y formación extra.</p>
          </div>

          {/* Sección de "Pasatiempos". */}
          <div>
            <h3 className="text-3xl font-metal-mania text-amber-500 mb-4">Pasatiempos</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de pasatiempos.</p>
          </div>
        </div>

        {/* Contenedor para el GIF de Luffy2. Ocupará la mitad derecha en pantallas grandes. */}
        {/* w-full lg:w-1/2: Ocupa todo el ancho en móvil, la mitad en pantallas grandes. */}
        {/* flex justify-center items-center: Centra el GIF horizontal y verticalmente dentro de su contenedor. */}
        {/* (pt-24 eliminado para que items-center en el padre lo alinee) */}
        {/* lg:pl-8: Padding a la izquierda para separar del texto en pantallas grandes. */}
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:pl-8">
          {/* w-full: Hace que la imagen intente ocupar el 100% del ancho de su contenedor. */}
          {/* max-w-lg md:max-w-xl lg:max-w-full: Ajusta el tamaño para que sea grande y se adapte a la mitad de la pantalla. */}
          {/* opacity-70: Opacidad del 70% para que sea menos intrusivo. */}
          <img src={luffy2Gif} alt="Luffy GIF" className="w-full max-w-lg md:max-w-xl lg:max-w-full opacity-70" />
        </div>
      </div>

      {/* Separador de madera en la parte inferior de la sección */}
      <div className="w-full h-8 bg-wood-separator absolute bottom-0 left-0"></div>
    </section>
  );
};

export default AboutMe;
