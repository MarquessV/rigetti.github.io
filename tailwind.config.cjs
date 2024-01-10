const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        blue: {
          DEFAULT: 'var(--rigetti-color-blue)'
        },
        darkblue: {
          DEFAULT: 'var(--rigetti-color-darkblue)',
        },
        darkerblue: {
          DEFAULT: 'var(--rigetti-color-darkerblue)',
        },
        teal: {
          DEFAULT: 'var(--rigetti-color-teal)',
        },
        magenta: {
          DEFAULT: 'var(--rigetti-color-magenta)',
        },
        yellow: {
          DEFAULT: 'var(--rigetti-color-yellow)',
        },
        gray: {
          DEFAULT: 'var(--rigetti-color-gray)',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
