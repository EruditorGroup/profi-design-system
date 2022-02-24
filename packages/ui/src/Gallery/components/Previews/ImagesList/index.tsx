import React from 'react';
import cx from 'classnames';

import PreviewImage from '../PreviewImage';

import type {Image as IImage} from '../../../types';

import styles from './ImagesList.module.scss';

interface ImagesListProps {
  images: IImage[];
  onImageClick: (index: number) => unknown;
  className?: string;
}

export default function ImagesList({
  images,
  onImageClick,
  className,
}: ImagesListProps) {
  return (
    <div className={cx(styles['row'], className)}>
      {images.map((item, index) => (
        <div className={styles['item']}>
          <PreviewImage
            key={`${item.src}_${index}`}
            image={item}
            onClick={() => onImageClick(index)}
          />
        </div>
      ))}
    </div>
  );
}
