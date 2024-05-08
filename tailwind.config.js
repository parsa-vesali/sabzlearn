/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": {
          900: '#111827',
          700: '#242A38',
          500: '#2F3542'
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '1rem',
          xl: '2rem',
          '2xl': '8rem',
        },
      },
      fontFamily: {
        'Dana': "Dana",
        'Dana-Bold': "Dana Bold",
        'Morabba': "Morabba",
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
}

