import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Spinner, {SpinnerProps} from './index';

export default {
  title: 'Spinner',
  component: Spinner,
} as Meta;

const style = {margin: '15px'};

const Template: Story<SpinnerProps> = (args) => (
  <>
    <Spinner color="brand" style={style} size="small" {...args} />
    <Spinner color="brand" style={style} {...args} />
    <Spinner color="brand" style={style} size="large" {...args} />
  </>
);

export const Default = Template.bind({});
