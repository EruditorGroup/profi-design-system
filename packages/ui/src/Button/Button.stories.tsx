import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Button, {ButtonProps} from './index';
import Spinner from '../Spinner';
import Avatar from '../Avatar';
import Link from '../Link';
// import src from '../Avatar/avatar.png';
import {ChevronDownIcon, CloseIcon} from '@eruditorgroup/profi-icons';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const line = {
  display: 'flex',
  alignItems: 'flex-start',
};

const withOffset = {
  margin: '10px',
};

const Template: Story = (args) => (
  <>
    {([
      'primary',
      'secondary',
      'light',
      'silver',
      'link',
    ] as ButtonProps['design'][]).map((design) => (
      <div style={line} key={design}>
        {['s', 'm', 'l'].map((size) => (
          <Button {...args} size={size} design={design} style={withOffset} />
        ))}
      </div>
    ))}
  </>
);

export const Active = Template.bind({});
Active.args = {
  children: 'Button',
};

export const Leading_and_trailing_components = Template.bind({});
Leading_and_trailing_components.args = {
  children: 'Василий Петрович',
  leading: <Avatar src={src} isOnline />,
  trailing: <ChevronDownIcon />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Button',
};

export const With_left_spinner = Template.bind({});
With_left_spinner.args = {
  disabled: true,
  children: (
    <>
      <Spinner withRightPadding delay={1000} /> Button
    </>
  ),
};

export const With_right_spinner = Template.bind({});
With_right_spinner.args = {
  disabled: true,
  children: (
    <>
      Button <Spinner withLeftPadding delay={1000} />
    </>
  ),
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: <CloseIcon />,
  rounded: true,
};

export const As_link = Template.bind({});
As_link.args = {
  leading: <CloseIcon />,
  children: 'Close',
  as: Link,
};
