import * as React from 'react';
import {Text, Title, Spinner} from '@eruditorgroup/profi-ui';
import ImagesList from '../Previews/ImagesList';

import {capitalize} from '@eruditorgroup/profi-toolkit';

import type {Image as IImage, Album as IAlbum} from '../../types';

import styles from './Album.module.scss';

interface AlbumProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'>,
    IAlbum {
  className?: string;
  loading?: boolean;
  images?: IImage[];
  onImageClick: (index: number) => unknown;
}

function Album({
  className,
  name,
  description,
  tags,
  images,
  onImageClick,
}: AlbumProps): React.ReactElement {
  return (
    <div className={className}>
      <Text className={styles['header']} size="l" bold>
        Альбом
      </Text>
      <div className={styles['body']}>
        <Title size="xl">{capitalize(name)}</Title>
        {description && <Text>{description}</Text>}
        {!!tags?.length && (
          <Text size="s" color="muted">
            {tags.map(capitalize).join('\xA0∙\xA0')}
          </Text>
        )}
        {images.length ? (
          <ImagesList
            className={styles['images']}
            images={images}
            onImageClick={onImageClick}
          />
        ) : (
          <Spinner className={styles['spinner']} size="xxl" />
        )}
      </div>
    </div>
  );
}

Album.displayName = 'Gallery.Album';

export default Album;
