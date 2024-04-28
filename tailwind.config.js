import colors from 'tailwindcss/colors.js'

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
      },
      colors: {
        grass: colors.emerald['500'],
        fire: colors.red['500'],
        water: colors.blue['500'],
        electro: colors.yellow['500'],
        poison: colors.purple['500'],
        earth: colors.amber['800']
      }
    }
  },
  plugins: []
}
