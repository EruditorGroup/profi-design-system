import React, {useEffect, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';
import type {IDropdownContext} from './index';

import Dropdown from './index';
import Menu from '../Menu';
import Button from '../Button';
import Link from '../Link';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  VkIcon,
} from '@eruditorgroup/profi-icons';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story = (args) => {
  const ref = useRef<IDropdownContext>();

  const [isOpened, setOpened] = useState(!!ref.current?.isOpened);
  const [isControllableOpened, setControllableOpened] = useState(false);

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          height: '450px',
          flexWrap: 'wrap',
        }}
      >
        <Dropdown {...args} onChange={(state) => setOpened(state)}>
          <Dropdown.Toggler
            trailing={isOpened ? <ChevronUpIcon /> : <ChevronDownIcon />}
            as={Button}
          >
            Открыть
          </Dropdown.Toggler>
          <Dropdown.Portal animated={args.animated}>
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Dropdown.Item as={Menu.Item} rounded={false} closable>
              <VkIcon /> Пункт закрывается на нажатие
            </Dropdown.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт 3 с отбивкой снизу
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>
        <Dropdown {...args} trigger="hover">
          <Dropdown.Toggler as={Button} design="secondary">
            Hover me
          </Dropdown.Toggler>
          <Dropdown.Portal animated={args.animated}>
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт с отбивкой сверху
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>

        <Dropdown
          {...args}
          opened={isControllableOpened}
          onChange={setControllableOpened}
        >
          <Dropdown.Toggler as={Button} design="light" style={{float: 'right'}}>
            Открыть дропдаун
          </Dropdown.Toggler>
          <Dropdown.Portal animated={args.animated} position="bottom-right">
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт с отбивкой сверху
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>

        <Dropdown {...args}>
          <Dropdown.Toggler as={Button} style={{float: 'right'}}>
            Открыть дропдаун
          </Dropdown.Toggler>
          <Dropdown.Portal animated={args.animated} position="bottom-right">
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт с отбивкой сверху
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          height: '450px',
          flexWrap: 'wrap',
        }}
      >
        <Dropdown {...args}>
          <Dropdown.Toggler as={Link} style={{float: 'right'}}>
            Открыть дропдаун
          </Dropdown.Toggler>
          <Dropdown.Portal animated={args.animated} position="top-left">
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт с отбивкой сверху
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>

        <Dropdown {...args} trigger="hover">
          <Dropdown.Toggler as={Link}>Hover me</Dropdown.Toggler>
          <Dropdown.Portal animated={args.animated} position="top-left">
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт с отбивкой сверху
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>

        <Dropdown {...args}>
          <Dropdown.Toggler as={Button} style={{float: 'right'}}>
            Открыть дропдаун
          </Dropdown.Toggler>
          <Dropdown.Portal animated={args.animated} position="top-right">
            <Menu.Item rounded={false}>
              <VkIcon /> Пункт c иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>Пункт без иконки</Menu.Item>
            <Menu.Item rounded={false} disabled>
              <VkIcon /> Disabled
            </Menu.Item>
            <Menu.Item rounded={false} divided>
              <VkIcon /> Пункт с отбивкой сверху
            </Menu.Item>
            <Menu.Item rounded={false}>
              <VkIcon /> Многострочный с иконкой Многострочный с иконкой
              Многострочный с иконкой Многострочный с иконкой
            </Menu.Item>
            <Menu.Item rounded={false}>
              Многострочный без иконки Многострочный без иконки Многострочный
              без иконки Многострочный без иконки
            </Menu.Item>
          </Dropdown.Portal>
        </Dropdown>
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  invalid: false,
};

export const Without_animation = Template.bind({});
Without_animation.args = {
  animated: false,
};
