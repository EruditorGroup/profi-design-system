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
    <style>{`
      .customUnitColor {
        color: #888;
      }
    `}</style>
    <div style={containerStyles}>
      <PhoneInput {...args} style={itemStyles} />
      <PhoneInput {...args} countryCode="by" style={itemStyles} />
    </div>
  </div>
);

export const Default = Template.bind({});
