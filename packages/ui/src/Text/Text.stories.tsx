import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import Text, {TextProps} from '../Text';

export default {
  title: 'Text',
  component: Text,
} as Meta;

const Template: Story = () => {
  return (
    <div>
      {(['l', 'm', 's', 'xs'] as TextProps['size']).map((size) => (
        <div style={{display: 'flex'}} key={size}>
          <Text size={size}>Съешь ещё этих мягких французских булок</Text>
          <Text size={size} bold>
            Съешь ещё этих мягких французских булок
          </Text>
        </div>
      ))}
    </div>
  );
};

export const Default = Template.bind({});
