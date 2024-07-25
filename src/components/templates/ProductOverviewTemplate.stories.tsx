import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductOverviewTemplate from './ProductOverviewTemplate';
import { Monster } from '../../types';

// Exemplo de dados para os monstros
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

export default {
  title: 'Templates/ProductOverviewTemplate',
  component: ProductOverviewTemplate,
} as Meta;

const Template: StoryFn = (args) => {
  const [selectedType, setSelectedType] = useState<string>('fire');

  return (
    <ProductOverviewTemplate 
      {...args}
      selectedType={selectedType}
      onTypeChange={setSelectedType}
      monsters={exampleMonsters}  // Adicione exemplos de monstros
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Our Pocket Monsters',
};
