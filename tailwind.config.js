/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(246 170 13)",
      },
      fontFamily: {
        chakra: ["Chakra Petch", "monospace"],
        clash: ["Clash", "sans-serif"],
        corporate: ["Corporate", "monospace"],
      },
    },
  },
  plugins: [],
};
