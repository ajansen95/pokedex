/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        default: '1.75rem',
        default2: '3.5rem'
      }
    }
  },
  plugins: []
}
