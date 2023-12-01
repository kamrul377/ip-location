/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/images/new.jpg')",
        'banner1': "url('/images/banner.jpg')",
        'banner2': "url('/images/network.jpg')"
      },
      fontFamily: {
        "fira-sans": "'Fira Sans Condensed', sans-serif",
        "nova": "'Nova Square', sans-serif"
      }
    },
  },
  plugins: [],
}