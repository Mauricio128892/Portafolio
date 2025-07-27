// src/components/AboutMe.jsx
import React from 'react';
// La importación de luffy2Gif ya no es necesaria
// import luffy2Gif from '../../public/images/luffy2.gif';

const AboutMe = () => {
  return (
    // Contenedor principal de la sección "Sobre Mí".
    // py-20: Padding vertical para espacio arriba y abajo.
    // px-4 md:px-8 lg:px-16: Padding horizontal responsivo.
    // bg-[url('/images/fondo2.png')]: Establece la imagen de fondo (AJUSTADO).
    // bg-cover: Asegura que la imagen cubra todo el elemento.
    // bg-no-repeat: Evita que la imagen se repita.
    // bg-center: Centra la imagen de fondo.
    // relative z-10: Asegura que esté por encima del fondo de ondas generales de App.jsx
    // overflow-hidden: Evita que el contenido sobresalga.
    <section
      id="sobre-mi"
      className="py-20 px-4 md:px-8 lg:px-16 bg-[url('/images/fondo2.png')] bg-cover bg-no-repeat bg-center relative z-10 overflow-hidden" // Fondo cambiado a imagen
    >
      {/* Separador de madera en la parte superior de la sección - CAMBIADO A NEGRO */}
      <div className="w-full h-8 bg-[#15171F] absolute top-0 left-0"></div> {/* Color de separador ajustado a más oscuro */}

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
            <h3 className="3xl font-metal-mania text-amber-500 mb-4">Formación</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de la formación.</p>
          </div>

          {/* Sección de "El Saber Hacer". */}
          <div className="mb-10">
            <h3 className="3xl font-metal-mania text-amber-500 mb-4">El Saber Hacer</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va a estar la información de saber hacer.</p>
          </div>

          {/* Sección de "El Saber Ser". */}
          <div className="mb-10">
            <h3 className="3xl font-metal-mania text-amber-500 mb-4">El Saber Ser</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de saber ser.</p>
          </div>

          {/* Sección de "Cursos y Formación Extra". */}
          <div className="mb-10">
            <h3 className="3xl font-metal-mania text-amber-500 mb-4">Cursos y Formación Extra</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de cursos y formación extra.</p>
          </div>

          {/* Sección de "Pasatiempos". */}
          <div>
            <h3 className="3xl font-metal-mania text-amber-500 mb-4">Pasatiempos</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va a ir la información de pasatiempos.</p>
          </div>
        </div>

        {/* Contenedor para el GIF de Gear 5 y las imágenes del suelo */}
        {/* w-full lg:w-1/2: Ocupa todo el ancho en móvil, la mitad en pantallas grandes. */}
        {/* flex justify-center items-center: Centra el GIF horizontal y verticalmente dentro de su contenedor. */}
        {/* lg:pl-8: Padding a la izquierda para separar del texto en pantallas grandes. */}
        {/* relative: Necesario para posicionar absolutamente los elementos hijos (GIF y suelo) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:pl-8 relative">
          {/* w-full: Hace que la imagen intente ocupar el 100% del ancho de su contenedor. */}
          {/* max-w-lg md:max-w-xl lg:max-w-full: Ajusta el tamaño para que sea grande y se adapte a la mitad de la pantalla. */}
          {/* style: Con transform: translateY() y translateX() para mover solo el GIF vertical y horizontalmente sin afectar el layout. */}
          <img
            src="/images/gear5.gif"
            alt="Gear 5 GIF"
            className="w-full max-w-lg md:max-w-xl lg:max-w-full"
            style={{ transform: 'translateY(-56px) translateX(250px)' }} // Ajusta este valor para mover el GIF
          />

          {/* Imagen del suelo 1 (original) */}
          {/* absolute: Posicionamiento absoluto dentro de su contenedor padre. */}
          {/* bottom-0: Alinea la parte inferior de la imagen con la parte inferior del contenedor padre. */}
          {/* left-1/2 -translate-x-1/2: Centra la imagen horizontalmente. */}
          {/* w-[600px] h-[100px]: Ajusta estas dimensiones para controlar el tamaño del suelo. */}
          {/* object-cover: Asegura que la imagen cubra el área sin distorsionarse. */}
          {/* style: Con transform: translateY() y translateX() para mover solo el suelo vertical y horizontalmente. */}
          <img
            src="/images/suelo.png"
            alt="Suelo 1"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] object-cover"
            style={{ transform: 'translateY(0px) translateX(0px)' }} /* Ajusta estos valores para mover el suelo */
          />

          {/* Imagen del suelo 2 */}
          <img
            src="/images/suelo.png"
            alt="Suelo 2"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] object-cover"
            style={{ transform: 'translateY(100px) translateX(0px)' }} /* Ajusta estos valores para mover el suelo */
          />

          {/* Imagen del suelo 3 */}
          <img
            src="/images/suelo.png"
            alt="Suelo 3"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] object-cover"
            style={{ transform: 'translateY(200px) translateX(0px)' }} /* Ajusta estos valores para mover el suelo */
          />

          {/* Imagen del suelo 4 */}
          <img
            src="/images/suelo.png"
            alt="Suelo 4"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] object-cover"
            style={{ transform: 'translateY(300px) translateX(0px)' }} /* Ajusta estos valores para mover el suelo */
          />
        </div>
      </div>

      {/* Separador de madera en la parte inferior de la sección - CAMBIADO A NEGRO */}
      <div className="w-full h-8 bg-[#15171F] absolute bottom-0 left-0"></div> {/* Color de separador ajustado a más oscuro */}
    </section>
  );
};

export default AboutMe;
