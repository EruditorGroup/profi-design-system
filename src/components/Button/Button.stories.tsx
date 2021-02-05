import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Button, {ButtonProps} from './index';
import {VkIcon} from '../../icons';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <div className="theme-profi">
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Обычная кнопка',
};

export const With_icon = Template.bind({});
With_icon.args = {
  children: (
    <>
      <VkIcon />
      Кнопка с иконкой
    </>
  ),
};

export const With_loader = Template.bind({});
With_loader.args = {
  isLoading: true,
};
