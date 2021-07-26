import React, {CSSProperties} from 'react';
import {Story, Meta} from '@storybook/react';

import {PhoneInput, PhoneInputProps} from './index';

const containerStyles: CSSProperties = {
  marginBottom: '30px',
};

const itemStyles: CSSProperties = {margin: '10px 0'};

export default {
  title: 'Form/PhoneInput',
  component: PhoneInput,
} as Meta;

const Template: Story<PhoneInputProps> = ({...args}) => (
  <div>
    <div style={containerStyles}>
      <PhoneInput {...args} style={itemStyles} />
      <PhoneInput {...args} defaultCountryCode="by" style={itemStyles} />
      <PhoneInput
        {...args}
        defaultCountryCode="ua"
        style={{margin: '600px 0 600px'}}
        withFocusScroll
      />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
