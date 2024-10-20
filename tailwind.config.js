// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#0F1035', // Exemplo de cor já adicionada
        'custom-light-blue': '#7FC7D9',
      },
      fontFamily: {
        'raleway': ['"Raleway"', 'sans-serif'],
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
