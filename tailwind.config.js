/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        platinum: '#20aeea',
        skysoft: '#8bdaf2',
        navy: '#122034',
        ink: '#1d2633'
      },
      boxShadow: { soft: '0 20px 60px rgba(18,32,52,.12)' }
    },
  },
  plugins: [],
};
