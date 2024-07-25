import React, { useState } from 'react';
import ProductOverviewTemplate from '../templates/ProductOverviewTemplate';
import { Monster } from '../../types';

// Dados de exemplo para monstros
const exampleMonsters: Monster[] = [
  {
    id: 1,
    name: 'Charmander',
    type: 'fire',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    id: 2,
    name: 'Squirtle',
    type: 'water',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    id: 3,
    name: 'Bulbasaur',
    type: 'grass',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 4,
    name: 'Pikachu',
    type: 'electric',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
];

const ProductOverviewPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('fire');

  return (
    <ProductOverviewTemplate 
      title="Our Pocket Monsters"
      selectedType={selectedType}
      onTypeChange={setSelectedType}
      monsters={exampleMonsters} 
    />
  );
};

export default ProductOverviewPage;
