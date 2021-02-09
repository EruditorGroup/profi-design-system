import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Input, {InputProps} from './index';

export default {
  title: 'Form.Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <div>
    <Input {...args} block placeholder="Статичный плейсхолдер" />
    <Input
      {...args}
      style={{marginTop: '10px'}}
      withFloatLabel
      placeholder="Плавающий плейсхолдер"
    />
    <Input
      {...args}
      style={{marginTop: '10px'}}
      placeholder="С маской"
      mask={'+9 999 999-99-99'}
    />
  </div>
);

export const Default = Template.bind({});
