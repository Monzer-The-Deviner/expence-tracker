/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        float:{
          '0%, 100%': {transform:'translateY(0)'}
          ,'50%': {transform:'translateY(-10px)'}
        },
        gradientAnimation:{
          '0%, 0%':{ backgroundPosition:'0% 50%'},
          '50%':{ backgroundPosition:'100% 50%'},
        }
      },
      animation:{
        float:'float 3s ease infinite',
        gradientAnimation:'gradientAnimation 10s ease-in-out infinite'
      },
      backgroundImage:{
        'gradient-radial':"radial-gradient(var(__tw-gradient-stops))"

      },
      backgroundSize:{
        '200%':'200%'
      }
    },
  },
  plugins: [],
}