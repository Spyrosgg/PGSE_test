/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterL", ...defaultTheme.fontFamily.sans],
        display: ["PoppinsL", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: colors.stone,
        secondary: colors.sky,
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0, 1, 0, 1)',
      },

      animation: {
        fade: "fadeIn 5s ease-in-out",
        "bounce-right": "bright 1s infinite",
        text: "text 10s ease infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bright: {
          "0%, 100%": { transform: "translateX(-25%)" },
          "50%": { transform: "translateX(0)" },
        },
        text: {
          "0%, 100%": {
            "background-size": "600% 600%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "600% 600%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
