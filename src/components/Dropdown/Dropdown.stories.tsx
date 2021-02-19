import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import styles from '../../styles/theme.scss';

import Dropdown, {DropdownToggler, DropdownItem, DropdownPortal} from './index';
import Button from '../Button';
import {VkIcon} from '../../icons';

export default {
  title: 'Form.Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story = (args) => {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Dropdown {...args}>
        <DropdownToggler>
          <Button>Открыть дропдаун</Button>
        </DropdownToggler>
        <DropdownPortal className={styles['theme-profi']}>
          <DropdownItem>
            <VkIcon /> Пункт c иконкой
          </DropdownItem>
          <DropdownItem>Пункт без иконки</DropdownItem>
          <DropdownItem disabled>
            <VkIcon /> Disabled
          </DropdownItem>
          <DropdownItem divided>
            <VkIcon /> Пункт 3 с отбивкой снизу
          </DropdownItem>
          <DropdownItem>
            <VkIcon /> Многострочный с иконкой Многострочный с иконкой
            Многострочный с иконкой Многострочный с иконкой
          </DropdownItem>
          <DropdownItem>
            Многострочный без иконки Многострочный без иконки Многострочный без
            иконки Многострочный без иконки
          </DropdownItem>
        </DropdownPortal>
      </Dropdown>
    </div>
  );
};

export const Default = Template.bind({});

export const Without_animation = Template.bind({});
Without_animation.args = {
  animated: false,
};
