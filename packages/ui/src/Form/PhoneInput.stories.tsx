import React, {CSSProperties, useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {PhoneIcon} from '@eruditorgroup/profi-icons';

import {PhoneInput, PhoneInputProps} from './index';

const containerStyles: CSSProperties = {
  marginBottom: '30px',
};

const itemStyles: CSSProperties = {margin: '10px 0'};

export default {
  title: 'Form/PhoneInput',
  component: PhoneInput,
} as Meta;

const PhoneInputStateful: React.FC<PhoneInputProps> = (props) => {
  const [value, setValue] = useState('');
  return <PhoneInput {...props} value={value} onChange={setValue} />;
};

const Template: Story<PhoneInputProps> = ({...args}) => {
  return (
    <div>
      <link
        rel="prefetch"
        href="https://cdn.profi.ru/profi-front-web/profi-design-system/bare-phone-input-flags.png"
      />
      <div style={containerStyles}>
        <PhoneInputStateful
          {...args}
          style={itemStyles}
          name="phoneNumber"
          trailing={<PhoneIcon />}
        />
        <PhoneInputStateful
          {...args}
          defaultCountryCode="by"
          style={itemStyles}
        />
        <PhoneInputStateful
          {...args}
          defaultCountryCode="ua"
          style={itemStyles}
          withFocusScroll
        />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
