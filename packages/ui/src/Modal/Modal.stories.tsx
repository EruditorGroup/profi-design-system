import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Modal from './';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

const children = (
  <span>
    «Гарри Поттер и философский камень» (англ. Harry Potter and the
    Philosopher's Stone, в США и Индии вышел под названием Harry Potter and the
    Sorcerer's Stone[3][4]) — британско-американский фэнтезийный фильм 2001 года
    режиссёра Криса Коламбуса по сценарию Стива Кловиса. Первый фильм франшизы о
    мальчике-волшебнике Гарри Поттере, экранизация одноимённого романа Джоан
    Роулинг (1997). Главные роли исполнили Дэниел Рэдклифф, Руперт Гринт и Эмма
    Уотсон. Во многих взрослых ролях заняты ведущие британские актёры, такие как
    Мэгги Смит, Алан Рикман, Джон Клиз и другиеПерейти к разделу «#Актёры и
    роли».
  </span>
);

const Template: Story = (args) => {
  return (
    <div>
      <Modal
        withPadding
        withCloseButton
        width="auto"
        height="auto"
        // name="storybook"
        visible
        title="Заголовок"
        className="test"
        onClose={() => {}}
        onClickBack={() => {}}
        {...args}
      >
        {children}
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
