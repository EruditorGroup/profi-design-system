import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import {
  CloseIcon,
  DeleteIcon,
  PhoneStrokeIcon,
  PinIcon,
  ProfileIcon,
  ReviewIcon,
} from '@eruditorgroup/profi-icons';

import BottomSheet from './index';
import Button from '../Button';
import List from '../List';

export default {
  title: 'Bottom Sheet',
} as Meta;

const Template: Story = ({placeholder = 'Label', ...args}) => {
  const [opened, setOpened] = useState(true);

  return (
    <div className="preview">
      <Button onClick={() => setOpened(true)}>Open</Button>
      <BottomSheet visible={opened} onClose={() => setOpened(false)} {...args}>
        <List size="l" design="high" bordered>
          <List.Item trailing={<ProfileIcon />}>Перейти в профиль</List.Item>
          <List.Item trailing={<PhoneStrokeIcon />}>Позвонить</List.Item>
          <List.Item trailing={<ReviewIcon />}>Оставить отзыв</List.Item>
          <List.Item trailing={<PinIcon />}>Закрепить чат</List.Item>
          <List.Item trailing={<DeleteIcon />}>Удалить чат</List.Item>
          <List.Item trailing={<CloseIcon />} onClick={() => setOpened(false)}>
            Отмена
          </List.Item>
        </List>
        {args.children}
      </BottomSheet>
    </div>
  );
};
export const Preview = Template.bind({});

export const With_scroll = Template.bind({});
With_scroll.args = {
  children: (
    <>
      <p style={{height: '125vh', alignItems: 'flex-end', display: 'flex'}}>
        Lorem Ipsum
      </p>
    </>
  ),
};

export const CloseOnOverlayClick = Template.bind({});
CloseOnOverlayClick.args = {
  closeOnOverlayClick: true,
};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
  bg: 'default',
};
