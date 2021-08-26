import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Avatar.module.scss';
import {ISize, theme} from '@eruditorgroup/profi-toolkit';

export interface AvatarProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    'children' | 'loading'
  > {
  design?: 'circle' | 'rect';
  size?: ISize;
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
          size && theme.common[`size-${size}`],
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
              src={src}
              alt={alt}
              loading={lazy ? 'lazy' : 'eager'}
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

export default Avatar;
