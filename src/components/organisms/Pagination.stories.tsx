// src/components/organisms/Pagination.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import Pagination from './Pagination';

export default {
  title: 'organisms/Pagination',
  component: Pagination,
  argTypes: {
    onPageChange: { action: 'page changed' }, // Ação para o Storybook
  },
} as Meta;

const Template: StoryFn<{ currentPage: number; totalPages: number; onPageChange: (page: number) => void; }> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 5,
};

export const MiddlePage = Template.bind({});
MiddlePage.args = {
  currentPage: 3,
  totalPages: 5,
};

export const LastPage = Template.bind({});
LastPage.args = {
  currentPage: 5,
  totalPages: 5,
};
