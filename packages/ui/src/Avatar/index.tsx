import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Avatar.module.scss';
import {ISize, theme} from '@eruditorgroup/profi-toolkit';

type IAvatarSize = ISize | 'xxxl' | '4xl';

export interface AvatarProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    'children' | 'loading'
  > {
  design?: 'circle' | 'rect';
  size?: IAvatarSize;
  isOnline?: boolean;
  username?: string;
  lazy?: boolean;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      size,
      style,
      isOnline,
      design = 'circle',
      username,
      src,
      alt = `Аватар ${username ?? 'пользователя'}`,
      lazy,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        style={style}
        className={classnames(
          styles['avatar'],
          styles[`design-${design}`],
          getSizeClassName(size),
          className,
        )}
      >
        <div
          className={classnames(
            styles['container'],
            !src && styles['container_placeholder'],
          )}
        >
          {src && (
            <img
              loading={lazy ? 'lazy' : 'eager'}
              src={src}
              alt={alt}
              className={styles['image']}
              {...props}
            />
          )}
          {!src && username?.slice(0, 1)}
        </div>
        {isOnline && <i className={styles['onlineDot']} />}
      </div>
    );
  },
);

const getSizeClassName = (size: IAvatarSize) => {
  if (!size) return null;

  return ['xxxl', '4xl'].includes(size)
    ? `${theme.common['size-xxl']} ${styles[`size-${size}`]}`
    : theme.common[`size-${size}`];
};

export default Avatar;
