import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MonsterCard, { MonsterCardProps } from './MonsterCard';

export default {
  title: 'Atoms/MonsterCard',
  component: MonsterCard,
} as Meta<MonsterCardProps>;

const Template: StoryFn<MonsterCardProps> = (args) => <MonsterCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Charizard',
  type: 'Fire',
  id: 1,
};

export const WaterType = Template.bind({});
WaterType.args = {
  name: 'Blastoise',
  type: 'Water',
  id: 2,
};

export const EarthType = Template.bind({});
EarthType.args = {
  name: 'Torterra',
  type: 'Grass/Earth',
  id: 3,
};
