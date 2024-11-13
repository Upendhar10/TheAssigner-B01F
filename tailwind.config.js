/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        footerBg: "url('./assets/FooterBg.png')",
        EnrollNowBg: "url('./assets/EnrollNowBg.jpg')",
      },
    },
  },
  plugins: [],
};
