// src/stories/MyComponent.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MyComponent from '../components/example';

export default {
  title: 'Example/MyComponent',
  component: MyComponent,
} as Meta;

const Template: StoryFn<{ text: string }> = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello, Storybook! This is a test',
};

export const WithLongText = Template.bind({});
WithLongText.args = {
  text: 'This is a longer text to demonstrate how the component behaves with more content.',
};

export const Empty = Template.bind({});
Empty.args = {
  text: '',
};

