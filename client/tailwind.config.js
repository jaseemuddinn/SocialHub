/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    './node_modules/preline/preline.js',
    // "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Montserrat', 'Inter', 'sans-serif'],
    }
  },
  plugins: [
    require('preline/plugin'),
    // require('flowbite/plugin')
  ],
}