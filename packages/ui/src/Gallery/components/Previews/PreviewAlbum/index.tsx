import React from 'react';
import cx from 'classnames';

import Image from '../../../../Image';
import {Text} from '../../../../Typography';
import Link from '../../../../Link';

import {plural, capitalize} from '@eruditorgroup/profi-toolkit';

import type {Album as IAlbum} from '../../../types';
import type {MouseEvent, HTMLAttributes} from 'react';

import styles from './PreviewAlbum.module.scss';

interface PreviewAlbumProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  imageClassName?: string;
  album: IAlbum;
  lazy?: boolean;
  onClick?: () => unknown;
}

export default function PreviewAlbum({
  album,
  imageClassName,
  lazy,
  onClick: onClickProp,
  ...props
}: PreviewAlbumProps) {
  const {previewSrc, name, filesCount} = album;
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClickProp();
  };

  return (
    <div {...props}>
      <Link block onClick={onClick}>
        <div className={styles['imageContainer']}>
          <Image
            src={previewSrc}
            fit="cover"
            className={cx(styles['image'], imageClassName)}
            lazy={lazy}
          />
        </div>
      </Link>
      <Link size="m" bold onClick={onClick}>
        {capitalize(name)}
      </Link>
      <Text size="m" color="disabled">
        {filesCount}{' '}
        {plural(filesCount, 'фотография', 'фотографии', 'фотографий')}
      </Text>
    </div>
  );
}
