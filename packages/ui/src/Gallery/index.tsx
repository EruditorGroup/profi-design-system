import * as React from 'react';
import Image from './components/Image';
import type {Image as IImage} from './types';

export interface GalleryProps extends React.HTMLProps<HTMLDivElement> {
  images?: IImage[];
}

interface IGallery extends React.ForwardRefExoticComponent<GalleryProps> {
  readonly Image: typeof Image;
}

const Gallery: IGallery = Object.assign(
  React.forwardRef<HTMLDivElement, GalleryProps>(function Gallery() {
    //TODO: implement
    return null;
  }),
  {Image},
);

export default Gallery;
