import { Meta, StoryFn } from '@storybook/react';
import MonsterCard, { MonsterCardProps } from './MonsterCard';


export default {
  title: 'molecules/MonsterCard',
  component: MonsterCard,
} as Meta<MonsterCardProps>;


const Template: StoryFn<MonsterCardProps> = (args) => <MonsterCard {...args} />;


export const Default = Template.bind({});
Default.args = {
  name: 'Charizard',
  types: ['Fire'],  
  id: 1,
  image: 'charizard.png', 
};


export const WaterType = Template.bind({});
WaterType.args = {
  name: 'Blastoise',
  types: ['Water'],  
  id: 2,
  image: 'blastoise.png', 
};


export const EarthType = Template.bind({});
EarthType.args = {
  name: 'Torterra',
  types: ['Grass', 'Earth'],  
  id: 3,
  image: 'torterra.png', 
};
