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
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  
  Suspendisse leo nisi, tincidunt a accumsan eget, faucibus fringilla enim. Nunc sagittis dignissim lorem, a varius est condimentum non.
  
  Donec tortor ante, porttitor ac finibus at, venenatis cursus est. Curabitur a sapien pretium, luctus est accumsan, pellentesque magna. Ut eu velit placerat, gravida nisi ut, sollicitudin nunc. Fusce euismod est ut finibus commodo. Cras auctor risus at ligula ornare tempor.
`,
  tags: ['Ремонт', 'Ремонт квартиры', 'Дизайн интерьера', 'Сантехника'],
};

const images = [example_1, example_2, example_3].map((src) => ({src, ...info}));

const Template: Story = ({...args}) => {
  const [open, toggle] = React.useReducer((s) => !s, true);
  return (
    <div className="preview">
      <button onClick={toggle}>Открыть галерею</button>
      {open && <Gallery images={images} currentImage={0} onClose={toggle} />}
    </div>
  );
};
export const Image = Template.bind({});
Image.args = {};
