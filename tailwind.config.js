/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
