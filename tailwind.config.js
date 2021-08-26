module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius:{
      'circle':'50%'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'grayo': 'rgba(177, 176, 176, 0.589)',
      'blacku':'rgba(0, 0, 0, 0.493)'
     }),
    screens: {
      'mobile':'400px',
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {

      colors:{
        'kaisahan-font-color':'#176835',
        'pink':'#fc506b'
      },
      width:{
        '70rem':'70rem'
      },
      boxShadow:{
        'boxShadow':'0 0 15px 0px rgb(133, 133, 133)'
      },
      height:{
        '22vh':'22vh',
        '78vh':'78vh',
        '25vh':'25vh',
        '75vh':'75vh'
      },
      fontSize:{
        '9px':'9px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
