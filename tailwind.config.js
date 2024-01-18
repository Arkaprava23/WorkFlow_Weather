/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
import keepPreset from "keep-react/preset";

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}","node_modules/flowbite-react/lib/esm/**/*.js", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js", "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"],
  presets: [require("keep-react/preset")],
  theme: {
    screens: {
      'sm': {'min': '390px', 'max': '440px'},
      'md': {'min': '440px', 'max': '780px'},
      'lg': '780px',
    },
    extend: {
      backgroundImage: {
        'hero': "url('/public/images/bg-image.png')",
        'heroMob': "url('/public/images/heroMob.png')",
      },
      colors: {
        white: "#fff",
        "violet": "#8b5cf6",
        dark: "#090314",
        "orange": "#FB923C",
        "trans-grey": "#FFFFFF38",
        "workflow-bg": "#F1F5F9"
      },
      spacing: {},
      fontFamily: {
        'mona-sans': ['Mona Sans', 'sans-serif'],
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  plugins: [require("daisyui"),require('@tailwindcss/forms'),require('flowbite/plugin')],
  corePlugins: {
    preflight: false,
  },
});
