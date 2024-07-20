/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'signup': "url('/src/Assets/photos/back-twitter.svg')",

      }
    },
  },
  plugins: [],
}

