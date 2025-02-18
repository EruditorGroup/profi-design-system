import React from 'react';
import {Story, Meta} from '@storybook/react';
import {StarIcon} from '@eruditorgroup/profi-icons';

import {Badge, BadgeProps} from './index';

export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    controls: {},
  },
  args: {},
} as Meta<BadgeProps>;

const Template: Story<Partial<BadgeProps>> = (args) => {
  return (
    <div style={{padding: '20px'}}>
      <Badge {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: '12 отзывов',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: '4,95',
  iconLeft: <StarIcon color="rgba(255, 162, 22, 1)" />,
};
