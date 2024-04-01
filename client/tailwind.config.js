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
        "accent-1": "#DAC9FF",
        "highlight-1": "#4E54F0",
        "accent-2": "#DAC9FF",
        "accent-3": "#FFC37C",
        "highlight-2": "#4E54F0",
        "highlight-3": "#FE9737",
      },
      boxShadow: {
        "3xl": "0 0px 8px 24px  rgba(0, 0, 0, 0.3) #bf2c47",
      },
      screens: {
        mbMini: "290px",
        mbXSmall: "470px",
        mbMedSmall: "500px",
        mbSmall: "600px",
        mbMedium: "800px",
        laptop: "1000px",
        carousel:"932px",
        tbPortrait: "1200px",
        tbLandscape: "1600px",
        Desktop: "2000px",
        lgDesktop: "2400px",
    },
    },
  },
  plugins: [],
};
