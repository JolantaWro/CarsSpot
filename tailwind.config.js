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
      "xl": { "min": "1200px", "max": "1439px" },
      "2xl": { "min": "1440px", "max": "1919px" },
      "3xl": { "min": "1920px" },
    },
    colors: {
      'cobalt': '#0147FF',
      'gray': '#F7F7F7',
      'white': '#FFFFFF',
      'black': '#282828',
    },
    fontFamily: {
      bebas: ['Bebas Neue', 'sans-serif'],
      roboto: ['Roboto Condensed', 'sans-serif'],
      robotoFlex: ['Roboto Flex', 'sans-serif'],
    },
    letterSpacing: {
      'negative-4': '-0.04em',
      'negative-3': '-0.03em',
      'negative-2': '-0.02em',
    },
    extend: {
    },
  },
  plugins: [],
}

