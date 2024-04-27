/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gap: {
        default: '0.5rem',
        default2: '0.375rem'
      },
      margin: {
        default: '1.5rem',
        default2: '3rem'
      },
      padding: {
        default: '1.5rem',
        default2: '3rem'
      }
    }
  },
  plugins: []
}
