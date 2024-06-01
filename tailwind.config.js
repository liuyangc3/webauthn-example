/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: false, // only want the default light and dark themes
  },
}

