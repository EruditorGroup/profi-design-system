import React, {useLayoutEffect, useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Modal from './index';
import Button from '../Button';

export default {
  title: 'Modal',
} as Meta;

const Template: Story = ({placeholder = 'Label', ...args}) => {
  const [opened, setOpened] = useState(true);

  return (
    <div className="preview">
      <Button onClick={() => setOpened(true)}>Open</Button>
      <Modal
        visible={opened}
        width={500}
        onClose={() => setOpened(false)}
        {...args}
      >
        <Button onClick={() => setOpened(false)}>Close</Button>
        {args.children}
      </Modal>
    </div>
  );
};
export const Preview = Template.bind({});

export const With_scroll = Template.bind({});
With_scroll.args = {
  children: (
    <>
      <br />
      <p style={{height: '600px', alignItems: 'flex-end', display: 'flex'}}>
        Lorem Ipsum
      </p>
    </>
  ),
};

export const Full_screen = Template.bind({});
Full_screen.args = {
  fullscreen: true,
};
