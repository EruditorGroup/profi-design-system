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
    <link rel="prefetch" href="https://cdn.profi.ru/profi-front-web/profi-design-system/bare-phone-input-flags.png" />
    <div style={containerStyles}>
      <PhoneInput {...args} style={itemStyles} />
      <PhoneInput {...args} defaultCountryCode="by" style={itemStyles} />
      <PhoneInput
        {...args}
        defaultCountryCode="ua"
        style={itemStyles}
        withFocusScroll
      />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
