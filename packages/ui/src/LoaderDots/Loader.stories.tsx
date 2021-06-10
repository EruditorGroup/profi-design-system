import React from 'react';
import {Story, Meta} from '@storybook/react';

import LoaderDots, {LoaderProps} from './index';

export default {
  title: 'LoaderDots',
  component: LoaderDots,
} as Meta;

const Template: Story<LoaderProps> = (args) => <LoaderDots {...args} />;

export const Default = Template.bind({});
Default.args = {
  // margin: '20',
  color: 'gray',
};
