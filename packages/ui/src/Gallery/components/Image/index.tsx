import * as React from 'react';
import cx from 'classnames';
import {ChevronLeftIcon, ChevronRightIcon} from '@eruditorgroup/profi-icons';
import {capitalize, useDisableBodyScroll} from '@eruditorgroup/profi-toolkit';
import {Avatar, Button, Image as ProfiImage, Text} from '../../../index';

import type {Image as IImage} from '../../types';

import styles from './Image.module.scss';

export interface ImageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IImage {
  className?: string;
  showInfo?: boolean;
  onNext?: () => unknown;
  onBack?: () => unknown;
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
  ...attrs
}: ImageProps): React.ReactElement {
  const rootRef = React.useRef(null);
  const imageRef = React.useRef(null);

  useDisableBodyScroll(rootRef);

  React.useLayoutEffect(
    function resetScroll() {
      rootRef.current.scrollTop = 0;
    },
    [src],
  );

  return (
    <div {...attrs} className={cx(className, styles['root'])} ref={rootRef}>
      <div
        ref={imageRef}
        className={cx(
          styles['imageContainer'],
          description && styles['imageContainer_withDescription'],
        )}
      >
        <ProfiImage className={styles['image']} src={src} />
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
  );
}

Image.displayName = 'Gallery.Image';

export default Image;
