import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import Text, {TextProps} from '../Text';

export default {
  title: 'Text',
  component: Text,
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
        {['huge', 'xxl', 'xl', 'l', 'm', 's', 'xs'].reverse().map((size) => (
          <tr>
            <td style={td} key={size}>
              {size.toUpperCase()}
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
      </tbody>
    </table>
  );
};

export const Default = Template.bind({});
