import React, {CSSProperties} from 'react';
import {Story, Meta} from '@storybook/react';
import Text from '../Typography/Text';
import {InputUnit} from './index';
import type {InputUnitProps} from './index';

const containerStyles: CSSProperties = {
  display: 'flex',
  width: '340px',
  marginBottom: '30px',
};
const prefixStyles: CSSProperties = {marginRight: '-3px', color: '#888'};
const itemStyles: CSSProperties = {width: '100%', marginRight: '10px'};

const customUnitColor = {color: `var(--ui-color-primary, #e01935)`};

export default {
  title: 'Form/InputUnit',
  component: InputUnit,
} as Meta;

const Prefix: React.FC<{text: React.ReactNode}> = ({text}) => (
  <Text color="muted" size="l">
    {text}
  </Text>
);

const Template: Story<InputUnitProps> = ({unit = '₽', ...args}) => (
  <div>
    <style>{`
      .customUnitColor {
        color: #888;
      }
    `}</style>
    <div style={containerStyles}>
      <InputUnit
        {...args}
        value={0}
        unit={unit}
        unitClassName="customUnitColor"
        leading={<Prefix text="От" />}
        style={itemStyles}
      />
      <InputUnit
        {...args}
        value=""
        placeholder="0"
        unit={unit}
        unitClassName="customUnitColor"
        leading={<Prefix text="до" />}
        style={itemStyles}
      />
    </div>
    <div style={containerStyles}>
      <InputUnit
        {...args}
        placeholder="Площадь помешения"
        unit="м²"
        unitStyle={customUnitColor}
        style={itemStyles}
      />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.storyName = 'InputUnit';
