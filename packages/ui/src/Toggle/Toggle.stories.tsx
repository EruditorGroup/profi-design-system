import React from 'react';
import type {Story, Meta} from '@storybook/react';

import Toggle from '.';
import type {ToggleProps} from '.';

export default {
  title: 'Form/Toggle',
  component: Toggle,
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const ToggleStory = Template.bind({});
ToggleStory.storyName = 'Toggle';
ToggleStory.args = {
  disabled: false,
};
