/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#12C4E0',
        secondary: '#A2A2A2',
        black: '#3A3A3A',
        warning: '#FFCDA3',
        danger: '#FFACAB',
        customGray: '#3A3A3A',
        lightBlue: 'rgba(18, 196, 224, 0.41)',
      },
      fontFamily: {
        'g-bold': ['Gilroy-Bold'],
        'g-medium': ['Gilroy-Medium'],
        'g-regular': ['Gilroy-Regular'],
      },
    },
  },
  plugins: [],
};
