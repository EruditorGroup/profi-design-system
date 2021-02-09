import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Checkbox from './index';

export default {
  title: 'Form.Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story = (args) => (
  <div>
    <Checkbox {...args}>Простой checkbox</Checkbox>
    <Checkbox {...args} style={{marginTop: '10px'}}>
      <div>Многострочный</div>
      <div>Многострочный</div>
      <div>Многострочный</div>
    </Checkbox>
  </div>
);

export const Default = Template.bind({});
