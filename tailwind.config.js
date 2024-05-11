/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ce9b22",
      },
      fontFamily: {
        chakra: ["Chakra Petch", "monospace"],
        clash: ["Clash", "sans-serif"],
      },
    },
  },
  plugins: [],
};
