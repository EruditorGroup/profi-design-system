import React from 'react';
import {Story, Meta} from '@storybook/react';

import Spinner, {SpinnerProps} from './index';
import {IColor} from 'uitype';

export default {
  title: 'Spinner',
  component: Spinner,
} as Meta;

const style = {margin: '15px'};

const Template: Story<SpinnerProps> = (args) => (
  <>
    {([
      'brand',
      'primary',
      'secondary',
      'light',
      'danger',
      'success',
      'warning',
    ] as IColor[]).map((color) => (
      <div style={{display: 'flex'}}>
        <div style={style}>
          <Spinner style={{fontSize: '50px'}} color={color} {...args} />
        </div>
        <div style={style}>
          <Spinner size="l" color={color} {...args} />
        </div>
        <div style={style}>
          <Spinner size="m" color={color} {...args} />
        </div>
        <div style={style}>
          <Spinner size="s" color={color} {...args} />
        </div>
      </div>
    ))}
  </>
);

export const Default = Template.bind({});
