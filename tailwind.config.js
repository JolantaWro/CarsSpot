/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
     screens: {
      "xs": { "min": "320px", "max": "480px" },
      "sm": { "min": "481px", "max": "768px" },
      "md": { "min": "769px", "max": "1024px" },
      "lg": { "min": "1025px", "max": "1199px" },
      "xl": { "min": "1200px", "max": "1439px"  },
      "2xl": { "min": "1440px" },
    },
    colors: {
      'cobalt': '#0147FF',
      'gray': '#F7F7F7',
      'white': "#fff",
    },
    fontFamily: {
      bebas: ['Bebas Neue', 'sans-serif'],
      roboto: ['Roboto Condensed', 'sans-serif'],
      robotoFlex: ['Roboto Flex', 'sans-serif'],
    },
    extend: {
      
    },
  },
  plugins: [],
}

