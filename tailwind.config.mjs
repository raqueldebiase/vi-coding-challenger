export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './.storybook/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#E9E9E9', 
        mediumGray: '#E4E7EB',
        darkGray: '#4A4644',
      },
    },
  },
  plugins: [],
};
