import React from 'react';
import {Story, Meta} from '@storybook/react';

import Menu from './index';
import {VkIcon} from '@eruditorgroup/profi-icons';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

const Template: Story = (args) => {
  return (
    <>
      <Menu {...args}>
        <Menu.Item>
          <VkIcon /> Пункт c иконкой
        </Menu.Item>
        <Menu.Item current>Пункт без иконки активный</Menu.Item>
        <Menu.Item disabled>
          <VkIcon /> Disabled
        </Menu.Item>
        <Menu.Item divided>
          <VkIcon /> Пункт 3 с отбивкой сверху
        </Menu.Item>
        <Menu.Item>
          <VkIcon /> Многострочный с иконкой Многострочный с иконкой
          Многострочный с иконкой Многострочный с иконкой
        </Menu.Item>
        <Menu.Item>
          Многострочный без иконки Многострочный без иконки Многострочный без
          иконки Многострочный без иконки
        </Menu.Item>
      </Menu>
      <div style={{marginTop: '10px'}}>
        <div style={{marginBottom: '10px', fontWeight: 'bold'}}>
          Меню с бордерами
        </div>
        <Menu {...args}>
          {Array.from({length: 3}, (_, i) => (
            <Menu.Item bordered current={i === 0}>
              Пункт {i + 1}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </>
  );
};

export const Default = Template.bind({});

export const Without_animation = Template.bind({});
Without_animation.args = {
  animated: false,
};
