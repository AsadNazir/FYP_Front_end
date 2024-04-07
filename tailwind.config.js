/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {

    fontSize: {
      xxs: '0.7rem',
      xs: '0.78rem',
      sm: '0.83rem',
      base: '1rem',
      lg: '1.2rem',
      xl: '1.35rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.815rem',
      '7xl': '4.768rem',
      '8xl': '5.96rem',
      '9xl': '7.451rem',
    },
    extend: {

    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}