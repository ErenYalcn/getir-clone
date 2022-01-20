module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: theme =>({
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300'
      })
    },
  },
  plugins: [],
}