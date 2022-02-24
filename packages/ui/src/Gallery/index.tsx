import React, {useCallback, useState, useMemo, useEffect} from 'react';

import Modal from '../Modal';
import {Text} from '../Typography';
import Album from './components/Album';
import GalleryCarousel from './components/Carousel';
import ImagesList from './components/Previews/ImagesList';
import AlbumsList from './components/Previews/AlbumsList';

import {
  KEY_CODES,
  useCurrentScreen,
  useControllableState,
} from '@eruditorgroup/profi-toolkit';

import type {Album as IAlbum, Image as IImage} from './types';

import styles from './Gallery.module.scss';

export interface GalleryProps {
  albums?: IAlbum[];
  images: IImage[];
  currentImage?: number;
  currentAlbum?: number;
  onAlbumImagesFetch?: (albumId: IAlbum) => Promise<IImage[]>;
  onClose: () => unknown;
  opened?: boolean;
}

export default function Gallery({
  onClose,
  albums,
  opened,
  onAlbumImagesFetch,
  ...props
}: GalleryProps) {
  const isMobile = useCurrentScreen('mobile');
  const [showBackButton, setShowBackButton] = useState(false);

  // Albums state
  const [albumIndex, setAlbumIndex] = useControllableState({
    value: props.currentAlbum,
    defaultValue: null,
  });

  const [albumsImages, setAlbumsImages] = useState<Record<number, IImage[]>>(
    {},
  );

  const currentAlbum = albums?.[albumIndex];

  // Images state
  const [imageIndex, setImageIndex] = useControllableState({
    value: props.currentImage,
    defaultValue: null,
  });

  const images = useMemo(
    () => (albumIndex != null ? albumsImages[albumIndex] || [] : props.images),
    [albumsImages, albumIndex, props.images],
  );

  // Callbacks
  const onAlbumClick = useCallback(
    (index) => {
      setAlbumIndex(index);
      setShowBackButton(true);
    },
    [setAlbumIndex],
  );

  const onThumbnailClick = useCallback(
    (index) => {
      setImageIndex(index);
    },
    [setImageIndex],
  );

  const onGalleryBack = useCallback(() => {
    setAlbumIndex(null);
    setShowBackButton(false);
  }, [setAlbumIndex]);

  const onGalleryClose = useCallback(() => {
    setAlbumIndex(null);
    setShowBackButton(false);
    onClose();
  }, [setAlbumIndex, onClose]);

  const onFullscreenClose = useCallback(() => {
    if (props.currentImage != null) {
      onClose();
    } else {
      setImageIndex(null);
    }
  }, [onClose, props.currentImage, setImageIndex]);

  useEffect(
    function fetchAlbumImages() {
      if (currentAlbum && onAlbumImagesFetch && !albumsImages[albumIndex]) {
        onAlbumImagesFetch(currentAlbum).then((res) =>
          setAlbumsImages((x) => ({...x, [albumIndex]: res})),
        );
      }
    },
    [currentAlbum, albumIndex, albumsImages, onAlbumImagesFetch],
  );

  useEffect(
    function addListeners() {
      function handleKeyDown(e: KeyboardEvent) {
        switch (e.keyCode) {
          case KEY_CODES.ESC:
            if (imageIndex == null) {
              return showBackButton ? onGalleryBack() : onClose();
            }
        }
      }
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    },
    [onGalleryBack, onClose, showBackButton, imageIndex],
  );

  return (
    <>
      {(opened || currentAlbum) && (
        <Modal
          className={styles['modal']}
          withPadding={false}
          fullscreen={isMobile}
          swipeDownToClose={isMobile}
          onClose={onGalleryClose}
          onClickBack={onGalleryBack}
          withOverlay={imageIndex == null}
          visible
        >
          {showBackButton && (
            <Modal.BackButton size="s" withHoverAnimation={false} />
          )}

          <Modal.CloseButton size="s" withHoverAnimation={false} />

          {currentAlbum ? (
            <Album
              {...currentAlbum}
              images={images}
              onImageClick={(index) => setImageIndex(index)}
            />
          ) : (
            <>
              <Text className={styles['header']} size="l" bold>
                Фотографии
              </Text>
              <div className={styles['body']}>
                {albums?.length && (
                  <>
                    <Text size="l" className={styles['sectionTitle']} bold>
                      Альбомы{' '}
                      <Text color="disabled" size={null} as="span">
                        {albums.length}
                      </Text>
                    </Text>
                    <AlbumsList
                      albums={albums}
                      onAlbumClick={onAlbumClick}
                      className={styles['albums']}
                      listClassName={styles['albumsList']}
                    />
                  </>
                )}

                {images.length && (
                  <>
                    <Text size="l" className={styles['sectionTitle']} bold>
                      Все фотографии{' '}
                      <Text color="disabled" size={null} as="span">
                        {images.length}
                      </Text>
                    </Text>

                    <ImagesList
                      images={images}
                      onImageClick={onThumbnailClick}
                    />
                  </>
                )}
              </div>
            </>
          )}
        </Modal>
      )}

      {imageIndex != null && (
        <GalleryCarousel
          images={images}
          currentImage={imageIndex}
          onClose={onFullscreenClose}
        />
      )}
    </>
  );
}
