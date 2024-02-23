/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-turquoise": {
          50: "#effefb",
          100: "#c8fff3",
          200: "#91feea",
          300: "#52f6dd",
          400: "#3de6d2",
          500: "#06c6b2",
          600: "#029f92",
          700: "#067f76",
          800: "#0a6560",
          900: "#0e534f",
          950: "#003331",
        },
      },
    },
  },
  plugins: [],
};
