/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color' : '#272C48',
        'primary-white' : '#FFFFFF',
        'background' : '#F8F8F8',
        'secondary-color' : '#9A9A9A',
        'border-color' : '#F2F2F2'
      },
      fontFamily: {
        'inter' : ['Inter']
      }
    },
  },
  plugins: [],
}
