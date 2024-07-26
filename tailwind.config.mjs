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
        fire: 'bg-red-500',
        water: 'bg-blue-500',
        grass: 'bg-green-500',
        electric: 'bg-yellow-500',
        ice: 'bg-cyan-300',
        fighting: 'bg-red-700',
        poison: 'bg-purple-500',
        ground: 'bg-brown-600',
        flying: 'bg-blue-400',
        psychic: 'bg-pink-500',
        bug: 'bg-green-700',
        rock: 'bg-gray-600',
        ghost: 'bg-purple-700',
        dragon: 'bg-indigo-700',
        dark: 'bg-gray-800',
        steel: 'bg-gray-500',
        fairy: 'bg-pink-300',
        unknown: 'bg-black-100'
      },
      backdropBlur: {
        md: '8px',
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
    
  ],
};
