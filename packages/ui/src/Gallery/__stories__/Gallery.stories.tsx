import React from 'react';
import {Story, Meta} from '@storybook/react';

import Gallery from '../';
import Button from '../../Button';

import type {Image as IImage, Album as IAlbum} from '../types';

import example_1 from './example_1.png';
import example_2 from './example_2.png';
import example_3 from './example_3.png';
import example_4 from './example_4.jpg';
import example_5 from './example_5.jpg';
import example_6 from './example_6.jpg';
import avatar from './avatar_1.png';

export default {
  title: 'Gallery',
} as Meta;

const makeGalleryImages = (srcs: string[]): IImage[] =>
  srcs.map((src) => ({
    src,
    thumbnail: src,
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
  }));

const getAlbumsPhoto: () => Promise<IImage[]> = () =>
  new Promise((res) => {
    setTimeout(
      () => res(makeGalleryImages([example_4, example_5, example_6])),
      1000,
    );
  });

const images: IImage[] = makeGalleryImages([example_1, example_2, example_3]);
const manyImages: IImage[] = makeGalleryImages([
  example_1,
  example_2,
  example_3,
  example_4,
  example_5,
  example_6,
  example_1,
  example_2,
  example_3,
]);

const albums: IAlbum[] = [
  {
    id: 0,
    name: 'ремонт квартиры',
    description:
      'Успех нашей компании заключается в том, что GLAVSTROYAPP строительная фирма в которой не просто работают люди, а трудится команда настоящих профессионалов. Мы, как руководители нашей компании, начинали работать сами, своими руками , шли с самых низов и в отличии от остальных, знаем весь процесс ремонта от А до Я.',
    tags: ['ремонт', 'ремонт квартиры', 'дизайн интерьера', 'сантехника'],
    previewSrc: example_4,
    filesCount: images.length,
  },
  {
    id: 1,
    name: '3D Дизайн',
    description: '',
    tags: ['дизайн интерьера'],
    previewSrc: example_1,
    filesCount: 1,
  },
  {
    id: 2,
    name: 'Сделанные ремонты',
    description: '',
    tags: ['ремонт', 'ремонт квартиры'],
    previewSrc: example_2,
    filesCount: 2,
  },
  {
    id: 3,
    name: 'Еще альбом',
    description: '',
    tags: [],
    previewSrc: example_5,
    filesCount: 5,
  },
  {
    id: 4,
    name: 'Альбом 5',
    description: '',
    tags: [],
    previewSrc: example_6,
    filesCount: 4,
  },
  {
    id: 5,
    name: 'Альбом 6',
    description: '',
    tags: [],
    previewSrc: example_3,
    filesCount: 3,
  },
];

export const Image: Story = () => {
  const [open, toggle] = React.useReducer((s) => !s, true);
  return (
    <div className="preview">
      <button onClick={toggle}>Открыть галерею</button>
      {open && <Gallery images={images} currentImage={0} onClose={toggle} />}
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
          currentAlbum={0}
          onClose={toggle}
          onAlbumImagesFetch={getAlbumsPhoto}
        />
      )}
    </div>
  );
};

export const AllPhoto: Story = () => {
  const [opened, setOpened] = React.useState(true);

  return (
    <div style={{width: '375px'}}>
      <Gallery
        albums={albums}
        images={manyImages}
        opened={opened}
        onAlbumImagesFetch={getAlbumsPhoto}
        onClose={() => setOpened(false)}
      />

      <Button design="light" onClick={() => setOpened(true)} block>
        Все альбомы и фотографии
      </Button>
    </div>
  );
};
