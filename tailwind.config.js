//** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'custom-dark-blue': '#0F1035', // Exemplo de cor já adicionada
      'custom-light-blue': '#7FC7D9',
    },
  },
};
export const plugins = [];