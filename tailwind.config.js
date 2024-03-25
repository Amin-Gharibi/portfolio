/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    color: {
      'gradient-1': "linear-gradient(to right, rgba(0, 192, 253, 1), rgba(231, 15, 170, 1))",
      'gradient-2': "linear-gradient(to right, rgba(19, 176, 245, 1), rgba(231, 15, 170, 1))",
      'gradient-3': "linear-gradient(to bottom, rgba(231, 15, 170, 1), rgba(0, 192, 253, 1))",

      "darkGray": "rgba(102, 102, 102, 1)",
      "purple": "rgba(66, 68, 110, 1)",
      "lightGray": "rgba(217, 217, 217, 1)",
      "midGray": "rgba(167, 167, 167, 1)",
      "dark": "rgba(25, 25, 25, 1)",
      "green": "rgba(1, 140, 15, 1)",
      "lightGreen": "rgba(215, 255, 224, 1)"
    },

    boxShadow: {
      'custom-shadow': '2px 2px 100px 0 rgba(0, 0, 0, 0.2)'
    }
  },
  plugins: [],
}

