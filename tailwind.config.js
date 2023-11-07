let colors = require('tailwindcss/colors');

delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.blueGray;
delete colors.coolGray;

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      ...colors,
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
