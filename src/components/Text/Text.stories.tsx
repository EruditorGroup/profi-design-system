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
      <Text>Text without design</Text>
      <Text design="h1">H1</Text>
      <Text design="h2">H2</Text>
      <Text design="h3">H3</Text>
      <Text design="h4">H4</Text>
      <Text design="h5">H5</Text>
      <Text design="h6">H6</Text>
      <Text design="hint">Hint text</Text>
      <Text design="error">Error text</Text>
    </div>
  );
};

export const Default = Template.bind({});
