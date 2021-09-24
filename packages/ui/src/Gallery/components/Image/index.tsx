import * as React from 'react';
import cx from 'classnames';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from '@eruditorgroup/profi-icons';
import {KEY_CODES, capitalize} from '@eruditorgroup/profi-toolkit';
import {Avatar, Button, Image as ProfiImage, Modal, Text} from '../../../index';

import type {Image as IImage} from '../../types';

import styles from './Image.module.scss';

export interface ImageProps extends IImage {
  className?: string;
  showInfo?: boolean;
  onClose: () => unknown;
  onNext: () => unknown;
  onBack: () => unknown;
}

function Image({
  className,
  src,
  author,
  date,
  tags,
  description,
  showInfo,
  onNext,
  onBack,
  onClose,
}: ImageProps): React.ReactElement {
  React.useEffect(
    function addListeners() {
      function handleKeyDown(e: KeyboardEvent) {
        switch (e.keyCode) {
          case KEY_CODES.SPACE:
          case KEY_CODES.RIGHT_ARROW:
            return onNext();
          case KEY_CODES.LEFT_ARROW:
            return onBack();
          case KEY_CODES.ESC:
            return onClose();
        }
      }
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    },
    [onBack, onNext, onClose],
  );

  return (
    <Modal
      className={cx(className, styles['modal'])}
      onClose={onClose}
      withPadding={false}
      withCloseButton={false}
      visible
      closeOnOverlayClick
    >
      <Button
        className={cx(styles['button'], styles['button_close'])}
        size="s"
        design="transparent"
        rounded
        onClick={onClose}
      >
        <CloseIcon />
      </Button>
      <div className={styles['wrapper']}>
        <div className={styles['imageContainer']}>
          <ProfiImage className={styles['image']} src={src} fit="contain" />
          {onBack && (
            <div
              className={cx(styles['buttonArea'], styles['buttonArea_left'])}
              onClick={onBack}
            >
              <Button
                className={cx(styles['button'], styles['button_nav'])}
                size="s"
                design="transparent"
                rounded
              >
                <ChevronLeftIcon />
              </Button>
            </div>
          )}
          {onNext && (
            <div
              className={cx(styles['buttonArea'], styles['buttonArea_right'])}
              onClick={onNext}
            >
              <Button
                className={cx(styles['button'], styles['button_nav'])}
                size="s"
                design="transparent"
                onClick={onNext}
                rounded
              >
                <ChevronRightIcon />
              </Button>
            </div>
          )}
        </div>
        {showInfo && author && (
          <div className={styles['info']}>
            <div
              className={cx(
                styles['mainInfo'],
                !date && styles['mainInfo_align-center'],
              )}
            >
              <Avatar
                className={styles['avatar']}
                size="xl"
                src={author.avatar}
                username={author.name}
              />
              <div>
                <Text bold>{author.name}</Text>
                <Text color="muted">{date}</Text>
              </div>
            </div>
            {!!tags?.length && (
              <Text size="s" color="muted">
                {tags.map(capitalize).join('\xA0∙\xA0')}
              </Text>
            )}
            {description && (
              <Text className={styles['description']}>{description}</Text>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}

Image.displayName = 'Gallery.Image';

export default Image;
