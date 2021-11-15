import * as React from 'react';
import cx from 'classnames';
import {
  KEY_CODES,
  useCurrentScreen,
  gestures,
} from '@eruditorgroup/profi-toolkit';
import {Modal} from '../index';
import Image from './components/Image';

import type {Image as IImage} from './types';

import styles from './Gallery.module.scss';

export interface GalleryProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  images?: IImage[];
  currentImage?: number;
  onClose: () => unknown;
}

const Gallery = React.forwardRef<HTMLDivElement, GalleryProps>(
  function Gallery({className, currentImage, images, onClose}, ref) {
    const isMobile = useCurrentScreen('mobile');
    const isSingleImage = images.length === 1;

    const loop = React.useCallback(
      (dir: number) => {
        const len = images.length;
        return Math.abs(len + dir) % len;
      },
      [images],
    );

    const [currentIndex, move] = React.useReducer(
      (i: number, dir: 'next' | 'back') => loop(dir === 'next' ? i + 1 : i - 1),
      currentImage,
    );

    const [movePc, setMovePc] = React.useState(0);
    const [state, setState] = React.useState(null);
    const [enableSwipeDown, setEnableSwipeDown] = React.useState(true);

    const [prev, current, next] = React.useMemo(
      () => [
        images[loop(currentIndex - 1)],
        images[loop(currentIndex)],
        images[loop(currentIndex + 1)],
      ],
      [loop, currentIndex, images],
    );

    const bind = gestures.useGesture(
      {
        onDrag: ({movement: [mx], currentTarget, active}) => {
          if (active) {
            setMovePc(
              (mx / (currentTarget as HTMLDivElement).offsetWidth) * 100,
            );
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

    const imageProps = {
      className: cx(
        styles['image'],
        !enableSwipeDown && styles['image_scrolled'],
        state === 'swipe' && styles['image_transition'],
      ),
      onNext: images.length > 1 && (() => move('next')),
      onBack: images.length > 1 && (() => move('back')),
      showInfo: true,
    };

    return (
      currentImage != null && (
        <Modal
          className={cx(className, styles['modal'])}
          onClose={onClose}
          withPadding={false}
          fullscreen={isMobile}
          swipeDownToClose={isMobile}
          visible
          closeOnOverlayClick
          ref={ref}
        >
          <Modal.CloseButton size="s" withHoverAnimation={false} />
          {isMobile && prev && (
            <Image
              {...prev}
              {...imageProps}
              style={{transform: `translate3d(${-100 + movePc}%, 0, 0)`}}
            />
          )}
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
          {isMobile && next && (
            <Image
              {...next}
              {...imageProps}
              style={{transform: `translate3d(${100 + movePc}%, 0, 0)`}}
            />
          )}
        </Modal>
      )
    );
  },
);

export default Gallery;
