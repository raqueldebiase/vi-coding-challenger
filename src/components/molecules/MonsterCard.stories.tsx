import { Meta, StoryFn } from '@storybook/react';
import MonsterCard, { MonsterCardProps } from './MonsterCard';
import { EvolutionChain } from '../../types';

export default {
  title: 'molecules/MonsterCard',
  component: MonsterCard,
} as Meta<MonsterCardProps>;

const Template: StoryFn<MonsterCardProps> = (args) => <MonsterCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Charmander',
  types: ['Fire'],
  id: 1,
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
};

export const WithEvolutions = Template.bind({});
WithEvolutions.args = {
  name: 'Bulbasaur',
  types: ['Grass', 'Poison'],
  id: 3,
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  evolutionChain: {
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
  } as EvolutionChain,
};
