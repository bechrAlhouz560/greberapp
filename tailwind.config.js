/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
       "navy" : "#161853",
       "blue": "rgb(41, 44, 109)",
       "red" : "#EC255A",
       "light-pink" : "#FAEDF0",
       "grey" : "#eeeeee",
       "white" : "#ffffff",
       "light-navy" : "#3338cc"
    },
    
    
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow : "0 0 7px #eeeeee"
    }
  },
  plugins: [],
}
