import React from 'react';
import cx from 'classnames';

import Image from '../../../../Image';

import type {Image as IImage} from '../../../types';
import type {MouseEvent, HTMLAttributes} from 'react';

import styles from './PreviewImage.module.scss';

interface PreviewImageProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  onClick: () => unknown;
  image: IImage;
  lazy?: boolean;
}

export default function PreviewImage({
  image,
  className,
  lazy,
  onClick: onClickProp,
  ...props
}: PreviewImageProps) {
  const onClick = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    onClickProp();
  };

  return (
    <div className={cx(styles['imageContainer'], className)} {...props}>
      <Image
        src={image.thumbnail || image.src}
        fit="cover"
        className={styles['image']}
        lazy={lazy}
        onClick={onClick}
      />
    </div>
  );
}
