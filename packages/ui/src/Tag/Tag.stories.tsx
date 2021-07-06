import React, {useCallback, useState} from 'react';
import {CloseIcon, PlaceIcon} from '@eruditorgroup/profi-icons';
import {Story, Meta} from '@storybook/react';

import Tag, {TagProps} from './index';
import {DotIcon} from '@eruditorgroup/profi-icons';
import Space from '../Space';

export default {
  title: 'Tag',
  component: Tag,
} as Meta;

function getRandomColor(): string | undefined {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return Math.random() >= 0.5 ? undefined : color;
}

const Template: Story<TagProps> = (args) => {
  return (
    <Space bg="light" px={20} py={20}>
      <Tag {...args} trailing={<CloseIcon />}>
        Some tg
      </Tag>
      <Tag {...args} icon={<DotIcon color="red" />}>
        Some tg
      </Tag>
      <Tag {...args} icon={<DotIcon color="blue" />} trailing={<CloseIcon />}>
        Some tg
      </Tag>
    </Space>
  );
};

export const Default = Template.bind({});
Default.args = {};
