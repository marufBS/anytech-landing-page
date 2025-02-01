const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: "#fcba03",  // Custom primary blue color
      //   secondary: "#9333EA", // Custom secondary purple color
      //   danger: "#DC2626",    // Custom danger red color
      //   success: "#16A34A",   // Custom success green color
      //   brand: {
      //     light: "#E0F2FE",   // Light blue shade
      //     DEFAULT: "#38BDF8", // Default brand blue
      //     dark: "#0284C7",    // Dark blue shade
      //   },
      // },
      scale: {
        '25': '0.25',  // 25% of original size
        '30': '0.3',
        '175': '1.90', // 175% of original size
        '200': '2',    // 200% of original size
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addComponents }) {
      addComponents({
        '.clip-path-skew': {
          clipPath: 'polygon(0% 0%, 100% 10%, 100% 100%, 0% 90%)',
        },
        '@screen md': {
          '.md\:clip-path-skew': {
            clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
          },
        },
        '@screen lg': {
          '.lg\:clip-path-skew': {
            clipPath: 'polygon(0 0, 100% 0, 45% 100%, 0% 100%)',
          },
        },
      });
    },
  ],
}