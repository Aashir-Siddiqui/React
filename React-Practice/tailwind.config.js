/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/project/Todo/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};