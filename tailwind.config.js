/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sea-blue': '#...', // Tus colores
      },
      backgroundImage: {
        'waves-pattern': "url('/images/tu-patron-de-ondas.svg')", // Tu imagen de fondo de olas
      },
      keyframes: {
        // Puedes definir keyframes personalizados aquí si lo deseas
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Asegúrate de que 'pulse' esté aquí
      },
    },
  },
  plugins: [],
};
