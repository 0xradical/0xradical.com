// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-barlow)', ...fontFamily.sans],
      },
    },
    colors: {
      radix: 'rgb(var(--color-radix) / <alpha-value>)', // What I use to write
      surface: 'rgb(var(--color-surface) / <alpha-value>)', // Surface
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
