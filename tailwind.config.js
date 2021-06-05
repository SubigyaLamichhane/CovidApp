module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom:{
          red: '#E21E1E',
          green: '#6DAA39',
          yellow: '#9B9748',
          blue: '#3A7B9B',
          border: '#666666',
          text: '#3A3939',
          hover: '#54ABBA'
        }
      },
      fontFamily:{
        body: ['Roboto']
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
    },
    height: {
      large: '40rem',
      100: '35rem',
      200: '70rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
