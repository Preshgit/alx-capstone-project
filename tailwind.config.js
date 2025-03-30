/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    // "./app/**/*.{js,ts,jsx,tsx}", // ✅ If using Next.js App Router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
