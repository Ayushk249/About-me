/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IngridDarling: ["Ingrid Darling", "cursive"],
        Hind: ["Tiro Devanagari Hindi", "serif"]
      },
      animation: {
        "infinite-scroll": "infinite-scroll 100s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 20px))" },
        },
      },
    },
  },
  plugins: [],
}

