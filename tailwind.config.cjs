/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsla(220, 67%, 20%, 0.2)',
          200: 'hsla(220, 67%, 20%, 0.3)',
          300: 'hsla(220, 67%, 20%, 0.4)',
          400: 'hsla(220, 67%, 20%, 0.5)',
          500: 'hsla(220, 67%, 20%, 0.6)',
          600: 'hsla(220, 67%, 20%, 0.7)',
          700: 'hsla(220, 67%, 20%, 0.8)',
          800: 'hsla(220, 67%, 20%, 0.9)',
          900: 'hsla(220, 67%, 20%, 1)',
        },
        secondary: {
          100: 'hsla(172, 100%, 31%, 0.2)',
          200: 'hsla(172, 100%, 31%, 0.3)',
          300: 'hsla(172, 100%, 31%, 0.4)',
          400: 'hsla(172, 100%, 31%, 0.5)',
          500: 'hsla(172, 100%, 31%, 0.6)',
          600: 'hsla(172, 100%, 31%, 0.7)',
          700: 'hsla(172, 100%, 31%, 0.8)',
          800: 'hsla(172, 100%, 31%, 0.9)',
          900: 'hsla(172, 100%, 31%, 1)',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      backgroundImage: {
        homeBg:
          'url(https://flowind.net/wp-content/uploads/2021/08/cool-background-1.png)',
        mainBg: 'url(/imgs/bg.jpg)',
      },
    },
  },
  plugins: [],
}
