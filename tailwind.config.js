/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-path-polygon': {
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
        },
        '.clip-path-circle': {
          clipPath: 'circle(50% at 50% 50%)',
        },
        '.clip-path-ellipse': {
          clipPath: 'ellipse(50% 25% at 25% 50%)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
