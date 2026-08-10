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
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-orange-white': {
          '0%, 100%': { backgroundColor: '#FB8500', boxShadow: '0 0 5px rgba(251,133,0,0.4)', opacity: '0.9' },
          '50%': { backgroundColor: '#E2E8F0', boxShadow: '0 0 3px rgba(255,255,255,0.3)', opacity: '0.7' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.35s ease-out',
        'pulse-orange-white': 'pulse-orange-white 3.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
