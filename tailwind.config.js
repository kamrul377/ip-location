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
        'banner1': "url('/images/banner.jpg')"
      }
    },
  },
  plugins: [],
}