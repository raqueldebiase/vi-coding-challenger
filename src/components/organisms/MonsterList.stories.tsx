import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MonsterList, { MonsterListProps } from './MonsterList';
import { Monster } from '../../types';

// Examples of Pokémon data for stories
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
];

export default {
  title: 'organisms/MonsterList',
  component: MonsterList,
} as Meta;

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
