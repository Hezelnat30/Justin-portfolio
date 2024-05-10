/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#2f3b69',
        'shades':{
          100: '#b8bee1',
          200: '#adb5e0',
          300: '#9ca6d8',
          400: '#6e7fc6',
          500: '#4a5b9e'
        },
        secondary: '#daddd8',
        bonewhite: '#f9f6ee',
        tersier: '#041320'
      },
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif'],
      },
      width: {
        '82': '22rem', 
        '74': '19rem',
        '62': '15.5rem'
      },
      height: {
        '82': '22rem',
        '74': '19rem',
        '62': '15.5rem'
      },
      spacing: {
        '34': '8.5rem',
        '38': '9.5rem'
      },
      borderWidth: {
        '3': '3px',
        '5': '5px'
      },
      scale: {
        '120': '1.2',
        '130': '1.3'
      },
      backgroundSize: {
        '50%': '50%',
        '100%': '100%'
      },
      animation: {
        'popup':'popup .5s ease-in-out',
        'blobright':'blobright 6s ease-in-out infinite',
        'blobleft':'blobleft 6s ease-in-out infinite',
      },
      keyframes: {
        popup: {
          '0%': { transform: 'scale(1)  translate(-50%, -100%)', opacity: 0 },
          '100%': { transform: 'scale(1)  -translate-x-1/2 -translate-y-1/2', opacity: 1 }
        },
        blobright: {
          '0%': { 
            transform:'translate(0px, 0px) scale(1)',
          },
          '33%': { 
            transform:'translate(35px, 50px) scale(1.2)',
          },
          '66%': {
            transform:'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform:'translate(0px, 0px) scale(1)',
          }
        },
        blobleft: {
          '0%': { 
            transform:'translate(0px, 0px) scale(1)',
          },
          '33%': { 
            transform:'translate(-35px, 50px) scale(1.1)',
          },
          '66%': {
            transform:'translate(-150px, 60px) scale(0.9)',
          },
          '100%': {
            transform:'translate(0px, 0px) scale(1)',
          }
        },
      },      
    },
  },
  plugins: [],
}

