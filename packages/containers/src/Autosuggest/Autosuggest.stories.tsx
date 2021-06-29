import React from 'react';
import {Story, Meta} from '@storybook/react';

import Autosuggest, {AutosuggestProps} from './index';

export default {
  title: 'Containers/Autosuggest',
  component: Autosuggest,
} as Meta;

const Template: Story<AutosuggestProps> = (args) => <Autosuggest {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Online = Template.bind({});
Online.args = {};
