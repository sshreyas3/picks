/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ["Playwrite DE Grund", "cursive"], // Custom Tailwind class
      },
    },
  },
  plugins: [],
};
