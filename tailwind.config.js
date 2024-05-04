import colors from 'tailwindcss/colors.js'

/** @type {import('tailwindcss').Config} */
// noinspection JSUnusedGlobalSymbols
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
        electric: colors.yellow['500'],
        poison: colors.purple['500'],
        bug: colors.emerald['700'],
        ground: colors.amber['800'],
        normal: colors.stone['600'],
        flying: colors.blue['300'],
        fairy: colors.red['300'],
        fighting: colors.orange['700'],
        psychic: colors.purple['800'],
        rock: colors.amber['600'],
        ghost: colors.purple['950'],
        ice: colors.cyan['500'],
        dragon: colors.blue['900']
      }
    }
  },
  plugins: []
}
