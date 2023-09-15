/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robo: ["Roboto+Slab"],
        nun: ["Nunito"]
      },
      padding: {
        "1/3": "33/333333%",
        "2/3": "66.6666"
      },
      screens: {
        ipx: "26.5em",
        mobile: "40em",
        tablet: "48em",
        laptop: "67em",
        desktop: "72em",
        xldesktop: "90em",
        portrait: {
          raw: "(orientation: portrait)"
        },
        landscape: {
          raw: "(orientation: landscape)"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
