import * as React from 'react';
import cx from 'classnames';
import {
  KEY_CODES,
  useCurrentScreen,
  gestures,
  numberLoop,
} from '@eruditorgroup/profi-toolkit';

import Modal from '../../../Modal';
import Image from '../Image';

import type {Image as IImage} from '../../types';

import styles from './GalleryCarousel.module.scss';

export interface GalleryCarouselProps {
  className?: string;
  images: IImage[];
  currentImage?: number;
  onClose: () => unknown;
  onNext?: () => unknown;
  onBack?: () => unknown;
}

function GalleryCarousel({
  className,
  onClose,
  onNext,
  onBack,
  images,
  ...props
}: GalleryCarouselProps): React.ReactElement {
  const isMobile = useCurrentScreen('mobile');
  const [movePc, setMovePc] = React.useState(0);
  const [state, setState] = React.useState(null);
  const [enableSwipeDown, setEnableSwipeDown] = React.useState(true);

  const isSingleImage = images.length === 1;
  const loop = React.useMemo(() => numberLoop.bind(null, images.length), [
    images,
  ]);

  const [currentImage, move] = React.useReducer(
    (i = 0, to: 'next' | 'back' | number | null) => {
      switch (to) {
        case 'next':
          return loop(i + 1);
        case 'back':
          return loop(i - 1);
        default:
          return typeof to === 'number' ? loop(to) : null;
      }
    },
    props.currentImage,
  );

  const [prev, current, next] = React.useMemo(() => {
    return currentImage != null && images.length
      ? [
          images[loop(currentImage - 1)],
          images[loop(currentImage)],
          images[loop(currentImage + 1)],
        ]
      : [];
  }, [currentImage, images, loop]);

  const bind = gestures.useGesture(
    {
      onDrag: ({movement: [mx], currentTarget, active}) => {
        if (active) {
          setMovePc((mx / (currentTarget as HTMLDivElement).offsetWidth) * 100);
        } else if (Math.abs(movePc) > 10) {
          setMovePc(100 * Math.sign(movePc));
          setState('swipe');
          setEnableSwipeDown(true);
        } else {
          setMovePc(0);
        }
      },
      onScroll: ({xy: [, y]}) => setEnableSwipeDown(!y),
    },
    {
      enabled: isMobile,
      drag: {enabled: !isSingleImage, axis: 'x', threshold: 10},
      scroll: {axis: 'y'},
    },
  );

  React.useEffect(
    function addListeners() {
      function handleKeyDown(e: KeyboardEvent) {
        switch (e.keyCode) {
          case KEY_CODES.SPACE:
          case KEY_CODES.RIGHT_ARROW:
            return move('next');
          case KEY_CODES.LEFT_ARROW:
            return move('back');
          case KEY_CODES.ESC:
            return onClose();
        }
      }
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    },
    [onClose],
  );

  const handleNext = React.useCallback(
    function handleNext() {
      if (images.length > 1) {
        move('next');
        if (onNext) onNext();
      }
    },
    [images.length, onNext],
  );

  const handleBack = React.useCallback(
    function handleBack() {
      if (images.length > 1) {
        move('back');
        if (onBack) onBack();
      }
    },
    [images.length, onBack],
  );

  const imageProps = {
    className: cx(
      styles['image'],
      !enableSwipeDown && styles['image_scrolled'],
      state === 'swipe' && styles['image_transition'],
    ),
    onNext: handleNext,
    onBack: handleBack,
    showInfo: true,
  };

  if (current == null) return null;

  return (
    <Modal
      className={cx(className, styles['modal'])}
      onClose={onClose}
      withPadding={false}
      fullscreen={isMobile}
      swipeDownToClose={isMobile}
      visible
      closeOnOverlayClick
    >
      <Modal.CloseButton size="s" withHoverAnimation={false} />
      {isMobile && prev && (
        <Image
          {...prev}
          {...imageProps}
          style={{transform: `translate3d(${-100 + movePc}%, 0, 0)`}}
        />
      )}
      {current && (
        <Image
          {...current}
          {...bind()}
          {...imageProps}
          onTransitionEnd={() => {
            setState(null);
            state === 'swipe' && move(movePc < 0 ? 'next' : 'back');
            setMovePc(0);
          }}
          style={{transform: `translate3d(${movePc}%, 0, 0)`}}
          showInfo
        />
      )}
      {isMobile && next && (
        <Image
          {...next}
          {...imageProps}
          style={{transform: `translate3d(${100 + movePc}%, 0, 0)`}}
        />
      )}
    </Modal>
  );
}

export default GalleryCarousel;
