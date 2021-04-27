import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import LoaderDots, {LoaderProps} from './index';

export default {
  title: 'LoaderDots',
  component: LoaderDots,
} as Meta;

const Template: Story<LoaderProps> = (args) => <LoaderDots {...args} />;

export const Default = Template.bind({});
Default.args = {
  margin: '20',
  color: 'gray',
};
