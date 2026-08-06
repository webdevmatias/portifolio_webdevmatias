// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FB8500',
          dark: '#080808',
          section: '#0e0e0e',
          header: '#01161E',
          sage: '#AEC3B0',
        },
        'custom-dark-blue': '#0F1035',
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
