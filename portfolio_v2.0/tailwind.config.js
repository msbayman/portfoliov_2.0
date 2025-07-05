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
        // Ensure red-500 is available (matches your light:hover:text-red-500)
        red: {
          500: '#ef4444',
        },
        // Add your custom colors from CSS variables for better Tailwind integration
        primary: 'var(--color-primary)',
        'text-primary': 'var(--color-text-primary)',
        accent: 'var(--color-accent)',
        // Add other custom colors as needed
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      textColor: ['light', 'light:hover', 'dark', 'dark:hover'],
      backgroundColor: ['light', 'dark'],
      borderColor: ['light', 'dark'],
      // Add other variants as needed
    },
  },
}