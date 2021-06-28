import React from 'react';
import {Story, Meta} from '@storybook/react';

import Space, {SpaceProps} from './index';
import Text from '../Typography/Text';

export default {
  title: 'Space',
} as Meta;

const Template: Story<SpaceProps> = ({placeholder = 'Label', ...args}) => {
  const variants: SpaceProps[] = [
    {bg: 'success'},
    {radius: 's', px: 10, py: 15, bg: 'white', withShadow: true},
    {
      align: 'center',
      justify: 'center',
      bg: 'warning',
      direction: 'row',
      radius: 'm',
      px: 20,
      py: 30,
    },
    {radius: 'l', px: [15, 5], py: [25, 10], bg: 'light', inline: true},
    {radius: 'xl', px: 40, py: 60},
  ];
  return (
    <div className="preview">
      {variants.map((props) => (
        <Space style={{margin: '20px'}} {...props} {...args}>
          {(Object.keys(props) as (keyof typeof props)[]).map((key, i, arr) => (
            <Text key={key}>
              {key}=<b>{JSON.stringify(props[key])}</b>
              {i !== arr.length - 1 && <>&nbsp;</>}
            </Text>
          ))}
        </Space>
      ))}
    </div>
  );
};
export const Preview = Template.bind({});
