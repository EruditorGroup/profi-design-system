import React, {useState} from 'react';
import Row from '../Row';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Block from '../Block';

export default {
  title: 'Block',
  component: Block,
} as Meta;

const Template: Story<{}> = () => {
  return (
    <div style={{background: '#d0d0d0', padding: '40px'}}>
      <Block>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Block>
    </div>
  );
};

export const Default = Template.bind({});
