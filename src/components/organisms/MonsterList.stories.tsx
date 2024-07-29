// src/components/organisms/MonsterList.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import MonsterList, { MonsterListProps } from './MonsterList'; // Corrigir caminho de importação
import { Monster } from '../../types'; // Corrigir caminho de importação

// Exemplos de dados de monstros para as histórias
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
];

export default {
  title: 'organisms/MonsterList',
  component: MonsterList,
} as Meta<typeof MonsterList>;

const Template: StoryFn<MonsterListProps> = (args) => <MonsterList {...args} />;

export const Default = Template.bind({});
Default.args = {
  monsters: exampleMonsters,
};

export const Loading = Template.bind({});
Loading.args = {
  monsters: [],
  loading: true,
  error: '',
};

export const Error = Template.bind({});
Error.args = {
  monsters: [],
  loading: false,
  error: 'Failed to fetch monsters',
};
