/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    borderRadius: { none: '0', DEFAULT: '0' },
    extend: {
      colors: { brand: '#FFB020', ink: '#000000', paper: '#FFFFFF', steel: '#9A9A9A', coal: '#0E0E0E' },
      fontFamily: { sans: ['Outfit', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
