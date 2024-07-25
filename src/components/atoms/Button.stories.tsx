import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
};

export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked!'),
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  label: 'Custom Class',
  className: 'bg-green-500 hover:bg-green-700',
};

export const bgblue = Template.bind({});
bgblue.args = {
  label: 'Custom Class',
  className: 'bg-blue-500 hover:bg-green-700',
};
