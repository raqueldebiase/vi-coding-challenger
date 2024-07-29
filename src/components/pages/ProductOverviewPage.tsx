import React, { useState } from 'react';
import ProductOverviewTemplate from '../templates/ProductOverviewTemplate';
import { Monster } from '../../types';

// Examples
const exampleMonsters: Monster[] = [
  {
    id: 1,
    name: 'Charmander',
    types: ['fire'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    id: 2,
    name: 'Squirtle',
    types: ['water'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    id: 3,
    name: 'Bulbasaur',
    types: ['grass'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 4,
    name: 'Pikachu',
    types: ['electric'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
];

const ProductOverviewPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('fire');

  return (
    <ProductOverviewTemplate 
      selectedType={selectedType}
      onTypeChange={setSelectedType}
      monsters={exampleMonsters} 
    />
  );
};

export default ProductOverviewPage;
