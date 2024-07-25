import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Filter, { FilterProps } from './Filter';

export default {
  title: 'Molecules/Filter',
  component: Filter,
} as Meta<FilterProps>;

const Template: StoryFn<FilterProps> = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  onFilterChange: (type: string) => alert(`Filter changed to: ${type}`),
};

