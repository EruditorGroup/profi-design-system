import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import InputGroup, {InputGroupProps} from './index';

export default {
  title: 'Input',
  component: InputGroup,
} as Meta;

const Template: Story<InputGroupProps> = (args) => <InputGroup {...args} />;

export const Primary = Template.bind({});
