module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      invert:{
        90: '90%'
      },
      brightness: {
        5: '15%'
      },
      sepia: {
        72: '95%'
      },
      saturate: {
        3333: '3333%'
      },
      contrast: {
        102: '102%'
      },
      boxShadow:{
        'shcus':'rgb(93 62 188 / 4%) 0px 6px 24px',
        'etbis':'rgba(105,116,136,0.15)'
      },
      backgroundImage:{
        'mobile-bg': "url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)"
      },
      spacing:{
          '0.1' : '0.063rem'
      },
      colors: theme =>({
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300',
        'mainbg': "#fafafa"
      })
    },
  },
  plugins: [],
}