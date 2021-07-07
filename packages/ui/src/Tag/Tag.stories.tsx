import React from 'react';
import {CloseIcon} from '@eruditorgroup/profi-icons';
import {Story, Meta} from '@storybook/react';

import Tag, {TagProps} from './index';
import {DotIcon} from '@eruditorgroup/profi-icons';
import Space from '../Space';

export default {
  title: 'Tag',
  component: Tag,
} as Meta;

const Template: Story<TagProps> = (args) => {
  return (
    <>
      <Space bg="light" px={20} py={20}>
        <h2>Plain design</h2>
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
      <Space px={20} py={20}>
        <h2>Light design</h2>
        <Tag {...args} design="light" trailing={<CloseIcon />}>
          Some tg
        </Tag>
        <Tag {...args} design="light" icon={<DotIcon color="red" />}>
          Some tg
        </Tag>
        <Tag
          {...args}
          design="light"
          icon={<DotIcon color="blue" />}
          trailing={<CloseIcon />}
        >
          Some tg
        </Tag>
      </Space>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
