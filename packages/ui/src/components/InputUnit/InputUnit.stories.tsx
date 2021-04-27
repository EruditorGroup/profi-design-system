import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import InputUnit, {InputUnitProps} from './index';

export default {
  title: 'Form.InputUnit',
  component: InputUnit,
} as Meta;

const Template: Story<InputUnitProps> = (args) => (
  <InputUnit {...args} unit="руб" />
);

export const Default = Template.bind({});
