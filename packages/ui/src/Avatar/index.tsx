import React, {forwardRef} from 'react';
import classnames from 'classnames';

import styles from './Avatar.module.scss';
import common from '../styles/common.module.css';
import {ISize} from '@eruditorgroup/profi-toolkit';

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLImageElement>, 'children'> {
  design?: 'circle' | 'rect';
  size?: ISize;
  isOnline?: boolean;
  src?: string;
  alt?: string;
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
      src,
      alt = '',
      username,
      className,
      lazy,
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
          size && common[`size-${size}`],
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
