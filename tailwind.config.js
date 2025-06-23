/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        'haptic-sidebar': '#343a40', // dark gray for sidebar
        'haptic-primary': '#1e90a3', // blue for primary buttons
        'haptic-secondary-btn': '#eab308', // yellow for secondary buttons
      },
    },
  },
  plugins: [],
}