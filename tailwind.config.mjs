/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        datasheet: {
          bg: '#0a0a0a',
          card: '#111111',
          surface: '#171717',
          border: '#262626',
          'border-muted': '#1f1f1f',
          text: '#ededed',
          muted: '#8c8c8c',
          accent: '#22c55e', // Subtle green for online/active status
        },
      },
      fontFamily: {
        mono: [
          'JetBrains Mono',
          'Geist Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
