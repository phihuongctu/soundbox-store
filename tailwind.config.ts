import type { Config } from 'tailwindcss';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './node_modules/preline/preline.js',],
  theme: {
    fontFamily: {
      heading: ['Banana Grotesk', ...defaultTheme.fontFamily.sans],
      body: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: '#303a44',
        paragraph: '#454545',
        primary_opacity_015: '#303a4426',
      },
      screens: {
        '3xl': '1640px',
      },
    },
  },
  plugins: [require('preline/plugin'),],
} satisfies Config

