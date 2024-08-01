import React from 'react';
import {Story, Meta} from '@storybook/react';

import Text, {TextProps} from './Text';
import Title, {TitleProps} from './Title';

export default {
  title: 'Text & Title',
  component: Text,
} as Meta;

const td = {
  color: `var(--ui-color-secondary})`,
  border: '1px solid #ececec',
};

const Template: Story<TextProps> = (args) => (
  <Text as="div" color="secondary">
    <table cellPadding="10">
      <thead>
        <tr>
          <th></th>
          <th>Regular</th>
          <th>Bold</th>
        </tr>
      </thead>
      <tbody>
        {(['xs', 's', 'm', 'l', "lt"] as TextProps['size'][]).map((size) => (
          <tr key={size}>
            <td style={td}>Text: {size?.toUpperCase()}</td>
            <td style={td}>
              <Text {...args} size={size}>
                Съешь ещё этих мягких французских булок
              </Text>
            </td>
            <td style={td}>
              <Text {...args} size={size} bold>
                Съешь ещё этих мягких французских булок
              </Text>
            </td>
          </tr>
        ))}
        {(['xl', 'xxl', '3xl', '4xl', '5xl'] as TitleProps['size'][]).map(
          (size) => (
            <tr key={size}>
              <td style={td}>Title: {size?.toUpperCase()}</td>
              <td style={td}>
                <Title {...args} size={size} bold={false}>
                  Съешь ещё этих мягких французских булок
                </Title>
              </td>
              <td style={td}>
                <Title {...args} size={size}>
                  Съешь ещё этих мягких французских булок
                </Title>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  </Text>
);
export const Default = Template.bind({});
export const Skeleton = Template.bind({});
Skeleton.args = {skeleton: true};

export const TextInsideText: Story<TextProps> = (args) => (
  <Title size="xl">
    Привет,{' '}
    <Text as="span" bold>
      Мир!
    </Text>
  </Title>
);
