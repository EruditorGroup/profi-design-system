import React, {CSSProperties} from 'react';
import {Story, Meta} from '@storybook/react';

import {PhoneInput, PhoneInputProps} from './index';

const containerStyles: CSSProperties = {
  display: 'flex',
  width: '340px',
  marginBottom: '30px',
};

const itemStyles: CSSProperties = {width: '100%', marginRight: '10px'};

export default {
  title: 'Form/PhoneInput',
  component: PhoneInput,
} as Meta;

const Template: Story<PhoneInputProps> = ({...args}) => (
  <div>
    <div style={containerStyles}>
      <PhoneInput {...args} style={itemStyles} />
      <PhoneInput {...args} defaultCountryCode="by" style={itemStyles} />
      <PhoneInput {...args} defaultCountryCode="ua" style={itemStyles} />
    </div>
  </div>
);

export const Default = Template.bind({});
