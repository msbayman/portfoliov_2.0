const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: { 500: '#ef4444' },
        primary: 'var(--color-primary)',
        'text-primary': 'var(--color-text-primary)',
        accent: 'var(--color-accent)',
        muted: 'var(--color-muted)',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('light-hover', '.light &:hover');
    }),
  ],
};
