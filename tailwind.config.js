/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors:{
        primaryColor:'#010a5e',
        primaryColorLight:'#010d78',
        pragraphcolor:'#c0c0c0',
        whitecolor:'#fff',
        blackcolor:'#000',
        greencolor:'#007936',
        redcolor:'#cc3433',
        drkcolorlight:'#171717',
        secondarycolor:'#FF8225'
      },
      keyframes:{
        move:{
          "50%":{transform:'translateY(-1rem)'}
        }
      },
      animation:{
        'moving-Y':'move 2s linear infinite'
      }

    },
    container:{
      center:true,
      padding:{
        default:'1rem',
        sm:'2rem',
        lg:'4rem',
        xl:'5rem',
        '2xl':'6rem',
      }
    },
    fontFamily:{
      dmsans:[ "DM Sans", 'sans-serif'],
    }
  },
  plugins: [],
}

