import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Button, {ButtonProps} from './index';
import Spinner from '../Spinner';
import {ArrowLeftIcon, ArrowRightIcon} from '@eruditorgroup/profi-icons';

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

export const With_leading_icon = Template.bind({});
With_leading_icon.args = {
  leading: <ArrowLeftIcon />,
  children: 'Button',
};

export const With_trailing_icon = Template.bind({});
With_trailing_icon.args = {
  trailing: <ArrowRightIcon />,
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
