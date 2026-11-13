module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Thamrah Pro brand colours (Brand Identity Guidelines v1.0)
        navy: { DEFAULT: '#0B2F6B', 900: '#08224F', 950: '#061A3D' },
        brand: { blue: '#0062A8', teal: '#16958A', green: '#4FA33A' },
        graphite: '#2B2F36',
        slate2: '#6B7383',
        hairline: '#D5DDE8',
        mist: '#EEF4FA',
        amber: { signal: '#E8A317' },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'Arial', 'sans-serif'],
        arabic: ['var(--font-plex-arabic)', 'Tahoma', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg,#0062A8 0%,#16958A 55%,#4FA33A 100%)',
      },
    },
  },
  plugins: [],
};
