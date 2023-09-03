/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        twitterBlue: "#1A8CD8",
        footerBackground: "#1E1E1E",
        background: " #ECECEC",
        formAsterisk: "#DB0B17",
        formBg: "#F2F0F0",
        formBorder: "#020202",
        navBlue: "#1A8CD8",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/bg.png')",
        header: "url('/src/assets/bgg.png')",
      },
    },
    variants: {
      extend: {
        display: ["group-hover"],
      },
    },
  },
  plugins: [],
};
