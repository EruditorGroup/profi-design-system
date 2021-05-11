import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import Text, {TextProps} from './Text';
import Title, {TitleProps} from './Title';

export default {
  title: 'Text & Title',
} as Meta;

const td = {
  color: `var(--color-secondary})`,
  border: '1px solid #ececec',
};

const Template: Story = () => {
  return (
    <table cellPadding="10">
      <thead>
        <tr>
          <th></th>
          <th>Regular</th>
          <th>Bold</th>
        </tr>
      </thead>
      <tbody>
        {(['xs', 's', 'm', 'l'] as TextProps['size'][]).map((size) => (
          <tr>
            <td style={td} key={size}>
              Text: {size.toUpperCase()}
            </td>
            <td style={td}>
              <Text size={size}>Съешь ещё этих мягких французских булок</Text>
            </td>
            <td style={td}>
              <Text size={size} bold>
                Съешь ещё этих мягких французских булок
              </Text>
            </td>
          </tr>
        ))}
        {(['xl', 'xxl', 'huge'] as TitleProps['size'][]).map((size) => (
          <tr>
            <td style={td} key={size}>
              Title: {size.toUpperCase()}
            </td>
            <td style={td}>
              <Title size={size} bold={false}>
                Съешь ещё этих мягких французских булок
              </Title>
            </td>
            <td style={td}>
              <Title size={size}>Съешь ещё этих мягких французских булок</Title>
            </td>
            <td>
              <Text>123123123</Text>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const Default = Template.bind({});
