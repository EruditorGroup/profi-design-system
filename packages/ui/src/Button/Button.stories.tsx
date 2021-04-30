import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Button, {ButtonProps} from './index';
import {VkIcon} from '@eruditorgroup/profi-icons';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <>
    <Button {...args}>Обычная кнопка</Button>
    <Button {...args} icon={<VkIcon />} style={{marginTop: '10px'}}>
      Привязать
    </Button>
    <Button {...args} disabled style={{marginTop: '10px'}} isLoading>
      Сохранить
    </Button>
    <Button {...args} disabled style={{marginTop: '10px'}} isLoading />
  </>
);

export const Default = Template.bind({});
