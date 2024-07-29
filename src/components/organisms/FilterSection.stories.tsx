import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FilterSection from './FilterSection';

export default {
  title: 'Organisms/FilterSection',
  component: FilterSection,
} as Meta;

const Template: StoryFn = (args) => {
  const [selectedType, setSelectedType] = useState<string>('fire');

  return (
    <FilterSection 
      {...args}
      selectedType={selectedType}
      onTypeChange={setSelectedType}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  selectedType: 'fire',
};
