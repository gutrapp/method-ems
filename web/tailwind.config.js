/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        headers: ["Oswald", "Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
        mono: ["Menlo", "Monaco", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
