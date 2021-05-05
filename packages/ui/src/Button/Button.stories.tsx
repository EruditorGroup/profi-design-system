import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Button, {ButtonProps} from './index';
import Spinner from '../Spinner';
import {VkIcon} from '@eruditorgroup/profi-icons';

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
    ] as ButtonProps['design'][]).map((design) => (
      <div style={line} key={design}>
        <Button {...args} design={design} style={withOffset} size="l" />
        <Button {...args} design={design} style={withOffset} size="m" />
        <Button {...args} design={design} style={withOffset} size="s" />
      </div>
    ))}
  </>
);

export const Active = Template.bind({});
Active.args = {
  children: 'Button',
};

export const With_leading_icon = Template.bind({});
With_leading_icon.args = {
  leading: <VkIcon />,
  children: 'Button',
};

export const With_trailing_icon = Template.bind({});
With_trailing_icon.args = {
  trailing: <VkIcon />,
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Button',
};

export const With_spinner = Template.bind({});
With_spinner.args = {
  leading: <Spinner delay={1000} />,
  disabled: true,
  children: 'Button',
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: <Spinner />,
  rounded: true,
};
