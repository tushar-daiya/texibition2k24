/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff8211",
      },
      fontFamily: {
        fira: ["Chakra Petch", "monospace"],
        clash: ["Clash", "sans-serif"],
        akira: ["Akira", "sans-serif"],
      },
    },
  },
  plugins: [],
};
