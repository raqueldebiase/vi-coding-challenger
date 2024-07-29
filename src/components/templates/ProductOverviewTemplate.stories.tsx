import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductOverviewTemplate from './ProductOverviewTemplate';
import { Monster } from '../../types';


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


export default {
  title: 'Templates/ProductOverviewTemplate',
  component: ProductOverviewTemplate,
} as Meta<typeof ProductOverviewTemplate>;


const Template: StoryFn = (args) => {
  const [selectedType, setSelectedType] = useState<string>('fire');

  return (
    <ProductOverviewTemplate 
      {...args}
      selectedType={selectedType}
      onTypeChange={setSelectedType}
      monsters={exampleMonsters}  
    />
  );
};


export const Default = Template.bind({});
Default.args = {};

