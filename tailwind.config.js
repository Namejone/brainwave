/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#fff',
      'black': '#000',
      'body': '#161C2D',
      'blue': '#473BF0',
      'orange': '#F64B4B',
      'green': '#68D585',
      'green-50': '#F4F7FA',
      'gray-900': '#161C2D',
    },
    fontSize: {
      sm: ['13px', '15px'],
      base: ['17px', '29px'],
      md: ['19px', '32px'],
      lg: ['24px', '34px'],
      xl: ['36px', '48px'],
      '2xl': ['60px', '65px'],
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1140px',
        },
      },
      fontFamily: {
        'gilroy-light': ["Gilroy-Light", "sans-serif"],
        'gilroy-regular': ["Gilroy-Regular", "sans-serif"],
        'gilroy-medium': ["Gilroy-Medium", "sans-serif"],
        'gilroy-bold': ["Gilroy-Bold", "sans-serif"],
        'gilroy-heavy': ["Gilroy-Heavy", "sans-serif"],
      },
      backgroundImage: {
        'hero-bg': "url('./src/imgs/hero-bg.png')",
      }
    },
  },
  plugins: [],
}


