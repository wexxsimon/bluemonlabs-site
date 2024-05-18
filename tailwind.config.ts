import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        acumin: ['acumin-pro', 'sans-serif'],
        acumincondensed: ['acumin-pro-extra-condensed', 'sans-serif']
      },
      fontWeight: {
        light: '300',
        regular: '400',
        semibold: '600',
        bold: '700'
      },
      fontSize: {
        xs: '0.68rem'
      },
      borderWidth: {
        1: '1px',
        2: '2px',
        3: '3px'
      }
    },
    backgroundImage: {
      moon: "url('/assets/images/bg-moon.webp')",
      'window-man': "url('/assets/images/bg-window-man.webp')"
    },
    colors: {
      transparent: {
        semi: '#00000017',
        full: 'transparent'
      },
      white: {
        100: '#ffffff',
        semi: '#ffffffab'
      },
      black: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#000000'
      },
      'persian-blue': {
        50: '#ecf3ff',
        100: '#dde8ff',
        200: '#c2d5ff',
        300: '#9db9ff',
        400: '#7691ff',
        500: '#566bfe',
        600: '#373ff4',
        700: '#2529c6',
        800: '#262cad',
        900: '#262c89',
        950: '#171a4f'
      },
      sail: {
        50: '#f0f8ff',
        100: '#e0f0fe',
        200: '#a5d7fc',
        300: '#7ec9fb',
        400: '#39adf7',
        500: '#0f93e8',
        600: '#0374c6',
        700: '#045ca0',
        800: '#084f84',
        900: '#0c426e',
        950: '#082a49'
      },
      'gulf-blue': {
        50: '#eaf2ff',
        100: '#d8e6ff',
        200: '#b9cfff',
        300: '#8fafff',
        400: '#637fff',
        500: '#3f53ff',
        600: '#1e22ff',
        700: '#1313ef',
        800: '#1316c0',
        900: '#191e96',
        950: '#0e0f52'
      },
      'color-selector': {
        'ads': '#14146b',
        'seo': '#191e96',
        'social-media': '#2529c6',
        'data-cience': '#39adf7'
      }
    }
  },
  plugins: [
    require('preline/plugin')
  ]
}
export default config
