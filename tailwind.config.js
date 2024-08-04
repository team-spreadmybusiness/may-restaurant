/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#B22222',
        accent: '#FFA07A',
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}
