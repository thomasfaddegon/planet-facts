/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#070724",
        darkGrey: "#38384F",
        lightGrey: "#838391",
        veryLightGrey: "#C1C1C7",
        mercuryTeal: "#419EBB",
        venusYellow: "#EDA249",
        earthPurple: "#6F2ED6",
        marsRed: "#D14C32",
        jupiterRed: "#D83A34",
        saturnOrange: "#CD5120",
        uranusBlue: "#1EC2A4",
        neptuneBlue: "#2D68F0",
        buttonDefault: "rgba(255, 255, 255, 0.0)",
        buttonHover: "rgba(43,43,63)",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
        antonio: ["Antonio", "sans-serif"],
      },
    },
  },
  plugins: [],
};
