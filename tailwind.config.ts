/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      aspectRatio: {
        reels: '9 / 16',
      },
    },
  },
  plugins: [],
}
