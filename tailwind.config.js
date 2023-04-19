/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screen: {
      sm:'380px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    colors: {
      'blue': '#479eef',
      'purple': '#6947ef',
      'pink': '#ef476f',
      'green': '#4ec661',
      'yellow': '#cbac40',
    },
    fontFamily: {
      primary: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
