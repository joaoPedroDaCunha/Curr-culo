/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      sans:['Graphik','sans-serif']
    },
    extend: {
      borderRadius :{
        '4x1':'3rem'
      },
      opacity:['disabled'],

    }
  },
  variants:{
    extend:{
      borderColor:['focus-visible'],
      opacity: ['disabled'],
    }
  },
  plugins: [],

}

