import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Avatar, {AvatarProps} from './index';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CloseIcon,
} from '@eruditorgroup/profi-icons';
import src from './avatar.png';

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta;

const line = {
  display: 'flex',
  alignItems: 'flex-start',
};

const withOffset = {
  margin: '10px',
};

const Template: Story<AvatarProps> = (args) => (
  <div>
    {(['circle', 'rect'] as AvatarProps['design'][]).map((design) => (
      <div style={line}>
        {['xs', 's', 'm', 'l', 'xl', 'xxl', 'huge'].map((size) => (
          <>
            <Avatar
              {...args}
              size={size}
              design={design}
              style={withOffset}
              src={src}
            />
          </>
        ))}
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  username: 'Василий Иванов',
};
