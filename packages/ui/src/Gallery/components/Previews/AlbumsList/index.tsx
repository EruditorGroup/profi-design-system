import React, {useState} from 'react';
import cx from 'classnames';

import Button from '../../../../Button';
import PreviewAlbum from '../PreviewAlbum';
import {useCurrentScreen} from '@eruditorgroup/profi-toolkit';

import type {Album as IAlbum} from '../../../types';

import styles from './AlbumsList.module.scss';

interface AlbumsListProps {
  albums: IAlbum[];
  onAlbumClick: (index: number) => unknown;
  className?: string;
  listClassName?: string;
}

const MAX_ALBUMS = 4;

export default function AlbumsList({
  className,
  listClassName,
  albums,
  onAlbumClick,
}: AlbumsListProps) {
  const isMobile = useCurrentScreen('mobile');

  const [showAll, setShowAll] = useState(albums.length <= MAX_ALBUMS);
  const list = showAll || isMobile ? albums : albums.slice(0, MAX_ALBUMS);

  return (
    <div className={className}>
      <div className={cx(styles['albumsList'], listClassName)}>
        {list.map((album, index) => (
          <PreviewAlbum
            key={album.id}
            album={album}
            onClick={() => onAlbumClick(index)}
            className={styles['albumsItem']}
          />
        ))}
      </div>

      {!showAll && !isMobile && (
        <Button onClick={() => setShowAll(true)} block design="light">
          Показать все альбомы
        </Button>
      )}
    </div>
  );
}
