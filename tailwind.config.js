/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        robo: ['Roboto']  ,
        nun: ['Nunito']
      },      
      padding: {
        "1/3": "33/333333%",
        "2/3": "66.6666",
      },
      screens: {
        ipx: "425px",
        mobile: "640px",
        tablet: "768px",
        laptop: "1070",
        desktop: "1150px",
        xldesktop: "1440px",
        portrait: {
          raw: "(orientation: portrait)",
        },
        landscape: {
          raw: "(orientation: landscape)",
        },
      },
    },
  },
  plugins: [],
}