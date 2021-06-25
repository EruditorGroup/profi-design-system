import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Space, {SpaceProps} from './index';
import Button from '../Button';
import Text from '../Typography/Text';

export default {
  title: 'Space',
} as Meta;

const spaceStyles = {
  margin: '20px',
};

const Template: Story<SpaceProps> = ({placeholder = 'Label', ...args}) => {
  const variants: SpaceProps[] = [
    {bg: 'success'},
    {radius: 's', x: 10, y: 15, bg: 'white', withShadow: true},
    {
      align: 'center',
      bg: 'warning',
      direction: 'row',
      radius: 'm',
      x: 20,
      y: 30,
    },
    {radius: 'l', x: [15, 5], y: [25, 10], bg: 'light'},
    {radius: 'xl', x: 40, y: 60, inline: true},
  ];
  return (
    <div className="preview">
      {variants.map((props) => (
        <Space style={{margin: '20px'}} {...props} {...args}>
          {(Object.keys(props) as (keyof typeof props)[]).map((key, i, arr) => (
            <Text key={key}>
              {key}=<b>{JSON.stringify(props[key])}</b>
              {i !== arr.length - 1 && <>,&nbsp;</>}
            </Text>
          ))}
        </Space>
      ))}
    </div>
  );
};
export const Preview = Template.bind({});
