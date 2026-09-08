import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/frontend/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0E14',
        surface: '#FAF9F6',
        'surface-alt': '#F0F4F8',
        accent: '#6366F1', // e.g. Indigo
        'accent-soft': 'rgba(99, 102, 241, 0.15)',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        border: 'rgba(0,0,0,0.1)'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-display)'],
      },
    },
  },
  plugins: [],
}
export default config
