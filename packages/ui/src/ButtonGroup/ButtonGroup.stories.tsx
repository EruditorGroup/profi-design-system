import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import ButtonGroup, {ButtonGroupProps} from './index';
import Button from '../Button';
import {VkIcon} from '@eruditorgroup/profi-icons';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => (
  <>
    <ButtonGroup {...args}>
      <Button></Button>
      <Button>
        <VkIcon />
        Кнопка с иконкой
      </Button>
      <Button disabled />
    </ButtonGroup>
  </>
);

export const Default = Template.bind({});
