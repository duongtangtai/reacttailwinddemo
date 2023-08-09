/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinSm: "Poppins, sans-serif",
        poppinMd: "Poppins, sans-serif",
        poppinLg: "Poppins, sans-serif",
      },
      fontWeight: {
        poppinSm: '400',
        poppinMd: '500',
        poppinLg: '700',
      },
      keyframes: {
        slideIn: {
          '0%, 100%': { transform: 'translateX(10px)'},
          '50%' : {transform: ''}
        }
      },
      animation: {
        'slideIn':  'slideIn 2s ease-in-out'
      }
    },
  },
  plugins: [],
}

