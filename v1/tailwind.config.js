/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        synthwave: {
          primary: '#ff00ff', // Magenta
          secondary: '#00ffff', // Cyan
          bg: '#120458', // Deep Purple/Blue
          dark: '#000000',
          grid: 'rgba(255, 0, 255, 0.2)',
        }
      },
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'], // Synthwave-y font
      },
      backgroundImage: {
        'synth-grid': "linear-gradient(to right, rgba(255, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 0, 255, 0.1) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
