import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Modal from './index';
import Button from '../Button';

export default {
  title: 'Modal',
} as Meta;

const Template: Story = ({placeholder = 'Label', ...args}) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="preview">
      <Button onClick={() => setOpened(true)}>Open</Button>
      <Modal visible={opened} width={500} onClose={() => setOpened(false)}>
        <Button onClick={() => setOpened(false)}>Close</Button>
      </Modal>
    </div>
  );
};
export const Preview = Template.bind({});
