const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        neumorph: 'var(--neu-raised)',
        'neumorph-inset': 'var(--neu-inset)'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.shadow-neumorph': { 'box-shadow': 'var(--neu-raised)' },
        '.shadow-neumorph-inset': { 'box-shadow': 'var(--neu-inset)' }
      });
    })
  ]
};

