import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import Dropdown, {DropdownToggler, DropdownItem, DropdownPortal} from './index';
import Button from '../Button';

export default {
  title: 'Form.Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story = (args) => {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <Dropdown {...args}>
        <DropdownToggler>
          <Button>Открыть дропдаун</Button>
        </DropdownToggler>
        <DropdownPortal>
          <DropdownItem>Пункт 1</DropdownItem>
          <DropdownItem>Пункт 2</DropdownItem>
          <DropdownItem divided>Пункт 3 с отбивкой</DropdownItem>
          <DropdownItem>Пункт 4</DropdownItem>
          <DropdownItem>Пункт 5</DropdownItem>
        </DropdownPortal>
      </Dropdown>
    </div>
  );
};

export const Default = Template.bind({});
