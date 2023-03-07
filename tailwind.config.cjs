/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsla(244, 79%, 15%, 0.2)',
          200: 'hsla(244, 79%, 15%, 0.3)',
          300: 'hsla(244, 79%, 15%, 0.4)',
          400: 'hsla(244, 79%, 15%, 0.5)',
          500: 'hsla(244, 79%, 15%, 0.6)',
          600: 'hsla(244, 79%, 15%, 0.7)',
          700: 'hsla(244, 79%, 15%, 0.8)',
          800: 'hsla(244, 79%, 15%, 0.9)',
          900: 'hsla(244, 79%, 15%, 1)',
        },
        secondary: {
          100: 'hsla(309, 70%, 36%, 0.2)',
          200: 'hsla(309, 70%, 36%, 0.3)',
          300: 'hsla(309, 70%, 36%, 0.4)',
          400: 'hsla(309, 70%, 36%, 0.5)',
          500: 'hsla(309, 70%, 36%, 0.6)',
          600: 'hsla(309, 70%, 36%, 0.7)',
          700: 'hsla(309, 70%, 36%, 0.8)',
          800: 'hsla(309, 70%, 36%, 0.9)',
          900: 'hsla(309, 70%, 36%, 1)',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      backgroundImage: {
        homeBg:
          'url(https://flowind.net/wp-content/uploads/2021/08/cool-background-1.png)',
      },
    },
  },
  plugins: [],
}
