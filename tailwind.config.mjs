import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

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
        fire: '#F87171',
        water: '#60A5FA',
        grass: '#4ADE80',
        electric: '#FBBF24',
      },
      backdropBlur: {
        sm: '4px',
      },
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
};
