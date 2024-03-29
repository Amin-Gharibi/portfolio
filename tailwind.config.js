/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '0.5rem'
      },

      screens: {
        'xs': "365px",
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      }
    },
    colors: {
      'gradient-1': "linear-gradient(to right, rgba(0, 192, 253, 1), rgba(231, 15, 170, 1))",
      'gradient-2': "linear-gradient(to right, rgba(19, 176, 245, 1), rgba(231, 15, 170, 1))",
      'gradient-3': "linear-gradient(to bottom, rgba(231, 15, 170, 1), rgba(0, 192, 253, 1))",

      "darkGray": "rgba(102, 102, 102, 1)",
      "purple": "rgba(66, 68, 110, 1)",
      "lightGray": "rgba(217, 217, 217, 1)",
      "midGray": "rgba(167, 167, 167, 1)",
      "dark": "rgba(25, 25, 25, 1)",
      "green": "rgba(1, 140, 15, 1)",
      "lightGreen": "rgba(215, 255, 224, 1)",
      "darkCards": "rgba(54, 54, 54, 1)",
      "white": "#ffffff",
      "black": "#000000"
    },

    boxShadow: {
      'custom-shadow': '2px 2px 100px 0 rgba(0, 0, 0, 0.2)'
    },

    fontFamily: {
      "dm500": "dm-500",
      "dm400": "dm-400",
      "poppins700": "poppins-700",
      "poppins500": "poppins-500",
      "poppins400": "poppins-400",
      "poppins300": "poppins-300",
    },
  },
  plugins: [],
}

