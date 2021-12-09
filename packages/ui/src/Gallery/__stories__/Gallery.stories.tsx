import React from 'react';
import noop from 'lodash/noop';
import {Story, Meta} from '@storybook/react';
import Gallery from '../index';
import {Image as IImage, Album as IAlbum} from '../types';

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

const images: IImage[] = [example_1, example_2, example_3].map((src) => ({
  src,
  ...info,
}));

const albums: IAlbum[] = [
  {
    id: 0,
    name: 'ремонт квартиры',
    description:
      'Успех нашей компании заключается в том, что GLAVSTROYAPP строительная фирма в которой не просто работают люди, а трудится команда настоящих профессионалов. Мы, как руководители нашей компании, начинали работать сами, своими руками , шли с самых низов и в отличии от остальных, знаем весь процесс ремонта от А до Я.',
    tags: ['ремонт', 'ремонт квартиры', 'дизайн интерьера', 'сантехника'],
    previewSrc: example_1,
    filesCount: images.length,
  },
];

const getAlbumsPhoto: () => Promise<IImage[]> = () =>
  new Promise((res) => {
    setTimeout(() => res(images.concat(images, images)), 1000);
  });

export const Image: Story = () => {
  const [open, toggle] = React.useReducer((s) => !s, true);
  return (
    <div className="preview">
      <button onClick={toggle}>Открыть галерею</button>
      {open && <Gallery images={images} openImage={0} onClose={toggle} />}
    </div>
  );
};

export const Album: Story = () => {
  const [open, toggle] = React.useReducer((s) => !s, true);
  return (
    <div className="preview">
      <button onClick={toggle}>Открыть альбом</button>
      {open && (
        <Gallery
          albums={albums}
          images={images}
          openAlbum={0}
          onClose={toggle}
          onAlbumImagesFetch={getAlbumsPhoto}
        />
      )}
    </div>
  );
};
