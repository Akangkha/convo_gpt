/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      colors: {
        "accent-1": "#FFDADF",
        "highlight-1": "#bf2c47",
        "accent-2": "#DAC9FF",
        "accent-3": "#FFC37C",
        "highlight-2": "#4E54F0",
        "highlight-3": "#FE9737",
      },
      boxShadow: {
        "3xl": "0 0px 8px 24px  rgba(0, 0, 0, 0.3) #bf2c47",
      },
    },
  },
  plugins: [],
};
