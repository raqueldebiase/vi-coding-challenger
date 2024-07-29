import { Meta, StoryFn } from '@storybook/react';
import MonsterList, { MonsterListProps } from './MonsterList'; 
import { Monster } from '../../types';


const evolutionChain = {
  id: 1,
  baby_trigger_item: null,
  chain: {
    is_baby: false,
    species: { name: 'bulbasaur' },
    evolution_details: [],
    evolves_to: [
      {
        is_baby: false,
        species: { name: 'ivysaur' },
        evolution_details: [],
        evolves_to: [
          {
            is_baby: false,
            species: { name: 'venusaur' },
            evolution_details: [],
            evolves_to: []
          }
        ]
      }
    ]
  }
};


const exampleMonsters: Monster[] = [
  {
    id: 1,
    name: 'Charmander',
    types: ['fire'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    evolutionChain: {
      id: 2,
      baby_trigger_item: null,
      chain: {
        is_baby: false,
        species: { name: 'charmander' },
        evolution_details: [],
        evolves_to: [
          {
            is_baby: false,
            species: { name: 'charmeleon' },
            evolution_details: [],
            evolves_to: [
              {
                is_baby: false,
                species: { name: 'charizard' },
                evolution_details: [],
                evolves_to: []
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: 2,
    name: 'Squirtle',
    types: ['water'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    evolutionChain: {
      id: 3,
      baby_trigger_item: null,
      chain: {
        is_baby: false,
        species: { name: 'squirtle' },
        evolution_details: [],
        evolves_to: [
          {
            is_baby: false,
            species: { name: 'wartortle' },
            evolution_details: [],
            evolves_to: [
              {
                is_baby: false,
                species: { name: 'blastoise' },
                evolution_details: [],
                evolves_to: []
              }
            ]
          }
        ]
      }
    }
  },
  {
    id: 3,
    name: 'Bulbasaur',
    types: ['grass', 'poison'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    evolutionChain
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
