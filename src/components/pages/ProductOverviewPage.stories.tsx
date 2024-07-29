
import { Meta, StoryFn } from '@storybook/react';
import ProductOverviewPage from './ProductOverviewPage';

export default {
  title: 'Pages/ProductOverviewPage',
  component: ProductOverviewPage,
} as Meta;

const Template: StoryFn = (args) => <ProductOverviewPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Our Pocket Monsters',
};
