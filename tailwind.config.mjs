/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#0d0915',
          900: '#150f23', // primary sentry
          800: '#1f1633', // canvas dark / ink deep
          700: '#2a1f45',
          600: '#362d59', // hairline violet
          500: '#422082', // accent violet deep
          400: '#6a5fc1', // accent violet
          300: '#8f85db',
          200: '#bdb8c0', // on-dark-muted
          100: '#e5e7eb',
        },
        lime: {
          neon: '#c2ef4e',
          glow: '#d4ff66',
        },
        pink: {
          neon: '#fa7faa',
        },
        violet: {
          brand: '#6a5fc1',
          deep: '#422082',
          mid: '#79628c',
        },
        hairline: {
          violet: '#362d59',
          cool: '#cfcfdb',
          cloud: '#e5e7eb',
        },
      },
      fontFamily: {
        sans: ['Rubik', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Monaco', 'Menlo', 'Consolas', 'monospace'],
        display: ['Outfit', 'Rubik', 'sans-serif'],
      },
      boxShadow: {
        'glow-lime': '0 0 25px -5px rgba(194, 239, 78, 0.3)',
        'glow-violet': '0 0 35px -5px rgba(106, 95, 193, 0.35)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(106, 95, 193, 0.2)',
      },
    },
  },
  plugins: [],
};
