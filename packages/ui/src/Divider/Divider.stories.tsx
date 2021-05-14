import React from 'react';
import Divider from '.';

import type {DividerProps} from '.';
import type {Story, Meta} from '@storybook/react';

export default {
  title: 'Divider',
  component: Divider,
} as Meta;

export const Default: Story<DividerProps> = ({fit}) => <Divider fit={fit} />;
