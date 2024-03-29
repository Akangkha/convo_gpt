/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        sans: ["Raleway", 'sans-serif']
      },
      colors:
      {
        'accent-1':"#5638b7"
      }
    },
  },
  plugins: [],
}