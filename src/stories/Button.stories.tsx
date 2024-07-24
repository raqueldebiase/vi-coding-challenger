// src/stories/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: StoryFn<{ label: string; onClick?: () => void }> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
};

export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  label: 'Click Me, please',
  onClick: () => alert('Button clicked!'),
};
