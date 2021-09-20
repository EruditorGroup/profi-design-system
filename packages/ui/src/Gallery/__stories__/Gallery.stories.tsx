import React from 'react';
import noop from 'lodash/noop';
import {Story, Meta} from '@storybook/react';
import Gallery from '../index';

import example_1 from './example_1.png';
import example_2 from './example_2.png';
import example_3 from './example_3.png';
import avatar from './avatar_1.png';

export default {
  title: 'Gallery',
} as Meta;

const info = {
  author: {
    name: 'Денис Григорьев',
    avatar,
  },
  date: '21 августа 2021 года',
  description: `Успех нашей компании заключается в том, что GLAVSTROYAPP строительная фирма в которой не просто работают люди, а трудится команда настоящих профессионалов. 
Другие работы смотрите в альбом «Дизайн интерьера».`,
  tags: ['Ремонт', 'Ремонт квартиры', 'Дизайн интерьера', 'Сантехника'],
};

const images = [example_1, example_2, example_3].map((src) => ({src, ...info}));

const Template: Story = ({...args}) => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="preview">
      <Gallery.Image
        {...images[Math.abs(count) % 3]}
        onClose={noop}
        onBack={() => setCount(count - 1)}
        onNext={() => setCount(count + 1)}
        showInfo
      />
    </div>
  );
};
export const Image = Template.bind({});
Image.args = {};
